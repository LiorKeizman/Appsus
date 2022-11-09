export default{
    props:['mail'],
    template:`
    <section class="mail-preview">
        <h1>{{mail.id}} - {{mail.subject}}</h1>
    </section>
    `,

    data(){
        return{

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