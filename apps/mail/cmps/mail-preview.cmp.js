// {
//     id: _makeId(),
//     subject: 'Lov you!',
//     body: 'Hello there How are You',
//     isRead: false,
//     sentAt: 1551133930594,
//     from: 'YOYOYYOo@momo.com',
//     to: 'user@appsus.com'
// },

export default {
    props: ['mail'],
    template: `
    <section class="mail-preview " >

        <table style="width:100%">
        <tr>
            <td  class="subject-td">{{mail.subject}}</td>
            <td  class="body-td">{{mail.body}}</td>
            <td   class= "date-td">{{formattedDate}}</td> 
        </tr>
        </table>

        <!-- <h1 :class=" mail.isRead ? 'read' : 'not'   ">
            {{mail.subject}} </h1>
        <h1 :class="[
            mail.isRead ? 'read' : 'not',
            ]">{{mail.body}}</h1> -->
        
    </section>
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