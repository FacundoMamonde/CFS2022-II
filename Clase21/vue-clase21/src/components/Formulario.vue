<template>
  <div class="hello">
    <form v-on:submit="checkForm">
      <input type="text" name="nombre" id="nombre" v-bind="nombre" placeholder="Nombre">
      <input type="text" name="edad" id="edad" v-model="edad" placeholder="Edad">
      <input type="email" name="email" id="email" v-model="email" placeholder="Email">
      <input type="submit" name="submit" id="submit">
    </form>
  </div>
</template>

<script>
export default {
  name: 'FormularioItem',
  props: {
    msg: String,
  }, 
  data: function(){
    return {
      errores: []
    }
  },
  methods: {
    checkForm(event) {
      this.errores = [];

      if (!this.nombre) {
        this.errores.push("Nombre ingresado incorrecto");
      }

      if (typeof(this.edad) !== "number") {
        this.errores.push("Edad ingresada incorrecta")
      }

      if (!this.validEmail(this.email)){
        this.errores.push("Edad ingresada incorrecta")
      }

      if (this.errores.length === 0){
        return true
      }

      console.log(this.errores);
      event.preventDefault();

    },
    validEmail(email) {
      let re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(email)
    },
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
form{
  display: flex;
  flex-direction: column;
  width: 300px;
}

</style>
