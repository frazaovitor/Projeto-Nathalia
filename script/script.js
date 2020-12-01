// CAPTURA OS CAMPOS DO FORMULÁRIO

cadastro = document.querySelectorAll('.cadastrar')
pecaPersonalizada = document.querySelectorAll('.pecaPersonalizada')

// CAPTURA OS CAMPOS DO CONTRATO 

dadosContrato = document.querySelectorAll('.dadosContrato')


// CAPTURA O CONTRATO E DO FORMULÁRIO

contrato = document.querySelector('.contrato')
formulario = document.querySelector('.formulario')


// CAPTURA O BOTÃO
botao = document.querySelector('.enviar')

botao.addEventListener('click', () => {

    // VERIFICA SE EXISTE ALGUM CAMPO NÃO PREENCHIDO

    if (verificaVazio(cadastro)) {

        // ATUALIZA O CONTRATO COM OS VALORES DIGITADOS E FORMATA OS CAMPOS

        dadosGerais.innerHTML =
            `Contratante: ${nome.value}.
          Profissão: ${profissao.value}. 
          Rg: ${rg.value.replace(/(\d{1,2})(\d{3})(\d{3})(\d{1})$/, "$1.$2.$3-$4")}. 
          CPF: ${cpf.value.replace(/(\d{3})?(\d{3})?(\d{3})?(\d{2})/, "$1.$2.$3-$4")}. 
          CEP: ${cep.value.replace(/(\d{5})(\d{3})$/, "$1-$2")}. 
          Endereço completo: ${endereco.value}. 
          Telefone para contato: ${tel.value.replace(/(\d{2})(\d{5})(\d{4})$/, "($1) $2-$3")}. 
          E-mail: ${email.value}.`

        dataCasamentoContrato.innerHTML = `Data do casamento: ${formatData(dataCasamento.value)}`
        dataEntregaContrato.innerHTML = ` Data de entrega da peça: ${formatData(dataEntrega.value)}`
        valorTotalContrato.innerHTML = `Valor: O valor total para a criação/confecção da peça escolhida é de R$ ${valorTotal.value}`
        valorReservaContrato.innerHTML = `Valor de R$ ${valorReserva.value} efetuado no dia ${formatData(diaReserva.value)}  para a
        reserva de sua peça.`

        switch (descricaoPeca.value) {
            case "pecaFechada":
                descricaoTecnica.innerHTML = `Descrição Técnica da Peça: Peça fechada (Código: ${pecaFechadaCod.value})`
                break;
            case "pecaPersonalizada":
                descricaoTecnica.innerHTML = `Descrição Técnica da Peça: Peça Personalizada: Pedraria: ${pedraria.value} (Código: ${pedrariaCod.value}),  Entremeio: ${entremeio.value} (Código: ${entremeioCod.value}), Cruz: (Código: ${modeloCruzCod.value}).`

                break;

            default:
                break;
        }

        // LOCAL DE ENTREGA E FINALIZAÇÃO DO PAGAMENTO 

        switch (localEntrega.value) {
            case "novaAmerica":
                localEntregaContrato.innerHTML = `Local da entrega/retirada da peça: Entrega será realizada no Shopping Nova América no dia ${formatData(dataEntrega.value)} na parte da manhã.`
                pagamentoFinalContrato.innerHTML = `Dia ${formatData(pagamentoFinal.value)} efetivar o pagamento de 50% do valor da criação da peça e
        os outros 50% em dinheiro no dia da entrega (${formatData(dataEntrega.value)})`

                break;

            case "correio":
                localEntregaContrato.innerHTML = `A entrega será efetuala pelo correio.`
                pagamentoFinalContrato.innerHTML = `Dia ${formatData(pagamentoFinal.value)} efetivar o pagamento de 100% do valor da criação da peça mais o acréscimo do frete.`

                break;
        }
        // RETIRA O CAMPO DE FORMULÁRIO, O BOTÃO E FAZ APARECER O CONTRATO PRONTO! 

        contrato.style = "display: block"
        formulario.style = "display: none"
        botao.style = "display: none"

    } else {
        alert("Ops, você esqueceu de preencher algum campo!")
    }
})

// CALLBACK PARA COMPLETAR O CEP
function meu_callback(conteudo) {
    if (!("erro" in conteudo)) {
        // ATUALIZA O FORMULÁRIO ASSIM QUE COLOCA O CEP.
        endereco.value = `${conteudo.logradouro}, ${numero.value}, Complemento: ${complemento.value}, Bairro: ${conteudo.bairro}, Cidade: ${conteudo.localidade}/${conteudo.uf}`
    } else {
        alert("CEP não encontrado. Digite o endereço a mão ou verifique se o CEP existe neste site: http://www.buscacep.correios.com.br/sistemas/buscacep/BuscaCepEndereco.cfm");
    }
}

// FAZ PESQUISA DO CEP
function pesquisaCep(valor) {
    let script = document.createElement('script');

    //Sincroniza com o callback.
    script.src = 'https://viacep.com.br/ws/' + valor + '/json/?callback=meu_callback';

    //Insere script no documento e carrega o conteúdo.
    document.body.appendChild(script);
}

// FORMATA AS DATAS PARA DD/MM/AAAA
function formatData(data) {
    return data.split('-').reverse().join('/')
}

// VERIFICA SE EXISTE ALGUM CAMPO NÃO PREENCHIDO
function verificaVazio(cadastro) {
    for (i = 0; i < cadastro.length; i++) {
        if (cadastro[i].value != '') {
            return true
        } else {
            return false
        }
    }
}

// APAGA OS CAMPOS NÃO SELECIONADOS (PEÇA FECHADA OU PEÇA PERSONALIZADA)
function selecaoPeca() {
    if (descricaoPeca.value == "pecaFechada") {
        entremeio.style = 'display: none'
        entremeioL.style = 'display: none'
        entremeioCod.style = 'display: none'
        entremeioCodL.style = 'display: none'
        modeloCruzCod.style = 'display: none'
        modeloCruzCodL.style = 'display: none'
        pedraria.style = 'display: none'
        pedrariaL.style = 'display: none'
        pedrariaCod.style = 'display: none'
        pedrariaCodL.style = 'display: none'
        pecaFechadaCod.style = 'display:block'
        pecaFechadaCodL.style = 'display:block'
    } else {
        entremeio.style = 'display: block'
        entremeioL.style = 'display: block'
        entremeioCod.style = 'display: block'
        entremeioCodL.style = 'display: block'
        modeloCruzCod.style = 'display: block'
        modeloCruzCodL.style = 'display: block'
        pedraria.style = 'display: block'
        pedrariaL.style = 'display: block'
        pedrariaCod.style = 'display: block'
        pedrariaCodL.style = 'display: block'
        pecaFechadaCod.style = 'display: none'
        pecaFechadaCodL.style = 'display: none'
    }
}