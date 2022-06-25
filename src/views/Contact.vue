<template>
  <div class="container">
    <h1>Une question ?</h1>
    <form action="/action_page.php">
      <label for="fname">Nom</label>
      <input 
      type="text"
      id="fname"
      name="firstName"
      placeholder="Votre nom..."
      />
      <label for="fname">Prénom</label>
      <input 
      type="text"
      id="lname"
      name="lastName"
      placeholder="Votre Prénom..."
      />
      <label for="subject">Message</label>
      <textarea 
      name="subject" 
      id="subject" 
      cols="30" 
      rows="10"
      placeholder="Posez-nous votre question"
      ></textarea>
    </form>
  </div>
</template>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
