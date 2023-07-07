<template>
  <v-main>
    <v-container>
      <v-row>
        <v-col col="6">

          <v-img alt="image product" :src="require('@/assets/img/note.jpg')" max-height="500px" contain></v-img>

        </v-col>
        <v-col col="6" class="d-flex flex-row-reverse">


          <v-card outlined class="d-flex align-end flex-column">
            <v-card-text class="text-right">
              <v-rating :value="4.5" color="amber" dense half-increments readonly size="16"></v-rating>
            </v-card-text>


            <v-card-title>
              Notebook Gamer
            </v-card-title>

            <v-card-subtitle class="price-value">
              R$ 5.000,99
            </v-card-subtitle>

            <v-card-actions>
              <v-btn color="primary" outlined x-large clas="ml-auto">
                Comprar
              </v-btn>
            </v-card-actions>

          </v-card>

        </v-col>
      </v-row>
      <v-row>
        <v-col>
          descirção do produto
        </v-col>
      </v-row>
    </v-container>
  </v-main>
</template>

<style scoped>
div {
  -border: solid 1px;
}
.price-value {
  font-weight: bold;
  color: #FF6500 !important;
  font-size: 28px;
}
</style>
