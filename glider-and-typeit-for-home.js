/* #####################################################################################
#################_EFECTO MAQUINA DE ESCRIBIR EN BANNER_###############################
#################################################################################### */

new TypeIt(".banner-description", {
    speed: 120,
    loop: true,
  })
    .type("Web Developer", {delay: 1000})
    .delete(null, {speed: 300, delay: 1000})
    .type("Desarrollador Web", {delay: 1000})
    .delete(null, {speed: 300, delay: 1000})
    .go();


/* #####################################################################################
##########################_CARROUSEL DEL PORFOLIO_#########################################
#################################################################################### */


new Glide('.porfolio-glide', {
    type: 'carousel',
    startAt: 0,
    perView: 1,
    dragThreshold: 10,
  }).mount()
  
  $(".glide__bullet").click(function () {
    $(".glide__bullet").addClass(".glide-active");
  })
  