document.addEventListener("DOMContentLoaded", () => {
  const mainContainer = document.querySelector(".main-container");

  if (!mainContainer) {
    console.error("No se encontró el contenedor con clase 'main-container'");
    return;
  }

  const params = new URLSearchParams(window.location.search);
  const id = params.get("id");

  if (!id) {
    mainContainer.innerHTML = "<p>Obra no encontrada.</p>";
    return;
  }

  fetch("obras.json")
    .then((response) => response.json())
    .then((obras) => {
      const obra = obras.find((o) => o.id == id);
      if (!obra) {
        mainContainer.innerHTML = "<p>Obra no encontrada.</p>";
        return;
      }

      // Armamos el slider de imágenes
      const carrusel = `<img src="${obra.imagen}" alt="${obra.nombre}" style="width: 100%; max-width: 600px; margin-bottom: 1rem;" />`;


      mainContainer.innerHTML = `
        <div class="detalle-obra">
          <h2>${obra.nombre}</h2>
          ${carrusel}
          <p><strong>Año:</strong> ${obra.anio}</p>
          <p><strong>Técnica:</strong> ${obra.tecnica}</p>
          <p><strong>Tamaño:</strong> ${obra.tamano}</p>
          <p><strong>Precio:</strong> $${obra.precio}</p>
          <p>${obra.descripcion}</p>
          <a href="https://wa.me/549XXXXXXXXXX" target="_blank" class="boton-wpp">Consultar por WhatsApp</a>
        </div>
      `;
    })
    .catch((error) => {
      console.error("Error al cargar las obras:", error);
      mainContainer.innerHTML = "<p>Error al cargar la obra.</p>";
    });
});
