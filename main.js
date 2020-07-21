import { Tarea, ListaDeTareas } from './index.js';


const contenedorTareas = document.querySelector('.todo-list')
const textInput = document.querySelector('.new-todo')
const filtros = document.querySelector('.filters')
const anchorfiltros = document.querySelectorAll('.selected')
const título = document.getElementsByTagName('h1')
const lista = new ListaDeTareas()


console.log(título);


const btnBorrar= document.getElementsByClassName('clear-completed')
console.log(btnBorrar);



const crearlistaHtml = (quehacer) => {

    const htmlListaDeTareas =

        `<li class='${quehacer.completado ? 'completed' : ''}' data-id=" ${quehacer.id} ">
    <div class="view">
        <input class="toggle" type="checkbox" ${quehacer.completado ? 'checked' : ''}>
        <label>${quehacer.tarea}</label>
        <button class="destroy"></button>
    </div>
    <input class="edit" value="Create a TodoMVC template">
</li>`

    const div = document.createElement('div')
    div.innerHTML = htmlListaDeTareas

    contenedorTareas.append(div.firstElementChild)


}


textInput.addEventListener('keyup', (event) => {


    if (event.keyCode === 13 && textInput.value.length > 0) {

        console.log(textInput.value);
        const quehacer = new Tarea(textInput.value)
        lista.nuevaTarea(quehacer)
        crearlistaHtml(quehacer)
        textInput.value = ''
    }
})

contenedorTareas.addEventListener('click', event => {

    let elemento = event.target.localName
    const tareaElemento = event.target.parentElement.parentElement
    console.log('click',tareaElemento);
    const idTarea = tareaElemento.getAttribute('data-id')



    if (elemento.includes('input')) {

        lista.marcarCompletado(idTarea)
        tareaElemento.classList.toggle('completed')
        console.log(lista);

    } else if (elemento.includes('button')) {
        lista.eliminarTarea(idTarea)
        contenedorTareas.removeChild(tareaElemento)
        console.log(lista)

    }

})


btnBorrar[0].addEventListener('click', () => {

    lista.eliminarCompletados()
 
    for ( let i = contenedorTareas.children.length-1 ;  i >= 0;  i--) {

        const elemento =  contenedorTareas.children[i];
        elemento.classList.contains('completed') ? contenedorTareas.removeChild(elemento) : ''
        título[0].innerText = 'Súper!'
        
    }

})


filtros.addEventListener('click',(event) => {

    const filtros = event.target.text
    console.log(filtros);

    if(!filtros)return

    anchorfiltros.forEach((elemento) => elemento.classList.remove('selected'))

    event.target.classList.add('selected')

    for (const elemento of contenedorTareas.children) {
        elemento.classList.remove('hidden')

       const completado = elemento.classList.contains('completed')

       switch (filtros) {
           case  'Pendientes':
                if (completado) {
                    elemento.classList.add('hidden')
                }
               break;
            case 'Completados':
                if (!completado){
                    elemento.classList.add('hidden')
                }
                break
       }
    }

})

/* 
lista.tareas.forEach( tarea => crearlistaHtml(tarea))  */
//Si el forEach regresa un argumento, entonces se puede usar así//

lista.tareas.forEach( crearlistaHtml) 

/* const jefazo=  () => {
    localStorage.removeItem('tarea')
}
 */

/* const jefazo = setTimeout(() => {
    localStorage.removeItem('tarea')
}, 1500);

jefazo() */