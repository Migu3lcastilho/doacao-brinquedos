// primeiro numero
var contadorBrinquedos = document.getElementById("contadorBrinquedos");
var contadorCriancas = document.getElementById("contadorCriancas");
var contadorDoadores = document.getElementById("contadorDoadores");


var brinquedos = localStorage.getItem("brinquedos");

if (brinquedos === null) {
    brinquedos = 1200;
}

brinquedos = Number(brinquedos);
brinquedos = brinquedos + 1;

contadorBrinquedos.textContent = brinquedos;

localStorage.setItem("brinquedos", brinquedos);


// segundo numero
var criancas = localStorage.getItem("criancas");

if (criancas === null) {
    criancas = 800;
}

criancas = Number(criancas);
criancas = criancas + 1;

contadorCriancas.textContent = criancas;

localStorage.setItem("criancas", criancas);


// terceiro numero
var doadores = localStorage.getItem("doadores");

if (doadores === null) {
    doadores = 200;
}

doadores = Number(doadores);
doadores = doadores + 1;

contadorDoadores.textContent = doadores;

localStorage.setItem("doadores", doadores);