export interface IUsuario {
    id: number,
    nombre: string,
    usuario: string,
    enable: boolean,
    username: string
}

export interface ITipoUsuario {
    id: number,
    descripcion: string
}

export interface ITipoEquipo {
    id: number,
    nombre: string
}

export interface IEquipo {
    id: number,
    marca: string,
    tipoEquipo: ITipoEquipo
}

export interface IObservacion {
    id: number,
    descripcion: string,
    mejora: string
}

export interface IItemRecomendacion {
    id: number,
    recomendacion: string
} 

export interface ICheklistItem {
    id: number,
    nombre: string,
    estado: boolean,
    recomendacionChecklist: IItemRecomendacion[]
}

export interface IRevision {
    id: number,
    fechaFinal: string,
    equipo: IEquipo,
    observacion: IObservacion,
    chekList: ICheklistItem[]
}

export interface IEstado {
    id: number,
    nombre: string
}
export interface IDescription {
    id: number,
    descripcion: string
}

export interface IBitacora {
    id: number,
    fechaEntrada: string,
    usuario: IUsuario,
    revision:IRevision,
    estado:IEstado,
    descrition: IDescription
}
