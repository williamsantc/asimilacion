import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const getDefaultState = () => {
  return {
    libreEleccion: 17,
    documento: '',
    logged: false,
    userLogged: null,
    pensum2006: [
      [
        { codigo: 156001, asignatura: 'BIOLOGÍA GENERAL', calificacion: '', creditos:  4 },
        { codigo: 157005, asignatura: 'CÁLCULO DIFERENCIAL', calificacion: '', creditos:  4 },
        { codigo: 153002, asignatura: 'CÁTEDRA FARIA', calificacion: '', creditos:  2 },
        { codigo: 164004, asignatura: 'EDUCACIÓN AMBIENTAL', calificacion: '', creditos:  2 },
        { codigo: 162003, asignatura: 'HABILIDADES COMUNICATIVAS', calificacion: '', creditos:  2 },
        { codigo: 156005, asignatura: 'LABORATORIO BIOLOGÍA GENERAL', calificacion: '', creditos:  1 },
        { codigo: 167250, asignatura: 'PROGRAMACIÓN ESTRUCTURADA', calificacion: '', creditos:  3 }
      ],
      [
        { codigo: 157006, asignatura: 'CÁLCULO INTEGRAL', calificacion: '', creditos:  4 },
        { codigo: 157015, asignatura: 'LABORATORIO DE MECÁNICA', calificacion: '', creditos:  1 },
        { codigo: 156006, asignatura: 'LABORATORIO DE QUÍMICA GENERAL', calificacion: '', creditos:  1 },
        { codigo: 157019, asignatura: 'MECÁNICA', calificacion: '', creditos:  4 },
        { codigo: 167251, asignatura: ' PROGRAMACIÓN ORIENTADA A OBJETOS', calificacion: '', creditos:  3 },
        { codigo: 156009, asignatura: 'QUÍMICA GENERAL', calificacion: '', creditos:  4 }
      ],
      [
        { codigo: 157002, asignatura: 'ÁLGEBRA LINEAL', calificacion: '', creditos:  3 },
        { codigo: 157007, asignatura: 'CÁLCULO MULTIVARIABLE', calificacion: '', creditos:  4 },
        { codigo: 157009, asignatura: 'ELECTROMAGNETISMO', calificacion: '', creditos:  4 },
        { codigo: 167231, asignatura: 'ESTRUCTURAS DE DATOS DINÁMICOS Y ALGORITMOS', calificacion: '', creditos:  3 },
        { codigo: 157014, asignatura: ' LABORATORIO DE ELECTROMAGNETISMO', calificacion: '', creditos:  1 }
      ],
      [
        { codigo: 167201, asignatura: 'ANÁLISIS DE ALGORITMOS', calificacion: '', creditos:  3 },
        { codigo: 157008, asignatura: 'ECUACIONES DIFERENCIALES', calificacion: '', creditos:  4 },
        { codigo: 168003, asignatura: 'EXPRESIÓN GRAFICA I', calificacion: '', creditos:  2 },
        { codigo: 167238, asignatura: 'INTRODUCCIÓN A LAS CIENCIAS COMPUTACIONALES', calificacion: '', creditos:  3 },
        { codigo: 157016, asignatura: 'LABORATORIO DE OSCILACIONES Y ONDAS', calificacion: '', creditos:  1 },
        { codigo: 157020, asignatura: 'OSCILACIONES Y ONDAS', calificacion: '', creditos:  4 }
      ],
      [
        { codigo: 167232, asignatura: 'FUNDAMENTOS Y DISEÑO DE BASE DE DATOS', calificacion: '', creditos:  3 },
        { codigo: 167233, asignatura: 'FUNDAMENTOS Y DISEÑO DE SISTEMAS OPERATIVOS', calificacion: '', creditos:  3 },
        { codigo: 167243, asignatura: 'LÓGICA COMPUTACIONAL', calificacion: '', creditos:  3 },
        { codigo: 157102, asignatura: 'MATEMÁTICAS ESPECIALES', calificacion: '', creditos:  3 },
        { codigo: 157103, asignatura: 'MÉTODOS NUMÉRICOS', calificacion: '', creditos:  3 },
        { codigo: 167248, asignatura: 'PARADIGMAS DE PROGRAMACIÓN', calificacion: '', creditos:  2 }
      ],
      [
        { codigo: 167202, asignatura: 'BASES DE DATOS II', calificacion: '', creditos:  3 },
        { codigo: 150001, asignatura: 'ELECTIVA SOCIOHUMANÍSTICA I', calificacion: '', creditos:  2 },
        { codigo: 157012, asignatura: 'ESTADÍSTICA II', calificacion: '', creditos:  3 },
        { codigo: 167246, asignatura: 'MODELAMIENTO DE SISTEMAS DE INFORMACIÓN', calificacion: '', creditos:  3 },
        { codigo: 167265, asignatura: 'SISTEMAS Y MODELADO I', calificacion: '', creditos:  3 },
        { codigo: 167270, asignatura: 'TEORÍA DE LA COMPUTACIÓN', calificacion: '', creditos:  3 }
      ],
      [
        { codigo: 167213, asignatura: 'ELECTIVA DE INGENIERÍA I', calificacion: '', creditos:  3},
        { codigo: 167219, asignatura: 'ELECTIVA PROFESIONAL I', calificacion: '', creditos:  3 },
        { codigo: 167256, asignatura: 'REDES DE COMPUTADORES Y SISTEMAS DISTRIBUIDOS I', calificacion: '', creditos:  3 },
        { codigo: 167266, asignatura: 'SISTEMAS Y MODELADO II', calificacion: '', creditos: 3 },
        { codigo: 167271, asignatura: 'TÓPICOS AVANZADOS DE INGENIERÍA DEL SOFTWARE', calificacion: '', creditos:  3 }
      ],
      [
        { codigo: 167214, asignatura: 'ELECTIVA DE INGENIERIA II', calificacion: '', creditos:  3 },
        { codigo: 167222, asignatura: 'ELECTIVA PROFESIONAL II', calificacion: '', creditos:  3 },
        { codigo: 168106, asignatura: 'INGENIERIA DE PROYECTOS I', calificacion: '', creditos:  2 },
        { codigo: 168005, asignatura: 'INVESTIGACIÓN DE OPERACIONES', calificacion: '', creditos:  4 },
        { codigo: 167240, asignatura: 'LEGISLACION INFORMATICA', calificacion: '', creditos:  2 },
        { codigo: 167257, asignatura: 'REDES DE COMPUTADORES Y SISTEMAS DISTRIBUIDOS II', calificacion: '', creditos:  2 },
      ],
      [
        { codigo: 167215, asignatura: 'ELECTIVA DE INGENIERIA III', calificacion: '', creditos:  3 },
        { codigo: 167225, asignatura: 'ELECTIVA PROFESIONAL III', calificacion: '', creditos:  3 },
        { codigo: 150002, asignatura: 'ELECTIVA SOCIOHUMANISTICA II', calificacion: '', creditos:  2 },
        { codigo: 164010, asignatura: 'ETICA', calificacion: '', creditos:  2 },
        { codigo: 164018, asignatura: 'METODOLOGIA DE LA INVESTIGACION', calificacion: '', creditos:  2 },
        { codigo: 167252, asignatura: 'PROTECCION DE SISTEMAS INFORMATICOS', calificacion: '', creditos:  2 }
      ],
      [
        { codigo: 173238, asignatura: 'ACTIVIDAD DEPORTIVA, RECREACION Y CULT-DEP UNIVERSITARIO (EXTRAPLAN)', calificacion: '', creditos:  0 },
        { codigo: 369006, asignatura: 'CIVICA Y CONSTITUCION (EXTRAPLAN)', calificacion: '', creditos:  0 },
        { codigo: 167281, asignatura: 'INFORMATICA BASICA (EXTRAPLAN)', calificacion: '', creditos:  0 },
        { codigo: 167328, asignatura: 'TRABAJO DE GRADO', calificacion: '', creditos:  16 },
        { codigo: 999999, asignatura: 'PRUEBA DE INGLES', calificacion: '', creditos: 0}
      ]
    ],
    pensum2018: [
      [
        { codigo: 5, asignatura: 'PENSAMIENTO COMPUTACIONAL', calificacion: '', creditos: 3, asim: 167250},
        { codigo: 8, asignatura: 'INTRODUCCIÓN A LA INGENIRÍA DE SISTEMAS', calificacion: '', creditos: 2, asim: 167238},
        { codigo: 40, asignatura: 'HABILIDADES COMUNICATIVAS', calificacion: '', creditos: 2, asim: 162003},
        { codigo: 39, asignatura: 'CÁTEDRA FARÍA', calificacion: '', creditos: 2, asim: 153002},
        { codigo: 4, asignatura: 'ALGEBRA LINEAL', calificacion: '', creditos: 3, asim: 157002},
        { codigo: 49, asignatura: 'INFORMÁTICA BASICA', calificacion: '', creditos: 1, asim: 167281},
        { codigo: 41, asignatura: 'ACT. DEPORTIVA, RECREATIVA Y CULTURAL', calificacion: '', creditos: 1, asim: 173238},
        { codigo: 46, asignatura: 'NIVEL DE INGLÉS I', calificacion: '', creditos: 2, asim: 999999}
      ],
      [
        { codigo: 11, asignatura: 'FUNDAMENTOS DE PROGRAMACIÓN', calificacion: '', creditos: 3, asim: 167250},
        { codigo: 1, asignatura: 'CÁLCULO DIFERENCIAL', calificacion: '', creditos: 3, asim: 157005},
        { codigo: 42, asignatura: 'EDUCACIÓN HAMBIENTAL', calificacion: '', creditos: 2, asim: 164004},
        { codigo: 12, asignatura: 'GESTIÓN DE PROYECTOS', calificacion: '', creditos: 3, asim: 168106},
        { codigo: 43, asignatura: 'FORMACIÓN CIUDADANA Y CULTURA DE PAZ', calificacion: '', creditos: 1, asim: 369006},
        { codigo: 44, asignatura: 'ELECTIVA SOCIOHUMANISTICA I', calificacion: '', creditos: 2, asim: 150001},
        { codigo: 47, asignatura: 'NIVEL DE INGLÉS II', calificacion: '', creditos: 2, asim: 999999}
      ],
      [
        { codigo: 25, asignatura: 'PROGRAMACIÓN ORIENTADA A OBJETOS', calificacion: '', creditos: 3, asim: 167251},
        { codigo: 2, asignatura: 'CÁLCULO INTEGRAL', calificacion: '', creditos: 3, asim: 157006},
        { codigo: 6, asignatura: 'MECÁNICA', calificacion: '', creditos: 3, asim: 157019},
        { codigo: 10, asignatura: 'ESTADÍSTICA Y PROBABILIDAD', calificacion: '', creditos: 4, asim: 157012},
        { codigo: 45, asignatura: 'ELECTIVA SOCIOHUMANISTICA II', calificacion: '', creditos: 2, asim: 150002},
        { codigo: 48, asignatura: 'NIVEL DE INGLÉS III', calificacion: '', creditos: 2, asim: 999999}
      ],
      [
        { codigo: 26, asignatura: 'ESTRUCTURA DE DATOS Y ANÁLISIS DE ALGORITMOS', calificacion: '', creditos: 4, asim: 167201},
        { codigo: 3, asignatura: 'CÁLCULO MULTIVARIABLE', calificacion: '', creditos: 3, asim: 157007},
        { codigo: 7, asignatura: 'ELECTROMAGNETISMO', calificacion: '', creditos: 3, asim: 157009},
        { codigo: 50, asignatura: 'ETICA', calificacion: '', creditos: 2, asim: 164010},
        { codigo: 13, asignatura: 'ARQUITECTURAS EMPRESARIALES', calificacion: '', creditos: 4, asim: 167246}
      ],
      [
        { codigo: 3.5, asignatura: 'ECUACIONES DIFERENCIALES', calificacion: '', creditos: 3, asim: 157008},
        { codigo: 17, asignatura: 'PLATAFORMAS TECNOLÓGICAS', calificacion: '', creditos: 3, asim: 167233},
        { codigo: 27, asignatura: 'ESTRUCTURAS COMPUTACIONALES DISCRETAS', calificacion: '', creditos: 3, asim: 167238},
        { codigo: 38, asignatura: 'INVESTIGACIÓN EN INGENIERÍA DE SISTEMAS', calificacion: '', creditos: 2, asim: 164018},
        { codigo: 15, asignatura: 'BASES DE DATOS I', calificacion: '', creditos: 3, asim: 167232},
        { codigo: 14, asignatura: 'SISTEMAS DE INFORMACIÓN', calificacion: '', creditos: 4, asim: 167246}
      ],
      [
        { codigo: 9, asignatura: 'ALGORITMOS NUMÉRICOS PARA INGENIERIA', calificacion: '', creditos: 3, asim: 157103},
        { codigo: 20, asignatura: 'DESARROLLO ORIENTADO A PLATAFORMAS', calificacion: '', creditos: 4, asim: 167213},
        { codigo: 31, asignatura: 'LÓGICA Y REPRESENTACIÓN DEL CONOCIMIENTO', calificacion: '', creditos: 3, asim: 167243},
        { codigo: 16, asignatura: 'BASES DE DATOS II', calificacion: '', creditos: 3, asim: 167202}
      ],
      [
        { codigo: 18, asignatura: 'REDES', calificacion: '', creditos: 4, asim: 167257},
        { codigo: 28, asignatura: 'TEORÍA DE LA COMPUTACIÓN', calificacion: '', creditos: 3, asim: 167270},
        { codigo: 34, asignatura: 'PARADIGMAS DE PROGRAMACIÓN', calificacion: '', creditos: 3, asim: 167248},
        { codigo: 37, asignatura: 'PROYECTO INVESTIGADOR', calificacion: '', creditos: 2, asim: 167328}
      ],
      [
        { codigo: 35, asignatura: 'FUNDAMENTOS DE COMPUTACIÓN PARALELA Y DISTRIBUIDA', calificacion: '', creditos: 3, asim: 167233},
        { codigo: 21, asignatura: 'INGENIERÍA DE SOFTWARE I', calificacion: '', creditos: 4, asim: 167271},
        { codigo: 32, asignatura: 'SISTEMAS INTELIGENTES', calificacion: '', creditos: 4, asim: 167219},
        { codigo: 29, asignatura: 'MODELADO Y SIMULACIÓN DE SISTEMAS CONTINUOS', calificacion: '', creditos: 3, asim: 167265}
      ],
      [
        { codigo: 22, asignatura: 'INGENIERÍA DE SOFTWARE II', calificacion: '', creditos: 4, asim: 167214},
        { codigo: 24, asignatura: 'LEGISLACIÓN INFORMÁTICA Y ASUNTOS SOCIALES', calificacion: '', creditos: 2, asim: 167240},
        { codigo: 33, asignatura: 'CIENCIA DE DATOS', calificacion: '', creditos: 3, asim: 167222},
        { codigo: 30, asignatura: 'MODELADO Y SIMULACIÓN DE SISTEMAS DISCRETOS', calificacion: '', creditos: 3, asim: 167266},
        { codigo: 103, asignatura: 'LIBRE ELECCIÓN', calificacion: '', creditos: 17, asim: 100000}
      ],
      [
        { codigo: 36, asignatura: 'TRABAJO DE GRADO', calificacion: '', creditos: 6, asim: 167328},
        { codigo: 23, asignatura: 'INGENIERÍA DEL SOFTWARE III', calificacion: '', creditos: 4, asim: 167215},
        { codigo: 19, asignatura: 'SEGURIDAD INFORMÁTICA', calificacion: '', creditos: 3, asim: 167252}
      ]
    ]
  }
}

