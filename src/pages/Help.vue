<template>
  <q-page class="q-mx-md q-pa-md q-mt-md">
    <h2 class="text-h4 text-primary">About this app</h2>
    <q-card class="q-my-md bg-grey-2">
      <q-card-section>
        <h1 class="text-primary text-h5">
          <q-icon name="warning" size="sm" color="secondary" />
          A note on future release
        </h1>
        <p class="text-grey-9 text-body1">
          When enough data has been gathered, the interface to predict a new
          person's behaviour will be added!
        </p>
      </q-card-section>
    </q-card>
    <p class="text-subtitle1 text-body1">
      <strong class="text-primary">Peoplestat</strong> is really an app made for fun.
    </p>
    <p class="text-grey-9 text-body1">
      To use this app, imagine a person you've interacted with (at least
      once).
    </p>
    <p class="text-grey-9 text-body1">
      Next, there are some questions on the main page, which appear when you
      click
      <q-btn to="/" icon-right="skip_next" size="sm" label="Start" />.
    </p>
    <p class="text-grey-9 text-body1">
      The responses to these questions are used to assign a score to the
      person, based on various parameters a normal person has.
    </p>
    <p class="text-grey-9 text-body1">
      The whole point is to create a global data bucket of feedbacks from
      anonymous people about people they know. This data bucket (or dataset)
      can be analysed to find certain metrics that might affect how we
      perceive relation between these attributes.
    </p>
    <p class="text-grey-9 text-body1">
      For instance, a person who has a good sense of humour is less likely to
      get angry often. This is something which can be comprehended without
      the need for a sophisticated platform. 
    </p>
    <p class="text-grey-9 text-body1">
      But, what if these assumptions need to be verified? The analysis API of
      this application stores the data, and attempts to find patterns which
      verify the existing assumptions, while also finding new correlations in
      data. Say, for example, people who get angry often are likely to be
      hanging out with lesser number of people, compared to someone who doesn't
      get angry often.
      This again is a comprehensible example, but we can expect to find
      interesting observations on analysing people.
    </p>
  </q-page>
</template>
