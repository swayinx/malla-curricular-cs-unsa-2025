
const courses = [
  {
    "id": "2501101",
    "name": "FUNDAMENTOS DE LA MATEMÁTICA",
    "credits": 3,
    "prereqs": [],
    "year": "PRIMER AÑO",
    "semester": "PRIMER SEMESTRE"
  },
  {
    "id": "2501102",
    "name": "METODOLOGÍA DEL TRABAJO ACADÉMICO",
    "credits": 2,
    "prereqs": [],
    "year": "PRIMER AÑO",
    "semester": "PRIMER SEMESTRE"
  },
  {
    "id": "2501103",
    "name": "INTRODUCCIÓN A LA CIENCIA DE LA COMPUTACIÓN",
    "credits": 4,
    "prereqs": [],
    "year": "PRIMER AÑO",
    "semester": "PRIMER SEMESTRE"
  },
  {
    "id": "2501104",
    "name": "INGLÉS I",
    "credits": 3,
    "prereqs": [],
    "year": "PRIMER AÑO",
    "semester": "PRIMER SEMESTRE"
  },
  {
    "id": "2501105",
    "name": "INTRODUCCIÓN A LA PROGRAMACIÓN",
    "credits": 5,
    "prereqs": [],
    "year": "PRIMER AÑO",
    "semester": "PRIMER SEMESTRE"
  },
  {
    "id": "2501106",
    "name": "ESTRUCTURAS DISCRETAS I",
    "credits": 5,
    "prereqs": [],
    "year": "PRIMER AÑO",
    "semester": "PRIMER SEMESTRE"
  },
  {
    "id": "2501207",
    "name": "ESTRUCTURAS DISCRETAS",
    "credits": 5,
    "prereqs": [
      "2501106",
      "2501105"
    ],
    "year": "PRIMER AÑO",
    "semester": "SEGUNDO SEMESTRE"
  },
  {
    "id": "2501208",
    "name": "PROGRAMACIÓN I",
    "credits": 5,
    "prereqs": [
      "2501105"
    ],
    "year": "PRIMER AÑO",
    "semester": "SEGUNDO SEMESTRE"
  },
  {
    "id": "2501209",
    "name": "CÁLCULO EN UNA VARIABLE",
    "credits": 5,
    "prereqs": [
      "2501101"
    ],
    "year": "PRIMER AÑO",
    "semester": "SEGUNDO SEMESTRE"
  },
  {
    "id": "2501210",
    "name": "INGLÉS",
    "credits": 3,
    "prereqs": [
      "2501104"
    ],
    "year": "PRIMER AÑO",
    "semester": "SEGUNDO SEMESTRE"
  },
  {
    "id": "2501211",
    "name": "LINGÜÍSTICA, COMPRENSIÓN Y REDACCIÓN ACADÉMICA",
    "credits": 3,
    "prereqs": [],
    "year": "PRIMER AÑO",
    "semester": "SEGUNDO SEMESTRE"
  },
  {
    "id": "2501212",
    "name": "REALIDAD NACIONAL",
    "credits": 2,
    "prereqs": [],
    "year": "PRIMER AÑO",
    "semester": "SEGUNDO SEMESTRE"
  },
  {
    "id": "2502113",
    "name": "ARQUITECTURA DE COMPUTADORES",
    "credits": 4,
    "prereqs": [
      "2501207"
    ],
    "year": "SEGUNDO AÑO",
    "semester": "PRIMER SEMESTRE"
  },
  {
    "id": "2502114",
    "name": "PROGRAMACIÓN",
    "credits": 5,
    "prereqs": [
      "2501208"
    ],
    "year": "SEGUNDO AÑO",
    "semester": "PRIMER SEMESTRE"
  },
  {
    "id": "2502115",
    "name": "ÁLGEBRA LINEAL",
    "credits": 4,
    "prereqs": [
      "2501209"
    ],
    "year": "SEGUNDO AÑO",
    "semester": "PRIMER SEMESTRE"
  },
  {
    "id": "2502116",
    "name": "CÁLCULO EN VARIAS VARIABLES",
    "credits": 5,
    "prereqs": [
      "2501209"
    ],
    "year": "SEGUNDO AÑO",
    "semester": "PRIMER SEMESTRE"
  },
  {
    "id": "2502117",
    "name": "INGLÉS III",
    "credits": 3,
    "prereqs": [
      "2501210"
    ],
    "year": "SEGUNDO AÑO",
    "semester": "PRIMER SEMESTRE"
  },
  {
    "id": "2502118",
    "name": "CIUDADANIA E INTERCULTURALIDAD",
    "credits": 2,
    "prereqs": [],
    "year": "SEGUNDO AÑO",
    "semester": "PRIMER SEMESTRE"
  },
  {
    "id": "2502219",
    "name": "ESTRUCTURA DE DATOS",
    "credits": 4,
    "prereqs": [
      "2502114"
    ],
    "year": "SEGUNDO AÑO",
    "semester": "SEGUNDO SEMESTRE"
  },
  {
    "id": "2502220",
    "name": "REDES Y COMUNICACIÓN",
    "credits": 4,
    "prereqs": [
      "2502113"
    ],
    "year": "SEGUNDO AÑO",
    "semester": "SEGUNDO SEMESTRE"
  },
  {
    "id": "2502221",
    "name": "SISTEMAS OPERATIVOS",
    "credits": 4,
    "prereqs": [
      "2502113"
    ],
    "year": "SEGUNDO AÑO",
    "semester": "SEGUNDO SEMESTRE"
  },
  {
    "id": "2502222",
    "name": "LENGUAJES DE PROGRAMACIÓN",
    "credits": 4,
    "prereqs": [
      "2502114"
    ],
    "year": "SEGUNDO AÑO",
    "semester": "SEGUNDO SEMESTRE"
  },
  {
    "id": "2502223",
    "name": "INGLÉS",
    "credits": 3,
    "prereqs": [
      "2502117"
    ],
    "year": "SEGUNDO AÑO",
    "semester": "SEGUNDO SEMESTRE"
  },
  {
    "id": "2502224",
    "name": "ECOLOGÍA Y CONSERVACIÓN AMBIENTAL",
    "credits": 3,
    "prereqs": [],
    "year": "SEGUNDO AÑO",
    "semester": "SEGUNDO SEMESTRE"
  },
  {
    "id": "2503125",
    "name": "ANÁLISIS Y DISEÑO DE ALGORITMOS",
    "credits": 4,
    "prereqs": [
      "2502219"
    ],
    "year": "TERCER AÑO",
    "semester": "PRIMER SEMESTRE"
  },
  {
    "id": "2503126",
    "name": "ESTRUCTURA DE DATOS AVANZADOS",
    "credits": 4,
    "prereqs": [
      "2502219"
    ],
    "year": "TERCER AÑO",
    "semester": "PRIMER SEMESTRE"
  },
  {
    "id": "2503127",
    "name": "COMPILADORES",
    "credits": 3,
    "prereqs": [
      "2502221"
    ],
    "year": "TERCER AÑO",
    "semester": "PRIMER SEMESTRE"
  },
  {
    "id": "2503128",
    "name": "PROGRAMACIÓN CONCURRENTE Y PARALELA",
    "credits": 4,
    "prereqs": [
      "2502220"
    ],
    "year": "TERCER AÑO",
    "semester": "PRIMER SEMESTRE"
  },
  {
    "id": "2503129",
    "name": "BASE DE DATOS I",
    "credits": 4,
    "prereqs": [
      "2502114",
      "2501207"
    ],
    "year": "TERCER AÑO",
    "semester": "PRIMER SEMESTRE"
  },
  {
    "id": "2503130",
    "name": "ESTADÍSTICA Y PROBABILIDADES",
    "credits": 4,
    "prereqs": [
      "2502116"
    ],
    "year": "TERCER AÑO",
    "semester": "PRIMER SEMESTRE"
  },
  {
    "id": "2503231",
    "name": "PROGRAMACIÓN COMPETITIVA",
    "credits": 3,
    "prereqs": [
      "2503125",
      "2503126"
    ],
    "year": "TERCER AÑO",
    "semester": "SEGUNDO SEMESTRE"
  },
  {
    "id": "2503232",
    "name": "INGENIERIA DE SOFTWARE I",
    "credits": 4,
    "prereqs": [
      "2502114"
    ],
    "year": "TERCER AÑO",
    "semester": "SEGUNDO SEMESTRE"
  },
  {
    "id": "2503233",
    "name": "SISTEMAS DISTRIBUIDOS",
    "credits": 4,
    "prereqs": [
      "2503128"
    ],
    "year": "TERCER AÑO",
    "semester": "SEGUNDO SEMESTRE"
  },
  {
    "id": "2503234",
    "name": "TEORÍA DE LA COMPUTACIÓN",
    "credits": 5,
    "prereqs": [
      "2503125"
    ],
    "year": "TERCER AÑO",
    "semester": "SEGUNDO SEMESTRE"
  },
  {
    "id": "2503235",
    "name": "INTELIGENCIA ARTIFICIAL I",
    "credits": 4,
    "prereqs": [
      "2503130"
    ],
    "year": "TERCER AÑO",
    "semester": "SEGUNDO SEMESTRE"
  },
  {
    "id": "2503236",
    "name": "ECUACIONES DIFERENCIALES",
    "credits": 4,
    "prereqs": [
      "2502116",
      "2502115"
    ],
    "year": "TERCER AÑO",
    "semester": "SEGUNDO SEMESTRE"
  },
  {
    "id": "2504137",
    "name": "INVESTIGACIÓN CIENCIA DE LA COMPUTACIÓN",
    "credits": 4,
    "prereqs": [
      "2503125"
    ],
    "year": "CUARTO AÑO",
    "semester": "PRIMER SEMESTRE"
  },
  {
    "id": "2504138",
    "name": "INGENIERÍA DE SOFTWARE",
    "credits": 3,
    "prereqs": [
      "2503232"
    ],
    "year": "CUARTO AÑO",
    "semester": "PRIMER SEMESTRE"
  },
  {
    "id": "2504139",
    "name": "DESARROLLO DE APLICACIONES WEB",
    "credits": 3,
    "prereqs": [
      "2503129"
    ],
    "year": "CUARTO AÑO",
    "semester": "PRIMER SEMESTRE"
  },
  {
    "id": "2504140",
    "name": "BASE DE DATOS",
    "credits": 4,
    "prereqs": [
      "2503129"
    ],
    "year": "CUARTO AÑO",
    "semester": "PRIMER SEMESTRE"
  },
  {
    "id": "2504141",
    "name": "ÉTICA GENERAL Y DEONDOLOGÍA",
    "credits": 2,
    "prereqs": [],
    "year": "CUARTO AÑO",
    "semester": "PRIMER SEMESTRE"
  },
  {
    "id": "2504142",
    "name": "DISEÑO DE VIDEOJUEGOS (E)",
    "credits": 4,
    "prereqs": [],
    "year": "CUARTO AÑO",
    "semester": "PRIMER SEMESTRE"
  },
  {
    "id": "2504143",
    "name": "INTELIGENCIA ARTIFICIAL II (E)",
    "credits": 4,
    "prereqs": [
      "2503235"
    ],
    "year": "CUARTO AÑO",
    "semester": "PRIMER SEMESTRE"
  },
  {
    "id": "2504144",
    "name": "SEGURIDAD EN COMPUTACIÓN (E)",
    "credits": 4,
    "prereqs": [
      "2502220"
    ],
    "year": "CUARTO AÑO",
    "semester": "PRIMER SEMESTRE"
  },
  {
    "id": "2504245",
    "name": "PROYECTOS I",
    "credits": 4,
    "prereqs": [
      "2504137"
    ],
    "year": "CUARTO AÑO",
    "semester": "SEGUNDO SEMESTRE"
  },
  {
    "id": "2504246",
    "name": "INTERACCIÓN HUMANO COMPUTADOR",
    "credits": 4,
    "prereqs": [
      "2504139",
      "2504138"
    ],
    "year": "CUARTO AÑO",
    "semester": "SEGUNDO SEMESTRE"
  },
  {
    "id": "2504247",
    "name": "BIG DATA",
    "credits": 4,
    "prereqs": [
      "2503233"
    ],
    "year": "CUARTO AÑO",
    "semester": "SEGUNDO SEMESTRE"
  },
  {
    "id": "2504248",
    "name": "FÍSICA COMPUTACIONAL",
    "credits": 3,
    "prereqs": [
      "2503236"
    ],
    "year": "CUARTO AÑO",
    "semester": "SEGUNDO SEMESTRE"
  },
  {
    "id": "2504249",
    "name": "POLÍTICAS PÚBLICAS Y ANTICORRUPCIÓN",
    "credits": 3,
    "prereqs": [],
    "year": "CUARTO AÑO",
    "semester": "SEGUNDO SEMESTRE"
  },
  {
    "id": "2504250",
    "name": "DESARROLLO DE APLICACIONES MOVIL (E)",
    "credits": 4,
    "prereqs": [],
    "year": "CUARTO AÑO",
    "semester": "SEGUNDO SEMESTRE"
  },
  {
    "id": "2504251",
    "name": "DESARROLLO DE TECNOLOGÍAS EMERGENTES (E)",
    "credits": 4,
    "prereqs": [],
    "year": "CUARTO AÑO",
    "semester": "SEGUNDO SEMESTRE"
  },
  {
    "id": "2504252",
    "name": "INTELIGENCIA ARTIFICIAL III (E)",
    "credits": 4,
    "prereqs": [
      "2504143"
    ],
    "year": "CUARTO AÑO",
    "semester": "SEGUNDO SEMESTRE"
  },
  {
    "id": "2505153",
    "name": "PROYECTOS",
    "credits": 4,
    "prereqs": [
      "2504245"
    ],
    "year": "QUINTO AÑO",
    "semester": "PRIMER SEMESTRE"
  },
  {
    "id": "2505154",
    "name": "CLOUD COMPUTING",
    "credits": 3,
    "prereqs": [
      "2504247"
    ],
    "year": "QUINTO AÑO",
    "semester": "PRIMER SEMESTRE"
  },
  {
    "id": "2505155",
    "name": "COMPUTACIÓN GRÁFICA",
    "credits": 4,
    "prereqs": [
      "2503126",
      "2504248"
    ],
    "year": "QUINTO AÑO",
    "semester": "PRIMER SEMESTRE"
  },
  {
    "id": "2505156",
    "name": "CIENCIA DE DATOS",
    "credits": 4,
    "prereqs": [
      "2504247",
      "2504140"
    ],
    "year": "QUINTO AÑO",
    "semester": "PRIMER SEMESTRE"
  },
  {
    "id": "2505157",
    "name": "MATEMÁTICA APLICADA A LA COMPUTACIÓN",
    "credits": 4,
    "prereqs": [
      "2504248"
    ],
    "year": "QUINTO AÑO",
    "semester": "PRIMER SEMESTRE"
  },
  {
    "id": "2505158",
    "name": "VISIÓN COMPUTACIONAL (E)",
    "credits": 4,
    "prereqs": [],
    "year": "QUINTO AÑO",
    "semester": "PRIMER SEMESTRE"
  },
  {
    "id": "2505159",
    "name": "DESARROLLO DE SOFTWARE EMPRESARIAL (E)",
    "credits": 4,
    "prereqs": [],
    "year": "QUINTO AÑO",
    "semester": "PRIMER SEMESTRE"
  },
  {
    "id": "2505260",
    "name": "TRABAJO DE INVESTIGACIÓN",
    "credits": 5,
    "prereqs": [
      "2505153"
    ],
    "year": "QUINTO AÑO",
    "semester": "SEGUNDO SEMESTRE"
  },
  {
    "id": "2505261",
    "name": "VISUALIZACIÓN DE DATOS",
    "credits": 4,
    "prereqs": [
      "2504246"
    ],
    "year": "QUINTO AÑO",
    "semester": "SEGUNDO SEMESTRE"
  },
  {
    "id": "2505262",
    "name": "DESARROLLO EMOCIONAL, GESTIÓN DE CONFLICTOS Y",
    "credits": 3,
    "prereqs": [],
    "year": "QUINTO AÑO",
    "semester": "SEGUNDO SEMESTRE"
  },
  {
    "id": "2505263",
    "name": "PRÁCTICAS PRE-PROFESIONALES",
    "credits": 4,
    "prereqs": [],
    "year": "QUINTO AÑO",
    "semester": "SEGUNDO SEMESTRE"
  },
  {
    "id": "2505264",
    "name": "CIBERSEGURIDAD (E)",
    "credits": 4,
    "prereqs": [],
    "year": "QUINTO AÑO",
    "semester": "SEGUNDO SEMESTRE"
  },
  {
    "id": "2505265",
    "name": "ROBÓTICA (E)",
    "credits": 4,
    "prereqs": [],
    "year": "QUINTO AÑO",
    "semester": "SEGUNDO SEMESTRE"
  },
  {
    "id": "2505266",
    "name": "PROCESAMIENTO DE LENGUAJE NATURAL (E)",
    "credits": 4,
    "prereqs": [],
    "year": "QUINTO AÑO",
    "semester": "SEGUNDO SEMESTRE"
  }
];

