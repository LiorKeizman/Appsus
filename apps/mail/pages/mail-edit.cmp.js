import { mailService } from "../services/mail-service.js"
import { eventBus, showErrorMsg, showSuccessMsg } from "../../../services/event-bus.service.js"


// id: 'e101',
// subject: 'Miss you!',
// body: 'Would love to catch up sometimes',
// isRead: false,
// sentAt: 1551133930594,
// from: 'momo@momo.com',
// to: 'user@appsus.com'

export default {
    template: `
        <section class="mail-edit">
            <h1>Mail Edit</h1>
            <form @submit.prevent="save">
                <input ref="subject" type="text" v-model="mailToEdit.subject">
                <input  type="text" v-model="mailToEdit.body">
                <input  type="mail" v-model="mailToEdit.to">
                <button>Save</button>
            </form>
        </section>
    `,
    data() {
        return { 
            mailToEdit: mailService.getEmptyMail(),
        }
    },
    created(){
        const mailId = this.$route.params.id
        if(mailId){
            this.mailToEdit = mailService.get(mailId)
                .then(mail => this.mailToEdit = mail)
        } 
    },
    mounted(){
        this.$refs.subject.focus()
    },
    methods:{
        save(){
            mailService.save(this.mailToEdit)
                .then(mail => {
                    showSuccessMsg(`Mail saved (Mail id: ${mail.id})`)
                    this.$router.push('/email')
                })
                .catch(err => {
                    console.log('OOps:', err)
                    showErrorMsg(`Cannot save mail`)
                })
        }
    }
}