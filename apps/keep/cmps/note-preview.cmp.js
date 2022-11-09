import textBox from '../cmps/text-box.cmp.js'
import todos from '../cmps/todos.js'


export default{
    props:['note'],
    template:`
    <section class="note-preview">
    <h2>{{note.id}}</h2>
            <form @submit.prevent="save">
                <div>
                    {{note.type}}
                    <component :is="note.type"  
                        :info="note.info" 
                        @setVal="setAns($event, idx)">
                    </component>
                </div>
                <button>Save</button>
            </form>
            <pre>{{answers}}</pre>
        </section>
    `,

    data(){
        return{
            answers:[],
            // id: "n101",
            // type: "note-txt",
            // isPinned: true,
            // info: { txt: "Fullstack Me Baby!" }
        }
    },
    methods:{
        setAns(ans, idx) {
            console.log('Setting the answer: ', ans, 'idx:', idx)
            // this.answers[idx] = ans
            this.answers.splice(idx, 1, ans)

        },
    },
    computed:{
        price(){
            const num = 
            new Intl.NumberFormat(this.book.language,{
                style:'currency',
                currency:this.book.listPrice.currencyCode,
                maximumFractionDigits: 0
            }).format(this.book.listPrice.amount)
            return num
        }
    },
    components: {
        // selectBox,
        textBox,
        todos,
        // linearScale,
        // photoTuner
    }
}