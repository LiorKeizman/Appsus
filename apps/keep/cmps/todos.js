export default {
  template: `
        <section>
            <datalist :id="listId">
                <option v-for="opt in info.opts" :value="opt" />
            </datalist>
            <label v-for ="note in notes" :key="note.id">
                <input type="checkbox" id="horns" name="horns">
                <label for="horns">{{info.todos.txt}}</label>
              
            </label>  
        </section>
        `,
  props: ['info'],
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
