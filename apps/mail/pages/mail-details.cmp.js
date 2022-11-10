
// import { eventBus } from "../services/event-bus.service.js";
import { mailService } from "../services/mail-service.js";
import mailFilter from "../cmps/mail-filter.cmp.js"
import mailSidebar from "../cmps/mail-sidebar.cmp.js"


export default {

    template: `
    
    <div class="flex ">
            
            <mailSidebar/>
            <div clsss="flex flex-column "> 
                <mailFilter class="inside-search"/>

            <section v-if="mail">
                <h1 class="details-subject">{{mail.subject}}</h1>
                <div class="flex">
                    <input class="details-img" type="image" id="image" alt="Login" src="https://lh3.googleusercontent.com/a-/ACNPEu-9hksrEHtZfp-8jOm3w0GJCIlceybewcJnH76c=s80-p">
                    
                    <div className="mail-head flex">
                            <p class="details-from">{{mail.from}}</p>
                            <p class="details-date">{{date}}</p> 
                    </div>
                </div>
                <p class="details-body">{{mail.body}}</p>
            </section>
        </div>
    </div>
    
    `,
    data() {
        return {
            mail: null,

        }
    },
    created() {
        const id = this.$route.params.id
        mailService.get(id)
            .then(mail =>
                this.mail = mail)
    },
    computed: {
        date() {
            let time = this.mail.sentAt
            const date = new Date(time)
            console.log(date)
            let formated = date.getHours() + ":" + date.getMinutes() + ", " + date.toDateString();
            return formated
        },
        imgUrl() {
            return this.mail.imgUrl
        }
    },
    components: {

        mailFilter,
        mailSidebar,
    }
}