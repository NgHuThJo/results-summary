async function fetchData(url) {
    const response = await fetch(url);

    return response.json();
}

function createTemplateClone(template) {
    return template.content.cloneNode(true).firstElementChild;
}

function insertData(clone, data) {
    clone.classList.add(clone.getAttribute("class").concat("--" + data["category"].toLowerCase()));
    const skill = clone.querySelector(".skill");
    const points = clone.querySelector(".points");
    const resultsContainer = document.querySelector(".results");
   
    skill.firstElementChild.src = data["icon"];
    skill.lastElementChild.textContent = data["category"];
    points.textContent = data["score"];
    resultsContainer.append(clone);
}

async function main() {
    const url = "data.json";
    const data = await fetchData(url);

    for(let i = 0; i < data.length; i++) {
        const clone = createTemplateClone(document.querySelector(".template"));
        insertData(clone, data[i]);
    }
}

main();