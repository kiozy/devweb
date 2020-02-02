$(document).ready(function() {
    var ativo = false;

    if ($(window).scrollTop() >= 200){
      $("header").addClass("ativo");
          $(".barra").addClass("ativo");
          ativo = true;
    }

    $(".hamburguer-bt").click(function() {
        $(this).toggleClass("on");
        $(".menu").toggleClass("ativo");
        $(".opcoes").toggleClass("ativo");
    });

    $(window).on('scroll', function() {
        if ($(this).scrollTop() > 40) {
          $("header").addClass("ativo");
          $(".barra").addClass("ativo");
          ativo = true;
        } else {
          $("header").removeClass("ativo");
          $(".barra").removeClass("ativo");
          if(!$(".hamburguer-bt").hasClass("on")){
            $(".opcoes").removeClass("ativo");
          }
          ativo = false;
        }
    });
});