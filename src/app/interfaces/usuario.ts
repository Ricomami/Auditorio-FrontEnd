export interface Usuario {
    id_usuario: number;
    nombre_usuario: string;
    ['contraseña']: string;
    rol: string;
    imagen_usuario: string;
    estado: string;
    created_at: string;
    updated_at: string;
}
