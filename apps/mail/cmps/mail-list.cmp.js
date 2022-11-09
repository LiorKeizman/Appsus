import mailPreview from "./mail-preview.cmp.js"

export default{
    props:['mails'],
    template:`
    <section class="mail-list">
    <ul>
        <li v-for ="mail in mails" :key="mail.id">
            <mail-preview @click="showDetails(mail)" :mail="mail" />
            <button @click="changeRead(mail)">x</button>
        </li>
    </ul>
   </section>
    `,
    methods:{
        showDetails(mail){
            // console.log(this.$router);
            this.$router.push('/mail/' + mail.id)
            // this.$emit('selected',mail)
        },
        changeRead(mail){
            console.log(mail)
            mail.isRead = !isRead
        }

    },
    components:{
        mailPreview,
    }
}