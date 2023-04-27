export interface IRuta {
    path: string;
    text: string;
    icon?: string;
    child: IRuta[];
}
export const ROUTES_CONFIG: IRuta[] = [
    { text: 'Indicadores', path: 'indicadores', icon: '', child: [] },
    {
        text: 'Operaciones', path: 'operaciones', icon: '', child: [
            { text: 'Parametrización', path: 'parametrizacion', child: [] },
            { text: 'Vectorización', path: 'vectorizacion', child: [] },
            { text: 'Cronograma', path: 'cronograma', child: [] },
            { text: 'Medición', path: 'medicion', child: [] },
        ]
    },
    { text: 'administración', path: 'administracion', icon: '', child: [] },
    { text: 'Centro de soluciones', path: 'centro-de-soluciones', icon: '', child: [] },
    { text: 'Venta y configuración', path: 'venta-y-configuracion', icon: '', child: [] }
]