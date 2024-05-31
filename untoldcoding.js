const text =
  "La verdad lo primero es que quiero agradecerte por ser parte de mi vida y estar conmigo eres los mejor que ha podido pasar en la vida y por eso quiero que sepas que aún que yo molestando con el no casarnos tu siempre serás lo mejor de mi vida y quiero que nos casemos y tengamos a Gizmo amor, aún recuerdo el primer día que nos dimos un beso 😘 y desde hay han sido los mejor dos años de mi vida, la verdad amor quiero que sepas que cuando esté apunto de morir quiero que seas lo último que ven mis ojos, espero que allamos pasado muchos años juntos y aver hecho muchas cosas juntos, espero que cuando muera tu seas lo más lindo que recuerden mis ojos, de verdad no sabes cuándo te amo y te agradezco por soportarme y ser el amor de mi vidaMe acuerdo cuando te di el primer anillo que yo no sabía cómo dártelo por qué me daba demasiada vergüenza, te lo di hasta el final por qué no sabía que decirte ni como dártelo y sin saber que sería el primero de mucho que se viene en el futuro También me acuerdo de la primera vez que salimos solos tu y yo ( no me dejaste pagar osea ahora tampoco pero ya me dejas un poco más mi amor ) La verdad amor son demasiado recuerdos que tengo tengo palabras para describir lo hermoso que han sido estos años amor, la verdad te agradezco mucho por todo y te amo mucho mucho y quiero que sepas te eres lo mejor del mundo te amo mucho ❤ mi futura esposa hermosa Atte: Tu futuro esposo.";

const paragraph = text.split("");

let i = 0;

function dashOut(arr, callback) {
  if (i < arr.length) {
    document.querySelector(".textCont").textContent += arr[i];
    i++;
    setTimeout(function () {
      dashOut(arr, callback);
    }, interval(arr[i]));
  } else {
    callback();
  }
}

function interval(letter) {
  if (letter == ";" || letter == "." || letter == ",") {
    return Math.floor(Math.random() * 500 + 500);
  } else {
    return Math.floor(Math.random() * 130 + 5);
  }
}

function startFromBegin() {
  i = 0;
  dashOut(paragraph, showHeartAnimation);
}

function showHeartAnimation() {
  document.querySelector(".stage").style.display = "block";
}

startFromBegin();

$(function() {
  $(".heart-link").on("click", function(e) {
    e.preventDefault();
    $(".heart").addClass("is-active");
    setTimeout(function() {
      window.location.href = "./cupon.html";
    }, 1000); // Espera a que termine la animación antes de redirigir
  });
});
