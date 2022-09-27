alert("tuts tuts");

var arrowFunc = (p1, p2)=>{
    console.log("O valor de p1 + p2 é "+(Number(p1)+Number(p2)));
}

arrowFunc(2, 5);

(function (p1, p2){
    console.log("O valor de p1 + p2 é "+(Number(p1)+Number(p2)));
})(1, 5)


