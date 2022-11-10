import { mailService } from "../services/mail-service.js"
import { eventBus, showErrorMsg, showSuccessMsg } from "../../../services/event-bus.service.js"
import mailFilter from "../cmps/mail-filter.cmp.js"
import mailSidebar from "../cmps/mail-sidebar.cmp.js"


// id: 'e101',
// subject: 'Miss you!',
// body: 'Would love to catch up sometimes',
// isRead: false,
// sentAt: 1551133930594,
// from: 'momo@momo.com',
// to: 'user@appsus.com'

export default {
    template: `
        <div class="flex ">
            
            <mailSidebar/>
            <div clsss="flex flex-column deteails-conteiner"> 
                <mailFilter/>
                
                <section class="mail-edit">
                    <!-- <h1>New Messege</h1> -->
                    <form @submit.prevent="save" class="mail-form flex">
                        <!-- <input ref="subject" type="text" v-model="mailToEdit.subject" placeholder="subject"> -->
                        
                        <!-- <input  type="mail" v-model="mailToEdit.to" placeholder="send to:" class="email-subject"> -->
                        <!-- <textarea  v-model="mailToEdit.subject" placeholder="subject" > </textarea> -->
                        <textarea ref="subject" v-model="mailToEdit.to" placeholder="send to:"  class="email-subject"> </textarea>
                        
                        <textarea  v-model="mailToEdit.subject" placeholder="subject:"  class="email-subject"> </textarea>
                        <textarea  v-model="mailToEdit.body" class="email-body"> </textarea>
                        <!-- <input  type="long-text" v-model="mailToEdit.body" placeholder="enter text"> -->
                        <button class="email-send">Send</button>
                    </form>
                </section>
            </div>
        </div>
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
    },
    components: {

        mailFilter,
        mailSidebar,
    }
    
}