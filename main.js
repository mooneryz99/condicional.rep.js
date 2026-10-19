const f = document.getElementById("formulario")

f.addEventListener("submit", function(e){
    e.preventDefault();

    const compra = Number(document.getElementById("compra").value)

    var desconto
    if (compra > 500) {
        desconto = compra * 0.1
    } else if (compra > 100) {
        desconto = compra * 0.05
    } else {
        desconto = 0
    }

    const final = compra - desconto

    document.getElementById("resultado").textContent =
        "Compra: " + compra + " | Desconto: " + desconto + " | Final: " + final
});
