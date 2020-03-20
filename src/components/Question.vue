<template>
  <section class="text-center">
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
        v-model="value"
        :min="0"
        :max="10"
        :step="1"
        label
        color="success"
      />
    </div>
    <h2 class="text-h4 text-center q-ml-auto q-mr-auto">
      <span class="box">{{ value }}</span>
      / 10
    </h2>
    <hr class="q-my-xl" />
  </section>
</template>

<script>
export default {
  name: 'SingleQuestion',
  data() {
    return {
      value: this.initialValue    // using as data prop; mutation intended
    }
  },
  props: {
    initialValue: {
      type: Number,
      default: 5
    },
    q: {                         // to be used directly; no mutation intended
      type: Object,
      required: true
    }
  }
}
</script>

<style lang="sass" scoped>
.my-card
  width: 100%
  max-width: 250px

.box
  max-width: 200px
  padding: .2em
  background-color: $primary
  color: white
</style>
