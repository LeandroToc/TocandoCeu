JavaScript
/**
 * Função responsável por realizar uma pesquisa (assumindo que os dados de 'musicas' já estejam disponíveis)
 * e exibir os resultados em uma seção HTML com o ID "resultados-pesquisa".
 * 
 * @param {Array} musicas - Um array de objetos, onde cada objeto representa uma música.
 *  Cada objeto deve possuir as seguintes propriedades:
 *   - nome: O nome da música.
 *   - descricao: Uma breve descrição da música.
 *   - coreografia: O link para a coreografia da música.
 */
function pesquisar(){
    let section = document.getElementById("resultados-pesquisa");
    let resultados = "";
    let campoPesquisa = document.getElementById("campo-pesquisa").value;
    let nomeMusica = "";
    let descricaoMusica = "";
    let tagsMusica = "";
    
    if (!campoPesquisa.trim()){
        section.innerHTML = "É necessário inserir um texto para pesquisar!";
        return;
    }

    campoPesquisa = campoPesquisa.toLowerCase();

    console.log(campoPesquisa);

    for (let musica of musicas){
        nomeMusica = musica.nome.toLowerCase();
        descricaoMusica = musica.descricao.toLowerCase();
        tagsMusica = musica.tags.toLowerCase();

        //Se titulo incluir campoPesquisa exibir bloco
        if(nomeMusica.includes(campoPesquisa) || descricaoMusica.includes(campoPesquisa) || tagsMusica.includes(campoPesquisa)){
            console.log(nomeMusica.includes(campoPesquisa));
            resultados += `
                <div class="item-resultado">
                    <h2>${musica.nome}</h2>
                    <p class="descricao-meta">${musica.descricao}</p>
                    <a href="${musica.coreografia}" target="_blank">Coreografia</a>
                </div>
            `;
        }
    }
    if (!resultados) {
        resultados = "Nada foi encontrado!";
    }else
        section.innerHTML = resultados;
}