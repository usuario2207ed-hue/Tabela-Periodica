
document.addEventListener("DOMContentLoaded", () => {

    const tableContainer = document.getElementById("periodicTable");

    const modal = document.getElementById("elementModal");

    const modalBody = document.getElementById("modalBody");

    const closeModalBtn = document.getElementById("closeModal");





    if (typeof tabelaPeriodicaDados === "undefined" || !tabelaPeriodicaDados.elements) {

        console.error("Erro crítico: A base 'tabelaPeriodicaDados' não foi detectada.");

        return;

    }





    tabelaPeriodicaDados.elements.forEach(elem => {

        const card = document.createElement("div");

        card.className = `element ${getCategoryClass(elem.category)}`;

        

 

        card.style.gridColumn = elem.group;

        card.style.gridRow = elem.period;



        card.innerHTML = `

            <div class="atomic-number">${elem.atomicNumber}</div>

            <div class="symbol">${elem.symbol}</div>

            <div class="element-name">${elem.namePt}</div>

            <div class="atomic-mass">${elem.atomicMass}</div>

        `;



 

        card.addEventListener("click", () => {

            modalBody.innerHTML = `

                <h2 style="margin-bottom: 15px; color:#0f172a;">${elem.namePt} (${elem.symbol})</h2>

                <p style="padding: 6px 0; border-bottom: 1px solid #e2e8f0;"><strong>Número Atômico:</strong> ${elem.atomicNumber}</p>

                <p style="padding: 6px 0; border-bottom: 1px solid #e2e8f0;"><strong>Massa Atômica:</strong> ${elem.atomicMass} u</p>

                <p style="padding: 6px 0; border-bottom: 1px solid #e2e8f0;"><strong>Categoria:</strong> ${elem.category}</p>

                <p style="padding: 6px 0;"><strong>Posição IUPAC:</strong> Período ${elem.period > 7 ? (elem.period - 2) + ' (Série)' : elem.period}, Grupo ${elem.group}</p>

            `;

            modal.style.display = "block";

        });



        tableContainer.appendChild(card);

    });



 

    closeModalBtn.addEventListener("click", () => modal.style.display = "none");

    window.addEventListener("click", (e) => { if (e.target === modal) modal.style.display = "none"; });

});



function getCategoryClass(cat) {

    switch (cat) {

        case "Metais Alcalinos": return "alkali";

        case "Metais Alcalino-Terrosos": return "alkaline";

        case "Metais de Transição": return "transition";

        case "Metais Pós-Transição": return "post-transition";

        case "Semimetais": return "metalloid";

        case "Não Metais": return "nonmetal";

        case "Halogênios": return "halogen";

        case "Gases Nobres": return "noble";

        case "Lantanídeos": return "lanthanide";

        case "Actinídeos": return "actinide";

        default: return "";

    }

} 