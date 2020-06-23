<template>
  <div class="container">
    <div class="img mr-5 ml-5">
      <img src="../assets/logo.png" />
    </div>
    <div class="about mt-4 ml-2">
      <p>
        <b>iService</b> é um aplicativo que visa intermediar contato entre
        pessoas que buscam serviços com profissionais autônomos. A ideia principal é conectar as pessoas de forma
        simples e rápida. Com um aplicativo moderno e intuitivo você poderá buscar por profissionais autônomos para
        uma grande variedade de serviços, como por exemplo, pinturas, serviços gerais, informática, ou até mesmo serviços
        de diária ou aluguéis e também poderá se cadastrar como um profissional e realizar estes serviços, complementando sua
        renda ou em tempo integral.
      </p>
    </div>

    <!-- <div class="image mx-3" :style="image"></div> -->

    <div class="card text-white ml-3 mt-2">
      <div class="card-header">Faça já sua pré-inscrição como profissional!</div>
      <div class="card-body">
        <form @submit.prevent="send">
          <div class="form-group">
            <input
              type="text"
              class="form-control"
              name="name"
              placeholder="Nome completo"
              required
              v-model="dados.name"
            />
          </div>
          <div class="form-group">
            <input
              type="text"
              class="form-control"
              name="phone"
              placeholder="Número de telefone"
              required
              v-model="dados.phone"
            />
          </div>
          <div class="form-group">
            <input
              type="email"
              class="form-control"
              name="email"
              aria-describedby="emailHelp"
              placeholder="Seu melhor e-mail"
              required
              v-model="dados.email"
            />
            <small
              id="emailHelp"
              class="form-text text-muted"
            >Não se preocupe, você não receberá spam.</small>
          </div>
          <button id="button" type="submit" class="btn btn-primary">Cadastrar</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      dados: {
        name: null,
        email: null,
        phone: null
      }
    };
  },
  mounted() {},
  methods: {
    send() {
      axios.post(this.$urlAPI + "/professionals", this.dados).then(() => {
        alert("Obrigado pela inscrição");
        this.limpar();
      });
    },
    limpar() {
      this.dados = {};
    }
  }
};
</script>

<style scoped>
.container {
  display: grid;
  grid-template-columns: 3fr 1fr;
  grid-template-rows: 30vh 70vh;
  grid-template-areas:
    "img card"
    "about card";
  height: 80vh;
  background-color: white;
  border-radius: 1rem;
}

img {
  width: 200px;
  height: 200px;
  margin-left: 180px;
  margin-top: 5px;
}

div .card {
  animation: fade;
  animation-duration: 1.5s;
  background-color: #5f3eb3;
  grid-area: card;
  height: 480px;
  width: 400px;
}

div .about {
  grid-area: about;
  width: 600px;
  text-align: center;
}

button {
  background-color: #409cff;
  width: 200px;
  margin-left: 85px;
}

p {
  font-size: large;
  font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
    "Lucida Sans Unicode", Geneva, Verdana, sans-serif;
}

card.validate-error {
  animation: nono 500ms;
}

@keyframes fade {
  from {
    opacity: 0;
    transform: scale(0.6);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}

@keyframes nono {
  0% {
    transform: translateX(0);
  }
  35% {
    transform: translateX(-15%);
  }
  70% {
    transform: translateX(15%);
  }
  100% {
    transform: translateX(0);
  }
}
</style>