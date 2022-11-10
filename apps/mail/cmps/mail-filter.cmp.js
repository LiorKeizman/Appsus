export default {
    template: `
    <div>

        <section class="email-filter">
            <label class="text-filter">
            <textarea  v-model="filterBy.subject" @input="filter" placeholder="Search key letters" class="email-subject main-search"> </textarea>
                <!-- <input v-model="filterBy.subject" @input="filter"  type="text" placeholder="Search key letters"> -->
            </label>
        </section>
    </div>
    `,
    data() {
        return {
            filterBy: {
                subject: '',
            }
        }
    },
    methods: {
        filter() {
            this.$emit('filter', { ...this.filterBy })
        }
    }
}