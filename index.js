"use strict";

const quizfragen = {
   frage1: "Welches ist die Hauptstadt von der Schweiz?",
   frage2: "Welches ist die Hauptsadt von Deutschland?",
   frage3: "Welches ist die Hauptstadt von Frankreich?",
};

const quizantworten = {
   antwort1: "Bern",
   antwort2: "Berlin",
   antwort3: "Paris",
};

const frageanzeige = document.querySelector(".fragen");
const resultatanzeige = document.querySelector(".resultatanzeige");
const nachstefragebtn = document.querySelector(".startequiz");

function antwortPruefen() {
   const eingabe = prompt("Geben Sie ihre Antwort ein");
   const capitaleingabe = eingabe.charAt(0).toUpperCase() + eingabe.slice(1);

   if (capitaleingabe === quizantworten.antwort1) {
      return (resultatanzeige.innerHTML = "richtig");
   }
   if (capitaleingabe === quizantworten.antwort2) {
      return (resultatanzeige.innerHTML = "richtig");
   }
   if (capitaleingabe === quizantworten.antwort3) {
      return (resultatanzeige.innerHTML = "richtig");
   } else {
      return (resultatanzeige.innerHTML = "falsch");
   }
}

//erster EventListener Quiz Start--> Frage 1

nachstefragebtn.addEventListener("click", function (Event) {
   const target = Event.target;
   console.log(target);

   if (target.classList.contains("startequiz")) {
      frageanzeige.innerHTML = quizfragen.frage1;
      resultatanzeige.innerHTML = "";
      setTimeout(antwortPruefen, 3000);

      nachstefragebtn.classList.add("frage2");
      nachstefragebtn.classList.remove("startequiz");
      nachstefragebtn.value = "Nächste Frage";
   } else {
      return;
   }

   
//zweiter Eventlistener nächste Frage --> Frage 2
   nachstefragebtn.addEventListener("click", function (Event) {
      const target = Event.target;
      console.log(target);

      if (target.classList.contains("frage2")) {
         frageanzeige.innerHTML = quizfragen.frage2;
         resultatanzeige.innerHTML = "";
         setTimeout(antwortPruefen, 3000);

         nachstefragebtn.classList.add("frage3");
         nachstefragebtn.classList.remove("frage2");
      } else {
         return;
      }

      
//dritter Eventlistener nächste Frage --> Frage 3
      nachstefragebtn.addEventListener("click", function (Event) {
         const target = Event.target;
         console.log(target);

         if (target.classList.contains("frage3")) {
            frageanzeige.innerHTML = quizfragen.frage3;
            resultatanzeige.innerHTML = "";
            setTimeout(antwortPruefen, 3000);
         } else {
            return;
         }
      });
   });
});
