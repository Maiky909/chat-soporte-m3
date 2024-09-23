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
