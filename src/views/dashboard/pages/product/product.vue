<template>
  <div>
    <v-container
      class="pt-12 mt-12"
    >
      <v-row>
        <v-col class="col-md-5 col-sm-5 col-xs-12">
          <img
            height="500"
            src="../../../../assets/img/home/libro2.jpg"
            style="box-shadow: 30px 20px 5px #6868AC;"
          >
        </v-col>
        <v-col class="col-md-7 col-sm-7 col-xs-12">
          <div class="pl-6">
            <p
              class="text-h4 mb-0"
              style="color:#7474B3;"
            >
              The Arrivals
            </p>
            <v-card-actions class="pa-0">
              <p class="text-h5 font-weight-light pt-3">
                10 NEAR
                <del class="text-subtitle-1 font-weight-thin">
                  15 NEAR
                </del>
              </p>
              <v-spacer />
              <v-rating
                v-model="rating"
                background-color="warning lighten-3"
                color="warning"
                dense
              />
              <span class="text-body-2font-weight-thin"> 25 REVIEWS</span>
            </v-card-actions>
            <p class="text-h4 font-weight-thin">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nisl tincidunt eget nullam non. Tincidunt arcu non sodales neque sodales ut etiam. Lectus arcu bibendum at varius vel pharetra. Morbi tristique senectus et netus et malesuada.
            </p>
            <p class="text-subtitle-1 font-weight-thin">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Blanditiis, autem consectetur. Odio officia, quam veritatis obcaecati officiis necessitatibus minima quis natus ducimus provident excepturi voluptate totam laboriosam earum! Voluptatum, laudantium.
            </p>
            <p class="text-h6">
              Copias
            </p>
            <p class="text-subtitle-1 font-weight-thin">
              10 Disponibles
            </p>
            <v-btn
              color="#7474B3"
              class="white--text"
              dense
              large
            >
              Comprar
            </v-btn>
          </div>
        </v-col>
      </v-row>
      <v-row class="row">
        <div class="col-sm-12 col-xs-12 col-md-12">
          <v-tabs>
            <v-tab>Description</v-tab>
            <v-tab>Materials</v-tab>
            <v-tab>REVIEWS</v-tab>
            <v-tab-item>
              <p class="pt-10 text-subtitle-1 font-weight-thin">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua. Ultricies mi eget mauris pharetra et. Vel pretium lectus quam id leo in vitae turpis
                massa. Orci dapibus ultrices in iaculis nunc. At auctor urna nunc id cursus metus. Integer feugiat
                scelerisque varius morbi enim nunc. Aliquam sem et tortor consequat id porta nibh venenatis cras.
                Pellentesque pulvinar pellentesque habitant morbi tristique senectus et netus. Malesuada nunc vel risus
                commodo viverra maecenas. Neque volutpat ac tincidunt vitae semper quis.
              </p>
            </v-tab-item>
            <v-tab-item>
              <p class="pt-10 text-subtitle-1 font-weight-thin">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua. Ultricies mi eget mauris pharetra et. Vel pretium lectus quam id leo in vitae turpis
                massa. Orci dapibus ultrices in iaculis nunc. At auctor urna nunc id cursus metus. Integer feugiat
                scelerisque varius morbi enim nunc. Aliquam sem et tortor consequat id porta nibh venenatis cras.
                Pellentesque pulvinar pellentesque habitant morbi tristique senectus et netus. Malesuada nunc vel risus
                commodo viverra maecenas. Neque volutpat ac tincidunt vitae semper quis.
              </p>
            </v-tab-item>
            <v-tab-item>
              <v-list
                three-line="true"
                avatar="true"
              >
                <v-list-item-group
                  v-model="item"
                  color="primary"
                >
                  <v-list-item
                    v-for="(item, i) in items"
                    :key="i"
                    inactive="true"
                  >
                    <v-list-item-avatar>
                      <v-img :src="item.avatar" />
                    </v-list-item-avatar>
                    <v-list-item-content>
                      <v-list-item-title v-html="item.title" />
                      <v-rating
                        v-model="rating"
                        class=""
                        background-color="warning lighten-3"
                        color="warning"
                        dense
                      />
                      <v-list-item-subtitle v-html="item.subtitle" />
                    </v-list-item-content>
                  </v-list-item>
                </v-list-item-group>
              </v-list>
            </v-tab-item>
          </v-tabs>
        </div>
      </v-row>
    </v-container>
  </div>
</template>
<script>
  import * as nearAPI from 'near-api-js'
  import { CONFIG } from '@/services/api'
  const { connect, keyStores, WalletConnection, Contract } = nearAPI
  export default {
    data () {
      return {
        items: [
          'Administrador',
          'Regular',
          'Moderador',
        ],

        profile: [],
      }
    },
    mounted () {
      this.getData()
    },
    methods: {
      async setData () {
        alert('Aqui')
        const CONTRACT_NAME = 'book.bookshop.testnet'
        // connect to NEAR
        const near = await connect(CONFIG(new keyStores.BrowserLocalStorageKeyStore()))
        // create wallet connection
        const wallet = new WalletConnection(near)
        const contract = new Contract(wallet.account(), CONTRACT_NAME, {
          changeMethods: ['set_profile'],
          sender: wallet.account(),
        })
        if (wallet.isSignedIn()) {
          await contract.set_profile(
            {
              name: 'Linda 2',
              last_name: 'Rosario 2',
              email: 'lindaleyrosario@gmail.com2',
              bio: 'Contenido2',
              website: 'http://example.com2',
            },
          )
        }
      },
      async getData () {
        const CONTRACT_NAME = 'book.bookshop.testnet'
        // connect to NEAR
        const near = await connect(CONFIG(new keyStores.BrowserLocalStorageKeyStore()))
        // create wallet connection
        const wallet = new WalletConnection(near)
        const contract = new Contract(wallet.account(), CONTRACT_NAME, {
          changeMethods: ['get_profile'],
          sender: wallet.account(),
        })
        if (wallet.isSignedIn()) {
          console.log(wallet.account())
          const response = await contract.get_profile({
            user_id: wallet.getAccountId(),
          })
          this.profile = response
          console.log(response)
        }
      },
    },
  }
</script>
