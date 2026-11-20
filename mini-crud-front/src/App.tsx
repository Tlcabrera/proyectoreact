import { useState } from 'react'
import { Encabezado } from './components/Encabezado'
import { ListaTareas } from './components/ListaTareas'
import { tareasIniciales } from './data/tareasIniciales'
import type { Tarea } from './types/tareas'

export default function App() {
  // Estado: la lista de tareas. Empieza con los datos de ejemplo.
  const [tareas, setTareas] = useState<Tarea[]>(tareasIniciales)

  // Valor derivado: se calcula en cada render, no se guarda
  const pendientes = tareas.filter((t) => !t.completada).length

  function alternar(tarea: Tarea) {
    // Lista NUEVA donde solo cambia la tarea tocada
    setTareas((actuales) =>
      actuales.map((t) => (t.id === tarea.id ? { ...t, completada: !t.completada } : t)),
    )
  }

  function eliminar(tarea: Tarea) {
    if (window.confirm(`¿Eliminar "${tarea.titulo}"?`)) {
      // Lista NUEVA sin la tarea eliminada
      setTareas((actuales) => actuales.filter((t) => t.id !== tarea.id))
    }
  }

  return (
    <main className="pagina">
      <section className="tarjeta">
        <Encabezado pendientes={pendientes} total={tareas.length} />
        <ListaTareas tareas={tareas} onAlternar={alternar} onEliminar={eliminar} />
      </section>
    </main>
  )
}