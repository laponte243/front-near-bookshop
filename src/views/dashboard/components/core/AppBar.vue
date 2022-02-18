<template>
  <v-app-bar
    absolute
    elevation="4"
    color="white"
    fixed
  >
    <v-container>
      <v-row>
        <v-col
          class="d-md-none"
          align-self="center"
        >
          <v-app-bar-nav-icon />
        </v-col>
        <v-col
          class="col"
          align-self="center"
        >
          <v-toolbar-title>
            <a
              href="/"
              class="black--text"
              style="text-decoration: none"
            >
              <img
                width="170"
                src="../../../../assets/nearLogo.png"
              >
            </a>
          </v-toolbar-title>
        </v-col>
        <v-col
          class="col d-none d-md-flex"
          align-self="center"
        >
          <a
            href="/"
            style="text-decoration: none"
            class="black--text"
          >
            <span>Home &nbsp;&nbsp;</span>
          </a>
          <a
            href="/product"
            style="text-decoration: none"
            class="black--text"
          >
            <span>Libros &nbsp;&nbsp;</span>
          </a>
          <a
            href="/product"
            style="text-decoration: none"
            class="black--text"
          >
            <span>Contacto &nbsp;&nbsp;</span>
          </a>
        </v-col>
        <v-spacer />
        <v-col
          class="col d-none d-sm-flex"
          align-self="center"
        >
          <div
            v-show="!sesion"
            class="my-2"
          >
            <v-btn
              color="#6868ac"
              large
              class="white--text"
              @click="signIn()"
            >
              Inicia Sesion Con Near
            </v-btn>
          </div>
          <div
            v-show="sesion"
            class="my-2"
          >
            <v-chip
              class="ma-2 white--text"
              color="#6868ac"
              @click="signOut()"
            >
              <h2 class="pa-5">
                {{ accountId }}
              </h2>
            </v-chip>
          </div>
        </v-col>
      </v-row>
    </v-container>
  </v-app-bar>
</template>

<script>
  // Utilities
  import { mapState, mapMutations } from 'vuex'
  import * as nearAPI from 'near-api-js'
  const { connect, keyStores, WalletConnection } = nearAPI
  const config = {
    networkId: 'testnet',
    keyStore: new keyStores.BrowserLocalStorageKeyStore(),
    nodeUrl: 'https://rpc.testnet.near.org',
    walletUrl: 'https://wallet.testnet.near.org',
    helperUrl: 'https://helper.testnet.near.org',
    explorerUrl: 'https://explorer.testnet.near.org',
  }

  export default {
    name: 'DashboardCoreAppBar',
    data () {
      return {
        sesion: false,
        accountId: '',
      }
    },
    computed: {
      ...mapState(['drawer']),
    },
    mounted () {
      this.isSigned()
    },
    methods: {
      ...mapMutations({
        setDrawer: 'SET_DRAWER',
      }),
      async signIn () {
        // connect to NEAR
        const near = await connect(config)
        // create wallet connection
        const wallet = new WalletConnection(near)
        wallet.requestSignIn(
          'bookshop.testnet', // contract requesting access
          'Near-BookShop', // optional
          'http://localhost:8080/app/#/', // optional
          'http://YOUR-URL.com/failure', // optional
        )
      },
      async isSigned () {
        // connect to NEAR
        const near = await connect(config)
        // create wallet connection
        const wallet = new WalletConnection(near)
        if (wallet.isSignedIn()) {
          this.sesion = true
          // returns account Id as string
          const walletAccountId = wallet.getAccountId()
          this.accountId = walletAccountId
          console.log(walletAccountId)
        }
      },
      async signOut () {
        // connect to NEAR
        const near = await connect(config)
        // create wallet connection
        const wallet = new WalletConnection(near)

        wallet.signOut()
        this.$router.go()
      },
    },
  }
</script>
