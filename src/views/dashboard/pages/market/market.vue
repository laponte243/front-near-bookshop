<template>
  <div>
    <v-container class="pt-12 mt-12">
      <v-row class="ul1">
        <v-col
          v-for="(item, i) in offers"
          :key="i"
          class="col-xs-12 col-sm-6 col-md-3 li1"
        >
          <a href="/app#/pages/product">
            <v-card
              class="hover2"
            >
              <v-img
                :src="require('../../../../assets/img/' + item.img)"
                class="white--text align-end imgOffers"
              />
              <div
                class="textHover"
              >
                <h2>
                  {{ item.nombre }}
                </h2>
                <h3>
                  {{ item.Author }}
                </h3>
                <h3>
                  {{ item.price }}
                </h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit, optio. Placeat libero culpa veniam ipsam porro eum perferendis ex sed consectetur ipsa, explicabo recusandae voluptatibus provident. Doloribus earum ullam quidem?
                </p>
              </div>
            </v-card>
          </a>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
  export default {
    name: 'DashboardDashboard',

    data () {
      return {
        img: true,
        offers: [
          {
            img: 'home/libro8.jpg',
            nombre: 'Smart',
            Author: 'Kim Slater',
            price: '10 NEAR',
            copy: '10 Copias',
          },
          {
            img: 'home/libro9.jpg',
            nombre: 'Dracula',
            Author: 'Bram Stoker',
            price: '15 NEAR',
            copy: '10 Copias',
          },
          {
            img: 'home/libro1.png',
            nombre: 'El camino de la miseria',
            Author: 'Lauren Grant',
            price: '15 NEAR',
            copy: '10 Copias',
          },
          {
            img: 'home/libro2.jpg',
            nombre: 'The Arrivals',
            Author: 'Kim Slater',
            price: '10 NEAR',
            copy: '10 Copias',
          },
        ],
      }
    },
    mounted () {

    },
    methods: {
      viewProduct () {
        this.$router.push({ name: 'product' })
      },
    },
  }
</script>
<style>
  .ul1 {
    list-style: none;
  }
  .li1 {
    display: inline-block;
  }
  .imgOffers {
    filter: brightness(50%);
    -webkit-filter: brightness(50%);
    -moz-filter: brightness(50%);
    -o-filter: brightness(50%);
    -ms-filter: brightness(50%);
    height: 400px;
  }
  .hover2:hover {
    display:inline-block;
    background: #6868ac;
  }

  .imgOffers:hover {
    opacity:.3;
  }
  .textHover {
    display: none;
  }
  .hover2 .imgOffers:hover ~ .textHover {
    display: inline-block;
    color: #fff;
    position: absolute;
    z-index: 1;
    top: 0;
    padding-left: 10px;
  }
  @media (min-width:320px) and (max-width:425px){
    /*Aquí van todos los estilos CSS*/
  };
  @media (min-width:375px) and (max-width:425px){
    /*Aquí van todos los estilos CSS*/
  }
  @media (max-width:768px) {
    /*Aquí van todos los estilos CSS*/
  }
  @media (min-width:960px) and (max-width:1024px){
    /*Aquí van todos los estilos CSS*/
  };
  @media (orientation: landscape) {
    /*Aquí van todos los estilos CSS*/
  }
  @media (orientation: Portrait) {
    /*Aquí van todos los estilos CSS*/
  }
</style>
