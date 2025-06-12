document.addEventListener("DOMContentLoaded", () => {
  const contenedor = document.getElementById("contenedor-obras");

  const obras = [
    {
      title: "Reflejos del Alma",
      year: 2023,
      technique: "Óleo sobre lienzo",
      price: 25000,
      description: "Una mirada introspectiva al color y la emoción.",
      images: ["obra1a.jpg", "obra1b.jpg"]
    },
    {
      title: "Horizonte Infinito",
      year: 2022,
      technique: "Acrílico",
      price: 18000,
      description: "La calma de un paisaje abstracto.",
      images: ["obra2a.jpg"]
    },
    {
      title: "TerrÁq",
      year: 2024,
      technique: "Juego de Mesa",
      price: 90000,
      description: "Juego de mesa de estrategia sobre especies y medioambiente. Con sus ilustraciones dibujadas íntegramente a mano, su diseño y textos sobre cuestiones ambientales del planeta, este juego de mesa ha obtenido la Mención al Sello Buen Diseño argentino.",
      images: ["obra3a.jpg", "obra3b.jpg"]
    }
  ];

  // Generar las tarjetas
  contenedor.innerHTML = obras.map((obra, index) => `
    <div class="obra-card" onclick="verDetalle(${index})">
      <img src="img/${obra.images[0]}" alt="${obra.title}" />
      <h3>${obra.title}</h3>
      <p>${obra.technique}</p>
      <p><strong>$${obra.price}</strong></p>
    </div>
  `).join("");

  // Guardar la obra y redirigir
  window.verDetalle = (index) => {
    localStorage.setItem("obraSeleccionada", JSON.stringify(obras[index]));
    window.location.href = "detalle.html";
  };
});
