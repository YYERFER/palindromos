/*Ejercicio
Tienes una cadena de texto , comprobar si es un palindromo o no. Los palindromos
son palabras que se leen igual aun estando invertidas.
Ejemplo: ana , bob , otto, luzazul ,
No tengas encuenta espacios o simbolos(+-?'*"")
-Ejecutas la funcion:
palindromo("miguel")//devuelve: false
palindromo("ana")//devuelve: true
*/

let arrayNombre=[];
let array2=[];

let cont='';
function functionPalindromo(){
    let nombre = document.getElementById('nombre').value;

    arrayNombre = Array.from(nombre)

    let reversa = Array.from(nombre).reverse();


    for(let indice in arrayNombre){
        if(arrayNombre[indice]==reversa[indice]){
                    console.log(true);
                    cont=1;
                }else{
                    console.log(false);
                    cont = 0;
                }
    }

    cont == 1 
    ? document.getElementById('palindromo').innerHTML=true
    : document.getElementById('palindromo').innerHTML=false



}