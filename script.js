function verify(r1, r2, r3, gogo) {
    console.log('VERIFY!');
    if (r1 != null) {
        console.log('R1' + r1 + 'prato selecionado');
        if (r2 != null) {
            console.log('R2' + r2 + 'bebida selecionada');
            if (r3 != null) {
                console.log('R3' + r3 + 'SOBREMESA selecionada');
                console.log(gogo.classList);
                gogo.classList.remove('naoaparece');
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
    pratoSelecionado = prato;
    verify(pratoSelecionado, bebidaSelecionado, sobremeSelecionado, gogo);

    /*
    const prato = docuemnt.querySelector('.prato');
    */
}

