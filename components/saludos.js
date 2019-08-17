Vue.component('saludo', {
    template: //html
    `
        <div>
            <h1>{{saludoMsg}}</h1>
            <h1>SALUDOS DE PRUEBAS MESNAJERIA</h1>
        </div>
    `,
    data(){
        return {
            saludoMsg: 'Hola desde VUE'
        }
    }
});