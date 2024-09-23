// MENU PERFIL USUARIO
document
  .querySelector(".chat-sidebar-perfil-boton")
  .addEventListener("click", function (e) {
    e.preventDefault();
    this.parentElement.classList.toggle("active");
  });

document.addEventListener("click", function (e) {
  if (!e.target.matches(".chat-sidebar-perfil, .chat-sidebar-perfil *")) {
    document.querySelector(".chat-sidebar-perfil").classList.remove("active");
  }
});

// CHAT CONVERSACIONES
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

document.querySelectorAll(".conversacion-form-input").forEach(function (item) {
  item.addEventListener("input", function () {
    this.rows = this.value.split("\n").length;
  });
});

document.querySelectorAll("[data-conversacion]").forEach(function (item) {
  item.addEventListener("click", function (e) {
    e.preventDefault();
    document.querySelectorAll(".conversacion").forEach(function (i) {
      i.classList.remove("active");
    });
    document.querySelector(this.dataset.conversacion).classList.add("active");
  });
});

document.querySelectorAll(".conversacion-back").forEach(function (item) {
  item.addEventListener("click", function (e) {
    e.preventDefault();
    this.closest(".conversacion").classList.remove("active");
    document.querySelector(".conversacion-default").classList.add("active");
  });
});

// ADJUNTOS
document
  .querySelector(".conversacion-form-button")
  .addEventListener("click", function (e) {
    e.preventDefault();
    this.classList.toggle("active");
  });

document.addEventListener("click", function (e) {
  if (
    !e.target.matches(".conversacion-form-button, .conversacion-form-button *")
  ) {
    document
      .querySelector(".conversacion-form-button")
      .classList.remove("active");
  }
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
