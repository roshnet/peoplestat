<template>
  <q-page class="flex flex-center text-center">
    <div class="q-mx-lg">
      <p class="text-subtitle1 text-primary">
        Think of a person you've interacted with.
        Set a score on the questions that follow.
      </p>
      <q-btn
        @click="showHint = true"
        size="md"
        color="positive"
        icon="lightbulb"
        round
      />
      &nbsp;
      <q-btn
        to="/train"
        size="md"
        color="primary"
        icon-right="skip_next"
        label="Start"
      />
      <q-dialog v-model="showHint">
        <q-card>
          <q-card-section>
            <div class="text-h6 text-primary">
              <q-icon name="lightbulb" />
              How to use the app
            </div>
          </q-card-section>
          <q-card-section class="q-pt-none">
            Scores you assign are supposed to be your best guess, regardless of
            any dedicated investigation.
            <p class="text-subtitle2 text-primary q-mt-md">
              <strong>Privacy</strong>
            </p>
            No labelled data is collected by this app. Whatever you think, stays
            in your brain. All scores are therefore absolutely anonymous.
          </q-card-section>
          <q-card-actions align="right">
            <q-btn flat label="Got it!" color="primary" v-close-popup />
          </q-card-actions>
        </q-card>
      </q-dialog>
    </div>
  </q-page>
</template>

<script>
export default {
  data() {
    return {
      showHint: false
    }
  }
}
</script>