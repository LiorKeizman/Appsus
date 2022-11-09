import { noteService } from "../services/note-service.js"
import noteList from "../cmps/note-list.cmp.js"



// id: "n101",
// type: "note-txt",
// isPinned: true,
// info: { txt: "Fullstack Me Baby!" }
export default {
    template: `
    <h2>HELLO</h2>
    <section v-if="note" >
        <!-- <section v-for="n in note"> -->
            <h2>{{note.id}}</h2>
            <note-list :notes="note"/>
        <!-- </section> -->
            <!-- <form @submit.prevent="save">
                <div v-for="(cmp, idx) in survey.cmps">
                    <component :is="cmp.type"  
                        :info="cmp.info" 
                        @setVal="setAns($event, idx)">
                    </component>
                </div>
                <button>Save</button>
            </form>
            <pre>{{answers}}</pre> -->
        </section>
    `,
    data() {
        return {
            
            note:null,
            answers: [],
        }
    },
    created() {

        console.log('Created!')
        noteService.query()
        .then(note => {
            this.note = note
            this.answers = new Array(this.note.length)
        })


    },
    methods: {
        setAns(ans, idx) {
            console.log('Setting the answer: ', ans, 'idx:', idx)
            // this.answers[idx] = ans
            this.answers.splice(idx, 1, ans)

        },
        save() {
            console.log('Saving..')
        }
    },
    components: {
        noteService,
        noteList,
    }
}

