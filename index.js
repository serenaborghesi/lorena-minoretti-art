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
      title: "Sueños Suspendidos",
      year: 2024,
      technique: "Mixta",
      price: 32000,
      description: "Obra de técnica mixta inspirada en lo onírico.",
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
