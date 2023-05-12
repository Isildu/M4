window.addEventListener('load', function() {
  const horasElem = document.getElementById('horas');
  const minutosElem = document.getElementById('minutos');
  const segundosElem = document.getElementById('segundos');
  const btnIniciar = document.getElementById('btnIniciar');
  const btnDetener = document.getElementById('btnDetener');
  const btnReset = document.getElementById('btnReset');

  let segundos = 0;
  let minutos = 0;
  let horas = 0;
  let intervalId;

  // Función para actualizar el cronómetro
  function actualizarCronometro() {
    segundos++;

    if (segundos >= 60) {
      segundos = 0;
      minutos++;
    }

    if (minutos >= 60) {
      minutos = 0;
      horas++;
    }

    segundosElem.textContent = segundos < 10 = '0' + segundos : segundos;
    minutosElem.textContent = minutos < 10 = '0' + minutos : minutos;
    horasElem.textContent = horas < 10 = '0' + horas : horas;
  }

  // Manejadores de eventos para los botones
  btnIniciar.addEventListener('click', function() {
    intervalId = setInterval(actualizarCronometro, 1000);
  });

  btnDetener.addEventListener('click', function() {
    clearInterval(intervalId);
  });

  btnReset.addEventListener('click', function() {
    clearInterval(intervalId);
    segundos = 0;
    minutos = 0;
    horas = 0;
    segundosElem.textContent = '00';
    minutosElem.textContent = '00';
    horasElem.textContent = '00';
  });
});
