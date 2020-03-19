<template>
  <q-page class="flex flex-center text-center">
    <h4>
      <q-btn
        to="/train"
        size="15px"
        color="primary"
        icon-right="skip_next"
        label="Get Started"
      />
    </h4>
    <p class="text-grey-5 text-subtitle2 q-mx-md fixed-bottom-right">
      Make sure to read
      <q-btn
        dense
        color="grey"
        size="md"
        to="/help"
        label="the guide"
        no-caps
      />
      before continuing.
    </p>
  </q-page>
</template>
