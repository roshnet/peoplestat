<template>
  <q-page class="flex flex-center">    
    <question
      v-for="question in questions"
      :key="question.idx"
      :q="question"
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
      questions: [
        {
          idx: 0,
          body: 'How much would you rate this person for sense of humour?'
        },
        {
          idx: 1,
          body: 'How much do you think should this person be rated for anger?'
        },
        {
          idx: 2,
          body: 'What would you rate this person for mental focus?'
        }
      ]
    }
  }
}
</script>