// State management
let courseStates = {};

// Initialize states
courses.forEach(c => {
    courseStates[c.id] = {
        completed: false,
        available: false
    };
});

// Load from local storage if available
const saved = localStorage.getItem('courseStates');
if (saved) {
    const parsed = JSON.parse(saved);
    // Merge saved state in case data structure changed
    for (const id in parsed) {
        if (courseStates[id]) {
            courseStates[id].completed = parsed[id].completed;
        }
    }
}

function updateAvailability() {
    let changed = false;
    // Iterate multiple times to propagate availability (though for availability 1 pass is enough if sorted, 
    // but completion propagation might need care). 
    // Actually, availability is pure function of prerequisites' completion status.
    
    courses.forEach(course => {
        const prevState = courseStates[course.id].available;
        let isAvailable = true;
        
        if (course.prereqs.length === 0) {
            isAvailable = true;
        } else {
            isAvailable = course.prereqs.every(pid => courseStates[pid] && courseStates[pid].completed);
        }

        courseStates[course.id].available = isAvailable;
        if (prevState !== isAvailable) changed = true;
    });
    
    return changed;
}

// Recursive function to uncheck dependents
function uncheckDependents(courseId) {
    // Find all courses that have courseId as a prereq
    const dependents = courses.filter(c => c.prereqs.includes(courseId));
    
    dependents.forEach(dep => {
        if (courseStates[dep.id].completed) {
            courseStates[dep.id].completed = false;
            // Recursively uncheck dependents of this one
            uncheckDependents(dep.id);
        }
    });
}

