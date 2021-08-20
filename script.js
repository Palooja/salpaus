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
  if (kk ==03 ||kk==04 || kk==05){
    return "kevät " + pv+"."+kk+"."+vuosi;
  }
  else if(kk==06 || kk==07 || kk==08){
    console.log
    return "kesä " + pv+"."+kk+"."+vuosi;
  }
  else if(kk==09 || kk==010 || kk==011){
    return "syksy" + pv+"."+kk+"."+vuosi;
  }
  else{
    return "talvi " + pv+"."+kk+"."+vuosi;
  }
}  


for(let i=1; i<16; i++){
  console.log(i+ " " + pvmFin(pvm.split("/")[0],pvm.split("/")[1],pvm.split("/")[2]));

}


/*
monen
rivin
kommentti
*/


//console.log(document.querySelector("#kentta").type);
console.log(document.querySelector('.lisaanappi').value);
document.querySelector('.lisaaNappi').addEventListener('click', e =>{
  e.preventDefault();
  console.log(document.querySelector('#kentta').value);

document.querySelector('.ilmoitus').innerHTML = document.querySelector('#kentta').value;

setTimeout(() => document.querySelector('.ilmoitus').innerHTML='', 3000);
});
document.querySelector('.merkinta').addEventListener('click', e =>{
e.preventDefault();
console.log("nappi toimii!");
if(document.querySelector('#teht_a').checked){

  }
  else{
    alert('Tehtävä A ei ole merkitty');
  }

  if(document.querySelector('#teht_b').checked){
    alert('Tehtävä B on merkitty');
  }
  else{
    alert('Tehtävä B ei ole merkitty');
    }
});