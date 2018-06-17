<template>
  <div>
    <canvas
      ref="canv"
      :width="canvasSize.width"
      :height="canvasSize.height"
    />
    <p>{{ counter }}</p>
    <button
      @click="handleClick"
    >
      >
    </button>
  </div>
</template>

<script lang="ts">
import * as _ from 'lodash';
import Vue from 'vue';
import Component from 'vue-class-component';
import Location from '../../../common/Location';
import {fractionalPart, sleep} from '../utils';

const MAX_POP = 999;
const squareSize = {
  width: 35,
  height: 20,
};

@Component
export default class Map extends Vue {
  public canvasSize = {
    width: window.innerWidth * 0.7,
    height: window.innerHeight * 0.7,
  };
  public ctx: CanvasRenderingContext2D;
  public currentLocation: Location = new Location(5, 7);
  public counter: number = 0;
  public counterStop: boolean = false;

  public created() {
    window.addEventListener('resize', event => {
      this.canvasSize.width = window.innerWidth * 0.7;
      this.canvasSize.height = window.innerHeight * 0.7;
      Vue.nextTick(this.draw);
    });
  }

  public mounted() {
    this.ctx = (this.$refs.canv as HTMLCanvasElement).getContext('2d');

    this.doCounter();
    this.draw();
  }

  public async doCounter() {
    while (this.counter < MAX_POP) {
      if (this.counterStop) {
        await sleep(10);
        continue;
      }
      await sleep((1.2 - this.counter / MAX_POP) * 70);
      this.counter++;
    }
  }

  get center() {
    return new Location(this.canvasSize.width / 2, this.canvasSize.height / 2);
  }

  public handleClick() {
    this.currentLocation = this.currentLocation.add(new Location(0.25, 0));
    Vue.nextTick(this.draw);
  }

  public gameLocationToCanvasLocation(location: Location): Location {
    return location
      .sub(this.currentLocation)
      .scaleNonLinear(squareSize.width, squareSize.height)
      .add(this.center);
  }

  public draw() {
    this.ctx.clearRect(0, 0, this.canvasSize.width, this.canvasSize.height);
    this.drawGrid();
    const loc = this.gameLocationToCanvasLocation(new Location(5, 6));
    this.ctx.moveTo(loc.x + 5, loc.y);
    this.ctx.arc(loc.x, loc.y, 5, 0, Math.PI * 2);
    this.ctx.stroke();
  }

  public drawGrid() {
    this.ctx.beginPath();
    const center = this.currentLocation.sub(this.currentLocation.floor());
    this.ctx.fillStyle = '#fff9e6';
    this.ctx.fillRect(0, 0, this.canvasSize.width, this.canvasSize.height);

    const verticalLines = Math.ceil(this.canvasSize.width / squareSize.width);
    for (let i = 0.5; i < verticalLines; i++) {
      for (const j of [-1, 1]) {
        const x = j * i * squareSize.width + center.x;
        this.ctx.moveTo(x, this.canvasSize.height);
        this.ctx.lineTo(x, 0);
      }
    }

    const horizontalLines = this.canvasSize.height / squareSize.height;
    for (let i = 0.5; i < horizontalLines; i++) {
      for (const j of [-1, 1]) {
        const y = j * i * squareSize.height + center.y;
        this.ctx.moveTo(this.canvasSize.width, y);
        this.ctx.lineTo(0, y);
      }
    }
    this.ctx.lineWidth = 0.5;
    this.ctx.strokeStyle = 'black';
  }
}
</script>

<style scoped>
canvas {
  border: 1px solid black;
  margin: 10px 10px;
}
</style>
