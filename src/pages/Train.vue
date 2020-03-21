<template>
  <q-page class="flex flex-center">    
    <q-btn
      v-show="activeIndex > 0"
      @click="navigate('prev')"
      icon="chevron_left"
      size="sm"
      color="secondary"
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
      size="sm"
      color="secondary"
      glossy
      round
    />
  </q-page>
</template>

<script>
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
          body: 'How much do you think should this person be rated for anger?',
          score: 5
        },
        {
          idx: 2,
          body: 'What would you rate this person for mental focus?',
          score: 5
        }
      ]
    }
  },
  methods: {
    navigate(action) {
      (action == 'next') ? this.activeIndex += 1 : this.activeIndex -= 1
    }
  }
}
</script>
