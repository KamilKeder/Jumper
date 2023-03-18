var div_postac = document.querySelector("#div_postac");
var div_klocek = document.querySelector("#div_klocek");
var button_start = document.querySelector("#button_start");
var div_skok = document.querySelector("#div_skok");
var button_skok = document.getElementById("button_skok");
var span_wynik = document.querySelector("#span_wynik");
var div_klocek_gora = document.querySelector("#div_klocek_gora");
var interval_wynik;
var timeout_skok;
var ptak;
button_skok.addEventListener("click",skok);
function skok(){
	if(div_postac.classList != "skok"){
		div_postac.classList.add("skok");
		button_skok.disabled = true;
	timeout_skok = setTimeout(function(){
		div_postac.classList.remove("skok");
		button_skok.disabled = false;
	},700)
}
}
button_start.addEventListener("click", function(){
	span_wynik.innerHTML = 0;
	div_klocek.classList.remove("ukryty");
	div_postac.classList.remove("smierc");
	button_start.disabled = true;
	button_skok.disabled = false;
	div_postac.classList.remove("skok");
	ptak = setTimeout(function(){
		div_klocek_gora.classList.remove("ukryty");
	},6000);
	interval_wynik = setInterval(function(){
		span_wynik.innerHTML = Number(span_wynik.innerHTML)+1;
	},100);
})
var sprawdz = setInterval(function(){
	var postactop = parseInt(window.getComputedStyle(div_postac).getPropertyValue("top"));
	var blockleft = parseInt(window.getComputedStyle(div_klocek).getPropertyValue("left"));
	var klocekgora = parseInt(window.getComputedStyle(div_klocek_gora).getPropertyValue("left"));
	if(blockleft < 20 && blockleft >= 0 && postactop >= 150 ||
	klocekgora < 20 && klocekgora >= -5 && postactop < 100){
		div_klocek.classList.add("ukryty");
		div_postac.classList.add("smierc");
		div_klocek_gora.classList.add("ukryty");
		clearInterval(interval_wynik);
		clearTimeout(ptak);
		clearTimeout(timeout_skok);
		button_start.disabled = false;
		button_skok.disabled = true;
		if(document.getElementById("span_najlepszy").innerHTML < span_wynik.innerHTML){
		document.getElementById("span_najlepszy").innerHTML = span_wynik.innerHTML;
		}
		alert("Koniec Gry twój wynik to: "+span_wynik.innerHTML);
	}
},10);
