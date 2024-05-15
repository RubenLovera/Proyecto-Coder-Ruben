document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('calculateButton').addEventListener('click', calculateInsurance);
});

const insurancePlans = [
    { plan: 'Bronce', baseCost: 100 },
    { plan: 'Plata', baseCost: 200 },
    { plan: 'Oro', baseCost: 300 }
];

function getPlanDetails(planName) {
    return insurancePlans.find(plan => plan.plan === planName);
}

function calculateInsurance() {
    const selectedPlan = document.getElementById('plan').value;
    const age = parseInt(document.getElementById('age').value, 10);
    const planDetails = getPlanDetails(selectedPlan);
    if (!planDetails) {
        document.getElementById('result').innerText = 'Plan no encontrado. Por favor selecciona un plan válido.';
        return;
    }

    let finalCost = planDetails.baseCost;
    if (age > 50) {
        finalCost += 50; // Incremento por edad
    }

    // Simulación de incremento anual
    const annualIncrements = simulateAnnualIncrement(finalCost, 5, 0.05);
    displayResults(selectedPlan, finalCost, annualIncrements);
}

function simulateAnnualIncrement(initialCost, years, incrementRate) {
    let costs = [];
    let currentCost = initialCost;
    for (let i = 1; i <= years; i++) {
        currentCost *= (1 + incrementRate);
        costs.push({ year: i, cost: currentCost.toFixed(2) });
    }
    return costs;
}

function displayResults(plan, initialCost, annualIncrements) {
    let resultText = `El costo inicial de tu seguro ${plan} es de $${initialCost}.`;
    resultText += '\n\nProyección del costo para los próximos años:\n';
    annualIncrements.forEach(increment => {
        resultText += `Año ${increment.year}: $${increment.cost}\n`;
    });
    document.getElementById('result').innerText = resultText;
}
