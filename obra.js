document.addEventListener("DOMContentLoaded", () => {
  const grilla = document.getElementById("grilla-obras");
  if (!grilla) return;

  grilla.innerHTML = "";

  const obras = [
    {
      id: 1,
      nombre: "Abstracción Verde",
      precio: "$8.000",
      descripcion: "Obra en acuarela inspirada en la naturaleza.",
      tamano: "30x40 cm",
      imagenes: [
        "img/obra1a.jpg",
        "img/obra1b.jpg"
      ]
    },
    {
      id: 2,
      nombre: "Cielo Turquesa",
      precio: "$10.000",
      descripcion: "Tonos celestes y turquesas en una composición aérea.",
      tamano: "40x50 cm",
      imagenes: [
        "img/obra2a.jpg",
        "img/obra2b.jpg"
      ]
    },
    {
      id: 3,
      nombre: "Horizonte Acuático",
      precio: "$9.500",
      descripcion: "Evocación del mar con acuarelas suaves.",
      tamano: "35x45 cm",
      imagenes: [
        "img/obra3a.jpg",
        "img/obra3b.jpg"
      ]
    }
  ];

  obras.forEach((obra) => {
    grilla.innerHTML += `
      <div class="obra-card">
        <img src="${obra.imagenes[0]}" alt="${obra.nombre}" />
        <div class="obra-info">
          <h3>${obra.nombre}</h3>
          <p class="precio">${obra.precio}</p>
          <a class="ver-mas" href="obra.html?id=${obra.id}">Ver más</a>
        </div>
      </div>
    `;
  });
});
