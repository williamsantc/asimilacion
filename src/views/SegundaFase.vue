<template>
  <div class="animated fadeIn">
    <b-card>
      <b-row>
        <b-col cols="6">
          <b-button @click="$router.push('/ingreso_notas')" :disabled="(this.$store.getters.userLogged.documento ? true : false)"><i class="fa fa-angle-left" aria-hidden="true"></i> Volver</b-button>
        </b-col>
        <b-col cols="6" class="text-right">
          <b-button variant="primary" @click="abrirFinalizar" :disabled="(this.$store.getters.userLogged.documento ? true : false)"><i class="fa fa-check" aria-hidden="true"></i> Finalizar</b-button>
        </b-col>
      </b-row>
    </b-card>
    <b-row class="justify-content-md-center">
      <b-col md="6">
        <b-card>
          <h4 slot="header">Datos Pensum 2006</h4>
          <b-row class="justify-content-md-center">
            <b-col sm="4">
              <b-form-group label="Ubicación semestral">
                <b-input v-model="datosPensum2006.ubicacionSem" disabled></b-input>
              </b-form-group>
            </b-col>
            <b-col sm="4">
              <b-form-group label="Promedio acumulado">
                <b-input v-model="datosPensum2006.promedio" disabled></b-input>
              </b-form-group>
            </b-col>
            <b-col sm="4">
              <b-form-group label="Créditos Aprobados">
                <b-input v-model="datosPensum2006.creditosAprov" disabled></b-input>
              </b-form-group>
            </b-col>
            <b-col sm="4">
              <b-form-group label="Total Créditos">
                <b-input value="162" disabled></b-input>
              </b-form-group>
            </b-col>
            <b-col sm="4">
              <b-form-group label="Porcentaje avance">
                <b-input v-model="datosPensum2006.porcenAvanc" disabled></b-input>
              </b-form-group>
            </b-col>
          </b-row>
          <p><b>Los valores pueden variar a los reales debido a que no se toma en cuenta las asignaturas perdidas o cantidad de decimales tomados para realizar el cálculo</b></p>
        </b-card>
      </b-col>
      <b-col md="6">
        <b-card>
          <h4 slot="header">Datos Pensum 2019</h4>
          <b-row class="justify-content-md-center">
            <b-col sm="4">
              <b-form-group label="Ubicación semestral">
                <b-input v-model="datosPensum2018.ubicacionSem" disabled></b-input>
              </b-form-group>
            </b-col>
            <b-col sm="4">
              <b-form-group label="Promedio acumulado">
                <b-input v-model="datosPensum2018.promedio" disabled></b-input>
              </b-form-group>
            </b-col>
            <b-col sm="4">
              <b-form-group label="Créditos Aprobados">
                <b-input v-model="datosPensum2018.creditosAprov" disabled></b-input>
              </b-form-group>
            </b-col>
            <b-col sm="4">
              <b-form-group label="Total Créditos">
                <b-input value="164" disabled></b-input>
              </b-form-group>
            </b-col>
            <b-col sm="4">
              <b-form-group label="Porcentaje avance">
                <b-input v-model="datosPensum2018.porcenAvanc" disabled></b-input>
              </b-form-group>
            </b-col>
          </b-row>
          <p><b>Estos valores son una representación POSIBLE de como quedaría usted ubicado en el programa ante la POSIBLE asimilación</b></p>
        </b-card>
      </b-col>
      <b-col md="6">
        <b-card>
          <h4 slot="header">Asignaturas seleccionadas como libre elección</h4>
            <h4 v-if="libreEleccion.length === 0">No hay asignaturas de libre elección</h4>
            <div v-else>
              <b-table striped hover :items="libreEleccion" :fields="fields2" responsive small >
                <template slot="calificacion" slot-scope="data"> 
                  <b-input v-model="data.item.calificacion" disabled></b-input>
                </template>
              </b-table>
              <p><b>TOTAL: </b> {{$store.getters.pensum2018[8][4].creditos}} de 17 créditos</p>
            </div>
        </b-card>
      </b-col>
      <b-col md="6">
        <b-card>
          <h4 slot="header">Asignaturas no asimiladas</h4>
          
            <h4 v-if="noAsimiladas.length === 0">No hay asignaturas sin asimilar</h4>
            <b-table v-else striped hover :items="noAsimiladas" :fields="fields2" responsive small >
              <template slot="calificacion" slot-scope="data"> 
                <b-input v-model="data.item.calificacion" disabled></b-input>
              </template>
            </b-table>
        </b-card>
      </b-col>
      <b-col md="6">
        <b-card>
          <h4 slot="header">Calificaciones pensum 2006</h4>
          <template v-for="(item, index) in $store.getters.pensum2006">
            <div :key="index">
              <h6>Periodo {{index + 1}}</h6>
              <b-table striped hover :items="item" :fields="fields2" responsive small >
                <template slot="calificacion" slot-scope="data"> 
                  <b-input v-model="data.item.calificacion" disabled></b-input>
                </template>
              </b-table>
            </div>
          </template>
        </b-card>
      </b-col>
      <b-col md="6">
        <b-card>
          <h4 slot="header">Calificaciones pensum 2019</h4>
          <template v-for="(item, index) in $store.getters.pensum2018">
            <div :key="index">
              <h6>Periodo {{index + 1}}</h6>
              <b-table striped hover :items="item" :fields="fields" responsive small >
                <template slot="calificacion" slot-scope="data"> 
                  <b-input v-model="data.item.calificacion" disabled></b-input>
                </template>
              </b-table>
            </div>
          </template>
        </b-card>
      </b-col>
    </b-row>
    <b-card>
      <b-row>
        <b-col cols="6">
          <b-button @click="$router.push('/ingreso_notas')" :disabled="(this.$store.getters.userLogged.documento ? true : false)"><i class="fa fa-angle-left" aria-hidden="true"></i> Volver</b-button>
        </b-col>
        <b-col cols="6" class="text-right">
          <b-button variant="primary" @click="abrirFinalizar" :disabled="(this.$store.getters.userLogged.documento ? true : false)"><i class="fa fa-check" aria-hidden="true"></i> Finalizar</b-button>
        </b-col>
      </b-row>
    </b-card>
    <b-modal v-model="modalShow" title="Finalizar simulación">
      <p>¿Desea finalizar el registro? ya no tendrá más acceso a modificar sus datos, solo podrá visualizarlos.</p>
      <b-form-checkbox
                      v-model="decisionEstudiante"
                      value="SI"
                      unchecked-value="NO">
        Estoy conforme con mi ubicación semestral y promedio acumulado en el nuevo plan de estudios.
      </b-form-checkbox>
      <template slot="modal-footer">
        <b-button @click="modalShow = !modalShow">Cancelar</b-button>
        <b-button variant="primary" @click="finalizar">OK</b-button>
      </template>
    </b-modal>
  </div>
