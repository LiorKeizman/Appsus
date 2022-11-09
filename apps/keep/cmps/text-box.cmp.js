import { noteService } from '../services/note-service.js'



export default {
  template: `
        <section>
            <!-- <datalist :id="listId">
                <option v-for="opt in info.opts" :value="opt" />
            </datalist> -->
            <label>
              <h2>{{note.info.txt}}</h2>
              <button @click.stop.prevent="isShown = !isShown">edit</button>
                <section v-if="isShown" class="edit-note">
                <input name="create" v-model="note.info.txt"  type="text" />
                <button @click.prevent.stop="addNewNote">click add</button>
                </section>
            </label>  
        </section>
        `,
  props: ['note'],
  data() {
    return {
      cmpId : parseInt(Math.random() * 1000),
      val: '',
      isShown:true,
    }
  },
  methods: {
    reportVal() {
      this.$emit('setVal', this.val)
    },
    // openToEdit(){
    //   console.log('clicked')
    //     this.isOpen = !this.isOpen
    // },
    addNewNote(){
      // ev.preventDefault()
      console.log(this.note)
      noteService.save(this.note)
    }
  },
  computed: {
    listId() {
      return 'list' + this.cmpId
    }
  },
  components:{
    noteService
  }
}
