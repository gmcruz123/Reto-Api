

var generos = [];
var targetashumor = "";

class Genero {
    constructor(nombre,imagen){
        this.nombre= nombre;
        this.imagen= imagen;
    }
}
var g1 = new Genero('Musica clásica','images/generos/clasica.jpg')
var g2 = new Genero('Reggaeton','images/generos/reggaeton.jpg')
var g3 = new Genero('Salsa','images/generos/salsa.jpg')
var g4= new Genero('Techno','images/generos/techno.jpg');
var g5 = new Genero('Blues','images/generos/blues.jpg');
var g6 = new Genero('Flamenco','images/generos/flamenco.jpg');
var g7= new Genero('Instrumental','images/generos/instrumental.jpg');
var g8 = new Genero('Rock','images/generos/rock.jpg');
var g9= new Genero('Pop','images/generos/pop.jpg');
var g10= new Genero('Cristiana','images/generos/cristiana.jpg');
var g11= new Genero('Country','images/generos/country.jpg');
var g12= new Genero('Jazz','images/generos/jazz.jpg');
var g13 = new Genero('Soul','images/generos/soul.jpg');
generos = [g1,g2,g3,g4,g5,g6,g7,g8,g9,g10,g11,g12,g13];


$(function(){

    generos.forEach(item =>{
            targetashumor+=`<div class="col-md-4">
            <img class="imgcard1" src=`+item.imagen+`>
           <p id="targetanombre">`+item.nombre+`</p>
          </div>`
    })
    console.log("hola")

    $('#targetashumor').append(targetashumor);
 });
