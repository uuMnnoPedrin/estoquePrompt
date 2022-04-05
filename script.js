var opt = 0, prod = [], val = [], etq = [];

function cadastrarProduto(){
    var prodSearch = prompt("Digite o nome do produto")

    if(prod.indexOf(prodSearch) < 0){
        prod.push(prodSearch);
        val.push(prompt("Digite o valor do produto"));
        etq.push(parseInt(prompt("Digite a quantidade do produto")));
    }else{
        alert("Produto já existe no Banco de Dados");
    }
}

function venderProduto(){
    var prodList = []
    prodList = prod.map( (p,i) => (i + " - " + p) ).join('\n')
    prodVenda = parseInt(prompt("Digite o código do produto você deseja vender \n Produtos Cadastrados \n ------------------------ \n" + prodList));
    if(prod[prodVenda] != null){
        var qtdVenda = parseInt(prompt("Digite a quantidade de " + prod[prodVenda] + " que você vai vender. (Em Estoque - " + etq[prodVenda] + ")"));

        if(etq[prodVenda] < qtdVenda){
            alert("Sem estoque suficiente");
        }else{
            alert("Venda realizada com sucesso!");
            etq[prodVenda]-= qtdVenda;
        }

    }else{
        alert("Código de produto inválido.");
    }
}

function atualizarEstoque(){
    var prodList = []
    prodList = prod.map( (p,i) => (i + " - " + p) ).join('\n')
    prodEtq = parseInt(prompt("Digite o código do produto você deseja atualizar o estoque \n Produtos Cadastrados \n ------------------------ \n" + prodList));
    if(prod[prodEtq] != null){
        var newEtq = parseInt(prompt("Digite a nova quantidade de produtos no estoque (Vai substituir a quantidade atual: " + etq[prodEtq] + ")"));
        etq[prodEtq] = newEtq;
        alert("Estoque atualizado com sucesso! \nProduto Atualizado: \nProduto: " + prod[prodEtq] + " - Estoque: " + etq[prodEtq]);
    }else{
        alert("Código de produto inválido.");
    }
}

function pesquisarProduto(){
    var prodList = []
    prodList = prod.map( (p,i) => (i + " - " + p) ).join('\n')
    prodShc = parseInt(prompt("Digite o código do produto você deseja puxar informações \n Produtos Cadastrados \n ------------------------ \n" + prodList));
    if(prod[prodShc] != null){
        alert("Informações do Produto" + "\nNome: " + prod[prodShc] + "\nEstoque: " + etq[prodShc] + "\nValor: " + val[prodShc]);
    }else{
        alert("Código de produto inválido.");
    }
}