import pandas as pd
import re
import xlsxwriter

def parse_curriculum(filename):
    with open(filename, 'r', encoding='utf-8') as f:
        text = f.read()

    courses = []
    current_year = ""
    current_sem = ""
    
    lines = text.split('\n')
    
    processed_lines = []
    i = 0
    while i < len(lines):
        line = lines[i].strip()
        if not line:
            i += 1
            continue
            
        if "AÑO" in line or "SEMESTRE" in line:
            processed_lines.append(line)
            i += 1
            continue
            
        if re.match(r'^[DFEG]\s+\d{7}', line):
            if i + 1 < len(lines):
                next_line = lines[i+1].strip()
                if not re.match(r'^[DFEG]\s+\d{7}', next_line) and \
                   "AÑO" not in next_line and "SEMESTRE" not in next_line and next_line:
                    line += " " + next_line
                    i += 1
            processed_lines.append(line)
        else:
            pass
        i += 1

    for line in processed_lines:
        line = line.strip()
        if not line: continue
        
        if "AÑO" in line:
            current_year = line
            continue
        if "SEMESTRE" in line:
            current_sem = line
            continue
            
        match = re.match(r'^(?P<comp>[DFEG])\s+(?P<code>\d{7})\s+(?P<name>.+?)\s+(?P<dept>[A-Z]{2}(?:\s+[A-Z]{2})*)\s+(?P<cred>\d+)\s+(?P<rest>.*)$', line)
        
        if match:
            data = match.groupdict()
            rest = data['rest']
            prereqs = re.findall(r'\d{7}', rest)
            
            courses.append({
                'Year': current_year,
                'Semester': current_sem,
                'Code': data['code'],
                'Name': data['name'],
                'Dept': data['dept'],
                'Credits': int(data['cred']),
                'Prereqs': prereqs
            })
            
    return courses

courses = parse_curriculum('curriculum.txt')

# Create Excel with XlsxWriter
file_path = 'malla_curricular_interactiva.xlsx'
writer = pd.ExcelWriter(file_path, engine='xlsxwriter')
workbook = writer.book

# Formats
header_fmt = workbook.add_format({'bold': True, 'bg_color': '#D3D3D3', 'border': 1})
section_fmt = workbook.add_format({'bold': True, 'bg_color': '#424242', 'font_color': 'white', 'align': 'center'}) # Dark Gray for Section Headers
locked_fmt = workbook.add_format({'bg_color': '#FFEBEE', 'font_color': '#C62828'})
avail_fmt = workbook.add_format({'bg_color': '#E8F5E9', 'font_color': '#2E7D32', 'bold': True})
done_fmt = workbook.add_format({'bg_color': '#E3F2FD', 'font_color': '#1565C0'})
default_fmt = workbook.add_format({})

ws = workbook.add_worksheet('Malla')
writer.sheets['Malla'] = ws

# Main Headers
columns = ['Codigo', 'Estado', 'Realizado', 'Asignatura', 'Creditos', 'Prerequisitos (Texto)']
for col_num, col_val in enumerate(columns):
    ws.write(0, col_num, col_val, header_fmt)

# Hidden Prereq columns (G, H, I, J)
max_prereqs = 4
for i in range(max_prereqs):
    ws.write(0, 6 + i, f'PRQ_{i+1}', header_fmt)

current_row = 1
last_year = ""
last_sem = ""

# Keep track of data rows for conditional formatting if needed, 
# but simply applying to whole column with formula criteria is easier.

for course in courses:
    # Check for new section
    if course['Year'] != last_year or course['Semester'] != last_sem:
        # Write Section Header
        section_title = f"{course['Year']} - {course['Semester']}"
        ws.merge_range(current_row, 0, current_row, 5, section_title, section_fmt)
        current_row += 1
        last_year = course['Year']
        last_sem = course['Semester']
    
    # Write Course Data
    ws.write(current_row, 0, course['Code'])
    
    # Formulas
    # Prereq Columns are G, H, I, J (Indices 6, 7, 8, 9)
    # Row is current_row+1
    
    prereq_checks = []
    for offset in range(max_prereqs):
        col_char = chr(ord('G') + offset) 
        cell_ref = f"{col_char}{current_row+1}"
        # Check against the whole column A for Code, and get C (Realizado)
        check = f'IF({cell_ref}="",TRUE,VLOOKUP({cell_ref},$A:$C,3,FALSE))'
        prereq_checks.append(check)
    
    and_condition = f"AND({','.join(prereq_checks)})"
    c_cell = f"C{current_row+1}"
    formula = f'=IF({c_cell}, "✅ Completado", IF({and_condition}, "🔓 Disponible", "🔒 Bloqueado"))'
    
    ws.write_formula(current_row, 1, formula)
    ws.write_boolean(current_row, 2, False)
    # Validacion de datos
    ws.data_validation(current_row, 2, current_row, 2, {'validate': 'list', 'source': ['TRUE', 'FALSE']})
    
    ws.write(current_row, 3, course['Name'])
    ws.write(current_row, 4, course['Credits'])
    ws.write(current_row, 5, ", ".join(course['Prereqs']))
    
    for idx, prq in enumerate(course['Prereqs']):
        if idx < max_prereqs:
            ws.write(current_row, 6 + idx, prq)
            
    current_row += 1

# Conditional Formatting
# Apply to relevant columns, e.g., A:F
# We want to avoid highlighting the section headers. 
# Section headers don't have a formula result in Col B or TRUE in Col C, so they should be safe.
data_range = f"A2:F{current_row}"

ws.conditional_format(data_range, {'type': 'formula', 'criteria': '=$C2=TRUE', 'format': done_fmt})
ws.conditional_format(data_range, {'type': 'formula', 'criteria': '=$B2="🔓 Disponible"', 'format': avail_fmt})
ws.conditional_format(data_range, {'type': 'formula', 'criteria': '=$B2="🔒 Bloqueado"', 'format': locked_fmt})

ws.set_column(0, 0, 10) 
ws.set_column(1, 1, 15) 
ws.set_column(2, 2, 10) 
ws.set_column(3, 3, 50) 
ws.set_column(4, 4, 8)  
ws.set_column(5, 5, 20) 
ws.set_column(6, 10, 0, None, {'hidden': True})

writer.close()
print(f"Generated {file_path}")
