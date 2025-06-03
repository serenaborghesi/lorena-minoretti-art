const params = new URLSearchParams(window.location.search);
const obraTitle = params.get("obra");

async function fetchObraDetails() {
  if (!obraTitle) {
    mostrarError("No se especificó la obra");
    return;
  }

  try {
    const response = await fetch("obras.json");
    if (!response.ok) throw new Error("No se pudo cargar el archivo JSON");

    const obras = await response.json();
    const obra = obras.find(o =>
      o.title && obraTitle &&
      o.title.normalize().toLowerCase() === obraTitle.normalize().toLowerCase()
    );

    if (obra) {
      renderObraDetail(obra);
    } else {
      mostrarError("Obra no encontrada");
    }

  } catch (error) {
    console.error("Error al cargar el archivo JSON:", error);
    mostrarError("Error al cargar los datos");
  }
}

function renderObraDetail(obra) {
  const container = document.getElementById("main-container");

  const sliderHTML = obra.images && obra.images.length > 0
    ? `
      <div id="obraCarousel" class="carousel slide mb-4" data-bs-ride="carousel">
        <div class="carousel-inner">
          ${obra.images.map((img, index) => `
            <div class="carousel-item ${index === 0 ? 'active' : ''}">
              <img src="img/${img}" class="d-block w-100 img-fluid" alt="${obra.title} ${index + 1}">
            </div>
          `).join("")}
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#obraCarousel" data-bs-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Anterior</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#obraCarousel" data-bs-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Siguiente</span>
        </button>
      </div>
    `
    : `
      <img src="img/${obra.image}" class="d-block w-100 img-fluid mb-4" alt="${obra.title}" />
    `;

  container.innerHTML = `
    <div class="obra-detalle container">
      <h2 class="mb-3">${obra.title}</h2>
      ${sliderHTML}
      <p><strong>Descripción:</strong> ${obra.description}</p>
      <p><strong>Técnica:</strong> ${obra.technique}</p>
      <p><strong>Año:</strong> ${obra.year}</p>
      <p><strong>Precio:</strong> $${obra.price}</p>
    </div>
  `;
}

function mostrarError(mensaje) {
  const container = document.getElementById("main-container");
  container.innerHTML = `
    <h2>${mensaje}</h2>
    <a href="index.html" class="volver-btn">Volver al inicio</a>
  `;
}

fetchObraDetails();
