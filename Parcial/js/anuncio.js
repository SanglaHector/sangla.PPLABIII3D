import {getXML} from './serverComunication.js'
import {getFetch} from './serverComunication.js'
import {altaFetch} from './serverComunication.js'
import {alta} from './serverComunication.js'
import {bajaFetch} from './serverComunication.js'
import {modificarFetch} from './serverComunication.js'
import {tratarDatos,armarTabla,armarPropiedadDesdeForm,limpiarTabla,porDefault} from './funciones.js';
import {formatearParaServer,formatearParaForm} from './formateo.js';
export class Anuncio
{
    id;
    titulo;
    transaccion;
    descripcion;
    precio;
    
    constructor(id,titulo,transaccion,descripcion,precio)
    {
        this.id  = id;
        this.titulo = titulo;
        this.transaccion = transaccion;
        this.descripcion = descripcion;
        this.precio = precio;
    }
/*
    static async traerPropiedades()
    {
        limpiarTabla();
        let tabla = document.getElementById('tabla');
        let imagen = document.createElement('img');
        imagen.setAttribute('src','../img/84.gif');
        tabla.append(imagen);
        const traer = 'http://localhost:3000/traer';
        let datos = await getFetch(traer);
        imagen.remove();
        //   let datos = await getXML(traer);
        let propiedades =  tratarDatos(datos);
        if(propiedades != null)
        {

            armarTabla(propiedades);
        }
        porDefault();
    }
    static async altaPropiedad()
    {
        const altaU = 'http://localhost:3000/alta';
        let propiedad = armarPropiedadDesdeForm();
        propiedad = formatearParaServer(propiedad);
        propiedad.id = 0;
        
        let tabla = document.getElementById('tabla');
        let imagen = document.createElement('img');
        imagen.setAttribute('src','../img/84.gif');
        tabla.append(imagen);
        limpiarTabla();

        //let response = await altaFetch(alta,propiedad);
        let response = await alta(altaU,propiedad);// ver aca
        
        imagen.remove();
        if(response.message == "Alta Exitosa")
        {
            //avisar que salio bien
            Propiedad.traerPropiedades();
            return true;
        }else
        {
            // avisar el error
            return false;
        }
    }
    static async eliminarPropiedad()
    {
        const baja = 'http://localhost:3000/baja';
        let propiedad = armarPropiedadDesdeForm();
        let tabla = document.getElementById('tabla');
        let imagen = document.createElement('img');
        imagen.setAttribute('src','../img/84.gif');
        tabla.append(imagen);
        limpiarTabla();

        let response = await bajaFetch(baja,propiedad);

        imagen.remove();
        if(response.message == "Baja Exitosa")
        {
            Propiedad.traerPropiedades();
            //avisar que salio bien
            return true;
        }else
        {
            // avisar el error
            return false;
        }
    }
    
    static async modificarPropiedad()
    {
        const modif = 'http://localhost:3000/modificar';
        let propiedad = armarPropiedadDesdeForm();
        propiedad = formatearParaServer(propiedad);
        let tabla = document.getElementById('tabla');
        let imagen = document.createElement('img');
        imagen.setAttribute('src','../img/84.gif');
        tabla.append(imagen);
        limpiarTabla();

        let response = await modificarFetch(modif,propiedad);

        imagen.remove();
        if(response.message == "Modificacion Exitosa")
        {
            Propiedad.traerPropiedades();
            return true;
        }else
        {
            return false;
        }
    }*/
}