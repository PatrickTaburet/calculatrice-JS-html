// alert(document.getElementById('nom').value);
// alert(document.getElementById('prenom').value);
function $id(id){
    return document.getElementById(id);
}

let operation = []

function performCalcul (num1, operator, num2){
    switch (operator) {
        case '+':
            return num1 + num2;
        case '-' :
            return num1 - num2;
        case '*':
            return num1 * num2;
        case '/' :
            return num1 / num2;
        default:
            throw new Error('Opérateur non valide');
    }
}

$id("clearBoutton").onclick = function() {
    $id("afficheur").value = 0;
}


$id("addBoutton").onclick = function() {
    let nombre1 =  parseFloat($id("afficheur").value);
    operation.push(nombre1)
    operation.push("+")
    $id("afficheur").value = null;
}
$id("subBoutton").onclick = function() {
    let nombre1 =  parseFloat($id("afficheur").value);
    operation.push(nombre1)
    operation.push("-")
    $id("afficheur").value = null;
}
$id("prodBoutton").onclick = function() {
    let nombre1 =  parseFloat($id("afficheur").value);
    operation.push(nombre1)
    operation.push("*")
    $id("afficheur").value = null;
}
$id("divBoutton").onclick = function() {
    let nombre1 =  parseFloat($id("afficheur").value);
    operation.push(nombre1)
    operation.push("/")
    $id("afficheur").value = null;
}

$id("calcBoutton").onclick = function() {
    let nombre1 =  parseFloat($id("afficheur").value);
    operation.push(nombre1)
    $id("afficheur").value = null;
    $id("afficheur").value = performCalcul(operation[0], operation[1], operation[2]);
    operation = []
}



 // $id("clearBoutton").onclick = function() {
//     $id("resultat").value = 0;
//     $id("premier-nombre").value = null;
//     $id("deuxieme-nombre").value = null;
// }
// $id("addBoutton").onclick = function() {
//     let nombre1 =  parseFloat($id("premier-nombre").value);
//     let nombre2 =  parseFloat($id("deuxieme-nombre").value);
//     $id("resultat").value = nombre1 + nombre2;
// }
// $id("subBoutton").onclick = function() {
//     let nombre1 =  parseFloat($id("premier-nombre").value);
//     let nombre2 =  parseFloat($id("deuxieme-nombre").value);
//     $id("resultat").value = nombre1 - nombre2;
// }
// $id("prodBoutton").onclick = function() {
//     let nombre1 =  parseFloat($id("premier-nombre").value);
//     let nombre2 =  parseFloat($id("deuxieme-nombre").value);
//     $id("resultat").value = nombre1 * nombre2;
// }
// $id("divBoutton").onclick = function() {
//     let nombre1 =  parseFloat($id("premier-nombre").value);
//     let nombre2 =  parseFloat($id("deuxieme-nombre").value);
//     $id("resultat").value = nombre1 / nombre2;
// }
