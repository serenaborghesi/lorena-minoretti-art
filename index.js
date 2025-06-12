document.addEventListener("DOMContentLoaded", () => {
  const contenedor = document.getElementById("contenedor-obras");

  const obras = [
    {
      title: "Libro de Búhos y Lechuzas",
      year: 2023,
      technique: "Libro",
      price: 50000,
      description: "Libro de búhos, lechuzas, flores y plumas. Hecho con acuarela y tinta",
      images: ["obra1a.jpg", "obra1b.jpg"]
    },
    {
      title: "Horizonte Infinito",
      year: 2022,
      technique: "Acrílico",
      price: 18000,
      description: "La calma de un paisaje abstracto.",
      images: ["obra2a.jpg", "obra2b.jpg"]
    },
    {
      title: "TerrÁq",
      year: 2024,
      technique: "Juego de Mesa",
      price: 90000,
      description: "Juego de mesa de estrategia sobre especies y medioambiente. Con sus ilustraciones dibujadas íntegramente a mano, su diseño y textos sobre cuestiones ambientales del planeta, este juego de mesa ha obtenido la Mención al Sello Buen Diseño argentino.",
      images: ["obra3a.jpg", "obra3b.jpg"]
    },
    {
      title: "Zorro",
      year: 2024,
      technique: "Dibujo zorro de TerrÁq",
      price: 90000,
      description: "Pintura zorro hecho con lapiz acuarelable.",
      images: ["obra4a.jpg", "obra4b.jpg"]
    },
    {
      title: "Leon",
      year: 2024,
      technique: "Dibujo Leon.",
      price: 90000,
      description: "Dibujo Leon.",
      images: ["obra5a.jpg", "obra5b.jpg"]
    },
    {
      title: "Tortuga",
      year: 2024,
      technique: "Juego de Mesa",
      price: 90000,
      description: "Pintura zorro con acrílico.",
      images: ["obra5a.jpg", "obra5b.jpg"]
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
