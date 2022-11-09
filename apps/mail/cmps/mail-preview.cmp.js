export default{
    props:['mail'],
    template:`
    <section class="mail-preview">
        <h1>{{mail.id}} - {{mail.subject}} </h1>
    </section>
    `,

    data(){
        return{
            // id: 'e101',
            // subject: 'Miss you!',
            // body: 'Would love to catch up sometimes',
            // isRead: false,
            // sentAt: 1551133930594,
            // from: 'momo@momo.com',
            // to: 'user@appsus.com'
        }
    },
    computed:{
        price(){
            const num = 
            new Intl.NumberFormat(this.book.language,{
                style:'currency',
                currency:this.book.listPrice.currencyCode,
                maximumFractionDigits: 0
            }).format(this.book.listPrice.amount)
            return num
        }
    },
}