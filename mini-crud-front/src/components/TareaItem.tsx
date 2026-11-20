import type { Tarea } from '../types/tareas'

interface TareaItemProps {
    tarea: Tarea
    onAlternar:(tarea:Tarea)=>void
    onEliminar:(tarea:Tarea)=>void
}

export function TareaItem({tarea,onAlternar,onEliminar}:TareaItemProps) {
    const idCasilla= `tarea-${tarea.id}`
    return(
    <li className={tarea.completada?'tarea tarea--completada':'tarea'}>
        <input
        id={idCasilla}
        type="checkbox"
        checked={tarea.completada}
        onChange={() => onAlternar(tarea)}
        />
        <label htmlFor={idCasilla} className="tarea__titulo">
            {tarea.titulo}
        </label>
        <button type="button" 
        className="boton boton--icono" 
        aria-label={`Eliminar "${tarea.titulo}"`}
        onClick={() => onEliminar(tarea)}
        >
            X
        </button>
        </li>
       

    )
}