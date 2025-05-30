const params = new URLSearchParams(window.location.search);
const obraTitle = params.get("obra");

function fetchObraDetails() {
  fetch("obras.json")
    .then(response => {
      if (!response.ok) {
        throw new Error("No se pudo cargar el archivo JSON");
      }
      return response.json();
    })
    .then(obras => {
      const obra = obras.find(o => o.title === obraTitle);
      if (obra) {
        renderObraDetail(obra);
      } else {
        mostrarError("Obra no encontrada");
      }
    })
    .catch(error => {
      console.error(error);
      mostrarError("Error al cargar los datos");
    });
}

function renderObraDetail(obra) {
  const container = document.getElementById("main-container");
  container.innerHTML = `
    <div class="obra-detalle">
      <h2>${obra.title}</h2>
      <img src="img/${obra.image}" width="400" alt="${obra.title}" />
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
