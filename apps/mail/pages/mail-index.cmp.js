import { mailService } from "../services/mail-service.js"
import mailList from "../cmps/mail-list.cmp.js"
// import mailDetails from "./mail-details.cmp.js"
import mailFilter from "../cmps/mail-filter.cmp.js"
import mailSidebar from "../cmps/mail-sidebar.cmp.js"



// todos
// add nav bar to the left to filter by:
// read/starred//labels//sents//drafts//trash

// add search bar at top of the page to filter by:
//subject//body(txt)//labels(maybe)
export default {
    template: `
    

    <!-- <a href="#/mail/edit" class="">compose mail</a> -->
    <section class="mail-app main-content ">
        <mailSidebar/>
        
  
            <div>
            <mail-filter @filter="filter" class="flex"/>
            <mail-list 
            v-if="mails" 
            @remove="removeMail"
            :mails="mailsToShow"/>
            
            <!-- <mail-filter @filtered="setFilter" /> -->
            <!-- <mail-details @closeDetail="closeDetail" v-if="selectedMail" :mail="selectedMail"/> -->
            
        </div>


   </section>
    
    `,
    data() {
        return {
            mails: null,
            isShown: true,
            isRead: false,
            selectedMail: null,
            filterBy: null,
        }
    },
    created() {
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
            console.log('mailId:', mailId)
            mailService.remove(mailId)
                .then(() => {
                    const idx = this.mails.findIndex(mail => mail.id === mailId)
                    this.mails.splice(idx, 1)
                })

        },
        filter(filterBy) {
            // console.log(filterBy)
            this.filterBy = filterBy
        },
        // showSentMails() {
        //     console.log('this.mails',this.mails.filter(mail => mail.from === "user@appsus.com"))
        //     return this.mails.filter(mail => mail.from === "user@appsus.com")
        // },

    },
    computed: {
        // showSentMails() {

        //     if (this.mails){
        //         console.log('this.mails',this.mails.filter(mail => mail.from === "user@appsus.com"))
        //         return this.mails.filter(mail => mail.from === "user@appsus.com")
        //     }
        // },
        // show inbox
        mailsToShow() {
            if (!this.filterBy) return this.mails.filter(mail => mail.from !== "user@appsus.com")
            const { subject } = this.filterBy
            const regex = new RegExp(subject, 'i')
            return this.mails.filter(({ subject }) => (regex.test(subject)))

        },



    },
    components: {
        mailList,
        // mailDetails,
        mailFilter,
        mailSidebar,
    }
}
