<template>
  <q-page class="flex flex-center">
    <section class="text-center">
      <q-card class="q-px-md q-ma-lg">
        <q-card-section>
          <div class="text-h6 text-weight-light">
            How much would you rate this person for sense of humour?
          </div>
        </q-card-section>
      </q-card>
      <div class="q-mt-xl q-pa-lg">
        <q-slider
          v-model="value"
          :min="0"
          :max="10"
          :step="1"
          label
          color="primary"
        />
      </div>
      <h2 class="text-h4 text-center q-ml-auto q-mr-auto">
        <span class="box">{{ value }}</span>
         / 10
      </h2>
    </section>
  </q-page>
</template>

<script>
export default {
  data() {
    return {
      value: 5
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
