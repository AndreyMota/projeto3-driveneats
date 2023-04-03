function verify(r1, r2, r3, gogo) {
    console.log('VERIFY!');
    if (r1 != null) {
        console.log('R1' + r1 + 'prato selecionado');
        if (r2 != null) {
            console.log('R2' + r2 + 'bebida selecionada');
            if (r3 != null) {
                console.log('R3' + r3 + 'SOBREMESA selecionada');
                console.log(gogo.classList);
                gogo.classList.add('gol');
                gogo.innerHTML = 'Fechar pedido';
                gogo.setAttribute('onclick', 'actionWpp()');
            }
        }
    }

}

let pratoSelecionado = null;
let bebidaSelecionado = null;
let sobremeSelecionado = null;



//function romoverSelec()


function escolheu(prato, secao) {
    const gogo = document.querySelector('.gogo');
    const selecionado = document.querySelector(secao + ' .selecionado');
    if (selecionado != null){
        selecionado.classList.remove('selecionado');
    }

    if (secao === '.sobremesas') {
        sobremeSelecionado = prato;
    }
    if (secao === '.bebidas') {
        bebidaSelecionado = prato;
    }
    if (secao === '.pratos') {
        pratoSelecionado = prato;
    }

    prato.classList.toggle('selecionado');
    console.log(prato);
    verify(pratoSelecionado, bebidaSelecionado, sobremeSelecionado, gogo);

    /*
    let priceElement = prato.querySelector(secao + " .price");
    let priceValue = priceElement.textContent;
    let titulo
    alert(priceValue);
    */
}

function generateMsg() {
    let prcPrato = Number(pratoSelecionado.querySelector(" .price").textContent).toFixed(2);
    let prcBebida = Number(bebidaSelecionado.querySelector(" .price").textContent).toFixed(2);
    let prcSobreme = Number(sobremeSelecionado.querySelector(" .price").textContent).toFixed(2);
    console.log(prcPrato, prcBebida, prcSobreme);
    let tituPrato = pratoSelecionado.querySelector('.titu').textContent;
    let tituBebida = bebidaSelecionado.querySelector('.titu').textContent;
    let tituSobreme = sobremeSelecionado.querySelector('.titu').textContent;
    let total = Number(prcPrato) + Number(prcBebida) + Number(prcSobreme);

    return window.encodeURIComponent(`Olá, gostaria de fazer o pedido: \n- Prato: ${tituPrato} x1 = ${prcPrato}\n- Bebida: ${tituBebida} x1 = ${prcBebida}\n- Sobremesa: ${tituSobreme} x1 = ${prcSobreme}\nTotal: R$ ${total.toFixed(2)}`);
    //Olá, gostaria de fazer o pedido:
    //- Prato: Frango Yin Yang
    //- Bebida: Coquinha Gelada
    //- Sobremesa: Pudim
    //Total: R$ 27,70
}

function generateLink() {
    let number = '85994379082'
    let message = generateMsg();
    let url = "https://wa.me/";
    let end_url = `${url}${number}?text=${message}`;
    return end_url;
}

function actionWpp(){
    console.log('ActionWpp')
    let botao = document.querySelector('.botao');
    let mensagem = generateLink();
    console.log(mensagem);
    botao.setAttribute('href', mensagem);
}

