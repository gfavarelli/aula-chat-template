const inputTexto = document.getElementById('enviarMensagem');

inputTexto.addEventListener('keyup', function(e){
    var key = e.key === 'Enter';
    
    if(key && this.value) {
        console.log('mensagem', this.value);
        
        var quadroMensagens = document.getElementById('quadro-mensagens');
        var li = criarElementoHtml('li', ['clearfix']);
        var divDetalhes = criarElementoHtml('div', ['message-data']);
        var divMensagem = criarElementoHtml('div', ['message', 'my-message']);
        var span = criarElementoHtml('span', ['message-data-time']);

        span.innerHTML = 'Usuario XPTO - 06/08/2022 18:32';
        divMensagem.innerHTML = this.value;

        divDetalhes.appendChild(span);
        li.appendChild(divDetalhes);
        li.appendChild(divMensagem);
        quadroMensagens.appendChild(li);
        realizarScrollChat();
        this.value = '';
    }
});

function criarElementoHtml(nomeElemento, classeElemento) {
    var elemento = document.createElement(nomeElemento);
    for (var classe of classeElemento) {
        if (classe) {
            elemento.classList.add(classe);
        }
    }

    return elemento;
}

function realizarScrollChat() {
    var elem = document.getElementById('chat');
    elem.scrollTop = elem.scrollHeight;
 
}
