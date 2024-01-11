document.getElementById("button").onclick = function(){
    
    let x = Math.floor(Math.random() *6) + 1; //dice1
    let y = Math.floor(Math.random() *20) + 1; //dice2
    let z = Math.floor(Math.random() *11) + 1; //dice3

    document.getElementById("label-x").innerHTML = x;
    document.getElementById("label-y").innerHTML = y;
    document.getElementById("label-z").innerHTML = z;

}
