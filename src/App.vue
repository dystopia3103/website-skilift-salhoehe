<template>
  <div id="app">
    <b-navbar mobile-burger fixed-top id="nav">
      <template #brand>
        <b-navbar-item tag="router-link" :to="{ path: '/' }">
          <img src="@/assets/images/skilift_logo.svg" id="brand"
               alt="Vereinslogo">
          <span id="brand-title" class="title has-text-weight-semibold mr-5">schii - team saalhöchi</span>
        </b-navbar-item>
      </template>
      <template #start>
          <b-navbar-item class="nav-link" tag="router-link" :to="{ path: '/' }">
            <div class="is-flex is-flex-direction-column is-justify-content-center is-align-items-center">
              <font-awesome-icon icon="home" size="lg" class="mb-1 has-text-primary"/>
              <p class="is-size-6 has-text-weight-semibold">Home</p>
            </div>
          </b-navbar-item>
          <b-navbar-item class="nav-link" tag="router-link" :to="{ path: '/ueber-uns' }">
            <div class="is-flex is-flex-direction-column is-justify-content-center is-align-items-center">
              <font-awesome-icon icon="skiing" size="lg" class="mb-1 has-text-primary"/>
              <p class="is-size-6 has-text-weight-semibold">Über uns</p>
            </div>
          </b-navbar-item>
          <b-navbar-item class="nav-link" tag="router-link" :to="{ path: '/kontakt-und-anfahrt' }">
            <div class="is-flex is-flex-direction-column is-justify-content-center is-align-items-center">
              <font-awesome-icon icon="map-marker-alt" size="lg" class="mb-1 has-text-primary"/>
              <p class="is-size-6 has-text-weight-semibold">Infos</p>
            </div>
          </b-navbar-item>
      </template>
    </b-navbar>
    <router-view/>
    <footer class="footer">
      <div class="content has-text-centered">
        <p>Kontakt schii-team<br>
          <a href="mailto:salhoehe@gmail.com">
            <font-awesome-icon icon="envelope" class="has-text-primary"/>
            salhoehe@gmail.com</a><br>
        </p>

        <p>Webseite von <strong>Petra Schär</strong><br>
          <a target="_blank" href="https://www.xing.com/profile/Petra_Schaer3/cv">
            <font-awesome-icon icon="globe" class="has-text-primary"/>
            Xing</a><br>
          <a href="mailto:schaerpe@gmail.com">
            <font-awesome-icon icon="envelope" class="has-text-primary"/>
            schaerpe@gmail.com</a><br>
        </p>
      </div>
    </footer>
  </div>
</template>

<style lang="scss">
@import "src/assets/scss/main.scss";

.navbar {
  box-sizing: border-box;
  border-bottom: 5px solid $primary;
}

div.navbar-brand {
  min-width: 9rem;

  > a {
    min-width: 9rem;

    > #brand {
      position: absolute;
      top: 0;
      left: 0;

      min-height: 7rem;
      transition: all 0.5s ease;
    }

    > #brand-title {
      display: none;
      margin-left: 10rem;
      font-weight: bold;
      transition: all 0.5s ease;

      @include from($desktop) {
        display: inline;
      }
    }
  }

  &:hover {
    > a {
      > #brand {
        transform: scale(1.09, 1.09) rotate(-2deg);
      }

      > #brand-title {
        transform: scale(1.07, 1.07);
      }
    }
  }
}


.nav-link {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  @include from($desktop) {
    width: 8rem;
    flex-direction: column;

    svg {
      display: block;
    }
  }
}
</style>
