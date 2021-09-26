<template>
  <div class="home">
    <section class="hero is-light">
      <div class="hero-body has-text-centered is-flex-direction-column is-justify-content-center">
        <h1 class="title">Willkommen!</h1>
        <p class="subtitle">Wir sind das Schii-Team Salhöchi</p>
      </div>
    </section>
    <section class="section is-flex-direction-column is-justify-content-center">
      <div class="card">
        <div class="card-content">
          <b-carousel id="home-carousel"
                      arrow="true"
                      repeat="true"
                      arrow-hover="true"
                      indicator="false"
                      icon-pack="fas"
                      icon-prev="arrow-left"
                      icon-next="arrow-right">
            <b-carousel-item v-for="(item, i) in 6" :key="i">
              <b-image class="image" :src="getImgUrl(i)" />
            </b-carousel-item>
          </b-carousel>
        </div>
      </div>
    </section>
  </div>
</template>

<script lang="ts">
// @ is an alias to /src
import Vue from "vue";
import {Component} from "vue-property-decorator";

@Component({
  components: {}
})
export default class Home extends Vue {

  private getImgUrl(value: number): string|null {
    const basePath = 'gallery/';

    switch (value) {
      case 0:
        return basePath + 'skiing1.jpg';
      case 1:
        return basePath + 'machine.jpg';
      case 2:
        return basePath + 'skiing2.jpg';
      case 3:
        return basePath + 'night.jpg';
      case 4:
        return basePath + 'skiing3.jpg';
      case 5:
        return basePath + 'hutt.jpg';
      default:
        return null;
    }
  }

}
</script>

<style lang="scss">
@import "src/assets/scss/main.scss";

.card {
  width: 100%;
}

#home-carousel, .carousel-items, .carousel, .carousel-item {
  height: 15rem;

  figure {
    height: 15rem;
  }

  @include from($tablet) {
    height: 45rem;

    figure {
      height: 45rem;
    }
  }
}
</style>
