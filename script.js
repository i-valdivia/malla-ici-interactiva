
const ramos = [
  ["1", "1", "FUNDAMENTOS DE MATEMÁTICA"],
  ["1", "1", "DESARROLLO PERSONAL"],
  ["1", "1", "DESAFÍOS DE INGENIERÍA"],
  ["1", "1", "FUNDAMENTOS DE PROGRAMACIÓN"],
  ["1", "1", "QUÍMICA PARA INGENIERÍA"],
  ["1", "2", "CÁLCULO DIFERENCIAL"],
  ["1", "2", "ÁLGEBRA"],
  ["1", "2", "INGENIERÍA, INNOVACIÓN Y EMPRENDIMIENTO"],
  ["1", "2", "PROGRAMACIÓN"],
  ["1", "2", "FUNDAMENTOS DE FÍSICA"],
  ["2", "3", "CÁLCULO INTEGRAL Y SERIES"],
  ["2", "3", "ÁLGEBRA LINEAL"],
  ["2", "3", "FÍSICA MECÁNICA"],
  ["2", "3", "TÓPICOS DE FORMACIÓN GENERAL PARA INGENIERÍA INDUSTRIAL"],
  ["2", "3", "ALFABETIZACIÓN ACADÉMICA PARA INGENIERÍA I"],
  ["2", "3", "TIPE SELLO UV I"],
  ["2", "3", "IDIOMA I"],
  ["2", "4", "CÁLCULO EN VARIAS VARIABLES"],
  ["2", "4", "ECUACIONES DIFERENCIALES ORDINARIAS"],
  ["2", "4", "FÍSICA CALOR Y ONDAS"],
  ["2", "4", "ADMINISTRACIÓN DE EMPRESAS Y ORGANIZACIONES"],
  ["2", "4", "TIPE SELLO UV II"],
  ["2", "4", "IDIOMA II"],
  ["3", "5", "FÍSICA ELECTROMAGNETISMO"],
  ["3", "5", "ESTADÍSTICA Y PROBABILIDADES"],
  ["3", "5", "ANÁLISIS FINANCIERO Y CONTABLE"],
  ["3", "5", "TERMODINÁMICA"],
  ["3", "5", "ANÁLISIS DE MATERIALES Y DISEÑO DE PRODUCTOS"],
  ["3", "5", "PRINCIPIOS DE DATA SCIENCE"],
  ["3", "5", "IDIOMA III"],
  ["3", "6", "INFERENCIA ESTADÍSTICA"],
  ["3", "6", "GESTIÓN PRESUPUESTARIA Y COSTOS"],
  ["3", "6", "PENSAMIENTO SISTÉMICO"],
  ["3", "6", "ALFABETIZACIÓN ACADÉMICA PARA INGENIERÍA II"],
  ["3", "6", "MICROECONOMÍA Y MACROECONOMÍA"],
  ["3", "6", "IDIOMA IV"],
  ["4", "7", "PROCESOS INDUSTRIALES"],
  ["4", "7", "GESTIÓN DE TALENTO EN LAS ORGANIZACIONES"],
  ["4", "7", "MODELAMIENTO"],
  ["4", "7", "SISTEMAS DE INFORMACIÓN Y ADMINISTRACIÓN DE DATOS"],
  ["4", "7", "ECONOMÍA CIRCULAR Y SOSTENIBILIDAD"],
  ["4", "7", "GESTIÓN DE LA INNOVACIÓN Y EMPRENDIMIENTO"],
  ["4", "8", "GESTIÓN DE OPERACIONES I"],
  ["4", "8", "ANÁLISIS Y ESTRATEGIA DE NEGOCIOS"],
  ["4", "8", "VISUALIZACIÓN DE DATOS E INTELIGENCIA DE NEGOCIOS"],
  ["4", "8", "INVESTIGACIÓN DE OPERACIONES"],
  ["4", "8", "INGENIERÍA ECONÓMICA"],
  ["4", "8", "PROYECTO DE LICENCIATURA"],
  ["5", "9", "GESTIÓN ENERGÉTICA"],
  ["5", "9", "GESTIÓN DE OPERACIONES II"],
  ["5", "9", "DIRECCIÓN ESTRATÉGICA"],
  ["5", "9", "FORMULACIÓN Y EVALUACIÓN DE PROYECTOS"],
  ["5", "9", "SIMULACIÓN DE PROCESOS Y SISTEMAS"],
  ["5", "9", "DESARROLLO ORGANIZACIONAL"],
  ["5", "10", "GESTIÓN DE RIESGOS"],
  ["5", "10", "GESTIÓN DE LA CADENA DE SUMINISTROS"],
  ["5", "10", "PROJECT MANAGEMENT"],
  ["5", "10", "ESTRATEGIA DE MARKETING"],
  ["5", "10", "ELECTIVO PROFESIONAL I"],
  ["5", "10", "FINANZAS"],
  ["5", "10", "TALLER DE COMUNICACIÓN EFECTIVA"],
  ["6", "11", "PROYECTO DE TÍTULO"],
  ["6", "11", "ELECTIVO PROFESIONAL II"],
  ["6", "11", "PRÁCTICA PROFESIONAL"]
];

function cargarTabla() {
  const cuerpo = document.querySelector("#malla tbody");
  ramos.forEach(([a, s, ramo]) => {
    const fila = cuerpo.insertRow();
    [a, s, ramo].forEach(texto => {
      const celda = fila.insertCell();
      celda.contentEditable = "true";
      celda.textContent = texto;
    });
    const celdaAccion = fila.insertCell();
    celdaAccion.innerHTML = '<button onclick="eliminarFila(this)">❌</button>';
  });
}

function agregarFila() {
  const cuerpo = document.querySelector("#malla tbody");
  const fila = cuerpo.insertRow();
  for (let i = 0; i < 3; i++) {
    const celda = fila.insertCell();
    celda.contentEditable = "true";
    celda.innerText = "";
  }
  const celdaAccion = fila.insertCell();
  celdaAccion.innerHTML = '<button onclick="eliminarFila(this)">❌</button>';
}

function eliminarFila(boton) {
  const fila = boton.closest("tr");
  fila.remove();
}

cargarTabla();


function filtrarTabla() {
  const filtroAnio = document.getElementById("filtroAnio").value;
  const filtroSemestre = document.getElementById("filtroSemestre").value;
  const filas = document.querySelectorAll("#malla tbody tr");

  filas.forEach(fila => {
    const [anio, semestre] = [fila.cells[0].innerText, fila.cells[1].innerText];
    const mostrar =
      (filtroAnio === "" || filtroAnio === anio) &&
      (filtroSemestre === "" || filtroSemestre === semestre);
    fila.style.display = mostrar ? "" : "none";
  });
}
