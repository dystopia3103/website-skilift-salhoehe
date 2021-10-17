<template>
  <div class="home">

    <section class="hero is-light is-fullheight-with-navbar">
      <div class="hero-body">

        <div class="container has-text-centered">

          <h1 class="title">Willkommen!</h1>
          <p class="subtitle">Wir sind das schii-team saalhöchi</p>

          <div class="columns">
            <div class="column">

              <div class="card mt-5" style="height: 100%">
                <div class="card-image">
                  <figure class="image is-3by1">
                    <img src="gallery/team.jpg" alt="Teamfoto">
                  </figure>
                </div>
                <article class="card-content">
                  <p class="has-text-weight-semibold is-size-4">Lernen Sie uns kennen...<font-awesome-icon icon="grin-wink" size="lg" class="ml-4" /></p>
                  <b-button type="is-primary mt-5" tag="router-link" to="/ueber-uns">Über uns</b-button>
                </article>
              </div>
            </div>

            <div class="column">
              <div class="card mt-5" style="height: 100%">
                <div class="card-image">
                  <figure class="image is-3by1">
                    <img src="gallery/skiing1.jpg" alt="Teamfoto">
                  </figure>
                </div>
                <article class="card-content">
                  <p class="has-text-weight-semibold is-size-4">... oder planen Sie Ihren Besuch<font-awesome-icon icon="calendar-alt" size="lg" class="ml-4" /></p>
                  <b-button type="is-primary mt-5" tag="router-link" to="/kontakt-und-anfahrt">Infos</b-button>
                </article>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="hero is-fullheight-with-navbar is-primary">
      <div class="hero-body has-text-centered is-flex-direction-column is-justify-content-center">
        <h1 class="title">Impressionen</h1>
        <p class="subtitle">Unser Skilift im Betrieb</p>
        <div class="card mt-5">
          <div class="card-content">
            <div class="container">
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

#home-carousel, .carousel-items, .carousel, .carousel-item {
  max-height: 60vh;

  figure {
    max-height: 60vh;
  }
}
</style>
