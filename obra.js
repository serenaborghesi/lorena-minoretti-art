document.addEventListener("DOMContentLoaded", () => {
  const contenedor = document.getElementById("contenedor-obras");

  if (!contenedor) {
    console.error("No se encontró el contenedor de obras");
    return;
  }

  fetch("obras.json")
    .then((response) => response.json())
    .then((obras) => {
      contenedor.innerHTML = "";
      obras.forEach((obra) => {
        const obraDiv = document.createElement("div");
        obraDiv.classList.add("obra");

        obraDiv.innerHTML = `
          <img src="${obra.imagen}" alt="${obra.nombre}" />
          <h3>${obra.nombre}</h3>
          <p>${obra.precio}</p>
          <a href="detalle.html?id=${obra.id}">Ver más</a>
        `;
        contenedor.appendChild(obraDiv);
      });
    })
    .catch((error) => {
      console.error("Error al cargar las obras:", error);
      contenedor.innerHTML = "<p>Error al cargar las obras.</p>";
    });
});
