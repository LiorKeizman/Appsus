// import bookDesc from "../cmps/book-desc.cmp.js"
// import Review from "../cmps/book-review.cmp.js"
// import reviewList from "../cmps/review-list.cmp.js"
// import { bookService } from "../services/book-service.js";
// import { eventBus } from "../services/event-bus.service.js";
import { mailService } from "../services/mail-service.js";




// id: 'e101',
// subject: 'Miss you!',
// body: 'Would love to catch up sometimes',
// isRead: false,
// sentAt: 1551133930594,
// from: 'momo@momo.com',
// to: 'user@appsus.com'

//todos
//mail.sent AT - on right side of mail.from
//main-nav - spam/delete/unread/move to/labels
// we can add photo to mail.from (to show who sent it)

export default {
    template: `
    <nav class="main-nav"> actions to add</nav>
    <section v-if="mail">
        <h1>{{mail.subject}}</h1>
        <main class="mail-body">
            <div className="mail-head">
                <p>{{mail.from}}</p>
                <!-- <p>{{mail.sentAt}}</p>  -->
                <p>{{date}}</p> 
            </div>
            <p>{{mail.body}}</p>
            <p class="mail-actions">
                <button>replay</button>
                <button>forward</button>
            </p>

        </main>
    </section>
    
    `,
    data(){
        return{
            mail:null,
            
        }
    },
    created(){
        const id = this.$route.params.id
        mailService.get(id)
        .then(mail =>
            this.mail = mail)
    },
    computed:{
        date(){
         let time = this.mail.sentAt
         const date = new Date(time)
         console.log(date)
         let formated=  date.getHours() + ":" + date.getMinutes() + ", "+ date.toDateString();
         console.log(formated);
         return formated
        }
    }
}