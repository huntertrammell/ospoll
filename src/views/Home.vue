<template>
<main>
 <section class="pt-5">
   <div class="container">
     <div class="row hero">
       <div class="offset-lg-3 col-lg-6 col-md-12 d-flex justify-content-center align-items-center">
         <div>
          <h1 class="hero_headline visually-hidden">ospoll</h1>
          <img alt="ospoll Logo" src="../assets/logo.png" width="700" height="233"/>
          <p class="hero_content mb-4">Open Source Developer Surveys</p>
          <router-link class="btn btn-gradient" to="/surveys">GET STARTED</router-link>
         </div>
       </div>
     </div>
   </div>
 </section>
 <section class="bg-light clip-path-section">
   <div class="container">
     <div class="row">
       <div class="col-lg-6 col-md-12 my-lg-5 pt-lg-0 pt-5 my-0 d-flex justify-content-center align-items-center">
         <div class="text-end">
            <h2 class="text-dark">No waiting. No Paywall. Just Live Data</h2>
            <p clas="text-dark">Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum veniam accusantium, alias quos est nemo laboriosam. Debitis temporibus veniam nam, tempora quibusdam, quod porro, nostrum praesentium earum obcaecati eos itaque.</p>
            <router-link class="btn btn-light mt-4" to="/about">OUR MISSION</router-link>
         </div>
       </div>
       <div class="col-lg-6 col-md-12 px-lg-5 px-2 pb-lg-5 pb-0 d-flex justify-content-center align-items-center">
         <img src="@/assets/home_about.svg" alt="SVG illustration from UnDraw depicting different user accounts" class="img-fluid" width="524" height="435">
       </div>
     </div>
   </div>
 </section>
 <section class="py-5">
   <div class="container">
     <div class="row">
       <div class="col-lg-6 offset-lg-3 col-sm-12">
         <h2 class="text-light">Interested in contributing?</h2>
         <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis consectetur nihil id cum voluptatibus expedita! Totam magnam, optio fugiat, id animi sit, doloremque facere iure omnis veniam culpa esse dolor?</p>
         <a href="#" class="btn btn-gradient mt-4">MORE INFORMATION</a>
       </div>
     </div>
   </div>
 </section>
</main>
</template>

<script>
export default {
  name: 'Home'

}
</script>

<style lang="scss">
.hero {
  h1 {
  font-size: 7rem !important;
  }
  p {
    text-transform: uppercase;
    font-size: 1.5rem !important;
  }
  @media(max-width: 992px){
    img {
      width: 100%;
      height: auto;
      display: block;
    }
  }
}
.clip-path-section {
  clip-path: polygon(0% 25%, 100% 0%, 100% 75%, 0% 100%);
  background: linear-gradient(45deg, #ac0cdd, #530df8);
  h2 {
    color: #f8f9fa !important;
  }
  .row {
    min-height: 1000px;
    @media(max-width: 992px){
      min-height: 100%;
      padding: 3rem 0;
      flex-direction: column-reverse;
    }
  }
  @media(max-width: 992px){
    clip-path: unset;
    margin-top: 6rem;
  }
}
</style>
