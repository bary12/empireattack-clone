<template>
  <v-app>
    <v-toolbar
      app
      color="#111111"
    >
      <v-toolbar-title
        tag="v-toolbar-title"
      >
        EmpireAttack <sup class="red-sup">Alpha</sup>
      </v-toolbar-title>
      
      <v-toolbar-items>
        <v-btn
          flat
          to="/"
        >
          Home
        </v-btn>
        <v-btn
          v-for="game in games"
          :key="game"
          :to="`/world/${game}`"
          flat
        >
          World {{ game }}
        </v-btn>
      </v-toolbar-items>
    </v-toolbar>
    <v-content>
      <v-container 
        fluid 
        fill-height>
        <v-layout
          flex
          align-center
          justify-center
        >
          <router-view/>
        </v-layout>
      </v-container>
    </v-content>
  </v-app>
</template>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';
import {RouteConfig} from 'vue-router';
import routes from '../routes';

@Component
export default class App extends Vue {
  public routes: RouteConfig[];
  public games: string[] = ['123'];
  public created() {
    this.routes = routes;
  }

  get menuRoutes() {
    return this.routes.filter(route => route.meta.menuBar);
  }
}
</script>

<style scoped>
.red-sup {
  color: red;
  font-weight: 600;
}
</style>


