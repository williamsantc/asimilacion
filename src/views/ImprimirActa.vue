<template>
  <div class="animated fadeIn">
    <b-container>
      <b-row class="justify-content-md-center">
        <b-col sm="6">
          <b-card>
            <h4 slot="header">Generar Acta</h4>
            <b-form-group label="Ingrese su nombre completo">
              <b-form-input v-model="nombreCompleto"></b-form-input>
            </b-form-group>
            <b-row align-h="end">
              <b-col cols="6" class="text-right">
                <b-button variant="primary" @click="generarActa"><i class="fa fa-check" aria-hidden="true"></i> Generar</b-button>
              </b-col>
            </b-row>
          </b-card>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import jsPDF from 'jspdf'
import autotable from 'jspdf-autotable'

export default {
  data: function () {
    return {
      nombreCompleto: ''
    }
  },
  methods: {
    generarActa: function () {
      this.nombreCompleto = this.nombreCompleto.trim()
      if(!this.nombreCompleto) {
        this.$toastr.error('Debe ingresar su nombre', 'Campo incompleto')
        return
      }
      this.nombreCompleto = this.nombreCompleto.toUpperCase()
      let pdf = new jsPDF('p', 'mm', [215.9, 279.4]);
      let first = '<p style="line-height: 1.25;">Yo <b>'+ this.nombreCompleto + '</b> identificado con documento de identidad <b>'+ 
        this.$store.getters.userLogged.documento + '</b> manifiesto mi intención '+
        'de asimilarme al plan de estudios 2019 de ingeniería de sistemas. Manifiesto además que el presente '+
        'documento es un ejercicio informativo que no representa ningun compromiso formal de parte de la institución.'+
        '  Está acta de intención es generada cómo un elemento de soporte para solicitar muy amablemente  a las '+
        'autoridades académicas pertinentes la aprobación del plan de asimilación del programa de Ingeniería de Sistemas.'+
        ' </p>' + 
        '<p style="line-height: 1.25;">Manifiesto conocer las condiciones del plan de asimilación propuesto por el programa y aclaro que la presente'+
        ' intención de asimilación está sujeta a que en el eventual proceso de asimilación no se consideren las notas de las '+
        'asignaturas pérdidas.</p>'+ 
        '<p style="line-height: 1.25;">De acuerdo con mi historial académico consignado en el registro extendido, mi proceso '+
        'de asimilación sería el siguiente: </p> '
      
      let specialElementHandlers = {
        '#editor': function(element, renderer){
          return true;
        },
        '.controls': function(element, renderer){
          return true;
        }
      }
      pdf.setFontSize(16)
      pdf.setFontType("bold")
      pdf.setFont("times")
      pdf.text(105, 20, 'Acta de intención', null, null, 'center')
      pdf.setFontSize(12)
      pdf.fromHTML( first, 20, 25, {
        'width': 180, 
        'elementHandlers': specialElementHandlers
      })
      
      // pdf.addPage()
      let rowsCalificaciones = [
        { title: 'Asignatura 2006' , dataKey: 'asig2006' },
        { title: 'Asignatura 2019', dataKey: 'asig2018' },
        { title: 'Créditos', dataKey: 'creditos' },
        { title: 'Calificación', dataKey: 'calif' }
      ]
      let val = 104.5
      let Asignaturas = this.generarAsignaturasParaActa()
      for (let pos in Asignaturas) {
        if(val < 266) {
          val += 7.5
        } else {
          val = 20
        }
      }
      
      pdf.autoTable(rowsCalificaciones, Asignaturas, {startY: 100, theme: 'plain', 
      styles: {
            font: 'times',
            fontSize: 8.5
        }
      })
      pdf.setFontSize(8)
      pdf.setFontType("normal")
      let pageCount = pdf.internal.getNumberOfPages()
      for(let i = 0; i < pageCount; i++) { 
        pdf.setPage(i)
        pdf.text(185,270,'Página ' + pdf.internal.getCurrentPageInfo().pageNumber + " de " + pageCount)
      }
      pdf.setPage(pageCount)
      // console.log(val)
      pdf.setFontSize(12)
      pdf.setFontType("bold")
      if(val > 170) {
        pdf.addPage()
        val = 20
      } else {
        val += 10
      }
      let columns = [
        { title: 'Pensum' , dataKey: 'pensum' },
        { title: 'Promedio Acumulado', dataKey: 'prom' },
        { title: 'Créditos Aprobados', dataKey: 'aprov' },
        { title: 'Total Créditos', dataKey: 'tot' },
        { title: 'Porcentaje Avance', dataKey: 'avan' }
      ]
      let rows = [
        { 
          pensum: 'Pensum 2006',
          prom: this.$store.getters.dataFinal[2006].promedio, 
          aprov: this.$store.getters.dataFinal[2006].creditosAprov + ' Créditos', 
          tot:  162 + ' Créditos', 
          avan: this.$store.getters.dataFinal[2006].porcenAvanc
        },
        {
          pensum: 'Pensum 2019',
          prom:  this.$store.getters.dataFinal[2018].promedio, 
          aprov:  this.$store.getters.dataFinal[2018].creditosAprov + ' Créditos', 
          tot:  164 + ' Créditos', 
          avan: this.$store.getters.dataFinal[2018].porcenAvanc
        }
      ]
      pdf.setFont("times")
      pdf.text(20, val, 'Resumen final:')
      pdf.autoTable(columns, rows, {startY: val + 5, theme: 'plain', columnStyles: {
          pensum: {
              fontStyle: 'bold'
          }
        }, styles: {
            font: 'times',
            fontSize: 12
        }
      })
      pdf.setFontType("bold")
      let meses = [
        'Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 
        'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'
      ]
      let d = new Date()
      pdf.setFontSize(12)
      pdf.setFontType("normal")
      pdf.text(200, val + 55, this.nombreCompleto, null, null, 'right')
      pdf.text(200, val + 60, 'Est. de Ing. de Sistemas', null, null, 'right')
      pdf.text(200, val + 65, 'Documento: ' + this.$store.getters.userLogged.documento, null, null, 'right')
      pdf.setFontType("bold")
      pdf.setFontSize(14)
      pdf.text(20, val + 70, 'Pamplona, ' + d.getDate() + ' de ' + meses[d.getMonth()] + ' de ' + d.getFullYear())
      pdf.save('acta_' + this.$store.getters.userLogged.documento + '.pdf')
      this.$toastr.success('Proceda a firmarla y entregarla', 'Acta generada')
    },
    generarAsignaturasParaActa: function () {
      let listaAsignaturas = []
      for (let periodo2018 in this.$store.getters.pensum2018) {
        for (let asig2018 in this.$store.getters.pensum2018[periodo2018]) {
          for (let periodo2006 in this.$store.getters.pensum2006) {
            for (let asig2006 in this.$store.getters.pensum2006[periodo2006]) {
              if (this.$store.getters.pensum2018[periodo2018][asig2018].asim 
                  === this.$store.getters.pensum2006[periodo2006][asig2006].codigo 
                  && this.$store.getters.pensum2018[periodo2018][asig2018].calificacion) {
                    
                      listaAsignaturas.push({
                      asig2006: this.$store.getters.pensum2006[periodo2006][asig2006].asignatura,
                      asig2018: this.$store.getters.pensum2018[periodo2018][asig2018].asignatura,
                      creditos: this.$store.getters.pensum2018[periodo2018][asig2018].creditos,
                      calif: this.$store.getters.pensum2018[periodo2018][asig2018].calificacion
                    })
                  }
            }
          }
        }
      }

      for (let i in this.$store.getters.listaLibreEleccion) {
        listaAsignaturas.push({
          asig2006: this.$store.getters.listaLibreEleccion[i].asignatura,
          asig2018: 'LIBRE ELECCIÓN',
          creditos: this.$store.getters.listaLibreEleccion[i].creditos,
          calif: this.$store.getters.listaLibreEleccion[i].calificacion
        })
      }
      return listaAsignaturas
    }
  },
  beforeCreate: function () {
    if (!this.$store.getters.logged) {
      this.$toastr.error('No se ha detectado sesión', 'Error en sesión')
      this.$router.push('/pages/login')
      return
    }
    if (!this.$store.getters.userLogged.documento) {
      this.$toastr.error('Aún no ha finalizado su registro', 'Registro incompleto')
      this.$router.push('ingreso_notas')
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

