function laskutehtava(ekaArvo, tokaArvo){
  return ekaArvo + tokaArvo;
}

console.log("täälläollaan");

let ika = 16; // numerot kirjoitetaam ilman lainausmerkkejä
ika = ika + 1; //integer (int)

let ikakirjaimina = "17"; //string (str)

console.log(ikakirjaimina);

console.log("sinun ikäsi on: " + ika);

let juuvaiei = true; //boolean

console.log(juuvaiei)

let nimi = "keijo";

console.log ("kirjoita isolla;" + nimi.toUpperCase())

console.log("splittausharjoitus:" + nimi.split(" ")[0]);

// While ja for loop:

for(let i=0; i<=10; i++){
  console.log("loopin iteraatioluku on:" + i);
}

if(ika > 18 || nimi == "Max Palo-oja"){
  console.log("onnea olet täysi ikäinen");

}

else if (ika === 18 && nimi == "keijo"){
  console.log("onnea keijo, olet juuri ja juuri täysi-ikäinen");
}


else{
  console.error("kasva vielä vähän...")
}

console.log(laskutehtava(9768, 9875));

let pvm = "2021/08/18";

function pvmFin(vuosi, kk, pv){
    return "paivamaara oikeassa jarjestuksessa on " + pv+"."+kk+"."+vuosi;
}
  

console.log(pvmFin(pvm.split("/")[0],pvm.split("/")[1],pvm.split("/")[2]));




















/*
monen
rivin
kommentti
*/