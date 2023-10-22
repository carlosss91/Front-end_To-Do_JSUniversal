//MODAL VER+ DASHBOARD
function vermas(){ //para que salte modal ver +
    let myModal = new bootstrap.Modal(document.getElementById('ModalSemestre'), {});
    myModal.show();
  }

//MODAL ELIMINAR DASHBOARD
  function eliminar(id_semestre) { //eliminar semestre
    if (confirm("¿Quieres eliminar el semestre?")) {
          
          document.getElementById('semestre-'+id_semestre).remove();
    } else {
          alert("No se ha eliminado el semestre");
      }
  }

  //INTERFAZ 2

// Obtén el elemento 'select' por su ID
var selectYear = document.getElementById('year');

// Obtiene el año actual
var currentYear = new Date().getFullYear();

// Agrega los años actuales y los próximos 10 años al selector
for (var i = currentYear; i <= currentYear + 10; i++) {
    var option = document.createElement('option');
    option.text = i;
    option.value = i;
    selectYear.add(option);
}

$(document).ready(function() {
    // Inicializa los popovers
    $('#background-color').popover({
      content: $('#color-picker-popover').html(),
      html: true,
      placement: 'bottom',
    });
  
    // Maneja la selección de color
    $(document).on('click', '.color-box', function() {
      var selectedColor = $(this).css('background-color');
      $('#background-color').css('background-color', selectedColor);
      $('#background-color').popover('hide');
    });
  });

//BARRA DE DIFICULTAD

document.addEventListener('DOMContentLoaded', function() {
  const currentValue = document.getElementById('current-value');
  const dificultad = document.getElementById('dificultad');

  currentValue.textContent = dificultad.value; // Inicializamos el valor actual con 5

  dificultad.addEventListener('input', function() {
    currentValue.textContent = dificultad.value;
  });
});
$(document).ready(function () {
  $('#crearSemestre').on('click', function () {
      var nombreSemestre = $('#nombreSemestre').val();
      var año = $('#año').val();
      var fechaInicio = $('#fechaInicio').val();
      var fechaFin = $('#fechaFin').val();
      var descripcion = $('#descripcion').val();
      var color = $('#color').val();
      var opinion = $('#opinion').val();
      var dificultad = $('#dificultad').val();

      var nuevaTarjeta = `
          <div class="card">
              <div class="card-body">
                  <h5 class="card-title">${nombreSemestre}</h5>
                  <p class="card-text">Año: ${año}</p>
                  <p class="card-text">Descripción: ${descripcion}</p>
                  <p class="card-text">Opinión: ${opinion}</p>
                  <p class="card-text">Dificultad: ${dificultad}/10</p>
              </div>
          </div>
      `;

      // Agregar la tarjeta al contenedor deseado (reemplaza 'contenedorTarjetas' con el selector correcto)
      $('.contenedorTarjetas').append(nuevaTarjeta);

      $('#exampleModal').modal('hide');
      $('#semestre-form')[0].reset();
  });
});




