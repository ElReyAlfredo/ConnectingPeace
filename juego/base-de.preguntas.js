function LaTeX(code) {
  return `https://latex.codecogs.com/svg.image?\\large&space;${code}`;
}

function opnLaTeX(code) {
  return `<img src="${LaTeX(code)}" style="height:40px">`;
}

let baseDePreguntas = [
  {
    pregunta: "¿Cuál es el símbolo universal de la paz?",
    imagen:
      "https://images.unsplash.com/photo-1516589091380-5d8e87df6999?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHNpbWJvbG9zfGVufDB8fDB8fHww",
    respuesta: "Paloma",
    distractores: ["Espada", "Calavera"],
  },
  {
    pregunta:
      "¿Quién fue un líder importante en la lucha por los derechos civiles y la paz en Estados Unidos",
    imagen: "imagenes/paz2.jpg",
    respuesta: "Martin Luther King Jr.",
    distractores: ["Nelson Mandela", "Pablo Escobar"],
  },
  {
    pregunta:
      "¿Cuál es la organización internacional dedicada a promover la paz y la cooperación mundial?",
    imagen: "imagenes/paz3.jpg",
    respuesta: "UNESCO",
    distractores: ["NASA", "FIFA"],
  },
  {
    pregunta:
      "¿En qué año se firmó el Tratado de Versalles para poner fin a la Primera Guerra Mundial?",
    imagen: "imagenes/paz4.jpg",
    respuesta: "1919",
    distractores: ["1945", "1939"],
  },
  {
    pregunta:
      "¿Quién ganó el Premio Nobel de la Paz en 2021 por su trabajo en la lucha contra el hambre?",
    imagen: "imagenes/paz5.jpg",
    respuesta: "David Beasley",
    distractores: ["Greta Thunberg", "António Gutuierrez"],
  },
  {
    pregunta: "¿En qué país se encuentra la Ciudad de la Paz, sede de la ONU?",
    imagen: "imagenes/paz6.jpg",
    respuesta: "Nueva York",
    distractores: ["Ginebra", "Viena"],
  },
  {
    pregunta:
      "¿Cuál de los siguientes no es uno de los Cinco Permanentes del Consejo de Seguridad de la ONU?",
    imagen: "imagenes/paz7.jpg",
    respuesta: "Alemania",
    distractores: ["Rusia", "Francia"],
  },
  {
    pregunta: "¿Quién escribió el libro 'La Paz Perpetua'?",
    imagen: "imagenes/paz8.jpg",
    respuesta: "Immanuel Kant",
    distractores: ["Karl Marx", "Sigmund Freud"],
  },
  {
    pregunta:
      "¿En qué año se fundó el Comité Internacional de la Cruz Roja (CICR)?",
    imagen: "imagenes/paz9.jpg",
    respuesta: "1863",
    distractores: ["1945", "1919"],
  },
  {
    pregunta:
      "¿Cuál es el nombre de la organización fundada por Malala Yousafzai para promover la educación de las niñas?",
    imagen: "imagenes/paz4.jpg",
    respuesta: "Fundación Malala",
    distractores: ["UNICEF", "Plan Internacional"],
  },
];
