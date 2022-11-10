import { noteService } from "../services/note-service.js"
import noteList from "../cmps/note-list.cmp.js"
import userMsg from "../cmps/user-msg.cmp.js"
import { eventBus } from "../../../services/event-bus.service.js"
// import noteFilter from "../cmps/note-filter.cmp.js"


// id: "n101",
// type: "note-txt",
// isPinned: true,
// info: { txt: "Fullstack Me Baby!" }
export default {
    template: `
        <section v-if="note" >
          <note-list @add="addNewNote"  @remove="removeNote" :notes="note"/>
          <user-msg/>
        </section>
    `,
    data() {
        return {
            note: null,
            text: '',
            answers: [],
            filterBy: {},
        }
    },
    created() {
        console.log('Created!')
        noteService.query()
        .then(note => {
            console.log(note)
            this.note = note
            console.log(this.note)
                this.answers = new Array(this.note.length)
            })


    },
    methods: {
        setFilter(filterBy) {
            this.filterBy = filterBy
        },
        setAns(ans, idx) {
            console.log('Setting the answer: ', ans, 'idx:', idx)
            // this.answers[idx] = ans
            this.answers.splice(idx, 1, ans)
        },
        save() {
            console.log('Saving..')
        },
        removeNote(noteId) {
            noteService.remove(noteId)
                .then(() => {
                    const idx = this.note.findIndex(note => note.id === noteId)
                    this.note.splice(idx, 1)
                    // showSuccessMsg(`Car ${noteId} deleted`)
                    const msg ={
                        txt:`Book ${this.book.title} was reviewed`,
                        type:'success',
                        // link:`/book/${book.id}`
                    }
                    eventBus.emit('user-msg' , msg)
                })
                .catch(err => {
                    console.log('OOPS', err)
                    showErrorMsg('Cannot remove note')
                })
        },
        addNewNote(newNote){
            noteService.save(newNote)
            .then(note => this.note.push(note))
        }

    },

    // computed: {
    //     notesToShow() {
    //         console.log(this.note);
    //         console.log('HEllo');
    //         const regex = new RegExp(this.filterBy.txt, 'i')
    //         const filteredBooks = this.note.filter(note => regex.test(note.txt))
    //         return filteredBooks
    // },
    components: {
        noteService,
        noteList,
        userMsg,
        // noteFilter,
    }
}
//  }
