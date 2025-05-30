// Obtener el título de la obra desde la URL (?obra=NombreDeLaObra)
const params = new URLSearchParams(window.location.search);
const obraTitle = params.get("obra");

// Función para traer datos del JSON y mostrar detalle de la obra seleccionada
function fetchObraDetails() {
  fetch("obras.json")
    .then(response => response.json())
    .then(obras => {
      const obra = obras.find(o => o.title === obraTitle);
      if (obra) {
        renderObraDetail(obra);
      } else {
        document.getElementById("main-container").innerHTML = "<h2>Obra no encontrada</h2>";
      }
    })
    .catch(error => {
      console.error("Error cargando el JSON:", error);
      document.getElementById("main-container").innerHTML = "<h2>Error al cargar los datos.</h2>";
    });
}

// Función para renderizar los detalles en el HTML
function renderObraDetail(obra) {
  const container = document.getElementById("main-container");
  container.innerHTML = ""; // Limpia contenido previo
  const div = document.createElement("div");
  div.className = "obra-detail";

  div.innerHTML = `
    <h2>${obra.title}</h2>
    <img src="img/${obra.image}" alt="${obra.title}" />
    <p><strong>Descripción:</strong> ${obra.description}</p>
    <p><strong>Año:</strong> ${obra.year || "No disponible"}</p>
    <p><strong>Técnica:</strong> ${obra.technique || "No disponible"}</p>
    <p><strong>Precio:</strong> ${obra.price ? "$" + obra.price : "Consultar"}</p>
  `;
  container.appendChild(div);
}

// Ejecutar la función para mostrar los detalles cuando cargue la página
fetchObraDetails();
