<template>
  <v-card class="grey lighten-4">
    <!-- Needs to be Map and not map as there is already an HTML tag called map -->
    <Map/>
  </v-card>
</template>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';
import Map from './Map.vue';

/* eslint-disable indent */
@Component({
  components: {
    Map,
  },
})
/* eslint-enable indent */
export default class World extends Vue {
  public gameId: string = null;

  public created() {
    this.gameId = this.$router.currentRoute.params.id;
  }
}
</script>
