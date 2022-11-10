import { noteService } from '../services/note-service.js'
import noteActions from '../cmps/note-actions.cmp.js'


export default {
  template: `

        <section class="note-txt">
              <p>{{note.info.txt}}</p>
              <note-actions @delete="deleted(note.id)" @edit="display(note.id)"/>
        </section>
        `,
  props: ['note'],
  data() {
    return {
      val: '',
      isShown:false,
    }
  },
  methods: {
    reportVal() {
      this.$emit('setVal', this.val)
    },
    addNewNote(){
      noteService.save(this.note)
    },
    display(noteId){
      console.log(noteId);
      this.$emit('open',noteId)
    },
    deleted(noteId){
      this.$emit('delete',noteId)
    },
  },
  computed: {
    listId() {
      return 'list' + this.cmpId
    },
    
  },
  components:{
    noteService,
    noteActions
  }
}
