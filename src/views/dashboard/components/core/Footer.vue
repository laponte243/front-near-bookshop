<template>
  <v-footer
    :padless="true"
    class="pa-0"
  >
    <v-card
      flat
      tile
      width="100%"
      class="white--text text-center pa-0 ma-0"
      color="#0B0D17"
    >
      <v-card-text>
        <v-btn
          class="mx-4 white--text"
          icon
        >
          <v-icon size="24px">
            mdi-home
          </v-icon>
        </v-btn>
        <v-btn
          class="mx-4 white--text"
          icon
        >
          <v-icon size="24px">
            mdi-email
          </v-icon>
        </v-btn>
        <v-btn
          class="mx-4 white--text"
          icon
        >
          <v-icon size="24px">
            mdi-calendar
          </v-icon>
        </v-btn>
        <v-btn
          class="mx-4 white--text"
          icon
        >
          <v-icon size="24px">
            mdi-delete
          </v-icon>
        </v-btn>
      </v-card-text>
      <v-container>
        <v-card-text class="white--text pt-0">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi quam esse voluptatem alias voluptate omnis illo modi cupiditate molestiae, vitae dignissimos voluptatum maiores quo, odit temporibus deleniti asperiores sequi cumque?
        </v-card-text>

        <v-divider color="white" />

        <v-card-text class="white--text">
          {{ new Date().getFullYear() }} — <strong>Near Bookshop</strong>
        </v-card-text>
      </v-container>
    </v-card>
  </v-footer>
</template>

<script>
  export default {
    name: 'DashboardCoreFooter',

    data: () => ({
      links: [
        {
          href: '#',
          text: 'Creative Tim',
        },
        {
          href: '#',
          text: 'About Us',
        },
        {
          href: '#',
          text: 'Blog',
        },
        {
          href: '#',
          text: 'Licenses',
        },
      ],
    }),
  }
</script>

<style lang="sass">
  #dashboard-core-footer
    a
      font-size: .825rem
      font-weight: 500
      text-decoration: none
      text-transform: uppercase
</style>
