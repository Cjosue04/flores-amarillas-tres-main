// Sincronizar las letras con la canción
var audio = document.querySelector("audio");
var lyrics = document.querySelector("#lyrics");

// Array de objetos que contiene cada línea y su tiempo de aparición en segundos
var lyricsData = [
  { text: "1.Tus ojos brillan con alegría.", time: 21 },
  { text: "2.Tu voz me arrulla y me reconforta.", time: 23 },
  { text: "3.Tu risa es contagiosa y me hace feliz.", time: 26 },
  { text: "4.Tu corazón es puro y lleno de amor.", time: 29 },
  {text: " 5.Tu alma es hermosa y radiante.", time:32},
  { text: "6.Tu manera de amarme aunque no este bien", time: 35 },
  { text: "7.Tu mente es aguda e ingeniosa.", time: 38 },
  {text: "8.Tu cuerpo es fuerte y resistente.", time:41},
  { text: "9.Eres única e irrepetible..", time:44  },
  { text: "10.Me aceptas tal como soy.", time:47  },
  { text: "11.Me haces sentir amado y valorado.", time:50  },
  { text: "12.Me inspiras a ser mejor persona.", time:53  },
  { text: "13.Me apoyas en mis sueños y metas", time:56  },
  { text: "14.Me haces reír y disfrutar de la vida.", time:59},
  { text: "15.Me das paz y tranquilidad.", time:62  },
  { text: "16. Cada vez que me alejas para no lastimarme", time:62  },
  { text: "17.Tu forma de acriciar mi cabeza cuando estoy mal", time:65 },
  { text: "18. Cuando me defiendes de todos", time:68  },
  { text: "19.Tu forma de ver la vida", time:71  },
  { text: "20.La forma en la que me abrazas", time:74  },
  { text: "21.Cuando prefieres escucharme a mi en vez que los demas", time:77 },
  { text: "22.Tu forma de ser", time:80},
  { text: "23.Tu forma de hablar me fascina", time:83  },
  { text: "24.Tu forma de pensar me sorprende.", time:86  },
  { text: "25.Me encanta tu creatividad", time:89  },
  { text: "26.Eres mi compañera de aventuras.", time:92  },
  { text: "27.Eres mi amor.", time:95  },
  { text: "28.La forma en que me besas", time:98 },
  { text: "29.Me encanta tu creatividad", time:101  },
  { text: "30.Cuando me dices amor", time:104  },
  { text: "31.Cuando me abrazas", time:107  },
  { text: "32.Cuando me dices te amo", time:110 },
  { text: "33.Cuando no tienes miedo en ser tu", time:113 },
  { text: "34.Cuando brillas con tu sonrrisa", time:116  },
  { text: "35.Cuando te preocupas por mi", time: 119 },
  { text: "36.Cuando sientes miedo a perdernos", time:122},
  { text: "37.Cuando lo unico que importa es estar juntos", time:125  },
  { text: "38.Cuando me haces enorjar y sonrries :) ", time:128  },
  { text: "39.Cuando te acuerdas de nuestras fechas", time: 131 },
  { text: "40.Cuando no me dejas solo", time:134  },
  { text: "41. Amo tus dudas y aciertos", time:137  },
  { text: "42.Amo cuando me dices con un abrazo QUEDATE", time:140 },
  { text: "43.Amo amanecer a tu lado", time:143  },
  { text: "44.Amo cuando me besas en a frente", time:146 },
  { text: "45.Amo amarte en tus peores dias", time:149},
  { text: "46.Te amo tal y cual eres", time:153 },
  { text: "47.Te amo por que haces que mis dias tristes, sean menos tristes", time:156 },
  { text: "48.Te amo cuando me alejas y me atraes con tu mirada", time:158 },
  { text: "49. Te amo por ser tu", time:162 },
  { text: "50. Te amo cuando piensas en nosotros", time:165},
  { text: "51.Te amo por que eres la mujer de mis sueños", time:168 },
  { text: "52.Te amo aunque tengas miedo a intentarlo", time:171 },
  { text: "53.Te amo por ser dulce", time:173},
  { text: "54.Te amo por ser tu", time:176 },
  { text: "55.Te amo por que haces que mis dias sean felices", time:179 },
  { text: "56.Cuando me arropas por las noches", time:181 },
  { text: "57.Cuando me das una pastillita para sentirme mejor", time:183 },
  { text: "58.Cuando hacemos el amor", time:186 },
  { text: "59.Cuando haces que lo imposible sea posible", time:189 },
  { text: "60.Cuando dormimos juntos", time:191},
  { text: "61.Cuando lo resolvemos juntos", time:193 },
  { text: "62.Cuando seamos viejitos y me des un besito en la frente", time:196},
  { text: "63.Te amo por siempre y para siempre", time:199 },
  { text: "64.Eres mi confidente", time:210},
  { text: "65.Por que nunca me dejas solo", time:213 },
  { text: "66.Eres mi felicidad.", time:216},
  { text: "67.Cuando gritas", time:219},
  { text: "68.Cuando te enojas", time:221},
  { text: "69.Me cuidas", time:224 },
  { text: "70.Cuando me amas ", time:227 },
  { text: "71.Cuando me viras los ojos", time:230},
  { text: "72.Cuando me miras", time:233},
  { text: "73.Cuando se para el tiempo a tu lado", time:236},
  { text: "74.Cuando me dices que me vaya aunque no quieras eso", time:239},
  { text: "75.Cuando hablas cosas sin sentido", time:241 },
  { text: "76.Cuando somos un equipo y una familia ", time:243  },
  { text: "77.Cuando ries", time:246 },
  { text: "78.Cuando lo arreglamos juntos a pesar de todo", time:249},
  { text: "79.Razones para irme ", time:251 },
  { text: "1.No tengo razones para irme , eres tu solo tu con la que quiero estar el resto de mi vida", time:254},

 
];

// Animar las letras
function updateLyrics() {
  var time = Math.floor(audio.currentTime);
  var currentLine = lyricsData.find(
    (line) => time >= line.time && time < line.time + 6
  );

  if (currentLine) {
    // Calcula la opacidad basada en el tiempo en la línea actual
    var fadeInDuration = 0.1; // Duración del efecto de aparición en segundos
    var opacity = Math.min(1, (time - currentLine.time) / fadeInDuration);

    // Aplica el efecto de aparición
    lyrics.style.opacity = opacity;
    lyrics.innerHTML = currentLine.text;
  } else {
    // Restablece la opacidad y el contenido si no hay una línea actual
    lyrics.style.opacity = 0;
    lyrics.innerHTML = "";
  }
}

setInterval(updateLyrics, 1000);

//funcion titulo
// Función para ocultar el título después de 216 segundos
function ocultarTitulo() {
  var titulo = document.querySelector(".titulo");
  titulo.style.animation =
    "fadeOut 3s ease-in-out forwards"; /* Duración y función de temporización de la desaparición */
  setTimeout(function () {
    titulo.style.display = "none";
  }, 3000); // Espera 3 segundos antes de ocultar completamente
}

// Llama a la función después de 216 segundos (216,000 milisegundos)
setTimeout(ocultarTitulo, 216000);