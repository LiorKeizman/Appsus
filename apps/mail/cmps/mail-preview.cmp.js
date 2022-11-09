// {
//     id: _makeId(),
//     subject: 'Lov you!',
//     body: 'Hello there How are You',
//     isRead: false,
//     sentAt: 1551133930594,
//     from: 'YOYOYYOo@momo.com',
//     to: 'user@appsus.com'
// },

export default{
    props:['mail'],
    template:`
    <section class="mail-preview ">
        <h1>{{mail.subject}} </h1>
        <h1>{{mail.body}}</h1>
        
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