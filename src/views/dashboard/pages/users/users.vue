<template>
  <v-container
    id="regular-tables"
    class="pt-12 mt-12"
    fluid
    tag="section"
  >
    <v-card
      style="background-color:#d8d8e9"
      title=""
      class="px-5 py-3"
    >
      <v-card-title
        class="#8686BD--text"
        color="#8686BD"
      >
        Cuentanos sobre ti
      </v-card-title>
      <v-card-content>
        <v-container>
          <v-row>
            <v-col>
              <v-text-field
                v-model="profile.name"
                label="Nombres"
                style="box-shadow: -2px 0px #8686bd;"
                solo
              />
            </v-col>
            <v-col>
              <v-text-field
                v-model="profile.last_name"
                label="Apellidos"
                style="box-shadow: -2px 0px #8686bd;"
                solo
              />
            </v-col>
          </v-row>
          <v-row>
            <v-col>
              <v-text-field
                label="Seudonimo"
                style="box-shadow: -2px 0px #8686bd;"
                solo
              />
            </v-col>
            <v-col>
              <v-text-field
                v-model="profile.bio"
                label="Bio"
                style="box-shadow: -2px 0px #8686bd;"
                solo
              />
            </v-col>
          </v-row>
          <v-row>
            <v-col>
              <v-select
                :items="items"
                label="Tipo de Usuario"
                style="box-shadow: -2px 0px #8686bd;"
                solo
              />
            </v-col>
            <v-col>
              <v-text-field
                v-model="profile.email"
                label="Correo"
                style="box-shadow: -2px 0px #8686bd;"
                solo
              />
            </v-col>
          </v-row>
          <v-row>
            <v-col>
              <v-text-field
                label="Twitter"
                style="box-shadow: -2px 0px #8686bd;"
                solo
              />
            </v-col>
            <v-col>
              <v-text-field
                v-model="profile.website"
                label="Sitio Web"
                style="box-shadow: -2px 0px #8686bd;"
                solo
              />
            </v-col>
          </v-row>
          <v-row>
            <v-col>
              <v-file-input
                :rules="rules"
                accept="image/png, image/jpeg, image/bmp"
                placeholder="Pick an avatar"
                prepend-icon="mdi-camera"
                label="Avatar"
                style="box-shadow: -2px 0px #8686bd;"
                solo
              />
            </v-col>
            <v-col />
          </v-row>
          <v-row>
            <v-col>
              <v-btn
                class="ma-2"
                outlined
                color="#8686bd"
                @click="setData()"
              >
                Guardar
              </v-btn>
            </v-col>
          </v-row>
        </v-container>
      </v-card-content>
    </v-card>
  </v-container>
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
        rules: [
          value => !value || value.size < 2000000 || 'Avatar size should be less than 2 MB!',
        ],
        profile: [],
      }
    },
    mounted () {
      this.getData()
    },
    methods: {
      async setData () {
        const CONTRACT_NAME = 'bookshop.testnet'
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
              name: this.profile.name,
              last_name: this.profile.last_name,
              email: this.profile.email,
              bio: this.profile.bio,
              website: this.profile.website,
            },
          )
        }
      },
      async setDataEdit () {
        const CONTRACT_NAME = 'bookshop.testnet'
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
              name: this.profile.name,
              last_name: this.profile.last_name,
              email: this.profile.email,
              bio: this.profile.bio,
              website: this.profile.website,
            },
          )
        }
      },
      async getData () {
        const CONTRACT_NAME = 'bookshop.testnet'
        // connect to NEAR
        const near = await connect(CONFIG(new keyStores.BrowserLocalStorageKeyStore()))
        // create wallet connection
        const wallet = new WalletConnection(near)
        const contract = new Contract(wallet.account(), CONTRACT_NAME, {
          viewMethods: ['get_profile'],
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
