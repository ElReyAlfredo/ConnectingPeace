let cantidadPreguntas = [];
for (var i = 0; i < baseDePreguntas.length; i++) {
  cantidadPreguntas.push(i);
}
let puntaje = 0;
let contador = 0;

cargarPregunta();

function cargarPregunta() {
  indiceAleatorio = Math.floor(Math.random() * cantidadPreguntas.length);
  numeroAleatorio = cantidadPreguntas[indiceAleatorio];
  cantidadPreguntas.splice(indiceAleatorio, 1);

  objetoPregunta = baseDePreguntas[numeroAleatorio];
  totalPreguntas = baseDePreguntas.length;

  opciones = [...objetoPregunta.distractores];
  opciones.push(objetoPregunta.respuesta);
  for (let i = 0; i < 4; i++) {
    opciones.sort(() => Math.random() - 0.5);
  }

  document.getElementById("pregunta").innerHTML = objetoPregunta.pregunta;
  if (objetoPregunta.imagen) {
    document.getElementById("imagen").src = objetoPregunta.imagen;
    document.getElementById("imagen").style.display = "";
  } else {
    document.getElementById("imagen").style.display = "none";
  }

  document.getElementById("opcion-1").innerHTML = opciones[0];
  document.getElementById("opcion-2").innerHTML = opciones[1];
  document.getElementById("opcion-3").innerHTML = opciones[2];

  document.getElementById("totalPreguntas").innerHTML = `Pregunta número: ${
    contador + 1
  }/${baseDePreguntas.length}`;
  contador++;
}

async function seleccionarOpción(index) {
  let validezRespuesta = opciones[index] == objetoPregunta.respuesta;
  if (validezRespuesta) {
    await Swal.fire({
      title: "Respuesta correcta",
      text: "La respuesta ha sido correcta",
      icon: "success",
    });
    puntaje++;
  } else {
    await Swal.fire({
      title: "Respuesta Incorrecta",
      html: `La respuesta correcta es ${objetoPregunta.respuesta}`,
      icon: "error",
    });
  }

  if (cantidadPreguntas.length == 0) {
    await Swal.fire({
      title: "Juego terminado",
      text: `Tu puntaje fue de: ${puntaje}/${baseDePreguntas.length}`,
    });
    for (var i = 0; i < baseDePreguntas.length; i++) {
      cantidadPreguntas.push(i);
    }
    puntaje = 0;
    contador = 0;
  }
  cargarPregunta();
}
