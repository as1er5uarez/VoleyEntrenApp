import { Categoria } from './categoria.model';
import { Edad } from './edad.model';
import { Dificultad } from './dificultad.model';
import { Objetivo } from './objetivo.model';

export class Ejercicio{
    id: number;
    nombre: string = '';
    descripcion: string = '';
    imagen: string = '';
    intensidad: string = '';
    duracion: string = '';
    categoria: Categoria;
    edad: Edad;
    dificultad: Dificultad;
    objetivo: Objetivo;

    constructor(id: number, nombre: string, descripcion: string, imagen: string, intensidad: string, duracion: string, categoria: Categoria, edad: Edad, dificultad: Dificultad, objetivo: Objetivo) {
        this.id = id;
        this.nombre = nombre;
        this.descripcion = descripcion;
        this.imagen = imagen;
        this.intensidad = intensidad;
        this.duracion = duracion;
        this.categoria = categoria;
        this.edad = edad;
        this.dificultad = dificultad;
        this.objetivo = objetivo;
    }
}
