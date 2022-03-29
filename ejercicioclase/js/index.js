var usuarios = [];

    const datos = function(nombre, rut) {
        let nombre = document.querySelector("#Nombre").value;
        let rut = document.querySelector("#Rut").value;

        let usuario = {
            nombre: nombre,
            rut: rut
        };

        usuarios.push(usuario);

        let cuerpo = document.querySelector("#cuerpoTabla");

        cuerpo.innerHTML = "<tr>"

    };