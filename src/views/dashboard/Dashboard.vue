<template>
  <div>
    <v-carousel
      cycle
      class="carousel"
      hide-delimiter-background
      delimiter-icon="mdi-minus"
      height="90vh"
    >
      <v-carousel-item
        v-for="(itemC,i) in itemsCarousel"
        :key="i"
      >
        <v-row
          class="pt-12 mt-12"
          align="center"
          justify="center"
        >
          <h1 class="black--text pt">
            Libros en tendencia
          </h1>
        </v-row>
        <v-row
          align="center"
          justify="center"
        >
          <v-col />
          <v-col
            align-self="center"
          >
            <div class="text-h3">
              <a href="/product">
                <v-img
                  class="hover imgCarousel"
                  :src="require('../../assets/img/home/' + itemC.src1)"
                />
              </a>
            </div>
          </v-col>
          <v-col
            class="d-none d-sm-flex"
            align-self="center"
          >
            <div class="text-h3">
              <a href="/product">
                <v-img
                  class="hover imgCarousel"
                  :src="require('../../assets/img/home/' + itemC.src2)"
                />
              </a>
            </div>
          </v-col>
          <v-col
            class="d-none d-md-flex"
            align-self="center"
          >
            <div class="text-h3">
              <a href="/product">
                <v-img
                  class="hover imgCarousel"
                  :src="require('../../assets/img/home/' + itemC.src1)"
                />
              </a>
            </div>
          </v-col>
          <v-col />
        </v-row>
      </v-carousel-item>
    </v-carousel>
    <v-container>
      <v-col :cols="12">
        <v-card-text
          class=""
          tile
          outlined
        >
          <v-card-title class="subheading ">
            Generos
          </v-card-title>
          <v-divider />
          <div class="row">
            <div
              class="col-md-6 col-sm-6 col-xs-12"
            >
              <v-card>
                <v-img
                  :src="require('../../assets/img/home/aventura.jpg')"
                  class="white--text align-center generoImg"
                  gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
                >
                  <h1 class="text-center font-size">
                    Aventura
                  </h1>
                  <div class="text-center">
                    <v-btn
                      href="#"
                      class="white--text "
                      outlined
                    >
                      Explorar
                    </v-btn>
                  </div>
                </v-img>
              </v-card>
            </div>
            <div
              class="col-md-6 col-sm-6 col-xs-12"
            >
              <v-card>
                <v-img
                  :src="require('../../assets/img/home/ficcion.jpg')"
                  class="white--text align-center generoImg"
                  gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
                >
                  <h1 class="text-center font-size">
                    Ciencia Ficcion
                  </h1>
                  <div class="text-center">
                    <v-btn
                      href="#"
                      class="white--text"
                      outlined
                    >
                      Explorar
                    </v-btn>
                  </div>
                </v-img>
              </v-card>
            </div>
          </div>
          <div class="row d-none d-sm-flex">
            <div class="col-md-4 col-sm-4 col-xs-12">
              <v-card outlined>
                <v-img
                  :src="require('../../assets/img/home/romance.jpg')"
                  class="white--text align-center"
                  gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
                  height="300px"
                >
                  <h1 class="text-center font-size">
                    Romance
                  </h1>
                  <div class="text-center mt-2">
                    <v-btn
                      class="white--text text-caption"
                      href="#"
                      text
                    >
                      Explorar
                      <v-icon class="white--text textcaption">
                        mdi-arrow-right
                      </v-icon>
                    </v-btn>
                  </div>
                </v-img>
              </v-card>
            </div>
            <div
              class="col-md-4 col-sm-4 col-xs-12"
            >
              <v-card outlined>
                <v-img
                  :src="require('../../assets/img/home/terror.jpg')"
                  class="white--text align-center"
                  gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
                  height="300px"
                >
                  <h1 class="text-center font-size">
                    Terror
                  </h1>
                  <div class="text-center mt-2">
                    <v-btn
                      class="white--text text-caption"
                      href="#"
                      text
                    >
                      Explorar
                      <v-icon class="white--text text-caption">
                        mdi-arrow-right
                      </v-icon>
                    </v-btn>
                  </div>
                </v-img>
              </v-card>
            </div>
            <div
              class="col-md-4 col-sm-4 col-xs-12"
            >
              <v-card outlined>
                <v-img
                  :src="require('../../assets/img/home/libro7.jpg')"
                  class="white--text align-center"
                  gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
                  height="300px"
                >
                  <h1 class="text-center font-size">
                    Fantasia
                  </h1>
                  <div class="text-center mt-2">
                    <v-btn
                      class="white--text text-caption"
                      href="/shop"
                      text
                    >
                      Explorar
                      <v-icon class="white--text text-caption">
                        mdi-arrow-right
                      </v-icon>
                    </v-btn>
                  </div>
                </v-img>
              </v-card>
            </div>
          </div>
        </v-card-text>
      </v-col>
    </v-container>
    <v-container>
      <v-row no-gutters>
        <v-col :cols="12">
          <v-card-text
            class=""
            tile
            outlined
          >
            <v-card-title class="subheading">
              Escritores Destacados
            </v-card-title>
            <v-divider />
            <v-carousel
              hide-delimiter-background
              hide-delimiters
              show-arrows-on-hover
              height="230"
            >
              <v-carousel-item>
                <v-row align-content="center">
                  <v-col
                    class="col-12 col-md-3 col-sm-6 col-xs-6 text-center"
                    align-self="center"
                  >
                    <v-card class="hover2">
                      <v-img
                        :src="require('../../assets/img/avatars/imagenAvatar1.png')"
                        class="white--text align-end"
                        gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
                        height="200px"
                      >
                        <v-card-title>Kim Slater</v-card-title>
                      </v-img>
                    </v-card>
                  </v-col>
                  <v-col
                    class="col-12 col-md-3 col-sm-6 col-xs-6 text-center"
                    align-self="center"
                  >
                    <v-card class="hover2">
                      <v-img
                        :src="require('../../assets/img/avatars/imagenAvatar2.png')"
                        class="white--text align-end"
                        gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
                        height="200px"
                      >
                        <v-card-title>Bran Stoker</v-card-title>
                      </v-img>
                    </v-card>
                  </v-col>
                  <v-col
                    class="col-12 col-md-3 col-sm-6 col-xs-6 text-center"
                    align-self="center"
                  >
                    <v-card class="hover2">
                      <v-img
                        :src="require('../../assets/img/avatars/imagenAvatar3.png')"
                        class="white--text align-end"
                        gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
                        height="200px"
                      >
                        <v-card-title>Lauren Grant</v-card-title>
                      </v-img>
                    </v-card>
                  </v-col>
                  <v-col
                    class="col-12 col-md-3 col-sm-6 col-xs-6 text-center"
                    align-self="center"
                  >
                    <v-card class="hover2">
                      <v-img
                        :src="require('../../assets/img/avatars/imagenAvatar4.png')"
                        class="white--text align-end"
                        gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
                        height="200px"
                      >
                        <v-card-title>Lucas LLoyd</v-card-title>
                      </v-img>
                    </v-card>
                  </v-col>
                </v-row>
              </v-carousel-item>
              <v-carousel-item>
                <v-row align-content="center">
                  <v-col
                    class="col-12 col-md-3 col-sm-6 col-xs-6 text-center"
                    align-self="center"
                  >
                    <v-card class="hover2">
                      <v-img
                        :src="require('../../assets/img/avatars/imagenAvatar5.png')"
                        class="white--text align-end"
                        gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
                        height="200px"
                      >
                        <v-card-title>Alba Palacio</v-card-title>
                      </v-img>
                    </v-card>
                  </v-col>
                  <v-col
                    class="col-12 col-md-3 col-sm-6 col-xs-6 text-center"
                    align-self="center"
                  >
                    <v-card class="hover2">
                      <v-img
                        :src="require('../../assets/img/avatars/imagenAvatar6.png')"
                        class="white--text align-end"
                        gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
                        height="200px"
                      >
                        <v-card-title>Bill Hollen</v-card-title>
                      </v-img>
                    </v-card>
                  </v-col>
                  <v-col
                    class="col-12 col-md-3 col-sm-6 col-xs-6 text-center"
                    align-self="center"
                  >
                    <v-card class="hover2">
                      <v-img
                        :src="require('../../assets/img/avatars/imagenAvatar7.png')"
                        class="white--text align-end"
                        gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
                        height="200px"
                      >
                        <v-card-title>Victoria Aveyard</v-card-title>
                      </v-img>
                    </v-card>
                  </v-col>
                  <v-col
                    class="col-12 col-md-3 col-sm-6 col-xs-6 text-center"
                    align-self="center"
                  >
                    <v-card class="hover2">
                      <v-img
                        :src="require('../../assets/img/avatars/imagenAvatar8.png')"
                        class="white--text align-end"
                        gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
                        height="200px"
                      >
                        <v-card-title>Roberto Dubuc</v-card-title>
                      </v-img>
                    </v-card>
                  </v-col>
                </v-row>
              </v-carousel-item>
            </v-carousel>
          </v-card-text>
        </v-col>
      </v-row>
    </v-container>
    <v-container>
      <v-row no-gutters>
        <v-col :cols="12">
          <v-card-text
            class=""
            tile
            outlined
          >
            <v-card-title class="subheading">
              Ofertas del día
            </v-card-title>
            <v-divider />
            <div class="row">
              <div class="col-xs-6 col-sm-4 col-md-3 col text-center">
                <v-hover
                  v-slot:default="{ hover }"
                  open-delay="200"
                >
                  <v-card
                    :elevation="hover ? 16 : 2"
                    align="center"
                  >
                    <v-img
                      class="white--text align-end imgOffers"
                      :src="require('../../assets/img/home/libro8.jpg')"
                    >
                      <v-card-title>Smart</v-card-title>
                    </v-img>

                    <v-card-text class="text--primary text-left">
                      <div>
                        <strong>
                          Kim Slater
                        </strong>
                      </div>
                      <div>10 NEAR</div>
                      <div>10 Copias</div>
                    </v-card-text>

                    <div class="text-right">
                      <v-btn
                        href="/shop"
                        class="ma-2"
                        outlined
                        color="info"
                      >
                        Explorar
                      </v-btn>
                    </div>
                  </v-card>
                </v-hover>
              </div>
              <div class="col-xs-6 col-sm-4 col-md-3 col text-center">
                <v-hover
                  v-slot:default="{ hover }"
                  open-delay="200"
                >
                  <v-card
                    :elevation="hover ? 16 : 2"
                    align="center"
                  >
                    <v-img
                      class="white--text align-end imgOffers"
                      :src="require('../../assets/img/home/libro9.jpg')"
                    >
                      <v-card-title>Dracula </v-card-title>
                    </v-img>

                    <v-card-text class="text--primary text-left">
                      <div>
                        <strong>
                          Bram Stoker
                        </strong>
                      </div>
                      <div>15 NEAR</div>
                      <div>10 Copias</div>
                    </v-card-text>

                    <div class="text-right">
                      <v-btn
                        href="/shop"
                        class="ma-2"
                        outlined
                        color="info"
                      >
                        Explorar
                      </v-btn>
                    </div>
                  </v-card>
                </v-hover>
              </div>
              <div class="col-xs-6 col-sm-4 col-md-3 col text-center d-none d-sm-flex">
                <v-hover
                  v-slot:default="{ hover }"
                  open-delay="200"
                >
                  <v-card
                    :elevation="hover ? 16 : 2"
                    align="center"
                  >
                    <v-img
                      class="white--text align-end imgOffers"
                      :src="require('../../assets/img/home/libro1.png')"
                    >
                      <v-card-title>El camino de la miseria</v-card-title>
                    </v-img>

                    <v-card-text class="text--primary text-left">
                      <div>
                        <strong>
                          Lauren Grant
                        </strong>
                      </div>
                      <div>10 NEAR</div>
                      <div>10 Copias</div>
                    </v-card-text>

                    <div class="text-right">
                      <v-btn
                        href="/shop"
                        class="ma-2"
                        outlined
                        color="info"
                      >
                        Explorar
                      </v-btn>
                    </div>
                  </v-card>
                </v-hover>
              </div>
              <div class="col-xs-6 col-sm-4 col-md-3 col text-center d-none d-md-flex">
                <v-hover
                  v-slot:default="{ hover }"
                  open-delay="200"
                >
                  <v-card
                    :elevation="hover ? 16 : 2"
                    align="center"
                  >
                    <v-img
                      class="white--text align-end imgOffers"
                      :src="require('../../assets/img/home/libro2.jpg')"
                    >
                      <v-card-title>The Arrivals</v-card-title>
                    </v-img>

                    <v-card-text class="text--primary text-left">
                      <div>
                        <strong>
                          Lucas LLoyd
                        </strong>
                      </div>
                      <div>10 NEAR</div>
                      <div>10 Copias</div>
                    </v-card-text>

                    <div class="text-right">
                      <v-btn
                        href="/product"
                        class="ma-2"
                        outlined
                        color="info"
                      >
                        Explorar
                      </v-btn>
                    </div>
                  </v-card>
                </v-hover>
              </div>
            </div>
          </v-card-text>
        </v-col>
      </v-row>
    </v-container>
    <v-card
      color="#6868AC"
      class="pt-0 pb-0 mt-0 mb-0 m"
    >
      <v-container class="pt-0 pb-0 mt-0 mb-0">
        <v-row class="pt-0 pb-0 mt-0 mb-0">
          <v-col
            class="col-12 col-md-5 col-sm-5"
            align-self="center"
          >
            <h1 class="white--text">
              Pública tu Libro
            </h1>
            <p class="white--text">
              Registrate como escritor y publica tu libro
            </p>
            <v-btn
              color="#8C30F5"
              class="white--text"
              large
            >
              Inicia sesion con Near
            </v-btn>
          </v-col>
          <v-col
            class="col-12 col-md-6 col-sm-6 pt-0 pb-0 mt-0 mb-0"
            align-self="center"
          >
            <img
              class="d-none d-sm-flex imgPublica"
              src="../../assets/img/home/publica.png"
            >
          </v-col>
        </v-row>
      </v-container>
    </v-card>
  </div>
