/* Permitir al usuario ingresar su nombre a través
de un input.
En otro input permitirle ingresar 1 de 3 colores
que elijan.
Luego renderizar en el navegador un h1 que
muestre el nombre que ingresó el usuario en el
color que haya seleccionado.
*/

new Vue({
    el: '#app',
    data: {
        nombreIngresado: '',
        colorIngresado: '',
        mostrarboton: true,
        personas: [
            { nombre: 'Juli', estado: 'Dando clases' },
            { nombre: 'Geor', estado: 'Unknown' },
            { nombre: 'Sofi', estado: 'Dando clases' },
            { nombre: 'Nahu', estado: 'Unknown' }
        ]
    },
    methods: {
        alternar() {
            this.mostrarboton = !this.mostrarboton;
        }
    }
})

Vue.component("app-usuario", {
    data: 
        function() {
            return {
                personasComponent: [
                    { nombre: 'Juli', estado: 'Dando clases' },
                    { nombre: 'Geor', estado: 'Unknown' },
                    { nombre: 'Sofi', estado: 'Dando clases' },
                    { nombre: 'Nahu', estado: 'Unknown' },
                ]
            }
        }
    ,
    template: `<ul>
    <li v-for="persona in personasComponent">{{ persona.nombre}} - {{ persona.estado }}</li>
    </ul>
    
    `
}
)

new Vue({

    el: "#app-usuario"
})