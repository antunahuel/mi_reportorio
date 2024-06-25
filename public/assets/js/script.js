

let formMusica = document.getElementById("mi_musica");
formMusica.addEventListener("submit", async (event) => {
    try {
        event.preventDefault();
        await addSong();
    } catch (error) {
        console.log(error);
    }
});

const addSong = async () => {
    try {
        const myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        const raw = JSON.stringify({
            "titulo": titulo.value,
            "artista": artista.value,
            "tono": tono.value
        });

        const requestOptions = {
            method: "POST",
            headers: myHeaders,
            body: raw,
            redirect: "follow"
        };

        let response = await fetch("/api/canciones", requestOptions);
        if (response.status == 200) {
            let data = await response.json();
            alert(data.message);
            location.reload();
        } else {
            alert(data.message);
        }
    } catch (error) {
        console.log(error);
    }
};

const getCanciones = async () => {
    try {
        let response = await fetch("/api/canciones");
        let data = await response.json();
        let { canciones } = data;
        loadTable(canciones);
    } catch (error) {
        alert("Error al intentar acceder a registro de canciones");
    }
}

getCanciones();

const loadTable = async (dataSongs) => {
    try {
        let tableSong = document.getElementById("table");
        let load = "";
        dataSongs.forEach(cancion => {
            load += `
            <tr>
                <th scope="row">${cancion.id}</th>
                <td><input class="titulo-${cancion.id} titulo" type="text" value="${cancion.titulo}"></td>
                <td><input class="artista-${cancion.id} artista" type="text" value="${cancion.artista}"></td>
                 <td><input class="tono-${cancion.id} tono" type="text" value="${cancion.tono}"></td>
                <td>
                    <div class="p-3">
                        <button class="btn btn-danger" onclick="eliminar('${cancion.id}')">Eliminar</button>
                        <button class="btn btn-warning" onclick="actualizar('${cancion.id}')">Actualizar</button>
                    </div>
                </td>
            </tr>
            `;
        });

        tableSong.innerHTML = load;

    } catch (error) {
        console.log(error);
    }
};


const eliminar = async (id) => {
    try {
        if (confirm(`Esta seguro(a), de eliminar la canción con id ${id}`)) {
            let response = await fetch(`/api/canciones/${id}`, {
                method: "DELETE"
            });

            let data = await response.json();
            alert(data.message);
            location.reload();
        }
    } catch (error) {
        console.log(error);
    }

};


const actualizar = async (id) => {
    try {

        let titulo = document.querySelector(`.titulo-${id}`);
        let artista = document.querySelector(`.artista-${id}`);
        let tono = document.querySelector(`.tono-${id}`);

        
      
        const myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        const raw = JSON.stringify({
            id,
            "titulo": titulo.value,
            "artista": artista.value,
            "tono": tono.value
        });

        const requestOptions = {
            method: "PUT",
            headers: myHeaders,
            body: raw,
            redirect: "follow"
        };

        let response = await fetch("/api/canciones", requestOptions);

        let data = await response.json();

        if (response.status==200){
            alert(data.message),
            location.reload();
        }else{
            alert("Error al intentar realizar cambios en resitro de canción con id" + id);
        }
    } catch (error) {
        console.log(error);
    }
}