export default {
  template: `
        <section class="note-todo">
            <!-- <datalist :id="listId">
                <option v-for="opt in info.opts" :value="opt" />
            </datalist> -->
            <h1>{{note.id}}</h1>
            <label v-for ="todo in note.info.todos" :key="note.id">
                <input type="checkbox" id="horns" name="note.id">
                <label for="note.id">{{todo.txt}}</label>
            </label>  
        </section>
        `,
  props: ['note'],
  data() {
    return {
      cmpId : parseInt(Math.random() * 1000),
      val: ''
    }
  },
  methods: {
    reportVal() {
      this.$emit('setVal', this.val)
    }
  },
  computed: {
    listId() {
      return 'list' + this.cmpId
    }
  }
}
