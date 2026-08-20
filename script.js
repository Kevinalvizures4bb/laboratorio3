/* ==========================================
   MENÚ RESPONSIVE
========================================== */

const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");


if (menuBtn && navLinks) {

    menuBtn.addEventListener("click", function () {

        navLinks.classList.toggle("active");

    });


    /* Cerrar menú al seleccionar una página */

    const links = navLinks.querySelectorAll("a");

    links.forEach(function (link) {

        link.addEventListener("click", function () {

            navLinks.classList.remove("active");

        });

    });

}


/* ==========================================
   FORMULARIO DE REGISTRO
========================================== */

const clientForm = document.getElementById("clientForm");


if (clientForm) {

    clientForm.addEventListener("submit", function (event) {

        event.preventDefault();


        const nombre =
            document.getElementById("nombre").value.trim();

        const edad =
            document.getElementById("edad").value.trim();

        const telefono =
            document.getElementById("telefono").value.trim();

        const correo =
            document.getElementById("correo").value.trim();

        const plan =
            document.getElementById("plan").value;


        if (
            nombre === "" ||
            edad === "" ||
            telefono === "" ||
            correo === "" ||
            plan === ""
        ) {

            alert("Por favor, completa todos los campos.");

            return;

        }


        const miWhatsApp = "50259947467";


        const mensaje =
`NUEVO REGISTRO DE CLIENTE

Nombre: ${nombre}
Edad: ${edad}
Teléfono: ${telefono}
Correo: ${correo}
Plan: ${plan}

Cliente registrado correctamente.`;


        const mensajeCodificado =
            encodeURIComponent(mensaje);


        const url =
            `https://wa.me/${miWhatsApp}?text=${mensajeCodificado}`;


        window.open(url, "_blank");

    });

}


/* ==========================================
   BOTONES ELIMINAR CLIENTE
========================================== */

const deleteButtons =
    document.querySelectorAll(".delete-btn");


deleteButtons.forEach(function (button) {

    button.addEventListener("click", function () {

        const card = button.closest(".client-card");


        if (!card) {
            return;
        }


        const nombre =
            card.querySelector(".client-data h3");


        if (nombre) {

            const confirmar =
                confirm(
                    "¿Deseas eliminar a " +
                    nombre.textContent +
                    "?"
                );


            if (confirmar) {

                card.remove();

            }

        }

    });

});