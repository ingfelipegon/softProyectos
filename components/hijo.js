Vue.component('hijo', {
    template: //html
    `
        <div>
            <button @click="aumentar">+</button>
            <button @click="disminuir(2)">-</button>
            <button @click="obtenerCursos">Obtener Cursos</button>
            <h1>Numero {{ numero }}</h1>
            <ul v-for="item of cursos">
                <li>{{item.nombre}}</li>
            </ul>
        </div>
    `,
    computed: {
        ...Vuex.mapState(['numero', 'cursos'])
    },
    methods: {
        ...Vuex.mapMutations(['aumentar', 'disminuir']),
        ...Vuex.mapActions(['obtenerCursos'])
    },
});