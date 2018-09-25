<template>
  <div class="animated fadeIn">
    <b-row class="justify-content-md-center">
      <b-col md="6">
        <b-card>
          <h4 slot="header">Ingreso de Notas Registro extendido</h4>
          <p>Ingrese solo las notas aprobadas, aquellas que en el actual pensum no poseen calificación, 
            establezca la <b>calificación de 5.0</b></p>
          <template v-for="(item, index) in $store.getters.pensum2006">
            <div :key="index">
              <h6>Periodo {{index + 1}}</h6>
              <b-table striped hover :items="item" :fields="fields" small responsive fixed>
                <template slot="calificacion" slot-scope="data"> 
                  <b-input v-model="data.item.calificacion" type="number" :ref="data.item.codigo" max="5" min="0"></b-input>
                </template>
              </b-table>
            </div>
          </template>
          
          <b-row>
            <b-col cols="6">
              
            </b-col>
            <b-col cols="6" class="text-right">
              <b-button variant="primary" @click="siguiente">Continuar <i class="fa fa-angle-right" aria-hidden="true"></i></b-button>
            </b-col>
          </b-row>
        </b-card>
      </b-col>
    </b-row>
    <b-modal v-model="modalShow" title="Créditos de libre elección">
      <b-form-group label="Ingrese la cantidad de creditos de libre elección para la selección automática:">
        <b-input v-model="libreEleccion" type="number" @keydown.native="validarSoloNumeros"></b-input>
      </b-form-group>
      <template slot="modal-footer">
        <b-button variant="primary" @click="siguiente"><i class="fa fa-eye" aria-hidden="true"></i> Ver resultados</b-button>
      </template>
    </b-modal>
  </div>
</template>

<script>
import Vue from 'vue'
import { db } from '../main'

export default {
  name: 'PrimeraFase',
  data: function () {
    return {
      modalShow: false,
      listaRegistrados: [],
      fields: [
        {
          key: 'asignatura',
          label: 'Nombre de la asignatura'
        },
        {
          key: 'calificacion',
          label: 'Calificación'
        },
        {
          key: 'creditos',
          label: 'Créditos',
          'class': 'text-center'
        }
      ]
    }
  },
  computed: {
    libreEleccion: {
      get: function () {
        return this.$store.getters.libreEleccion
      }, 
      set: function (value) {
        this.$store.dispatch('changeLibre', value)
      }
    }
  },
  methods: {
    siguiente: function () {
      let contCalificaciones = 0
      for (let i in this.$store.getters.pensum2006) {
        for(let j in this.$store.getters.pensum2006[i]) {
          if(this.$store.getters.pensum2006[i][j].calificacion && this.$store.getters.pensum2006[i][j].calificacion > 5) {
            this.$refs[this.$store.getters.pensum2006[i][j].codigo][0].focus()
            this.$toastr.error('La calificación debe ser igual o inferior a 5.0', 'Número inválido')
            return
          } else if (this.$store.getters.pensum2006[i][j].calificacion) {
            contCalificaciones++
          }
        }
      }
      if (contCalificaciones === 0) {
        this.$toastr.error('Debe ingresar al menos una calificación', 'Calificaciones no ingresadas')
        return
      }
      /*
      if (!this.libreEleccion) {
        this.$toastr.error('Debe ingresar un número', 'Campo vacío')
        return
      } else if (parseInt(this.libreEleccion) < 1) {
        this.$toastr.error('El número mínimo de créditos es 1', 'Número inválido')
        return
      } else if (parseInt(this.libreEleccion) > 17) {
        this.$toastr.error('El número máximo de créditos es 17', 'Número inválido')
        return
      }
      */
      this.$router.push('resultados')
    },
    validarSoloNumeros(event) {
      if(parseInt(event.key) + '' === 'NaN' 
          && event.which !== 8 
          && event.which !== 9
          && event.which !== 190 
          && event.which !== 37 
          && event.which !== 39) {
        event.preventDefault()
      }
    },
    getPensum2006ByUser: function (documento) {
      db.collection('pensum2006').where('user', '==', documento).get()
      .then((snapshot) => {
          snapshot.forEach((doc) => {
            console.log(doc.data())
          for (let i in doc.data()) {
            this.$store.getters.pensum2006[i] = doc.data()[i].asignaturas
          }
        })
      })
      .catch((err) => {
        console.log('Error getting documents', err)
      })
    }
  },
  beforeCreate: function () {
    this.$store.dispatch('changeLibre', 17)
    if (!this.$store.getters.logged) {
      this.$toastr.error('No se ha detectado sesión', 'Error en sesión')
      this.$router.push('/pages/login')
      return
    }
    if (this.$store.getters.userLogged.documento) {
      this.$store.dispatch('changeLibre', this.$store.getters.userLogged.libreEleccion)
      this.$toastr.info('Solo podrá visualizar la información', 'Usuario ya registrado')
      this.$router.push('resultados')
    }
  }
}
</script>

<style scoped>
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
