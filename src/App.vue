<template>
  <v-app>
    <v-app-bar app color="teal lighten-4">
      <div class="d-flex align-center">
        <v-img
          alt="Vue Logo"
          class="shrink mr-2"
          contain
          src="./assets/logo.png"
          transition="scale-transition"
          width="40"
        />
      </div>
      <v-toolbar-title>Структура организации</v-toolbar-title>
    </v-app-bar>

    <v-main>
      <v-card class="mx-auto mt-16 pa-4" max-width="640" outlined>
        <DocumentTree :structure="orgStructure" />
      </v-card>
    </v-main>
  </v-app>
</template>

<script>
import DocumentTree from './components/DocumentTree';

export default {
  name: 'App',
  components: {
    DocumentTree,
  },

  computed: {
    orgStructure: {
      get() {
        return this.$store.getters.getOrgStructure;
      },
      set(value) {
        this.$store.commit('updateList', value);
      },
    },
  },

  data: () => ({}),
};
</script>
