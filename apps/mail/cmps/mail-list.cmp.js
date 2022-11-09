import mailPreview from "./mail-preview.cmp.js"

export default{
    props:['mails'],
    template:`
    <section class="mail-list">
    <ul>
        <li v-for ="mail in mails" :key="mail.id">
            <mail-preview @click="showDetails(mail)" :mail="mail"/>
        </li>
    </ul>
   </section>
    `,
    methods:{
        showDetails(mail){
            // console.log(this.$router);
            this.$router.push('/email/' + mail.id)
            // this.$emit('selected',mail)
        }

    },
    components:{
        mailPreview,
    }
}