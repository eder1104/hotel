<template>
  <div class="container">
    <!-- banner principal -->
    <div class="padre1">
      <div class="top" v-show="fondo">
        <button @click="paso()" v-show="fondo" class="reserva">
          TOMAR MI RESERVA!
        </button>
      </div>
    </div>
    <!-- pagina principal -->
    <div class="padre2">
      <div class="log_hotel">
        <img src="./imagenes/hotel.bmp" alt="hola" class="logo" />
      </div>
      <div class="menu_sup">
        <input type="checkbox" id="mmeennuu" v-show="check" />
        <label class="menu" for="mmeennuu">
          <div class="barry">
            <span class="bar"></span>
            <span class="bar"></span>
            <span class="bar"></span>
            <span class="bar"></span>
            <span class="bar"></span>
          </div>

          <ul>
            <li>
             <router-link  to="/Contactos">CONTACTOS</router-link></li>
            <li><router-link  to="/Contactos">HABITACIONES</router-link></li>
            <li><router-link  to="/Contactos">HOME</router-link></li>
            <li><router-link  to="/Contactos">DEPORTES EXTREMOS</router-link></li>
            <li><router-link  to="/Contactos">SERVICIOS</router-link></li>
          </ul>
        </label>
        <!-- banner -->
        <!-- presentacion -->
        <div class="presentacion">
          <p class="induccion">
            <span>🌿 ¡Bienvenido al Hotel Campo Verde! 🌞</span>
            <br />
            <br />
            Descubre el encanto de la vida rural colombiana en nuestro acogedor
            Hotel Campo Verde. ¡Aquí te espera una experiencia única llena de
            naturaleza y comodidades modernas! 💫
            <br />
            <br />
            📍 Nuestra Ubicación: ¡Nos encontramos en el corazón del campo
            colombiano, rodeados de verdes colinas y aire fresco! Estamos cerca
            de la via barichara km 3 a mano izquierda para que disfrutes al
            máximo de tu estadía.
            <br />
            <br />
            🏨 12 Habitaciones de Ensueño: ¡Descansa como nunca en nuestras
            acolchadas habitaciones diseñadas para tu confort y relax! Con todas
            las comodidades modernas, ¡te sentirás como en casa! 🛏️
            <br />
            <br />
            🍳 Desayuno Gratis: ¡Empieza cada día con energía con nuestro
            delicioso desayuno gratis! Preparado con ingredientes locales
            frescos y mucho cariño. ¡Tu día comenzará con buen pie! 🍳☕
            <br />
            <br />
            🏊 Piscina Refrescante: Sumérgete en la serenidad de nuestra piscina
            al aire libre y disfruta de las vistas panorámicas del campo. ¡Relax
            total bajo el sol colombiano! 🏊‍♂️🌴
            <br />
            <br />
            🍽️ Cocina Local: Saborea auténticos platos colombianos en nuestro
            restaurante, donde la cocina local se fusiona con el buen gusto.
            ¡Una explosión de sabores te espera! 🍲🍴
            <br />
            <br />
            🌳 Actividades al Aire Libre: Explora los senderos naturales
            cercanos, participa en excursiones culturales o simplemente relájate
            en nuestro jardín con un buen libro. ¡Tú decides cómo disfrutar tu
            tiempo! 🌳🚶‍♂️📚
            <br />
            <br />
            ✨ Reserva Ahora: Ven y vive momentos inolvidables en el Hotel Campo
            Verde. ¡Tu escapada perfecta al campo te está esperando! ¡Reserva ya
            y déjanos cuidar de ti! 🌟
            <br />
          </p>
          <div class="hotel_foto">
            <img src="./imagenes/campo_hotel.jpg" alt="" class="ft_ht" />
          </div>
        </div>
        <!-- presentacion -->
        <!-- galeria -->
        <div class="top_galeria">
          <section class="galeria">
            <a href="./components/piscina.vue"
              ><img src="./imagenes/foto_piscina.jpg" alt=""
            /></a>
            <a href="./components/bar.vue"
              ><img src="./imagenes/foto_bar.jpeg" alt=""
            /></a>
            <a href="./components/habitacion.vue"
              ><img src="./imagenes/foto_info.jpg" alt=""
            /></a>
            <a href="./components/recepcion.vue"
              ><img src="./imagenes/foto_recepcion.jpg" alt=""
            /></a>
            <a href="./components/restaurante.vue"
              ><img src="./imagenes/foto_restaurante.jpg" alt=""
            /></a>
          </section>
        </div>
        <!-- galeria -->
      </div>
    </div>
      <router-view></router-view>
  </div>
</template>

<script setup>

import { ref } from "vue";

const check = ref(true);

const fondo = ref(true);

