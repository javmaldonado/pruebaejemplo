<template>
  <form>
    <div>
      <label>Color de fondo</label>
      <input type="text" v-model="colorDeFondo" />
    </div>
    <div>
      <label>Color de texto</label>
      <input type="text" v-model="colorDeTexto" />
    </div>
    <div>
      <input type="checkbox" v-model="mostrarTexto">
      <label> Mostrar texto</label>
    </div>
    <div>
      <label>Borde:</label><br>
      <input type="range" min="0" max="5" step="0.5" v-model="grosorDeBorde">
    </div>
    <div>
      <p>Opinión:</p>
      <textarea v-model="opinion" placeholder="Escribe tu opinión..."></textarea>
    </div>
    <div>
      <label for="tipografia">Tipografía</label>
      <select v-model="selectedFont">
        <option v-for="font in fonts" :key="font" :value="font">{{ font }}</option>
      </select>
    </div>
    <div>
      <label>
        <input type="checkbox" v-model="opaco">
        Opaco
      </label>
    </div>
    <section>
      <div>
        <label for="tamañodeletra">Tamaño de letra</label><br>
        <input type="radio" name="size" value="pequeño" v-model="radio">
        <label>Pequeño</label>
      </div>
      <div>
        <input type="radio" name="size" value="mediano" v-model="radio">
        <label>Mediano</label>
      </div>
      <div>
        <input type="radio" name="size" value="grande" v-model="radio">
        <label>Grande</label>

      </div>
    </section>

  </form>

  <div class="container" :style="{
    backgroundColor: colorDeFondo,
    color: colorDeTexto,
    borderWidth: grosorDeBorde + 'px',
    opacity: opaco ? 0.5 : 1,
    fontFamily: selectedFont
  }" :class="radio">
    <div>
      <p v-if="mostrarTexto">Su opinion:{{ opinion }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      colorDeFondo: "",
      colorDeTexto: "",
      mostrarTexto: true,
      grosorDeBorde: 1,
      opinion: "",
      tipografia: "",
   
      opaco: false,
      radio:"",
      fonts: ["none", "arial", "cursive", "Courier New"],
      selectedSize:"",
      selectedFont: 'none'
    };
  },
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  display: flex;
  gap: 40px;
  color: #2c3e50;
  width: 100%;
}

form {
  padding: 18px;
  border-radius: 20px;
  border: ridge 1px;
  background-color: rgb(19, 75, 75);
  color: white;
  font-weight: bold;
  display: flex;
  flex-direction: column;
  gap: 15px;
  justify-content: center;
  width: 500px;
}

.container {
  padding: 18px;
  border-radius: 60px;
  border: dotted 1px;
  margin: 1rem;
  background-color: rgb(2, 170, 114);
  color: white;
  text-align: center;
  justify-content: center;
  display: flex;
  flex-direction: column;
  gap: 15px;
  align-items: center;
  font-weight: bold;
  float: right;
  width: 200px;
  height: 200px;
}

.pequeño {
  font-size: small;
}

.mediano {
  font-size: medium;
}

.grande {
  font-size: xx-large;
}
</style>
