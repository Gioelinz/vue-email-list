console.log('vue ok', Vue);
console.log('axios ok', axios);

Vue.config.devtools = true;

const app = new Vue({
    el: '#root',
    data: {
        emails: [],
        totalGenEmails: 10,
        currentIndex: undefined,
    },
    methods: {
        getRandEmail() {
            axios.get('https://flynn.boolean.careers/exercises/api/random/mail').then(res => {
                const emailData = res.data.response;
                if (!this.emails.includes(emailData))
                    this.emails.push(emailData);
            })
        },

        getRandEmails(number) {
            for (let i = 0; i < number; i++) {
                this.getRandEmail();
            }
        }
    },

    mounted() {
        this.getRandEmails(this.totalGenEmails);
    }
});