function paso() {
  fondo.value = !fondo.value;
  check.value = !check.value;
}
</script>
<style>
.top {
  background-image: url(https://mir-s3-cdn-cf.behance.net/project_modules/hd/0f03b728888857.55d72c9cd8745.jpg);
  background-repeat: no-repeat;
  background-size: 100% 100vh;
  display: flex;
  justify-content: center;
  place-items: center;
  position: fixed;
  z-index: 8;
  width: 100%;
  height: 100vh;
}

.reserva {
  position: absolute;
  z-index: 9;
  padding: 10px;
  font-size: 30px;
  font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
  border-radius: 10px;
  background-color: #e6e6fa;
  color: rgb(107, 189, 236);
  cursor: pointer;
  transition: transform 0.1s ease;
}

.reserva:hover {
  background-color: #2c3e50;
  transform: translateY(-10px);
}

/* barra superior */

#mmeennuu:checked ~ .menu {
  width: 90%;
  border-radius: 5px;
  background-color: transparent;
  border: 3px solid #c2fffc;
  height: 85px;
  display: flex;
  justify-content: center;
}

#home {
  font-size: 25px;
  padding: 5%;
}

#mmeennuu:checked ~ .menu > ul {
  display: block;
  opacity: 1;
  width: 90%;
}
#mmeennuu:checked ~ .menu > .barry {
  display: none;
}

.menu {
  display: block;
  margin: 30px auto;
  width: 100px;
  height: 100px;
  background-color: #99fff6;
  border: 3px solid transparent;
  border-radius: 50%;
  overflow: hidden;
  cursor: pointer;
  transition: all 0.5s ease-in-out;
  -webkit-transition: all 0.5s ease-in-out;
  -moz-transition: all 0.5s ease-in-out;
  -o-transition: all 0.5s ease-in-out;
  -ms-transition: all 0.5s ease-in-out;
}
.menu div.barry {
  width: 40px;
  margin: 35px auto;
}
.menu div.barry .bar {
  display: block;
  width: 100%;
  height: 5px;
  margin-top: 3px;
  border-radius: 2px;
  background-color: #fff;
}
.menu ul {
  opacity: 0;
  display: none;
  transition: all 0.5s ease-in-out;
  -webkit-transition: all 0.5s ease-in-out;
  -moz-transition: all 0.5s ease-in-out;
  -o-transition: all 0.5s ease-in-out;
  -ms-transition: all 0.5s ease-in-out;
  list-style-type: none;
  padding: 0;
  width: 500px;
  text-align: center;
  margin-bottom: 0;
}
.menu ul li {
  display: inline-block;
  padding-left: 2%;
}
.menu ul li a {
  text-decoration: none;
  display: inline-block;
  padding: 15px 25px;
  color: #f44336;
  font-size: 20px;
  transition: all 0.3s ease-in-out;
  -webkit-transition: all 0.3s ease-in-out;
  -moz-transition: all 0.3s ease-in-out;
  -o-transition: all 0.3s ease-in-out;
  -ms-transition: all 0.3s ease-in-out;
  border: 3px solid transparent;
  border-radius: 5px;
}
.menu ul li a:hover {
  border-color: #f44336;
}
.menu ul li a:target {
  border-bottom-color: #f44336;
}

/* menu superior */
.log_hotel {
  position: fixed;
  z-index: 1;
  right: 44.5%;
  top: 40%;
  opacity: 65%;
}

.logo {
  height: 20vh;
}

.presentacion {
  position: relative;
  z-index: 6;
  display: flex;
  justify-content: center;
  width: 100%;
  margin-top: 19vh;
}

.induccion {
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 50%;
  margin-left: 50px;
  background-color: rgba(130, 194, 130, 0.59);
  color: rgb(229, 255, 142);
  text-align: center;
  border-radius: 20px;
  font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
  transition: transform 0.1s ease;
}

.induccion:hover {
  transform: translateY(-10px);
}

.induccion span {
  margin-top: 20px;
  font-size: 30px;
  font-family: Cambria, Cochin, Georgia, Times, "Times New Roman", serif;
}

.hotel_foto {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50%;
}

.ft_ht {
  border-radius: 20px;
  transition: transform 0.1s ease;
  border: rgb(0, 255, 255) 20px solid;
}

.ft_ht:hover {
  transform: translateY(-10px);
  border: rgba(15, 243, 255, 0.812) 40px solid;
}

.hotel_foto img {
  width: 80%;
}

/* barra superior */
/* galeria */

.top_galeria {
  margin-top: 10em;
  margin-bottom: 10em;
  width: 100%;
  display: flex;
  justify-content: center;
}

.galeria {
  display: flex;
  width: 80%;
  height: 430px;
  position: relative;
  z-index: 7;
  justify-content: center;
}

.galeria img {
  width: 0px;
  height: 96%;
  flex-grow: 1;
  object-fit: cover;
  opacity: 0.8;
  transition: 0.5s ease;
  border-radius: 20px;
}

.galeria a {
  display: flex;
  width: 600px;
  height: 430px;
}

.galeria img:hover {
  cursor: crosshair;
  width: 600px;
  opacity: 1;
  filter: contrast(120%);
}

/* galeria */
</style>
