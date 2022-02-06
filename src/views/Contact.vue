<template>
	<div class="contact">
		<div class="hero is-light">
			<div class="hero-body has-text-centered">
				<h1 class="title">Infos</h1>
				<p class="subtitle">Wie Sie uns finden & Öffnungszeiten</p>
			</div>
		</div>
		<div class="container">
			<div class="columns mt-4">
				<div class="column">
					<div class="card">
						<header class="card-header">
                <span class="card-header-icon">
                  <font-awesome-icon size="2x" icon="road" class="has-text-primary"></font-awesome-icon>
                </span>
							<p class="card-header-title subtitle">Anfahrt</p>
						</header>
						<article class="card-content">
							<p>
								<font-awesome-icon icon="bus" size="lg" class="has-text-primary mr-3"/>
								Mit dem Bus Linie 2 der BBA / Bus Aarau in Richtung Barmelweid / Haltestelle Salhöhe
							</p>
							<br>
							<p>
								<font-awesome-icon icon="car" size="lg" class="has-text-primary mr-3"/>
								Mit dem Auto über die Passtrasse Aarau - Erlinsbach - Salhöhe – Kienberg – Frick
								(Grosser Parkplatz auf
								Passhöhe)
							</p>
							<br>
							<p>Der Skilift und das Schiihüsli befindet sich dann ca. Mitte Parkplatz vis-à-vis im
								Wald.</p>
						</article>
						<div class="card-image">
							<figure class="image is-3by2">
								<img src="gallery/map.jpg" alt="Karte markiert">
							</figure>
						</div>
					</div>
				</div>
				<div class="column">
					<div class="card">
						<header class="card-header">
                <span class="card-header-icon">
                  <font-awesome-icon size="2x" icon="calendar" class="has-text-primary"/>
                </span>
							<p class="card-header-title subtitle">Öffnungszeiten</p>
						</header>
						<article class="card-content">
							<div class="table-container">
								<table class="table is-fullwidth">
									<tr>
										<th>Mittwoch</th>
										<th>Freitag</th>
										<th>Samstag</th>
										<th>Sonntag</th>
									</tr>
									<tr>
										<td class="table-success">19- 22 Uhr<br><span class="has-text-primary">Nachtskifahren mit beleuchteter Piste</span>
										</td>
										<td class="table-success">19- 22 Uhr<br><span class="has-text-primary">Nachtskifahren mit beleuchteter Piste</span>
										</td>
										<td class="table-success">13 - 17 Uhr</td>
										<td class="table-success">13 - 17 Uhr</td>
									</tr>
								</table>
							</div>
							<p>Die Öffnungszeiten gelten bei geöffnetem Skilift.</p>
						</article>
					</div>
					<div class="card mt-5">
						<header class="card-header">
                <span class="card-header-icon">
                  <font-awesome-icon size="2x" icon="snowflake" class="has-text-primary"/>
                </span>
							<p class="card-header-title subtitle">Aktuelles</p>
						</header>
						<article class="card-content">
							<p class="has-text-centered has-text-weight-semibold is-size-3">Der Skilift ist aktuell
								<strong
									class="has-text-danger">geschlossen</strong>.</p>
							<p class="has-text-centered">Leider liegt momentan noch nicht genügend Schnee, um den Skilift
								in Betrieb zu nehmen. Wir stehen aber in den Startlöchern und freuen uns darauf, die Piste
								für vergnügliche Schneetage zu präparieren, sobald dies möglich ist.
							</p>
							<p class="has-text-right has-text-grey mt-5">Zuletzt aktualisiert am 06.02.2022</p>
						</article>
					</div>
					<div class="card mt-5 mb-5">
						<header class="card-header">
              <span class="card-header-icon">
                  <font-awesome-icon size="2x" icon="phone" class="has-text-primary"/>
              </span>
							<p class="card-header-title subtitle">Kontakt</p>
						</header>
						<article class="card-content">
							<div class="table-container">
								<table class="table is-fullwidth">
									<tr>
										<td class="table-success">E-Mail</td>
										<td class="table-success"><a
											href="mailto:salhoehe@gmail.com">salhoehe@gmail.com</a></td>
									</tr>
									<tr>
										<td class="table-success">Skilift-Info-Telefon</td>
										<td class="table-success"><a href="tel:+41796063114">079 606 31 14</a></td>
									</tr>
								</table>
							</div>
						</article>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script lang="ts">
import Vue from 'vue';
import {Component} from 'vue-property-decorator';

@Component({
	components: {}
})
export default class Contact extends Vue {

}
</script>

<style lang="scss" scoped>
img {
	object-fit: cover;
}
</style>
