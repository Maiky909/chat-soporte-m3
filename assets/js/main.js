// MENU PERFIL USUARIO
// Cuando se hace clic en el botón del perfil de usuario, se alterna la clase 'active' en su elemento padre.
document
  .querySelector(".chat-sidebar-perfil-boton")
  .addEventListener("click", function (e) {
    e.preventDefault(); // Previene el comportamiento predeterminado del botón.
    this.parentElement.classList.toggle("active"); // Alterna la clase 'active' en el padre del botón.
  });

// Detecta clics en cualquier lugar del documento. Si el clic no es dentro del perfil de usuario, se cierra el menú.
document.addEventListener("click", function (e) {
  if (!e.target.matches(".chat-sidebar-perfil, .chat-sidebar-perfil *")) {
    // Si el clic no es en el botón del perfil o dentro de sus hijos, remueve la clase 'active' del perfil.
    document.querySelector(".chat-sidebar-perfil").classList.remove("active");
  }
});

// CHAT CONVERSACIONES
// Muestra u oculta el menú dropdown de cada mensaje de conversación al hacer clic en su botón toggle.
document
  .querySelectorAll(".conversacion-item-dropdown-toggle")
  .forEach(function (item) {
    item.addEventListener("click", function (e) {
      e.preventDefault();
      if (this.parentElement.classList.contains("active")) {
        this.parentElement.classList.remove("active");
      } else {
        document
          .querySelectorAll(".conversacion-item-dropdown")
          .forEach(function (i) {
            i.classList.remove("active");
          });
        this.parentElement.classList.add("active");
      }
    });
  });

// Cierra todos los menús dropdown de los mensajes de conversación al hacer clic en cualquier lugar del documento.
document.addEventListener("click", function (e) {
  if (
    !e.target.matches(
      ".conversacion-item-dropdown, .conversacion-item-dropdown *"
    )
  ) {
    document
      .querySelectorAll(".conversacion-item-dropdown")
      .forEach(function (i) {
        i.classList.remove("active");
      });
  }
});

// Cambia el número de filas de los campos de texto de los formularios de envío de mensajes en función del número de líneas de texto.
document.querySelectorAll(".conversacion-form-input").forEach(function (item) {
  item.addEventListener("input", function () {
    this.rows = this.value.split("\n").length;
  });
});

// Muestra la conversación relacionada con el botón que se hace clic, ocultando las demás conversaciones.
document.querySelectorAll("[data-conversacion]").forEach(function (item) {
  item.addEventListener("click", function (e) {
    e.preventDefault();
    document.querySelectorAll(".conversacion").forEach(function (i) {
      i.classList.remove("active");
    });
    document.querySelector(this.dataset.conversacion).classList.add("active");
  });
});

// Cierra la conversación actual al hacer clic en el botón de regreso.
document.querySelectorAll(".conversacion-back").forEach(function (item) {
  item.addEventListener("click", function (e) {
    e.preventDefault();
    this.closest(".conversacion").classList.remove("active");
    document.querySelector(".conversacion-default").classList.add("active");
  });
});

// ADJUNTOS
// Seleccionamos todos los botones con la clase .conversacion-form-button
const conversacionButtons = document.querySelectorAll(
  ".conversacion-form-button"
);

conversacionButtons.forEach(function (button) {
  // Añadimos el evento click a cada botón
  button.addEventListener("click", function (e) {
    e.preventDefault();
    this.classList.toggle("active");
  });
});

// Evento global para detectar clics fuera de los botones y cerrar el menú
document.addEventListener("click", function (e) {
  conversacionButtons.forEach(function (button) {
    if (!button.contains(e.target)) {
      button.classList.remove("active");
    }
  });
});

// Seleccionamos todos los enlaces de las conversaciones
const chats = document.querySelectorAll(".content-mensajes-list li a");

chats.forEach((chat) => {
  chat.addEventListener("click", function (event) {
    // Evitar la acción predeterminada del enlace
    event.preventDefault();

    // Seleccionamos el nombre del chat y el número de mensajes no leídos
    const nombre = this.querySelector(".content-mensajes-name");
    const numeroMensajes = this.querySelector(".content-mensajes-numero");

    // Si hay un número de mensajes, lo eliminamos y quitamos la negrita del nombre
    if (numeroMensajes) {
      numeroMensajes.style.display = "none"; // Ocultar el número de mensajes
      nombre.classList.remove("bold"); // Quitar la clase que pone el nombre en negrita
    }
  });
});

// Al cargar la página, poner en negrita los nombres que tienen número de mensajes
document.querySelectorAll(".content-mensajes-numero").forEach((num) => {
  const nombre = num.closest("a").querySelector(".content-mensajes-name");
  nombre.classList.add("bold");
});
