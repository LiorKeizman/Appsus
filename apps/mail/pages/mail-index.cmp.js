import { mailService } from "../services/mail-service.js"
import mailList from "../cmps/mail-list.cmp.js"
// import mailDetails from "./mail-details.cmp.js"
// import mailFilter from "../cmps/mail-filter.cmp.js"
// import googleList from "./google-list.cmp.js"



// todos
// add nav bar to the left to filter by:
// read/starred//labels//sents//drafts//trash

// add search bar at top of the page to filter by:
//subject//body(txt)//labels(maybe)
export default {
    template: `
    <h1>Hello</h1>
    <router-link to=/email/edit> compose mail</router-link>
    <!-- <a href="#/mail/edit" class="">compose mail</a> -->
    <section class="mail-app main-content flex">
        <aside>
            <ul>
                <li><button></button></li>
                <li><button></button></li>
                <li><button></button></li>
                <li><button></button></li>
                <li><button></button></li>
            </ul>
        </aside>
    <!-- <pre>{{mails}}</pre> -->
    <mail-list 
    v-if="mails" 
    @remove="removeMail"
    :mails="mails"/>
       <!-- <mail-filter @filtered="setFilter" /> -->
       <!-- <mail-details @closeDetail="closeDetail" v-if="selectedMail" :mail="selectedMail"/> -->
   </section>
    
    `,
    data() {
        return {
            mails: null,
            isShown:true,
            isRead:false,
            selectedMail: null,
            filterBy: {},
        }
    },
    created(){
        mailService.query()
        .then(mails => 
            this.mails = mails
        )

    },
    methods: {
        selectMail(mail) {
            this.selectedMail = mail
        },
        setFilter(filterBy) {
            this.filterBy = filterBy
        },
        closeDetail(selectedMail) {
            this.selectedMail = selectedMail
        },
        removeMail(mailId) {
            console.log('mailId:',mailId)
            mailService.remove(mailId)
                .then(() => {
                    const idx = this.mails.findIndex(mail => mail.id === mailId)
                    this.mails.splice(idx, 1)
                })

        },
    },
    computed: {
        mailsToShow() {
            const regex = new RegExp(this.filterBy.name, 'i')
            const filteredMails = this.mails.filter(mail => regex.test(mail.title))
            if (this.filterBy.fromPrice) return filteredMails.filter(mail =>
                mail.listPrice.amount > this.filterBy.fromPrice && mail.listPrice.amount < this.filterBy.toPrice
            )
            return filteredMails
        },
       
      
    },
    components: {
        mailList,
        // mailDetails,
        // mailFilter,
    }
}
