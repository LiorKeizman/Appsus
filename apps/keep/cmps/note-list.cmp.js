// import notePreview from "./note-preview.cmp.js"
import textBox from '../cmps/text-box.cmp.js'
import todos from '../cmps/todos.js'
import { noteService } from '../services/note-service.js'

export default {
    props: ['notes'],
    template: `
    <section class="note-list">
        <p>{{newNote}}</p>
    <label for="create">
        <input name="create" v-model="newNote.info.txt"  type="text" />
        <button @click="addNewNote">click add</button>
    </label>
    <ul>
        <li v-for ="note in notes" :key="note.id">
            <form >
                <div>
                    <!-- {{note.type}} -->
                    <component :is="note.type"  
                    :note="note" 
                    @setVal="setAns($event, idx)">
                </component>
            </div>
            <!-- <button>Save</button> -->
        </form>
        <button @click="remove(note.id)">Delete</button>
        <!-- <button @click="addNewNote(note.id)">Edit</button> -->
        </li>
    </ul>
   </section>
    `,
    data() {
        return {
            newNote: {
                // id: noteService.makeId(),
                type: "text-box",
                isPinned: true,
                info: {
                    txt: ''
                }
            }
        }
    },
    methods: {
        showDetails(note) {
            // console.log(this.$router);
            this.$router.push('/keep/' + note.id)
            // this.$emit('selected',note)
        },
        addNewNote() {
            noteService.save(this.newNote)
                // .then(note => {
                //     showSuccessMsg(`Car saved (Car id: ${note.id})`)
                //     // this.$router.push('/car')
                // })
                // .catch(err => {
                //     console.log('OOps:', err)
                //     showErrorMsg(`Cannot save car`)
                // })
             this.newNote = {
                type: "text-box",
                isPinned: true,
                info: {
                    txt: ''
                }
            }
        },
        remove(noteId){
            console.log(noteId)
            this.$emit('remove',noteId)
        }
    },
        components: {
            // notePreview,
            noteService,
            textBox,
            todos,
        }
    }