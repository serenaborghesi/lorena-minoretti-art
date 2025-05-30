// Obtener el parámetro 'obra' de la URL
const params = new URLSearchParams(window.location.search);
const obraName = decodeURIComponent(params.get("obra") || "");

// Función para normalizar texto (quita tildes y pasa a minúsculas)
function normalize(text) {
  return text.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();
}

// Cargar los datos desde el JSON
fetch("obras.json")
  .then(response => response.json())
  .then(obras => {
    // Buscar la obra que coincida
    const obra = obras.find(o => normalize(o.title) === normalize(obraName));

    const container = document.getElementById("detalle-obra");

    if (obra) {
      container.innerHTML = `
        <h1>${obra.title}</h1>
        <img src="img/${obra.image}" alt="${obra.title}" />
        <p><strong>Año:</strong> ${obra.year}</p>
        <p><strong>Técnica:</strong> ${obra.technique}</p>
        <p><strong>Precio:</strong> USD ${obra.price}</p>
        <p>${obra.description}</p>
        <a href="index.html">Volver al inicio</a>
      `;
    } else {
      container.innerHTML = `
        <h2>Obra no encontrada</h2>
        <a href="index.html">Volver al inicio</a>
      `;
    }
  })
  .catch(error => {
    console.error("Error al cargar el archivo JSON:", error);
    document.getElementById("detalle-obra").innerHTML = `
      <h2>Error al cargar los datos</h2>
      <a href="index.html">Volver al inicio</a>
    `;
  });
