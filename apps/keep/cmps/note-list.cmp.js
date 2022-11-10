// import notePreview from "./note-preview.cmp.js"
import textBox from '../cmps/text-box.cmp.js'
import todos from '../cmps/todos.js'
import noteImg from '../cmps/note-img.cmp.js'
import noteActions from '../cmps/note-actions.cmp.js'
import { noteService } from '../services/note-service.js'

export default {
    props: ['notes'],
    template: `
  <!-- <div class="color-pallet">
    <div @click="" class="color-red"></div>
    <div class="color-black"></div>
    <div class="color-yellow"></div>
  </div> -->


    <section class="note-list">
        <label for="create">
            <input name="create" v-model="newNote.info.txt"  type="text" />
            <button @click="add(newNote)">click add</button>
        </label>
  <ul>
     <li class="keep" v-for ="note in notes" :key="note.id">
       <form :class="chooseColor" class="card" >
            <div>
                    <component @open="showOrUnshow(note)"  @delete="remove(note.id)" :is="note.type"  
                    :note="note" 
                    @setVal="setAns($event, idx)">
                    </component>
            </div>
            <!-- <div class="color-pallet">
                <div @click.prevent.stop="changeBgcRed(note)" class="color-red"></div>
                <div @click.prevent.stop="changeBgcBlack(note)"  class="color-black"></div>
                <div @click.prevent.stop="changeBgc(note,'yellow')"  class="color-yellow"></div>
            </div> -->
            <div class="color-pallet">
                <div @click.prevent.stop="changeBgc(note,'red')" class="color-red"></div>
                <div @click.prevent.stop="changeBgc(note,'black')" class="color-black"></div>
                <div @click.prevent.stop="changeBgc(note,'yellow')" class="color-yellow"></div>
            </div>
            <section v-if="note.isEdit" class="edit-note ">
                 <input name="create" v-model="note.info.txt"  type="text" />
                 <button @click.prevent.stop="addNewNote(note)">click add</button>
            </section>
            <!-- <section v-if="isShown" class="edit-note ">
                <input name="create" v-model="note.info.txt"  type="text" />
                <button @click.prevent.stop="addNewNote">click add</button>
                </section> -->
      </form>
       
     </li>
 </ul>
   </section>
    `,
    data() {
        return {
            isShown: false,
            newNote: {
                // id: noteService.makeId(),
                type: "text-box",
                isEdit: false,
                isColor: false,
                color: 'green',
                isPinned: true,
                info: {
                    txt: ''
                }
            }
        }
    },
    methods: {
        showDetails(note) {
            this.$router.push('/keep/' + note.id)
        },
        addNewNote(note) {
            noteService.save(this.newNote)
                .then(note => this.note = note)
            this.newNote = {
                type: "text-box",
                isEdit: false,
                isPinned: true,
                info: {
                    txt: ''
                }
            }
            note.isEdit = !note.isEdit
        },
        add(newNote) {
            console.log(newNote);
            this.$emit('add', newNote)
            this.newNote = {
                type: "text-box",
                isPinned: true,
                info: {
                    txt: ''
                }
            }
        },
        remove(noteId) {
            console.log(noteId)
            this.$emit('remove', noteId)
        },
        // showOrUnshow() {
        //     this.isShown = !this.isShown
        // },
        showOrUnshow(note) {
            console.log(note);
            note.isEdit = !note.isEdit
        },
          changeBgc(note, newColor) {
             console.log(note)
             console.log(newColor)
             note.color = newColor
         },
         chooseColor() {
             const note = this.note
             console.log(note)
            return { red: note.color === 'red', black: note.color === 'black', yellow: note.color === 'yellow' }
        }
        // changeBgcRed(note){
        //    console.log(note);

        //  },
    },
    computed: {
        // changeBgcRed(note){
        //     console.log(note);

        // },
    changeBgcBlack(note){

         },
        // changeBgc(note, newColor) {
        //     console.log(note)
        //     console.log(newColor)
        //     note.color = newColor
        // },
        // chooseColor() {
        //     // console.log(note)
        //     // const note = this.note
        //     // return { red: note.color === 'red', black: note.color === 'black', yellow: note.color === 'yellow' }
        // }
    },





    components: {
        // notePreview,
        noteImg,
        noteService,
        textBox,
        todos,
        noteActions
    }
}