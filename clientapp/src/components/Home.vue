<template>
  <v-container>
    <v-content>
      {{ message }}
    </v-content>
  </v-container>
</template>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';

@Component
export default class Home extends Vue {
  public message = 'Cooming soon...';
}
</script>