export default {
    props: ['mail'],
    template: `
        <aside>
            <ul class="inside-nav">
                <li> 
                    <router-link to=/email> 
                    <input  type="image" src="https://ssl.gstatic.com/ui/v1/icons/mail/rfr/logo_gmail_lockup_default_1x_r5.png" srcset="https://ssl.gstatic.com/ui/v1/icons/mail/rfr/logo_gmail_lockup_default_1x_rtl_r5.png 1x, https://ssl.gstatic.com/ui/v1/icons/mail/rfr/logo_gmail_lockup_default_2x_rtl_r5.png 2x " 
                    alt="" aria-hidden="true" role="presentation" style="width:109px;height:40px"
                    class="button font-size-plus style logo">
                    </router-link>
                </li>
                <li class="flex align-center compose"> 
                    <router-link to=/email/edit class="flex align-center"> 
                        <div>
                            <input type="image" src="apps/mail/imgs/pencil.png"
                            class="button font-size-plus style ">
                        </div>
                        <div>compose</div>
                    </router-link>
                </li>
                <li class="flex align-center"> 
                    <router-link to=/email class="flex align-center"> 
                        <div>
                            <input type="image" src="apps/mail/imgs/inbox.png"
                            class="button font-size-plus style ">
                        </div>
                        <div>Inbox</div>
                    </router-link>
                </li>
                
                <li class = "flex align-center"> 
                    <div>

                        <input  type="image" src="apps/mail/imgs/star.png"
                        class="button font-size-plus style">
                    </div>
                    <div>Starred</div>
                </li>
                <li class = "flex align-center"> 
                    <!-- <input v-on:click="showSentMails" type="image" src="apps/mail/imgs/sent.png" -->
                    <input  type="image" src="apps/mail/imgs/sent.png"
                    class="button font-size-plus style">
                    <div>Sent</div>
                </li>
                <li class = "flex align-center"> 
                    <input  type="image" src="apps/mail/imgs/danger.png"
                    class="button font-size-plus style">
                    <div>Importent</div>
                </li>
                <li class = "flex align-center"> 
                    <input  type="image" src="apps/mail/imgs/draft.png"
                    class="button font-size-plus style">
                    <div>Drafts</div>
                </li>
            </ul>
            </aside>
    `,

    data() {
        return {

        }
    },
    created() {
    // console.log('this.email',this.mail.sentAt)
    },
    computed: {
        formattedDate() {
            var options = { day: "numeric", month: "short" };
            return new Date(this.mail.sentAt).toLocaleDateString("en-US", options);
        },

    },
    methods: {
        changeClass(mail) {
            console.log('heddddy')
            console.log('mail.isRead', mail.isRead)
            console.log('this.mail.isRead', this.mail.isRead)
            // return {read: this.mail.isRead === true , not: !this.mail.isRead}
        },

    },
}