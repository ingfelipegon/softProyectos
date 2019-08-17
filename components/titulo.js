Vue.component('titulo', {
    template: //html
    `
        <div class="p-5 bg-dark text-white">
            <h1>Numero {{ numero }}</h1>
            <hijo></hijo>  
        </div>
    `,
    computed: {
        ...Vuex.mapState(['numero'])
    },
});