export default new Vuex.Store({
  state: {
    // TODO: Add state
    libreEleccion: 17,
    documento: '',
    logged: false,
    userLogged: null,
    pensum2006: [
      [
        { codigo: 156001, asignatura: 'BIOLOGÍA GENERAL', calificacion: '', creditos:  4 },
        { codigo: 157005, asignatura: 'CÁLCULO DIFERENCIAL', calificacion: '', creditos:  4 },
        { codigo: 153002, asignatura: 'CÁTEDRA FARIA', calificacion: '', creditos:  2 },
        { codigo: 164004, asignatura: 'EDUCACIÓN AMBIENTAL', calificacion: '', creditos:  2 },
        { codigo: 162003, asignatura: 'HABILIDADES COMUNICATIVAS', calificacion: '', creditos:  2 },
        { codigo: 156005, asignatura: 'LABORATORIO BIOLOGÍA GENERAL', calificacion: '', creditos:  1 },
        { codigo: 167250, asignatura: 'PROGRAMACIÓN ESTRUCTURADA', calificacion: '', creditos:  3 }
      ],
      [
        { codigo: 157006, asignatura: 'CÁLCULO INTEGRAL', calificacion: '', creditos:  4 },
        { codigo: 157015, asignatura: 'LABORATORIO DE MECÁNICA', calificacion: '', creditos:  1 },
        { codigo: 156006, asignatura: 'LABORATORIO DE QUÍMICA GENERAL', calificacion: '', creditos:  1 },
        { codigo: 157019, asignatura: 'MECÁNICA', calificacion: '', creditos:  4 },
        { codigo: 167251, asignatura: ' PROGRAMACIÓN ORIENTADA A OBJETOS', calificacion: '', creditos:  3 },
        { codigo: 156009, asignatura: 'QUÍMICA GENERAL', calificacion: '', creditos:  4 }
      ],
      [
        { codigo: 157002, asignatura: 'ÁLGEBRA LINEAL', calificacion: '', creditos:  3 },
        { codigo: 157007, asignatura: 'CÁLCULO MULTIVARIABLE', calificacion: '', creditos:  4 },
        { codigo: 157009, asignatura: 'ELECTROMAGNETISMO', calificacion: '', creditos:  4 },
        { codigo: 167231, asignatura: 'ESTRUCTURAS DE DATOS DINÁMICOS Y ALGORITMOS', calificacion: '', creditos:  3 },
        { codigo: 157014, asignatura: ' LABORATORIO DE ELECTROMAGNETISMO', calificacion: '', creditos:  1 }
      ],
      [
        { codigo: 167201, asignatura: 'ANÁLISIS DE ALGORITMOS', calificacion: '', creditos:  3 },
        { codigo: 157008, asignatura: 'ECUACIONES DIFERENCIALES', calificacion: '', creditos:  4 },
        { codigo: 168003, asignatura: 'EXPRESIÓN GRAFICA I', calificacion: '', creditos:  2 },
        { codigo: 167238, asignatura: 'INTRODUCCIÓN A LAS CIENCIAS COMPUTACIONALES', calificacion: '', creditos:  3 },
        { codigo: 157016, asignatura: 'LABORATORIO DE OSCILACIONES Y ONDAS', calificacion: '', creditos:  1 },
        { codigo: 157020, asignatura: 'OSCILACIONES Y ONDAS', calificacion: '', creditos:  4 }
      ],
      [
        { codigo: 167232, asignatura: 'FUNDAMENTOS Y DISEÑO DE BASE DE DATOS', calificacion: '', creditos:  3 },
        { codigo: 167233, asignatura: 'FUNDAMENTOS Y DISEÑO DE SISTEMAS OPERATIVOS', calificacion: '', creditos:  3 },
        { codigo: 167243, asignatura: 'LÓGICA COMPUTACIONAL', calificacion: '', creditos:  3 },
        { codigo: 157102, asignatura: 'MATEMÁTICAS ESPECIALES', calificacion: '', creditos:  3 },
        { codigo: 157103, asignatura: 'MÉTODOS NUMÉRICOS', calificacion: '', creditos:  3 },
        { codigo: 167248, asignatura: 'PARADIGMAS DE PROGRAMACIÓN', calificacion: '', creditos:  2 }
      ],
      [
        { codigo: 167202, asignatura: 'BASES DE DATOS II', calificacion: '', creditos:  3 },
        { codigo: 150001, asignatura: 'ELECTIVA SOCIOHUMANÍSTICA I', calificacion: '', creditos:  2 },
        { codigo: 157012, asignatura: 'ESTADÍSTICA II', calificacion: '', creditos:  3 },
        { codigo: 167246, asignatura: 'MODELAMIENTO DE SISTEMAS DE INFORMACIÓN', calificacion: '', creditos:  3 },
        { codigo: 167265, asignatura: 'SISTEMAS Y MODELADO I', calificacion: '', creditos:  3 },
        { codigo: 167270, asignatura: 'TEORÍA DE LA COMPUTACIÓN', calificacion: '', creditos:  3 }
      ],
      [
        { codigo: 167213, asignatura: 'ELECTIVA DE INGENIERÍA I', calificacion: '', creditos:  3},
        { codigo: 167219, asignatura: 'ELECTIVA PROFESIONAL I', calificacion: '', creditos:  3 },
        { codigo: 167256, asignatura: 'REDES DE COMPUTADORES Y SISTEMAS DISTRIBUIDOS I', calificacion: '', creditos:  3 },
        { codigo: 167266, asignatura: 'SISTEMAS Y MODELADO II', calificacion: '', creditos: 3 },
        { codigo: 167271, asignatura: 'TÓPICOS AVANZADOS DE INGENIERÍA DEL SOFTWARE', calificacion: '', creditos:  3 }
      ],
      [
        { codigo: 167214, asignatura: 'ELECTIVA DE INGENIERIA II', calificacion: '', creditos:  3 },
        { codigo: 167222, asignatura: 'ELECTIVA PROFESIONAL II', calificacion: '', creditos:  3 },
        { codigo: 168106, asignatura: 'INGENIERIA DE PROYECTOS I', calificacion: '', creditos:  2 },
        { codigo: 168005, asignatura: 'INVESTIGACIÓN DE OPERACIONES', calificacion: '', creditos:  4 },
        { codigo: 167240, asignatura: 'LEGISLACION INFORMATICA', calificacion: '', creditos:  2 },
        { codigo: 167257, asignatura: 'REDES DE COMPUTADORES Y SISTEMAS DISTRIBUIDOS II', calificacion: '', creditos:  2 },
      ],
      [
        { codigo: 167215, asignatura: 'ELECTIVA DE INGENIERIA III', calificacion: '', creditos:  3 },
        { codigo: 167225, asignatura: 'ELECTIVA PROFESIONAL III', calificacion: '', creditos:  3 },
        { codigo: 150002, asignatura: 'ELECTIVA SOCIOHUMANISTICA II', calificacion: '', creditos:  2 },
        { codigo: 164010, asignatura: 'ETICA', calificacion: '', creditos:  2 },
        { codigo: 164018, asignatura: 'METODOLOGIA DE LA INVESTIGACION', calificacion: '', creditos:  2 },
        { codigo: 167252, asignatura: 'PROTECCION DE SISTEMAS INFORMATICOS', calificacion: '', creditos:  2 }
      ],
      [
        { codigo: 173238, asignatura: 'ACTIVIDAD DEPORTIVA, RECREACION Y CULT-DEP UNIVERSITARIO (EXTRAPLAN)', calificacion: '', creditos:  0 },
        { codigo: 369006, asignatura: 'CIVICA Y CONSTITUCION (EXTRAPLAN)', calificacion: '', creditos:  0 },
        { codigo: 167281, asignatura: 'INFORMATICA BASICA (EXTRAPLAN)', calificacion: '', creditos:  0 },
        { codigo: 167328, asignatura: 'TRABAJO DE GRADO', calificacion: '', creditos:  16 },
        { codigo: 999999, asignatura: 'PRUEBA DE INGLES', calificacion: '', creditos: 0}
      ]
    ],
    pensum2018: [
      [
        { codigo: 5, asignatura: 'PENSAMIENTO COMPUTACIONAL', calificacion: '', creditos: 3, asim: 167250},
        { codigo: 8, asignatura: 'INTRODUCCIÓN A LA INGENIRÍA DE SISTEMAS', calificacion: '', creditos: 2, asim: 167238},
        { codigo: 40, asignatura: 'HABILIDADES COMUNICATIVAS', calificacion: '', creditos: 2, asim: 162003},
        { codigo: 39, asignatura: 'CÁTEDRA FARÍA', calificacion: '', creditos: 2, asim: 153002},
        { codigo: 4, asignatura: 'ALGEBRA LINEAL', calificacion: '', creditos: 3, asim: 157002},
        { codigo: 49, asignatura: 'INFORMÁTICA BASICA', calificacion: '', creditos: 1, asim: 167281},
        { codigo: 41, asignatura: 'ACT. DEPORTIVA, RECREATIVA Y CULTURAL', calificacion: '', creditos: 1, asim: 173238},
        { codigo: 46, asignatura: 'NIVEL DE INGLÉS I', calificacion: '', creditos: 2, asim: 999999}
      ],
      [
        { codigo: 11, asignatura: 'FUNDAMENTOS DE PROGRAMACIÓN', calificacion: '', creditos: 3, asim: 167250},
        { codigo: 1, asignatura: 'CÁLCULO DIFERENCIAL', calificacion: '', creditos: 3, asim: 157005},
        { codigo: 42, asignatura: 'EDUCACIÓN HAMBIENTAL', calificacion: '', creditos: 2, asim: 164004},
        { codigo: 12, asignatura: 'GESTIÓN DE PROYECTOS', calificacion: '', creditos: 3, asim: 168106},
        { codigo: 43, asignatura: 'FORMACIÓN CIUDADANA Y CULTURA DE PAZ', calificacion: '', creditos: 1, asim: 369006},
        { codigo: 44, asignatura: 'ELECTIVA SOCIOHUMANISTICA I', calificacion: '', creditos: 2, asim: 150001},
        { codigo: 47, asignatura: 'NIVEL DE INGLÉS II', calificacion: '', creditos: 2, asim: 999999}
      ],
      [
        { codigo: 25, asignatura: 'PROGRAMACIÓN ORIENTADA A OBJETOS', calificacion: '', creditos: 3, asim: 167251},
        { codigo: 2, asignatura: 'CÁLCULO INTEGRAL', calificacion: '', creditos: 3, asim: 157006},
        { codigo: 6, asignatura: 'MECÁNICA', calificacion: '', creditos: 3, asim: 157019},
        { codigo: 10, asignatura: 'ESTADÍSTICA Y PROBABILIDAD', calificacion: '', creditos: 4, asim: 157012},
        { codigo: 45, asignatura: 'ELECTIVA SOCIOHUMANISTICA II', calificacion: '', creditos: 2, asim: 150002},
        { codigo: 48, asignatura: 'NIVEL DE INGLÉS III', calificacion: '', creditos: 2, asim: 999999}
      ],
      [
        { codigo: 26, asignatura: 'ESTRUCTURA DE DATOS Y ANÁLISIS DE ALGORITMOS', calificacion: '', creditos: 4, asim: 167201},
        { codigo: 3, asignatura: 'CÁLCULO MULTIVARIABLE', calificacion: '', creditos: 3, asim: 157007},
        { codigo: 7, asignatura: 'ELECTROMAGNETISMO', calificacion: '', creditos: 3, asim: 157009},
        { codigo: 50, asignatura: 'ETICA', calificacion: '', creditos: 2, asim: 164010},
        { codigo: 13, asignatura: 'ARQUITECTURAS EMPRESARIALES', calificacion: '', creditos: 4, asim: 167246}
      ],
      [
        { codigo: 3.5, asignatura: 'ECUACIONES DIFERENCIALES', calificacion: '', creditos: 3, asim: 157008},
        { codigo: 17, asignatura: 'PLATAFORMAS TECNOLÓGICAS', calificacion: '', creditos: 3, asim: 167233},
        { codigo: 27, asignatura: 'ESTRUCTURAS COMPUTACIONALES DISCRETAS', calificacion: '', creditos: 3, asim: 167238},
        { codigo: 38, asignatura: 'INVESTIGACIÓN EN INGENIERÍA DE SISTEMAS', calificacion: '', creditos: 2, asim: 164018},
        { codigo: 15, asignatura: 'BASES DE DATOS I', calificacion: '', creditos: 3, asim: 167232},
        { codigo: 14, asignatura: 'SISTEMAS DE INFORMACIÓN', calificacion: '', creditos: 4, asim: 167246}
      ],
      [
        { codigo: 9, asignatura: 'ALGORITMOS NUMÉRICOS PARA INGENIERIA', calificacion: '', creditos: 3, asim: 157103},
        { codigo: 20, asignatura: 'DESARROLLO ORIENTADO A PLATAFORMAS', calificacion: '', creditos: 4, asim: 167213},
        { codigo: 31, asignatura: 'LÓGICA Y REPRESENTACIÓN DEL CONOCIMIENTO', calificacion: '', creditos: 3, asim: 167243},
        { codigo: 16, asignatura: 'BASES DE DATOS II', calificacion: '', creditos: 3, asim: 167202}
      ],
      [
        { codigo: 18, asignatura: 'REDES', calificacion: '', creditos: 4, asim: 167257},
        { codigo: 28, asignatura: 'TEORÍA DE LA COMPUTACIÓN', calificacion: '', creditos: 3, asim: 167270},
        { codigo: 34, asignatura: 'PARADIGMAS DE PROGRAMACIÓN', calificacion: '', creditos: 3, asim: 167248},
        { codigo: 37, asignatura: 'PROYECTO INVESTIGADOR', calificacion: '', creditos: 2, asim: 167328}
      ],
      [
        { codigo: 35, asignatura: 'FUNDAMENTOS DE COMPUTACIÓN PARALELA Y DISTRIBUIDA', calificacion: '', creditos: 3, asim: 167233},
        { codigo: 21, asignatura: 'INGENIERÍA DE SOFTWARE I', calificacion: '', creditos: 4, asim: 167271},
        { codigo: 32, asignatura: 'SISTEMAS INTELIGENTES', calificacion: '', creditos: 4, asim: 167219},
        { codigo: 29, asignatura: 'MODELADO Y SIMULACIÓN DE SISTEMAS CONTINUOS', calificacion: '', creditos: 3, asim: 167265}
      ],
      [
        { codigo: 22, asignatura: 'INGENIERÍA DE SOFTWARE II', calificacion: '', creditos: 4, asim: 167214},
        { codigo: 24, asignatura: 'LEGISLACIÓN INFORMÁTICA Y ASUNTOS SOCIALES', calificacion: '', creditos: 2, asim: 167240},
        { codigo: 33, asignatura: 'CIENCIA DE DATOS', calificacion: '', creditos: 3, asim: 167222},
        { codigo: 30, asignatura: 'MODELADO Y SIMULACIÓN DE SISTEMAS DISCRETOS', calificacion: '', creditos: 3, asim: 167266},
        { codigo: 103, asignatura: 'LIBRE ELECCIÓN', calificacion: '', creditos: 17, asim: 100000}
      ],
      [
        { codigo: 36, asignatura: 'TRABAJO DE GRADO', calificacion: '', creditos: 6, asim: 167328},
        { codigo: 23, asignatura: 'INGENIERÍA DEL SOFTWARE III', calificacion: '', creditos: 4, asim: 167215},
        { codigo: 19, asignatura: 'SEGURIDAD INFORMÁTICA', calificacion: '', creditos: 3, asim: 167252}
      ]
    ]
  },
  getters: {
    // TODO: Add getters
    pensum2006: state => state.pensum2006,
    pensum2018: state => state.pensum2018,
    libreEleccion: state => state.libreEleccion,
    documento: state => state.documento,
    logged: state => state.logged,
    userLogged: state => state.userLogged
  },
  mutations: {
    // TODO: Add mutations
    CHANGE_LIBRE: function (state, item) {
      state.libreEleccion = item
    },
    CHANGE_DOC: function (state, item) {
      state.documento = item
    },
    SIGN_IN: function (state) {
      state.logged = true
    },
    RESET: function (state) {
      Object.assign(state, getDefaultState())
    },
    OLD_USER: function (state, item) {
      state.userLogged = item
    }
  },
  actions: {
    // TODO: Add actions
    changeLibre: function (context, item) {
      context.commit('CHANGE_LIBRE', item)
    },
    changeDoc: function (context, item) {
      context.commit('CHANGE_DOC', item)
    },
    iniciarSesion: function (context) {
      context.commit('SIGN_IN')
    },
    cerrarSesion: function (context) {
      context.commit('RESET')
    },
    usuarioAntiguo: function (context, item) {
      context.commit('OLD_USER', item)
    }
  },
})

