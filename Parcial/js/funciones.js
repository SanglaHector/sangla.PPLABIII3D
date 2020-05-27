import {Anuncio}  from './anuncio.js'
import{AnuncioMascota} from './anuncioMascota.js'
import {transaccionDeServer,precioDeServer} from './formateo.js';

//********************** TRATAR DATOS ****************************************************//
function tratarDatos(datos)
{
    if(datos != null)
    {
        let propiedades = [];
       datos.data.forEach(element => {
           let propiedad = new AnuncioMascota(element.id,element.titulo, element.transaccion,element.descripcion,element.precio,element.raza,element.fecha,element.elegir);
           propiedades.push(propiedad);
       });
       return propiedades;
    }
    return null;
}

//************************************* HTML ****************************************//
function armarTabla(objetos)
{
    let body = document.getElementById("body");
    objetos.forEach(element => {
        let tr = document.createElement('tr');
        tr.addEventListener('dblclick', cargarElemento)
        body.appendChild(tr);
        tr.appendChild(fnNewTD(element.id));
        tr.appendChild(fnNewTD(element.titulo));
        tr.appendChild(fnNewTD(element.transaccion));
        tr.appendChild(fnNewTD(element.descripcion));
        tr.appendChild(fnNewTD(element.precio));
        tr.appendChild(fnNewTD(element.raza));
        tr.appendChild(fnNewTD(element.fecha));
        tr.appendChild(fnNewTD(element.elegir));
    });
}
function cargarElemento(obj)
{
    let propiedad = obj.srcElement.parentNode;//me traigo el elemento seleccionado
    let start = propiedad.firstElementChild;//el primer objetos de ese hijo
    let aux = start;
    let arr = Array('txtId','txtTitulo','transaccion','txtDescripcion','txtPrecio','txtRaza','date','elegir');

    arr.forEach(element => {
        if(element == 'transaccion')
        {
            //let nodos = document.getElementsByName('transaccion');
          //  transaccionDeServer(aux.firstChild.nodeValue);//ver
            aux = aux.nextElementSibling;
        }else if(element == 'txtPrecio')
        {
            let nodo =  getElement(element);
            nodo.value = precioDeServer(aux.firstChild.nodeValue);
            aux = aux.nextElementSibling;
        }else if (element == 'date')//aca
        {
            aux = aux.nextElementSibling;
        }else if(element == 'elegir')//aca
        {
            aux = aux.nextElementSibling;
        }
        else{
            let nodo =  getElement(element);
            nodo.value = aux.firstChild.nodeValue;
            aux = aux.nextElementSibling;
        }
                                            //poner validaciones aca para tipo de inputs diferentes
    });
    /*console.log(start);//este es el td
    console.log(start.firstChild);//este el objeto dentro del td
    console.log(start.firstChild.nodeValue);*///el valor dento del objeto del td
}
function getElement(elemeto)
{
    return document.getElementById(elemeto);
}
function fnNewTD(varData) 
{
    let td = document.createElement('td');
    let text = document.createTextNode(varData);
    td.appendChild(text);

    return td;
}
function armarPropiedadDesdeForm()
{
    let id = getElement("txtId").value;
    let titulo = getElement("txtTitulo").value;
    let transaccion = document.getElementsByName('transaccion');
    let descripcion = getElement("txtDescripcion").value;
    let precio = getElement("txtPrecio").value;
    let raza = getElement("txtRaza").value;
    let date = getElement("date").value;
    let elegir = getElement("elegir").value;
    return new AnuncioMascota(id,titulo,transaccion,descripcion,precio,raza,date,elegir);
}

function limpiarTabla()
{
    let trs = document.querySelectorAll('tr');
    let body = getElement("body");

    for (let i = 1; i < trs.length; i++) {
        let item = trs[i];
        body.removeChild(item); 
      }
}
function porDefault()
{
    getElement('txtId').value = 0;
    getElement('txtTitulo').value = "";
    getElement('txtDescripcion').value = "";
    getElement('txtPrecio').value = 0;
    getElement('txtRaza').value = "";
   /* getElement('date').value = "";
    getElement('elegir').value = 0;*/
}
export {tratarDatos,armarTabla,armarPropiedadDesdeForm,limpiarTabla,porDefault}

