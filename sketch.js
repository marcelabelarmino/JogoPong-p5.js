//variaveis da bolinha
let xBolinha = 300
let yBolinha = 200
let diametro = 13
let raio = diametro / 2

//velocidade da bolinha
let velocidadexBolinha = 5
let velocidadeyBolinha = 5

//variaveis da raquete aliada
let xRaquete = 5
let yRaquete = 150

//variaveis da raquete universal
let raqueteComprimento = 10
let raqueteAltura = 90

//variaveis da raquete do oponente
let xRaqueteOponente = 585
let yRaqueteOponente = 150
let velocidadeyOponente;
let chanceDeErrar = 0;

let colidiu = false

//placar do jogo
let pontosAliado = 0
let pontosOponente = 0

//sons do jogo
let raquetada;
let ponto;


function setup() {
  createCanvas(600, 400);
}

function draw() {
  background(0);
  mostraBolinha();
  movimentoBolinha();
  verificaColisaoBordas();
  mostraRaquete(xRaquete, yRaquete);
  movimentaMinhaRaquete();
  verificaColisaoRaquete(xRaquete, yRaquete);
  mostraRaquete(xRaqueteOponente, yRaqueteOponente);
  movimentaRaqueteOponente();
  verificaColisaoRaquete(xRaqueteOponente, yRaqueteOponente);
  incluiplacar();
  marcaPonto();
  bolinhaNaoFicaPresa();
}
  
  function mostraBolinha(){
    circle(xBolinha, yBolinha, diametro);
  }
  
  function movimentoBolinha(){
     xBolinha += velocidadexBolinha;
     yBolinha += velocidadeyBolinha;
  }
  
  function verificaColisaoBordas(){
    if (xBolinha + raio > width || xBolinha - raio < 0){
    velocidadexBolinha *= -1;
  }
  
  if (yBolinha + raio > height || yBolinha - raio < 0){
    velocidadeyBolinha *= -1;
  }
  }  

  function mostraRaquete(x,y){
  rect(x, y, raqueteComprimento,raqueteAltura);
}


function movimentaMinhaRaquete(){
  if (keyIsDown(UP_ARROW)) { 
  yRaquete -= 10;
  }
  if (keyIsDown(DOWN_ARROW)){
  yRaquete += 10;
  }
}

 function verificaColisaoRaquete(x,y){
   colidiu = 
collideRectCircle(x, y, raqueteComprimento, raqueteAltura, xBolinha, yBolinha, raio);
   if (colidiu){
    velocidadexBolinha *= -1;
     raquetada.play();
   }
 }

function movimentaRaqueteOponente(){ 
  velocidadeYOponente = yBolinha -yRaqueteOponente - raqueteComprimento / 2 - 30;
  yRaqueteOponente += velocidadeYOponente + chanceDeErrar
  calculaChanceDeErrar()
}

function incluiplacar(){
  stroke(255);
  textAlign(CENTER);
  textSize(16);
  fill(color(255, 140, 0));
  rect(130, 10, 40, 20);
  fill(255);
  text(pontosAliado, 150, 26);
  fill(color(255, 140, 0));
  rect(430, 10, 40, 20);
  fill(255);
  text(pontosOponente, 450, 26);
}

function marcaPonto(){
  if(xBolinha>593){
    pontosAliado += 1;
    ponto.play();
  }
  if(xBolinha<8){
    pontosOponente += 1;
    ponto.play();
  }
}

function preload(){
  raquetada = loadSound("raquetada.mp3");
  ponto = loadSound("ponto.mp3");
}

function calculaChanceDeErrar() {
  if (pontosOponente >= pontosAliado) {
    chanceDeErrar += 1
    if (chanceDeErrar >= 39){
    chanceDeErrar = 40
    }
  } else {
    chanceDeErrar -= 1
    if (chanceDeErrar <= 35){
    chanceDeErrar = 35
    }
  }
}

function bolinhaNaoFicaPresa(){
    if (xBolinha - raio < 0){
    xBolinha = 23
    }
}
