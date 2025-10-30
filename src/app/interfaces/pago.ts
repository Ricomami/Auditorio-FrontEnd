export interface Pago {
    id_pago:  number;
    cliente_id:  number;
    metodo_pago:  string;
    monto:  number;
    fecha_pago:  string | null;
    estado:  string;
    created_at:  string;
    updated_at:  string;
}
