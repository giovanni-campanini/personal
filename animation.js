
/* #####################################################################################
##########################_EFECTO EN SCROLL_#########################################
#################################################################################### */

    AOS.init();

/* -------------------Adaptacion responsive------------------------- */
if ($(window).width() < 920) {
  $(".about-col-2").attr("data-aos", "fade-up");
  $(".f-col-1").attr("data-aos", "fade-left");
  $(".f-col-2").attr("data-aos", "fade-right");
  $(".f-col-3").attr("data-aos", "fade-left");
}

/* #####################################################################################
##########################_EFECTO EN HOVER DE FEATURES-IMG_#########################################
#################################################################################### */

$("#features-container-img-1").hover( function () {
  $("#features-img-1").attr("src", "styles/images/responsive-hover.png");
} , function() {
  $("#features-img-1").attr("src", "styles/images/responsive.png");
});

$("#features-container-img-2").hover( function () {
  $("#features-img-2").attr("src", "styles/images/ux-hover.png");
} , function() {
  $("#features-img-2").attr("src", "styles/images/ux.png");
});

$("#features-container-img-3").hover( function () {
  $("#features-img-3").attr("src", "styles/images/seo-hover.png");
} , function() {
  $("#features-img-3").attr("src", "styles/images/seo.png");
});

/* #####################################################################################
##########################_EFECTO EN HOVER DE TECH-STARS_###############################
#################################################################################### */

function showStars(i) {
  $(".tech-col").eq(i).hover( function () {
    let cuenta = 0;
    let intervalo = setInterval(() => {
      if(cuenta < $(".star-img" + (i+1)).length){
        $(".star-img" + (i+1)).eq(cuenta).addClass("subir");
        cuenta += 1;
      } else {
        clearInterval(intervalo);
      }
    }, 100);
  } , function() {
    let count = 0;
    let intervalo_2 = setInterval(() => {
      if(count < $(".star-img" + (i+1)).length){
        $(".star-img" + (i+1)).eq(count).removeClass("subir");
        count += 1;
      } else {
        clearInterval(intervalo_2);
      }
    }, 100);
  });

};
if ($(window).width() > 920) {
  for (var i = 0; i<$(".tech-col").length; i++) {
    showStars(i);
  };
} else {
  $(".star-img").css({"top":"0"});
  $(".star-container").attr("data-aos", "fade-up");
  $(".star-container").attr("data-aos-duration", "1000");
}



// ######################################################################################
// -----------------------Funcion para enviar mail--------------------------------
// ######################################################################################

function enviarMail() {
  if ((document.getElementById("nombre").value != "") && (document.getElementById("correo-electronico").value != "") && (document.getElementById("mensaje").value != "")) {
    (function() {
      document.getElementById("send-form").disabled = true; /* inhabilitar boton para evitar spam */
      emailjs.init("user_GpTZsiSpZedO3wKGansOc");
      })();
      function sendMail(params) {
        var tempParams = {
          from_name : document.getElementById("nombre").value,
          from_email : document.getElementById("correo-electronico").value,
          message : document.getElementById("mensaje").value,
        };
        emailjs.send("service_afkae7x" ,"template_87i6xae", tempParams)
        .then(function() {
            console.log('SUCCESS!');
            $(".contact-form-success").css({"visibility": "visible", "height":"auto"});
            $("#nombre").val("");
            $("#correo-electronico").val("");
            $("#mensaje").val("");
            document.getElementById("send-form").disabled = false;
        }, function(error) {
            console.log('FAILED...', error);
            document.getElementById("send-form").disabled = false;
        });
      };
      sendMail();
  } else {
    alert("Debe completar todos los campos")
  };
};

// ######################################################################################
// -----------------------Cerrar menu al elegir seccion (responsive)----------------------
// ######################################################################################
$('.nav-link').on('click', function(){
  $('.navbar-toggler').addClass("collapsed");
  $('.navbar-toggler').attr("aria-expanded", "false");
  $(".navbar-collapse").removeClass("show");
});


// ######################################################################################
// -----------------------Reposicionamiento del titulo del banner------------------------
// ######################################################################################

let altoMenu = $(".navbar").height();

$(".banner-text").css({"top": altoMenu/2});



