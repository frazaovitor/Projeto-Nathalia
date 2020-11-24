cadastro = document.querySelectorAll('.cadastrar')

dadosGerais = document.querySelector('.dadosGerais')
diaCasamento = document.querySelector('.dataCasamento')
lugarEntrega = document.querySelector('.localEntrega')
descrever = document.querySelector('.descricao')
diaEntrega = document.querySelector('.dataEntrega')
totalValor = document.querySelector('.valorTotal')
reservaValor = document.querySelector('.valorReserva')
finalPagamento = document.querySelector('.pagamentoFinal')
contrato = document.querySelector('.contrato')
formulario = document.querySelector('.formulario')
botao = document.querySelector('.enviar')

botao.addEventListener('click', () => {

    // VERIFICA SE EXISTE ALGUM CAMPO NÃO PREENCHIDO
    if (true) {

        // ATUALIZA O CONTRATO COM OS VALORES DIGITADOS
        dadosGerais.innerHTML = `Contratante: ${nome.value}. Profissão: ${profissao.value}. Rg:
    ${rg.value.replace(/(\d{1,2})(\d{3})(\d{3})(\d{1})$/, "$1.$2.$3-$4")}. CPF: ${cpf.value.replace(/(\d{3})?(\d{3})?(\d{3})?(\d{2})/, "$1.$2.$3-$4")
            }. CEP: ${cep.value.replace(/(\d{5})(\d{3})$/, "$1-$2")}. Endereço completo: ${endereco.value}. Telefone para
    contato: ${tel.value.replace(/(\d{2})(\d{5})(\d{4})$/, "($1) $2-$3")}. E-mail: ${email.value}.`

        diaCasamento.innerHTML = `Data do casamento: ${dataCasamento.value.split('-').reverse().join('/')}`
        diaEntrega.innerHTML = ` Data de entrega da peça: ${dataEntrega.value.split('-').reverse().join('/')}`
        descrever.innerHTML = `Descrição técnica da peça: ${descricao.value}, Entremeio: ${entremeio.value} (Código: ${entremeioCod.value})`
        totalValor.innerHTML = `Valor: O valor total para a criação/confecção da peça escolhida é de R$ ${valorTotal.value}`
        reservaValor.innerHTML = `Valor de R$ ${valorReserva.value} efetuado no dia ${diaReserva.value.split('-').reverse().join('/')}  para a
        reserva de sua peça.`
        finalPagamento.innerHTML = `Dia ${pagamentoFinal.value.split('-').reverse().join('/')} efetivar o pagamento de 50% do valor da criação da peça e
        os outros 50% em dinheiro no dia da entrega (${dataEntrega.value.split('-').reverse().join('/')})`

        switch (localEntrega.value) {
            case "novaAmerica":
                lugarEntrega.innerHTML = `Local da entrega/retirada da peça: Entrega será realizada no Shopping Nova América no dia ${dataEntrega.value.split('-').reverse().join('/')} na parte da manhã.`
                break;
            case "correio":
                lugarEntrega.innerHTML = `A entrega será efetuala pelo correio.`
                break;
            default:
                break;
        }
        contrato.style = "display: block"
        formulario.style = "display: none"
        botao.style = "display: none"

    } else {
        alert("Ops, você esqueceu de preencher algum campo!")
    }
})

// cadastro[0].value != '' && cadastro[1].value != '' && cadastro[2].value != '' && cadastro[3].value != '' && cadastro[4].value != '' && cadastro[5].value != '' && cadastro[6].value != '' && cadastro[7].value != '' && cadastro[8].value != '' && cadastro[9].value != '' && cadastro[10].value != '' && cadastro[11].value != '' && cadastro[12].value != '' && cadastro[13].value != '' && cadastro[14].value != '' && cadastro[15].value != '' && cadastro[16] != '' && cadastro[17] != ''