//import {modificarFetch} from './serverComunication.js'
//import {getXML} from './serverComunication.js'
//import {altaFetch} from './serverComunication.js'
//import {alta} from './serverComunication.js'
//import {bajaFetch} from './serverComunication.js'
import {getFetch} from './serverComunication.js'
import {Anuncio}  from './anuncio.js'
import {baja} from './serverComunication.js'
import {altaXML} from './serverComunication.js'
import {modificarXML} from './serverComunication.js'
import {tratarDatos,armarTabla,armarPropiedadDesdeForm,limpiarTabla,porDefault} from './funciones.js';
import {formatearParaServer,formatearParaForm} from './formateo.js';
export class AnuncioMascota extends Anuncio
{
    id;
    titulo;
    transaccion;
    descripcion;
    precio;
    raza;
    fecha;
    elegir;
    
    constructor(id,titulo,transaccion,descripcion,precio,raza,fecha,elegir)
    {
       // this.super = Anuncio;
        super(id,titulo,transaccion,descripcion,precio);
        this.id = id;
        this.titulo = titulo;
        this.transaccion =  transaccion;
        this.descripcion = descripcion;
        this.precio = precio;
        this.raza = raza;
        this.fecha = fecha;
        this.elegir = elegir;
    }
    
    static async traerPropiedades()
    {
        limpiarTabla();
        let tabla = document.getElementById('tabla');
        let imagen = document.createElement('img');
        imagen.setAttribute('src','../img/480.gif');
        tabla.append(imagen);
        const traer = 'http://localhost:3000/traer';
        let datos = await getFetch(traer);
        imagen.remove();
        let propiedades =  tratarDatos(datos);
        if(propiedades != null)
        {
            armarTabla(propiedades);
        }
        porDefault();
    }
    static async altaPropiedad()
    {
        const alta = 'http://localhost:3000/alta';
        let propiedad = armarPropiedadDesdeForm();
        propiedad = formatearParaServer(propiedad);
        propiedad.id = 0;
        
        let tabla = document.getElementById('tabla');
        let imagen = document.createElement('img');
        imagen.setAttribute('src','../img/480.gif');
        tabla.append(imagen);
        limpiarTabla();

        let response = await altaXML(alta,propiedad);


        imagen.remove();
        if(response.message == "Alta Exitosa")
        {
            //avisar que salio bien
            AnuncioMascota.traerPropiedades();
            return true;
        }else
        {
            // avisar el error
            return false;
        }
    }
    static async eliminarPropiedad()
    {
        const bajaU = 'http://localhost:3000/baja';
        let propiedad = armarPropiedadDesdeForm();
        let tabla = document.getElementById('tabla');
        let imagen = document.createElement('img');
        imagen.setAttribute('src','../img/480.gif');
        tabla.append(imagen);
        limpiarTabla();

       // let response = await bajaFetch(baja,propiedad);
        let response = await baja(bajaU,propiedad);

        imagen.remove();
        if(response.message == "Baja Exitosa")
        {
            AnuncioMascota.traerPropiedades();
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
        imagen.setAttribute('src','../img/480.gif');
        tabla.append(imagen);
        limpiarTabla();

      //  let response = await modificarFetch(modif,propiedad);
        let response = await modificarXML(modif,propiedad);

        imagen.remove();
        if(response.message == "Modificacion Exitosa")
        {
            AnuncioMascota.traerPropiedades();
            return true;
        }else
        {
            return false;
        }
    }
}