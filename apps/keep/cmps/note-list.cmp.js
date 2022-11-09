import notePreview from "./note-preview.cmp.js"

export default{
    props:['notes'],
    template:`
    <section class="note-list">
    <ul>
        <li v-for ="note in notes" :key="note.id">
            <note-preview :note="note"/>
        </li>
    </ul>
   </section>
    `,
    methods:{
        showDetails(note){
            // console.log(this.$router);
            this.$router.push('/keep/' + note.id)
            // this.$emit('selected',note)
        }

    },
    components:{
        notePreview,
    }
}