Vue.component('padre', {
    template: //html
    `
        <div class="p-5 bg-dark text-white">
            <h2>Componente Padre: {{numeroPadre}}</h2>
            <button class="btn btn-danger" @click="numeroPadre++">+</button>
            <h2>El nombre de su hijo es: {{nombreHijo}}</h2>
            <hijo :numero="numeroPadre" :nombrePadre="nombrePadreMadre" @nombreHijo="nombreHijo = $event"></hijo>  
        </div>
    `,
    data(){
        return{
            numeroPadre: 0, 
            nombreHijo:'',
            nombrePadreMadre: "Carmen Elisa Rojas",
        }
    }
});