<template>
  <section class="text-center content">
    <q-card class="q-px-md q-mx-lg q-mt-lg">
      <q-card-section>
        <div class="text-h6 text-weight-light">
          {{ q.idx + 1 }} <br />
          {{ q.body }}
        </div>
      </q-card-section>
    </q-card>
    <div class="q-pa-md">
      <q-slider
        @input="setScoreForQuestion(q)"
        v-model="q.score"
        :min="0"
        :max="10"
        :step="1"
        label
        color="success"
      />
    </div>
    <h2 class="text-h4 text-center q-ml-auto q-mr-auto">
      <span class="box">{{ q.score }}</span>
      / 10
    </h2>
  </section>
</template>

<script>
export default {
  name: 'SingleQuestion',
  props: {
    q: {
      type: Object,
      required: true
    }
  },
  methods: {
    setScoreForQuestion(q) {
      this.$store.commit('setScore', q)
    }
  }
}
</script>

<style lang="sass" scoped>
.content
  width: 550px

.box
  max-width: 200px
  padding: .2em
  background-color: $primary
  color: white
</style>
