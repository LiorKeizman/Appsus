import mailPreview from "./mail-preview.cmp.js"

export default{
    props:['mails'],
    template:`
    <section class="mail-list">
    <ul class="table-body">
        <li v-for ="mail in mails" :key="mail.id" >
            <mail-preview @click="showDetails(mail)" :mail="mail"/>

            <input @click="remove(mail.id)" type="image" src="apps/mail/imgs/delete.png"
                        class="button font-size-plus style">
            <!-- <button @click="remove(mail.id)">x</button> -->
        </li>
    </ul>
   </section>
    `,
    methods:{
        showDetails(mail){
            mail.isRead = true
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