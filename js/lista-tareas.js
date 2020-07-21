

// Es un arreglo que contiene todas las tareas//

export class ListaDeTareas {

    constructor(){

     /*    this.tareas = [] */
     this.cargarLocalStorage()
    }

    nuevaTarea(quehacer){
        this.tareas.push(quehacer)
        this.guardarLocalStorage()

    }

    marcarCompletado(id){
       
        for (const tarea of this.tareas) {

            if (tarea.id == id) {
                tarea.completado = !tarea.completado
                this.guardarLocalStorage()
                break
            }
        }
    }

    eliminarTarea(id){
        this.tareas = this.tareas.filter(tarea => tarea.id != id)
        this.guardarLocalStorage()

    }


    eliminarCompletados(){
        this.tareas = this.tareas.filter(tarea => !tarea.completado)
        this.guardarLocalStorage()
   
    }

  
    guardarLocalStorage(){
        localStorage.setItem('tarea', JSON.stringify(this.tareas))
    }


    cargarLocalStorage(){

        localStorage.getItem('tarea') ? this.tareas = JSON.parse(localStorage.getItem('tarea')) :
         this.tareas = []

    }
    
    

}

