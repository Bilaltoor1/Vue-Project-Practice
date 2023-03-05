<template>
  <div class="section">
    <div class="bg"></div>
    <div class="content">
      <h1 class="heading">
        Life is a Not So Easy Now !
      </h1>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis eligendi eum exercitationem fuga maxime
        mollitia quae qui! A amet ex expedita, fugit illo in inventore necessitatibus non, nulla officia
        reprehenderit.
      </p>
      <button>Read More</button>
    </div>
  </div>
</template>


<style scoped>
.section {
  position: relative;
  z-index: -1;
}

.content {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.content * {
  margin-top: 1.5rem;
}

.content .heading {
  font-size: 3rem;
  color: white;

}

.content p {
  color: rgba(35, 34, 34, 0.98);
}

.content button {
  padding: .5rem 2rem;
  color: white;
  background-color: #f06a00;
  outline: none;
  cursor: pointer;
  border: none;
}

.bg {
  background-image: linear-gradient(to bottom, rgba(245, 246, 252, 0.8), rgba(117, 19, 93, 0.9)),
  url('../assets/coffee.jpg');
  width: 100%;
  height: 85vh;
  background-size: cover;
  color: white;
}
@media screen and  (max-width: 650px) {
  .content .heading{
    font-size: 2rem;
  }
  .content * {
    margin-bottom: .9rem;
  }
}
</style>