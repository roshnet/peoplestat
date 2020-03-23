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
              })
              .catch((err) => {
                console.warn('ERROR ', err)
              })
    }
  }
}
</script>
