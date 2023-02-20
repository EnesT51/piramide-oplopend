function Piramide(){

   const getal = prompt("Voer een Getal in: ");
   if(getal == null){
      alert("Input is leeg, voer een getal in.");
      Piramide();
   }
   for(let i = 0; i < getal; i++){
      for(let x = 0; x < i + 2; x++){
         document.getElementById("Piramide").innerHTML += x;
      }
      document.getElementById("Piramide").innerHTML += "<br>";
   }
}
Piramide();