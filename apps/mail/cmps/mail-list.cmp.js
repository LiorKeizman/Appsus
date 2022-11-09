import mailPreview from "./mail-preview.cmp.js"

export default{
    props:['mails'],
    template:`
    <section class="mail-list">
    <ul>
        <li v-for ="mail in mails" :key="mail.id">
            <mail-preview @click="showDetails(mail)" :mail="mail"/>
            <button @click="remove(mail.id)">x</button>
        </li>
    </ul>
   </section>
    `,
    methods:{
        showDetails(mail){
            this.$router.push('/email/' + mail.id)
        },
        remove(mailId) {
            // console.log('mail.id',mailId)
            this.$emit('remove', mailId)
        },

    },
    components:{
        mailPreview,
    }
}