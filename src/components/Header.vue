<template>
<div class="header-container" :style="'background-image: url(' + image + ')' ">
  <div id="header-menu">
    <img id="logo" src="/src/assets/img/stock/villenbach-logo.svg.png" alt="logo der feuerwehr villenbach" v-on:click="goTo('/')">
    <nav id="menu-options-pc">
      <a v-for="menu of menuOptions" class="pc-link" v-on:click="goTo(menu[1])">{{menu[0]}}</a>
    </nav>

    <button id="menu-burger-btn" class="mobile" (click)="toggleMobileNavbar()">
        <svg v-if="mobileMenuOpen" xmlns="http://www.w3.org/2000/svg"  width="48"  height="48"  viewBox="0 0 24 24"  fill="none"  stroke="white"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  class="icon icon-tabler icons-tabler-outline icon-tabler-x"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M18 6l-12 12" /><path d="M6 6l12 12" /></svg>
        <svg v-else xmlns="http://www.w3.org/2000/svg"  width="48"  height="48"  viewBox="0 0 24 24"  fill="none"  stroke="white"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  class="icon icon-tabler icons-tabler-outline icon-tabler-menu-2 mobile"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M4 6l16 0" /><path d="M4 12l16 0" /><path d="M4 18l16 0" /></svg>
    </button>
      <!--hier noch n zweites div, das über die ganze bildschirmgröße geht und bei click aus menü rausgeht-->
    <nav v-if="mobileMenuOpen" id="menu-options-mobile">
    <a v-for="(menu, $index) of menuOptions" class="mobile-link" :class="{'first-menu-link' : $index === 0}" v-on:click="goTo(menu[1])" routerLink="{{menu[1]}}">{{menu[0]}}</a>
    <a class="mobile-link" (click)="mobileLinkClick()" routerLink="impressum">Impressum</a>
    </nav>
  </div>
</div>
</template>

<script setup lang="ts">
import { navigate } from 'astro/virtual-modules/transitions-router.js';

let menuOptions: [string, string][] = [["Aktuelles", "/aktuelles"], ["Fest 2025", "/fest-2025"] ,["Aktive Wehr", "/aktive-wehr"], ["Jugend", "/jugend"]]
let mobileMenuOpen: boolean = false;

let image: string = "/src/assets/img/hochwasser/helibild-cropped.png"

function goTo(link: string) {
  navigate(link)
}

function toggleMobileNavbar() {
  mobileMenuOpen = !mobileMenuOpen;
}

function mobileLinkClick() {
  mobileMenuOpen = false;
}

</script>

<style scoped lang="css">
a:hover {
  cursor: pointer;
}

.header-container {
  width: 100vw;
  height: 50vh;
  overflow: hidden;
  background-size: cover;
}

#background-image {
  width: 100vw;
  aspect-ratio: 1/1;
}

#header-menu {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 10vh;
  width: 60vw;
  margin-left: auto;
  margin-right: auto;
  background-color: rgba(0, 0, 0, 0.4);
  backdrop-filter: blur(4px);
  border: 1px solid gray;
  border-top: none;
  padding: 1vh 0;
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
}

#logo {
  height: 90%;
  max-width: 20%;
  margin-left: 1vw;
  cursor: pointer;
}

#logo:hover {
  animation: shakey .4s ease-in-out;
}

#menu-options-pc {
  width: 80%;
  display: flex;
  justify-content: end;
  align-items: center;
  height: 100%;
}

#menu-burger-btn {
  margin-right: 2vw;
  background-color: transparent;
  border-radius: 20px;
  border: none;
  z-index: 1;
}

.mobile {
  display: none;
}

.pc-link {
  margin-right: 2vw;
  text-decoration: none;
  font-size: 1.5em;
  color: whitesmoke;
  transition: .2s;
}

.pc-link:hover {
  font-size: 1.6em;
}

.mobile-link {
  margin-right: 5vw;
  text-decoration: none;
  color: whitesmoke;
  cursor: pointer;
  font-size: 2em;
  margin-top: 5vh;
}

#menu-options-mobile {
  display: none;
}

@media only screen and (max-width: 1300px) {
  #header-menu {
    width: 75vw;
  }
}

@media only screen and (max-width: 768px) {
  .header-container {
    height: 30vh;
  }

  #header-menu {
    width: 100vw;
    background-color: transparent;
    backdrop-filter: none;
    border: none;
  }

  #menu-options-pc {
    display: none;
  }

  .mobile {
    display: block;
  }

  #menu-options-mobile {
    position: absolute;
    top: 0;
    left: 0;
    height: 100vh;
    width: 100vw;
    background-color: rgba(0, 0, 0, 0.4);
    backdrop-filter: blur(4px);
    display: flex;
    flex-direction: column;
    align-items: end;
  }

  .first-menu-link {
    margin-top: 10vh;
  }
}

@keyframes shakey {
  0% {
    rotate: 0deg;
  }
  33% {
    rotate: 10deg;
  }
  66% {
    rotate: -10deg;
  }
  100% {
    rotate: 0deg;
  }
}

</style>