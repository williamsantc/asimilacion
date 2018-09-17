<template>
  <div class="animated fadeIn">
    <b-row class="justify-content-md-center">
      <b-col md="6">
        <b-card>
          <h4 slot="header">Bienvenido</h4>
          <div align="center">
            <p>Aplicación para la simulación de la POSIBLE asimilación al nuevo plan de estudios</p>
            <b-form-group label="Ingrese su documento de indentidad">
              <b-input type="number" v-model="documento" @keydown.native="validarSoloNumeros"></b-input>
            </b-form-group>
            <b-btn @click="continuar">Continuar</b-btn>
          </div>
        </b-card>
      </b-col>
    </b-row>
  </div>
</template>

<script>
import { db } from '../main'

export default {
  data: function () {
    return {
      listaRegistrados: []
    }
  },
  computed: {
    documento: {
      get: function () {
        return this.$store.getters.documento
      },
      set: function (value) {
        this.$store.dispatch('changeDoc', value)
      }
    }
  },
  methods: {
    continuar: function () {
      if (!this.documento) {
        this.$toastr.error('Debe ingresar un número', 'Campo vacío')
        return
      }
      this.$router.push('ingreso_notas')
    },
    validarSoloNumeros: function (event) {
      if(parseInt(event.key) + '' === 'NaN' 
          && event.which !== 8 
          && event.which !== 9
          && event.which !== 190 
          && event.which !== 37 
          && event.which !== 39) {
        event.preventDefault()
      }
    },
    getUsuarios: function () {
      db.collection('users').get()
      .then((snapshot) => {
          snapshot.forEach((doc) => {
          this.listaRegistrados.push(doc.data())
        })
      })
      .catch((err) => {
        console.log('Error getting documents', err)
      })
    }
      
  },
  created: function () {
    // db.collection('users').doc('123').set({documento: 12345})
    this.getUsuarios()
    console.log(this.listaRegistrados)
  }
    
}

</script>

<style>
  .fade-enter-active {
    transition: all .3s ease;
  }
  .fade-leave-active {
    transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
  }
  .fade-enter, .fade-leave-to {
    transform: translateX(10px);
    opacity: 0;
  }
</style>
