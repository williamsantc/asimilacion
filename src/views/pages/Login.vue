<template>
  <div class="app flex-row align-items-center">
    <div class="container">
      <b-row class="justify-content-center">
        <b-col md="8">
          <b-card-group>
            <b-card no-body class="p-4">
              <b-card-body>
                <b-form>
                  <h1>Iniciar sesión</h1>
                  <p class="text-muted">Ingrese con su número de documento</p>
                  <b-input-group class="mb-3">
                    <b-input-group-prepend><b-input-group-text><i class="icon-user"></i></b-input-group-text></b-input-group-prepend>
                    <b-form-input type="number" class="form-control" placeholder="Numero de documento" v-model="documento" @keydown.native="validarSoloNumeros"/>
                  </b-input-group>
                  <b-row>
                    <b-col cols="6">
                      
                    </b-col>
                    <b-col cols="6" class="text-right">
                      <b-button variant="primary" class="px-4" @click="continuar"><i class="fa fa-sign-in" aria-hidden="true"></i> Ingresar</b-button>
                    </b-col>
                  </b-row>
                </b-form>
              </b-card-body>
            </b-card>
            <b-card no-body class="text-white bg-primary py-5 d-md-down-none" style="width:44%">
              <b-card-body class="text-center">
                <div>
                  <h2>Asimilación pensum 2018</h2>
                  <p>Aplicación desarrollada para la simulación de la POSIBLE asimilación al nuevo plan de estudios.</p>
                  <p><b>Desarrollado por:</b> William de Jesús Santos Calú</p>
                </div>
              </b-card-body>
            </b-card>
          </b-card-group>
        </b-col>
      </b-row>
    </div>
  </div>
</template>

<script>
import { db } from '../../main'

export default {
  name: 'Login',
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
      this.getUsuarios()
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
      db.collection('users').where('documento', '==', this.$store.getters.documento).get()
      .then((snapshot) => {
        let obj = null
          snapshot.forEach((doc) => {
            obj = doc.data()
          })
          return obj
      })
      .catch((err) => {
        console.log('Error getting documents', err)
        return null
      }).then((obj) => {
        if(!obj) {
          obj = {
            documento: null
          }
        } 
        this.$store.dispatch('usuarioAntiguo', obj)
        db.collection('pensum2006').where('user', '==', obj.documento).get()
        .then((snapshot) => {
            snapshot.forEach((doc) => {
              this.$store.getters.pensum2006[doc.data().periodo] = doc.data().asignaturas
            
          })
        })
        .catch((err) => {
          console.log('Error getting documents', err)
        }).then(() => {
          this.$store.dispatch('iniciarSesion')
          this.$router.push('/ingreso_notas')
        })
      })
    }
    
      
  },
  created: function () {
    /*
    let sum = 0
    db.collection('users').get()
      .then((snapshot) => {
          snapshot.forEach((doc) => {
            console.log(doc.data())
            sum++
          })
      })
      .catch((err) => {
        console.log('Error getting documents', err)
      }).then(() => {
        console.log(sum)
      })
      
      */
    if(this.$store.getters.userLogged) {
      this.$router.push('/ingreso_notas')
    }
  }
    
}

</script>
