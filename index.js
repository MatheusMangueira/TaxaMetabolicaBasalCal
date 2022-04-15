const btn = document.getElementById("btn");

btn.addEventListener("click", function () {

    const age = document.getElementById("age").value;
    const sex = document.getElementById("sex").value;
    const height = document.getElementById("height").value
    const activity = document.getElementById("activity").value
    const Weight = document.getElementById("Weight").value;

    const calculate = Math.round(
        sex === "masculino"
            ? (66 + (13.7 * Weight) + (5 * height) - (6.8 * age))
            : (665 + (9.6 * Weight) + (1.8 * height) - (4.7 * age))
    );


    const keepWeight = (Math.round(calculate * Number(activity)));
    const loseWeight   = ( keepWeight - 450);
    const gainWeight = (keepWeight + 450);


    const finalResult = `
        
        <p id="basal">Seu metabolismo basal é de <span> <strong> ${calculate} kcal.</strong> </span></p>
            <p id="manter">Para manter seu peso você precisa consumir em média <span> <strong> ${keepWeight} kcal.</strong> </span></p>
            <p id="perder">Para perder peso você precisa consumir em média <span> <strong> ${loseWeight} kcal.</strong> </span></p>
            <p id="ganhar">Para ganhar peso você precisa consumir em média <span> <strong> ${gainWeight} kcal.</strong> </span></p>
        `

    const result = document.getElementById("result_");
    result.innerHTML = finalResult;

})