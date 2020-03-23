<template>
  <q-page class="q-mx-md q-pa-md q-mt-md">
    <h2 class="text-h4 text-primary">Contribution</h2>
    <p class="text-grey-9 text-body1">
      Currently, I'm the only developer working on this.
      <br />
      If you'd like to contribute, shoot a mail at
      <a href="mailto:roshan@programmer.net">this email</a>.
    </p>
    <h3 class="text-primary text-h5">
      Features and Issues
    </h3>
    <p class="text-grey-9 text-body1">
      One of the primary issues which has been kept in mind is scalability.
      The REST API this app depends on, is a synchronous one.
      <br />
      Hence, performance poses a problem, because training the learning model
      requires a considerable CPU use.
      <br />
      Multiple users using the app in a short time frame may cause the server
      to run out of compute power, thereby stalling the API.
      <br />
      I thought using a cron task might do the job, but the free tier doesn't
      offer that. 
    </p>
    <p class="text-grey-9 text-body1">
      To solve this issue, I've used a workaround in the learning process.
      <br />
      For each incoming data, an explicit counter is maintained, which
      triggers the training process after every N requests.
      <br />
      It's kinda batch-online learning (or whatever its called), but is
      expected to handle higher traffic loads, without compromising the server
      performance.
    </p>
    <h3 class="text-primary text-h5">
      Dynamic Schema (issue)
    </h3>
    <p class="text-grey-9 text-body1">
      Since the number of questions can change, there needs to be a way the
      app can self-adjust to train on the new structure.
      <br />
      Using null values can do this, but at the cost of highly decreased
      accuracy (since the model would treat null values as meaningful).
    </p>
    <p class="text-grey-9 text-body1">
      If any idea strikes your mind, please email at the address mentioned above.
    </p>
  </q-page>
</template>
