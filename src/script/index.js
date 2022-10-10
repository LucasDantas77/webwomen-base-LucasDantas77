const ul = document.querySelector(".container__lista")
const ulCarrinho = document.querySelector(".container__carrinho")
const newVaga = []

function renderVagas(array) {
    array.forEach((element) => {

        const liVagas = document.createElement("li")
        const divInfos = document.createElement("div")
        const h3Cargo = document.createElement("h3")
        const divInfos2 = document.createElement("div")
        const spanFormacao = document.createElement("span")
        const spanLocal = document.createElement("span")
        const pDescricao = document.createElement("p")
        const spanHome = document.createElement("span")
        const botaoCandidatar = document.createElement("button")

        liVagas.id = element.id
        h3Cargo.innerText = element.title
        spanFormacao.innerText = element.enterprise
        spanLocal.innerText = element.location
        pDescricao.innerText = element.descrition
        spanHome.innerText = element.modalities
        botaoCandidatar.classList.add("candidatar")
        botaoCandidatar.id = element.id
        const verificarCandidato = newVaga.findIndex((vagas) => {
            return vagas.id == element.id
        })
        if (verificarCandidato !== -1) {
            botaoCandidatar.classList.toggle("candidatar")
            botaoCandidatar.classList.toggle("remover")
            botaoCandidatar.addEventListener("click", () => {
                newVaga.splice(verificarCandidato, 1)
                ul.innerHTML = ""
                renderVagas(jobsData)
                renderCarrinhosVagas(newVaga)
            })
        } else {
            botaoCandidatar.addEventListener("click", () => {

                newVaga.push(element)

                renderCarrinhosVagas(newVaga)

                ul.innerHTML = ""

                renderVagas(jobsData)
            })

        }



        liVagas.classList.add("lista__cards")
        divInfos.classList.add("div__infos")
        divInfos2.classList.add("div__info")

        divInfos.append(h3Cargo, divInfos2, pDescricao, spanHome, botaoCandidatar)
        divInfos2.append(spanFormacao, spanLocal)

        liVagas.append(divInfos)
        ul.append(liVagas)
    });
}
renderVagas(jobsData)

function renderCarrinhosVagas(array) {
    ulCarrinho.innerHTML = ""
    console.log(array)

    array.forEach((element) => {
        const liCarrinho = document.createElement("li")

        const h3CargoCarrinho = document.createElement("h3")
        const divInfosCarrinho = document.createElement("div")
        const spanFormacaoCarrinho = document.createElement("span")
        const spanLocalCarrinho = document.createElement("span")
        const botaoRemoveCarrinho = document.createElement("button")

        const imgLixo = document.createElement("img")
        imgLixo.src = "./src/assets/img/trash (2).png"

        botaoRemoveCarrinho.append(imgLixo)

        liCarrinho.id = element.id
        botaoRemoveCarrinho.id = element.id
        botaoRemoveCarrinho.addEventListener("click", () => {

            let removeVaga = newVaga.find(({
                vaga
            }) => vaga == newVaga)
            newVaga.splice(removeVaga, 1)

            ul.innerHTML = ""
            renderVagas(jobsData)

            renderCarrinhosVagas(newVaga)
        })

        h3CargoCarrinho.innerText = element.title
        spanFormacaoCarrinho.innerText = element.enterprise
        spanLocalCarrinho.innerText = element.location

        liCarrinho.classList.add("carrinho__vagas")
        divInfosCarrinho.classList.add("div__info")

        divInfosCarrinho.append(spanFormacaoCarrinho, spanLocalCarrinho)
        liCarrinho.append(h3CargoCarrinho, divInfosCarrinho, botaoRemoveCarrinho)
        ulCarrinho.append(liCarrinho)
    })
}