</template>

<script>
import { db } from '../main'
import jsPDF from 'jspdf'
import autotable from 'jspdf-autotable'

export default {
  name: 'SegundaFase',
  data: function () {
    return {
      decisionEstudiante: 'SI',
      sobrantes: [],
      noAsimiladas: [],
      libreEleccion: [],
      datosPensum2006: {},
      modalShow: false,
      datosPensum2018: {},
      mayorCalificaciones: 0,
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
        },
        {
          key: 'asim',
          label: 'Asig. asimilada',
          'class': 'text-center'
        }
      ],
      fields2: [
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
        },
        {
          key: 'codigo',
          label: 'Código',
          'class': 'text-center'
        }
      ]
    }
  },
  methods: {
    calcularDatos2006: function () {

      for (let periodo in this.$store.getters.pensum2018) {
        for(let asig in this.$store.getters.pensum2018[periodo]) {
          let cod_2006 = this.$store.getters.pensum2018[periodo][asig].asim
          for (let periodo1 in this.$store.getters.pensum2006) {
            for(let asig1 in this.$store.getters.pensum2006[periodo1]) {
              if(this.$store.getters.pensum2006[periodo1][asig1].codigo === cod_2006) {
                this.$store.getters.pensum2018[periodo][asig].calificacion = this.$store.getters.pensum2006[periodo1][asig1].calificacion
                
              }
            }
          }
        }
      }

      let sumCalif = 0.00
      let sumCred = 0

      for (let periodo in this.$store.getters.pensum2006) {
        for (let asig in this.$store.getters.pensum2006[periodo]) {
          if (parseInt(this.$store.getters.pensum2006[periodo][asig].creditos) > 0 
              && this.$store.getters.pensum2006[periodo][asig].calificacion) {
            sumCalif = parseFloat(sumCalif) + (parseFloat(this.$store.getters.pensum2006[periodo][asig].calificacion) 
                        * parseInt(this.$store.getters.pensum2006[periodo][asig].creditos))
            sumCred = parseInt(sumCred) + parseInt(this.$store.getters.pensum2006[periodo][asig].creditos)
          }
        }
      }
      let datos = {
        promedio: (sumCalif/sumCred).toFixed(2),
        ubicacionSem: parseInt((sumCred/162)*10),
        porcenAvanc: ((sumCred/162)*100).toFixed(2) + '%',
        creditosAprov: sumCred
      }

      return datos
    },
    llenarSobrantes: function () {
      for (let periodo in this.$store.getters.pensum2018) {
        for(let asig in this.$store.getters.pensum2018[periodo]) {
          let cod_2006 = this.$store.getters.pensum2018[periodo][asig].asim
          for (let periodo1 in this.$store.getters.pensum2006) {
            for(let asig1 in this.$store.getters.pensum2006[periodo1]) {
              if(this.$store.getters.pensum2006[periodo1][asig1].codigo === cod_2006) {
                this.$store.getters.pensum2006[periodo1][asig1].match = true
              }
            }
          }
        }
      }

      for (let periodo in this.$store.getters.pensum2006) {
        for (let asig in this.$store.getters.pensum2006[periodo]) {
          if (!this.$store.getters.pensum2006[periodo][asig].hasOwnProperty('match') && this.$store.getters.pensum2006[periodo][asig].calificacion) {
            this.sobrantes.push((this.$store.getters.pensum2006[periodo][asig]))
          }
        }
      }
    },
    libreEleccionInteligente: function () {
      let aux
      for(let i = 0; i < this.sobrantes.length; i++) {
        for(let j = 1; j < (this.sobrantes.length - i); j++) {
          if(this.sobrantes[j-1].calificacion < this.sobrantes[j].calificacion) {
                aux = this.sobrantes[j-1]
                this.sobrantes[j-1] = this.sobrantes[j]
                this.sobrantes[j] = aux
              }
          }
      }
      let sum = 0
      let pivote = 0
      for(let j = 0; j < this.sobrantes.length; j++) {
        if(sum + this.sobrantes[j].creditos <= parseInt(this.$store.getters.libreEleccion)) {
          sum += this.sobrantes[j].creditos
          this.libreEleccion.push(this.sobrantes[j])
        } else {
          sum = sum - this.libreEleccion[this.libreEleccion.length - 1].creditos
          this.libreEleccion.splice(-1,1)
          j = j - 1
          
        }
        if(sum === parseInt(this.$store.getters.libreEleccion)) {
          this.$store.getters.pensum2018[8][4].creditos = sum
          return sum
        }
        
      }

      return sum
    },
    cargarNoAsimiladas: function () {
      let encontrada = false
      for(let i in this.sobrantes) {
        for(let j in this.libreEleccion) {
          if(this.sobrantes[i].codigo === this.libreEleccion[j].codigo) {
            encontrada = true
            break
          }
        }
        if(!encontrada) {
          this.noAsimiladas.push(this.sobrantes[i])
        }
        encontrada = false
      }
    },
    calcularDatos2018: function () {
      let sumCalifLibre = 0
      for (let i in this.libreEleccion) {
        sumCalifLibre += (this.libreEleccion[i].creditos * this.libreEleccion[i].calificacion)
      }
      sumCalifLibre = sumCalifLibre / this.$store.getters.libreEleccion
      this.$store.getters.pensum2018[8][4].calificacion = sumCalifLibre

      let sumCalif = 0.00
      let sumCred = 0

      for (let periodo in this.$store.getters.pensum2018) {
        for (let asig in this.$store.getters.pensum2018[periodo]) {
          if (parseInt(this.$store.getters.pensum2018[periodo][asig].creditos) > 0 
              && this.$store.getters.pensum2018[periodo][asig].calificacion) {
            sumCalif = parseFloat(sumCalif) + (parseFloat(this.$store.getters.pensum2018[periodo][asig].calificacion) 
                        * parseInt(this.$store.getters.pensum2018[periodo][asig].creditos))
            sumCred = parseInt(sumCred) + parseInt(this.$store.getters.pensum2018[periodo][asig].creditos)
          }
        }
      }
      let datos = {
        promedio: (sumCalif/sumCred).toFixed(2),
        ubicacionSem: parseInt((sumCred/164)*10),
        porcenAvanc: ((sumCred/164)*100).toFixed(2) + '%',
        creditosAprov: sumCred
      }

      return datos
    },
    abrirFinalizar: function () {
      if(!this.$store.getters.userLogged.documento) {
        this.modalShow = !this.modalShow
      }
    },
    finalizar: function () {
      let user = {
        documento: this.$store.getters.documento,
        decision: this.decisionEstudiante,
        libreEleccion: this.$store.getters.libreEleccion
      }
      db.collection('users').doc(this.$store.getters.documento).set(user)
      for (let i in this.$store.getters.pensum2006) {
        let perUser = {
          user: this.$store.getters.documento,
          periodo: i,
          asignaturas: this.$store.getters.pensum2006[i]
        }
        db.collection('pensum2006').doc(perUser.user + '_' + perUser.periodo).set(perUser)
      }
      for (let i in this.$store.getters.pensum2018) {
        let perUser = {
          user: this.$store.getters.documento,
          periodo: i,
          asignaturas: this.$store.getters.pensum2018[i]
        }
        db.collection('pensum2018').doc(perUser.user + '_' + perUser.periodo).set(perUser)
      }
      this.$store.dispatch('cerrarSesion')
      this.$toastr.success('Sus datos fueron almacenados', 'Registro exitoso')
      this.$router.push('/pages/login')
    }
  },
  watch: {
    libreEleccion: {
      handler: function (value) {
        this.$store.dispatch('cargarLibreEleccion', value)
      },
      deep: true
    }
  },
  beforeCreate: function () {
    if (!this.$store.getters.logged) {
      this.$toastr.error('No se ha detectado sesión', 'Error en sesión')
      this.$router.push('/pages/login')
    }
  },
  created: function () {
    this.datosPensum2006 = this.calcularDatos2006()
    this.$store.getters.dataFinal[2006] = this.datosPensum2006
    this.llenarSobrantes()
    this.$store.getters.pensum2018[8][4].creditos = this.libreEleccionInteligente()
    this.cargarNoAsimiladas()
    this.$store.dispatch('changeLibre', this.$store.getters.pensum2018[8][4].creditos)
    this.datosPensum2018 = this.calcularDatos2018()
    this.$store.getters.dataFinal[2018] = this.datosPensum2018
    this.$store.getters.pensum2018[8][4].calificacion = this.$store.getters.pensum2018[8][4].calificacion.toFixed(2)

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