function toggleCourse(id) {
    const state = courseStates[id];
    if (!state.available && !state.completed) return; // Cannot toggle locked courses

    state.completed = !state.completed;

    if (!state.completed) {
        // If we unchecked it, we must uncheck all dependents
        uncheckDependents(id);
    }

    updateAvailability();
    saveState();
    render();
}

function saveState() {
    localStorage.setItem('courseStates', JSON.stringify(courseStates));
}

function render() {
    const container = document.getElementById('curriculum-container');
    container.innerHTML = '';

    // Group by Year -> Semester
    const structure = {};
    courses.forEach(c => {
        if (!structure[c.year]) structure[c.year] = {};
        if (!structure[c.year][c.semester]) structure[c.year][c.semester] = [];
        structure[c.year][c.semester].push(c);
    });

    for (const year in structure) {
        const yearSection = document.createElement('div');
        yearSection.className = 'year-section';
        const yearTitle = document.createElement('h2');
        yearTitle.innerText = year;
        yearSection.appendChild(yearTitle);

        const semestersContainer = document.createElement('div');
        semestersContainer.className = 'semesters-container';

        for (const sem in structure[year]) {
            const semCol = document.createElement('div');
            semCol.className = 'semester-column';
            const semTitle = document.createElement('h3');
            semTitle.innerText = sem;
            semCol.appendChild(semTitle);

            const courseList = document.createElement('div');
            courseList.className = 'course-list';

            structure[year][sem].forEach(course => {
                const state = courseStates[course.id];
                const card = document.createElement('div');
                card.className = `course-card ${state.completed ? 'completed' : ''} ${state.available ? 'available' : 'locked'}`;
                card.onclick = () => toggleCourse(course.id);

                const header = document.createElement('div');
                header.className = 'course-header';
                
                const codeSpan = document.createElement('span');
                codeSpan.className = 'course-code';
                codeSpan.innerText = course.id;

                const credSpan = document.createElement('span');
                credSpan.className = 'course-credits';
                credSpan.innerText = `${course.credits} CR`;

                header.appendChild(codeSpan);
                header.appendChild(credSpan);

                const name = document.createElement('div');
                name.className = 'course-name';
                name.innerText = course.name;

                // Show prereqs info for debugging/clarity?
                // Optional: Tooltip or small text
                if (course.prereqs.length > 0) {
                   const prereqInfo = document.createElement('div');
                   prereqInfo.className = 'prereq-info';
                   prereqInfo.innerText = `Prereq: ${course.prereqs.join(', ')}`;
                   // card.appendChild(prereqInfo); // Uncomment if needed
                }

                card.appendChild(header);
                card.appendChild(name);
                
                // Add Checkbox UI
                const checkbox = document.createElement('div');
                checkbox.className = 'checkbox-indicator';
                checkbox.innerHTML = state.completed ? '✔' : '';
                card.appendChild(checkbox);

                courseList.appendChild(card);
            });

            semCol.appendChild(courseList);
            semestersContainer.appendChild(semCol);
        }
        
        yearSection.appendChild(semestersContainer);
        container.appendChild(yearSection);
    }
}

// Initial Run
updateAvailability();
render();
