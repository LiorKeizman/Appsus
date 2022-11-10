export default {
    props:['notes'],
    template: `
    <section class="note-filter">
        <input
        @input="filter"
        v-model="filterBy.name"
        type="text" 
        placeholder="Search" />
        <input
        @input="filter"
        v-model="filterBy.type"
        type="text" 
        placeholder="Search" />

    </section>
    
    
    `,
    data(){
        return{
            filterBy:{
                txt:'',
                type:'',
            }
        }
    },
    methods:{
        filter(){
            this.$emit('filtered',this.filterBy)
        }
    },
    computed:{
       
    }
}