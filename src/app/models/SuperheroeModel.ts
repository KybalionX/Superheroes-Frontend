export interface SuperheroeModel {
    id?: number,
    nombre?: string,
    fuerza?: number,
    inteligencia?: number,
    velocidad?: number,
    valentia?: number,
    habilidad?: number,
    grupo?: {
        id?: number,
        nombre?: string,
    }
}