// function createCartSession

function addToCart(req, res) {
    let itemId = req.session.cart;
    let cart = // criar carro ou pegar já existente 
    
    res.send();
}

function getSession(req, res) {
    const request = req.sessi
    res.send(request);
}

export {
    addToCart,
    getSession,
    // removerFromCart,
    // getCart,
}


// Criar carrinho pra todos usuário 
// Recebe requisição de adicionar ao carrinho contendo informações do item e quantidade
// Verfica se possui a quantidade desejada
// Caso sim, adicione o pedido ao carrinho associado a sessão do usuário
// Pagina carrinho vai fazer requisição e retornar o objeto da sessao 
// Pagina carrinho ser diferente quando está vazia