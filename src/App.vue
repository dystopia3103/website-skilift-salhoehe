<template>
  <div id="app">
    <b-navbar mobile-burger fixed-top shadow type="is-white" id="nav">
      <template #brand>
        <b-navbar-item tag="router-link" :to="{ path: '/' }">
          <img src="@/assets/images/logo.png" id="brand"
              alt="Vereinslogo">
        </b-navbar-item>
      </template>
      <template #start>
        <b-navbar-item class="nav-link" href="/">
          <div class="is-flex is-flex-direction-column is-justify-content-center is-align-items-center">
            <font-awesome-icon icon="home" size="lg" class="mb-1 has-text-primary" />
            <p class="is-size-6">Home</p>
          </div>
        </b-navbar-item>
        <b-navbar-item class="nav-link" href="/#/ueber-uns">
          <div class="is-flex is-flex-direction-column is-justify-content-center is-align-items-center">
            <font-awesome-icon icon="skiing" size="lg" class="mb-1 has-text-primary" />
            <p class="is-size-6">Über uns</p>
          </div>
        </b-navbar-item>
        <b-navbar-item class="nav-link" href="/#/kontakt-und-anfahrt">
          <div class="is-flex is-flex-direction-column is-justify-content-center is-align-items-center">
            <font-awesome-icon icon="map-marker-alt" size="lg" class="mb-1 has-text-primary" />
            <p class="is-size-6">Infos</p>
          </div>
        </b-navbar-item>
      </template>
    </b-navbar>
    <router-view/>
    <footer class="footer">
      <div class="content has-text-centered">
        <p>Kontakt Schii-Team <strong>Fredy Erb</strong><br>
          <a href="mailto:#"><font-awesome-icon icon="envelope" class="has-text-primary" /> TBD</a><br>
        </p>

        <p>Webseite von <strong>Petra Schär</strong><br>
          <a target="_blank" href="https://www.xing.com/profile/Petra_Schaer3/cv"><font-awesome-icon icon="globe" class="has-text-primary" /> Xing</a><br>
          <a href="mailto:schaerpe@gmail.com"><font-awesome-icon icon="envelope" class="has-text-primary" /> schaerpe@gmail.com</a><br>
        </p>
      </div>
    </footer>
  </div>
</template>

<style lang="scss">
@import "src/assets/scss/main.scss";

#brand {
  min-height: 5rem;
}

.nav-link {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  width: 12vw;
}
</style>
