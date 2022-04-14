const btn = document.getElementById("btn");

btn.addEventListener("click", function () {

    const idade = document.getElementById("idade").value;
    const sexo = document.getElementById("sexo").value;
    const altura = document.getElementById("altura").value
    const atividade = document.getElementById("atividade").value
    const peso = document.getElementById("peso").value;

    const calcular = Math.round(
        sexo === "masculino"
            ? (66 + (13.7 * peso) + (5 * altura) - (6.8 * idade))
            : (665 + (9.6 * peso) + (1.8 * altura) - (4.7 * idade))
    );


    const manter_peso = (Math.round(calcular * Number(atividade)));
    const perder_peso = (manter_peso - 450);
    const ganhar_peso = (manter_peso + 450);


    const resultado_final = `
        
        <p id="basal">Seu metabolismo basal é de <span> <strong> ${calcular} kcal.</strong> </span></p>
            <p id="manter">Para manter seu peso você precisa consumir em média <span> <strong> ${manter_peso} kcal.</strong> </span></p>
            <p id="perder">Para perder peso você precisa consumir em média <span> <strong> ${perder_peso} kcal.</strong> </span></p>
            <p id="ganhar">Para ganhar peso você precisa consumir em média <span> <strong> ${ganhar_peso} kcal.</strong> </span></p>
        `

    const result = document.getElementById("resultado");
    result.innerHTML = resultado_final;

})