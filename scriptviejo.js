 <script>
    fetch("obras.json")
      .then(response => response.json())
      .then(obras => {
        const container = document.getElementById("obras-container");
        obras.forEach(obra => {
          const col = document.createElement("div");
          col.className = "col-sm-12 col-md-6 col-lg-4 d-flex";

          const div = document.createElement("div");
          div.className = "obra-card";

          const titulo = document.createElement("h3");
          titulo.textContent = obra.title;

          const imagen = document.createElement("img");
          imagen.src = "img/" + obra.image;
          imagen.alt = obra.title;

          const descripcion = document.createElement("p");
          descripcion.textContent = obra.description;

          const boton = document.createElement("button");
          boton.textContent = "Ver más";
          boton.classList.add("volver-btn");
          boton.addEventListener("click", () => {
            localStorage.setItem("obraSeleccionada", JSON.stringify(obra));
            window.location.href = "detalle.html";
          });

          div.appendChild(titulo);
          div.appendChild(imagen);
          div.appendChild(descripcion);
          div.appendChild(boton);
          col.appendChild(div);
          container.appendChild(col);
        });
      });
  </script>