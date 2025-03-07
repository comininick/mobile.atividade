var R = Number(prompt("digite o numero a ser analisado"))

if (R > 20 || R < 10){
    alert("Este numero nao esta entre 10 e 20")
}
else if (R >= 20 || R <= 10){
    alert("dentro do escopo")
}