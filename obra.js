document.addEventListener("DOMContentLoaded", () => {
  const mainContainer = document.getElementById("main-container");

  // Traer la obra guardada en localStorage
  const obra = JSON.parse(localStorage.getItem("obraSeleccionada"));

  // Validación por si no se encuentra
  if (!obra) {
    mainContainer.innerHTML = "<p>No se encontró la obra seleccionada.</p>";
    return;
  }

  // Generar carrusel si hay imágenes
  const carrusel = `
    <div id="carouselObra" class="carousel slide mb-4" data-bs-ride="carousel">
      <div class="carousel-inner">
        ${obra.images
          .map((img, index) => {
            return `
              <div class="carousel-item ${index === 0 ? "active" : ""}">
                <img src="imagenes/${img}" class="d-block w-100" style="max-height: 500px; object-fit: contain;" alt="Imagen ${index + 1}" />
              </div>
            `;
          })
          .join("")}
      </div>
      <button class="carousel-control-prev" type="button" data-bs-target="#carouselObra" data-bs-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Anterior</span>
      </button>
      <button class="carousel-control-next" type="button" data-bs-target="#carouselObra" data-bs-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Siguiente</span>
      </button>
    </div>
  `;

  // Armar el HTML completo
  mainContainer.innerHTML = `
    ${carrusel}
    <h2>${obra.title}</h2>
    <p><strong>Año:</strong> ${obra.year}</p>
    <p><strong>Técnica:</strong> ${obra.technique}</p>
    <p><strong>Precio:</strong> $${obra.price}</p>
    <p>${obra.description}</p>
  `;
});
