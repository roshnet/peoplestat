<template>
  <q-page class="flex flex-center">    
    <q-btn
      v-show="activeIndex > 0"
      @click="navigate('prev')"
      icon="chevron_left"
      size="md"
      color="blue"
      glossy
      round
    />
    <question
      :q="questions[activeIndex]"
    />
    <q-btn
      v-show="activeIndex < questions.length - 1"
      @click="navigate('next')"
      icon="chevron_right"
      size="md"
      color="blue"
      glossy
      round
    />
    <q-btn
      @click="sendScores"
      v-show="activeIndex == questions.length - 1"
      label="Submit Response"
      class="q-my-lg"
      icon="done"
      size="md"
      color="primary"
      glossy
    />

    <q-dialog v-model="responseError">
      <q-card>
        <q-card-section>
          <div class="text-h6 text-warning">
            <q-icon name="warning" />
            Something's not right
          </div>
        </q-card-section>
        <q-card-section class="q-pt-none">
          There is a network issue with the app.<br />
        </q-card-section>
        <q-card-actions align="right">
          <q-btn flat label="OK" color="primary" v-close-popup />
        </q-card-actions>
      </q-card>
    </q-dialog>

    <q-dialog v-model="responseSuccess">
      <q-card>
        <q-card-section>
          <div class="text-h6 text-primary">
            <q-icon name="sentiment_satisfied_alt" />
            Thanks for your response!
          </div>
        </q-card-section>
        <q-card-section class="q-pt-none">
          You can also start again.<br />
          More responses -> better analysis.
        </q-card-section>
        <q-card-actions align="right">
          <q-btn
            @click="backToHome"
            label="OK"
            color="primary"
            flat
            v-close-popup
          />
        </q-card-actions>
      </q-card>
    </q-dialog>
  </q-page>
</template>

<script>
import { endpoints } from 'src/config/api'
import Question from 'components/Question'

export default {
  components: {
    Question
  },
  data() {
    return {
      activeIndex: 0,
      responseSuccess: false,
      responseError: false,
      questions: [
        {
          idx: 0,
          body: 'How much would you rate this person for sense of humour?',
          score: 5
        },
        {
          idx: 1,
          body: 'How often do you think does this person get angry?',
          score: 5
        },
        {
          idx: 2,
          body: 'How well can this person focus mentally?',
          score: 5
        },
        {
          idx: 3,
          body: 'How many people does this person hang out with (average)?',
          score: 5
        },
        {
          idx: 4,
          body: 'How gullible/naive is this person?',
          score: 5
        }
      ]
    }
  },
  methods: {
    navigate(action) {
      (action == 'next') ? this.activeIndex += 1 : this.activeIndex -= 1
    },
    async sendScores() {
      await this.$axios
              .post(endpoints.train, this.$store.state.scores)
              .then((resp) => {
                console.log('RESPONSE \n', resp)
                this.responseSuccess = true    
              })
              .catch((err) => {
                this.responseError = true
                console.warn('ERROR ', err)
              })
    },
    backToHome() { this.$router.push('/') }
  }
}
</script>
