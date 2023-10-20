let xBolinha = 300;
let yBolinha = 200;
let diametro = 20;
let raio = diametro/2;

let velocidadeXBolinha = 5;
let velocidadeYBolinha = 5;
let xRaquete = 10;
let yRaquete = 170;
let xRaqueteInimigo = 580;
let yRaqueteInimigo = 200;
let larguraRaquete = 10;
let alturaRaquete = 100;
let velocidadeRaquete = 10;
let criaRaqueteInimigo = 85;


let colisao = false;


function setup() {
  createCanvas(600, 400);
}

function draw() {
  background(0);
 criarBolinha();
 movimentaBolinha();
 encostaNaBorda();
 criaRaquete(xRaquete, yRaquete);
 criaRaquete(xRaqueteInimigo, yRaqueteInimigo);
 movimentaMinhaRaquete();
 colideRaqueteBolinha(xRaquete, yRaquete);
 colideRaqueteBolinha(xRaqueteInimigo, yRaqueteInimigo);
 movimentaRaqueteInimigo();
  
}

function criarBolinha() {
 circle(xBolinha, yBolinha, diametro) 
  
}

function movimentaBolinha(){
  xBolinha += velocidadeXBolinha
  yBolinha += velocidadeYBolinha
  
}

function encostaNaBorda(){
  
 if(xBolinha + raio > width || xBolinha - raio < 0){
   velocidadeXBolinha *= -1
   }
  if(yBolinha + raio > height || yBolinha - raio < 0){
    velocidadeYBolinha *= -1  
  }  

}

  function criaRaquete(){
     rect ( xRaquete, yRaquete, larguraRaquete, alturaRaquete, velocidadeRaquete )
    
  }

function movimentaMinhaRaquete(){

  if(keyIsDown(UP_ARROW)) {yRaquete -= velocidadeRaquete}
  if (keyIsDown(DOWN_ARROW)) {yRaquete += velocidadeRaquete}
    
    
}
    
function colideRaqueteBolinha(x, y){
 hit = collideRectCircle(x, y, larguraRaquete, alturaRaquete, xBolinha, yBolinha, raio);
if (colisao){
 velocidadeXBolinha *= -1 
  
  
  
}

  
 function movimentaRaqueteInimigo (){
 if (keyIsDown(86){
  yRaqueteInimigo -= velocidadeRaquete
   
       }
   
  if(keyIsDown(83)){
 yRaqueteInimigo += velocidadeRaquete
    
  }
   
{} 

}
    
    
    
    
    
    
    