let randomMinMax = function(min,max) {
    let a = min();
    let b = max();
    return a + Math.random() * (b - a);
}

alert(randomMinMax(() => +prompt("Entrez un nombre pour le minimum"),
                    ()=> +prompt("Entrez un nombre pour le maximum")
                  )
     );