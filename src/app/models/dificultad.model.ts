export class Dificultad{
    id: number;
    descripcion: string = '';

    constructor(id: number, descripcion: string) {
        this.descripcion = descripcion;
        this.id = id;
    }
}