</template>

<script>
  export default {
    name: 'DashboardDashboard',

    data () {
      return {
        itemsCarousel: [
          {
            src1: 'libro2.jpg',
            src2: 'libro3.jpg',
            src3: 'libro4.jpg',
          },
          {
            src1: 'libro5.jpg',
            src2: 'libro6.jpg',
            src3: 'libro7.jpg',
          },
          {
            src1: 'libro8.jpg',
            src2: 'libro9.jpg',
            src3: 'libro1.jpg',
          },
          {
            src1: 'libro4.jpg',
            src2: 'libro5.jpg',
            src3: 'libro6.jpg',
          },
        ],
      }
    },
    mounted () {

    },
    methods: {
      complete (index) {
        this.list[index] = !this.list[index]
      },
    },
  }
</script>
<style>
  .v-card--reveal {
    align-items: center;
    bottom: 0;
    justify-content: center;
    opacity: .5;
    position: absolute;
    width: 100%;
  }
  .carousel {
    background-image: url("../../assets/img/home/fondoCarousel.png");
    background-size: 101% 100%;
  }
  .hover:hover {
    transform: scale(1.1);
    box-shadow: 3px 3px 30px 15px gray;
  }
  .hover2:hover {
    transform: scale(1);
    box-shadow: 3px 3px 10px 5px gray;
  }
  .v-btn .v-btn__content .v-icon {
    color: gray;
  }
  .imgCarousel {
    width: 250px;
    height: 400px;
  }
  .generoImg {
    height: 400px;
  }
  .imgOffers {
    width: 265px;
    height: 350px;
  }
  .imgPublica {
    width: 500px;
  }
  @media (min-width:320px) and (max-width:425px){
    /*Aquí van todos los estilos CSS*/
    .carousel {
      background-image: url("../../assets/img/home/fondoCarousel.png");
      /*(width heigth)*/
      background-size: 101% 100%;
    }
    .generoImg {
      height: 200px;
    }
  };
  @media (min-width:375px) and (max-width:425px){
    /*Aquí van todos los estilos CSS*/
  }
  @media (max-width:768px) {
    /*Aquí van todos los estilos CSS*/
    .imgPublica {
      width: 300px;
    }
  }
  @media (min-width:960px) and (max-width:1024px){
    /*Aquí van todos los estilos CSS*/
    .carousel {
      background-image: url("../../assets/img/home/fondoCarousel.png");
      /*(width heigth)*/
      background-size: 101% 100%;
    }
  };
  @media (orientation: landscape) {
    /*Aquí van todos los estilos CSS*/
  }
  @media (orientation: Portrait) {
    /*Aquí van todos los estilos CSS*/
  }
</style>
