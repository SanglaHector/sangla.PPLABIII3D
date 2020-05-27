import {AnuncioMascota}  from './anuncioMascota.js'
import {getXML} from './serverComunication.js'
import {getFetch} from './serverComunication.js'
import {ErrorServer} from './errorServer.js'

let botonTraer = document.getElementById("btnBuscar");
let botonAgregar = document.getElementById("registrar");
let botonEliminar = document.getElementById("btnEliminar");
let botonModificar = document.getElementById("btnModificar");
let form = document.forms[0];

botonTraer.addEventListener('click',AnuncioMascota.traerPropiedades);
botonEliminar.addEventListener('click',AnuncioMascota.eliminarPropiedad);
botonModificar.addEventListener('click',AnuncioMascota.modificarPropiedad);
//botonAgregar.addEventListener('click',Propiedad.altaPropiedad);

form.onsubmit = (e)=>{
    e.preventDefault();
    AnuncioMascota.altaPropiedad();
};

/*// en caso de necesitas mas validaciones


function validarCampos()
{
    let titulo = document.getElementById('txtTitulo').value;
    let desc = document.getElementById('txtDescripcion');
    let precio = document.getElementById('txtPrecio');
    let wc = document.getElementById('numWc');
    let est = document.getElementById('numEstacionamiento');
    let dorm = document.getElementById('numDormitorio');

    if(titulo.value == "" || desc.value == "" )
    {
        return false;
    }else
    {
        return true;
    }
};*/