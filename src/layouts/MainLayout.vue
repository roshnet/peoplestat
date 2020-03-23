<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="leftDrawerOpen = !leftDrawerOpen"
        />
      </q-toolbar>
      <div class="q-px-lg q-pt-md q-mb-md">
        <div class="text-h4">Peoplestat</div>
        <div class="text-subtitle2 text-weight-regular q-mt-sm">
          Behaviour prediction via anonymous feedbacks
        </div>
      </div>
    </q-header>

    <q-drawer
      v-model="leftDrawerOpen"
      show-if-above
      bordered
      content-class="bg-grey-1"
    >
      <q-list>
        <q-item-label
          header
          class="text-grey-8 text-center"
        >
          Welcome aboard!
        </q-item-label>
        <DrawerLink
          v-for="link in drawerLinks"
          :key="link.title"
          v-bind="link"
        />
      </q-list>
    </q-drawer>

    <q-page-container>
      <keep-alive>
        <router-view />
      </keep-alive>
    </q-page-container>
  </q-layout>
</template>

<script>
import DrawerLink from 'components/DrawerLink'

export default {
  name: 'MainLayout',

  components: {
    DrawerLink
  },

  data () {
    return {
      leftDrawerOpen: false,
      drawerLinks: [
        {
          title: 'Start / Resume',
          caption: 'Start assiging scores',
          icon: 'dashboard',
          link: '/'
        },
        {
          title: 'How to use',
          caption: 'A quick guide to using the app',
          icon: 'help',
          link: '/help'
        },
        {
          title: 'Help out!',
          caption: 'Contribute code, ideas, features',
          icon: 'code',
          link: '/contribute'
        }
      ]
    }
  }
}
</script>
