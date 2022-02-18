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
                label="Nombres"
                style="box-shadow: -2px 0px #8686bd;"
                solo
              />
            </v-col>
            <v-col>
              <v-text-field
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
  // import axios from 'axios'
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
      }
    },
    mounted () {
    },
    methods: {
    },
  }
</script>
