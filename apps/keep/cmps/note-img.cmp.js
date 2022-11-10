



export default{
    props:['note'],
    template:`
    <section>
        <h1>{{note.info.title}}</h1>
        <img src="../../../assets/img/03.jpg" alt="" />
    </section>
    
    `,
    created(){
        console.log(this.note.info.url)
    },
    data(){
        this.note.info.url = '../../../assets/img/03.jpg'
    }
}
