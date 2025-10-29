export interface Auditorio {
    id_auditorio: number;
    nombre: string;
    capacidad: number;
    direccion: string;
    imagen: string | null;
    estado: string;
    created_at: string;
    updated_at: string;
}

export interface CrearAuditorioRespuesta { 
    datos: Auditorio;
    id_creada: number;
}