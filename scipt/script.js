let nome = document.querySelector('#nome')
let profissao = document.querySelector('#profissao')
let rg = document.querySelector('#rg')
let cpf = document.querySelector('#cpf')
let cep = document.querySelector('#cep')
let endereco = document.querySelector('#endereco')
let tel = document.querySelector('#tel')
let email = document.querySelector('#email')
let dataCasamento = document.querySelector('#dataCasamento')
let dataEntrega = document.querySelector('#dataEntrega')
let localEntrega = document.querySelector('#localEntrega')
let descricao = document.querySelector('#descricao')
let entremeio = document.querySelector('#entremeio')
let entremeioCod = document.querySelector('#entremeioCod')
let valorTotal = document.querySelector('#valorTotal')
let valorReserva = document.querySelector('#valorReserva')
let diaReserva = document.querySelector('#diaReserva')
let pagamentoFinal = document.querySelector('#pagamentoFinal')
let botao = document.querySelector('.enviar')

let dadosGerais = document.querySelector('.dadosGerais')
let diaCasamento = document.querySelector('.dataCasamento')
let lugarEntrega = document.querySelector('.localEntrega')
let descrever = document.querySelector('.descricao')
let diaEntrega = document.querySelector('.dataEntrega')
let totalValor = document.querySelector('.valorTotal')
let reservaValor = document.querySelector('.valorReserva')
let finalPagamento = document.querySelector('.pagamentoFinal')
let contrato = document.querySelector('.contrato')
let formulario = document.querySelector('.formulario')


document.querySelector('.enviar').addEventListener('click', () => {

    // VERIFICA SE EXISTE ALGUM CAMPO NÃO PREENCHIDO
    if (nome.value != '' && profissao.value != '' && rg.value != '' && cpf.value != '' && cep.value != '' && endereco.value != '' && tel.value != '' && email.value != '' && dataCasamento.value != '' && dataEntrega.value != '' && descricao.value != '' && entremeio.value != '' && entremeioCod.value != '' && valorTotal.value != '' && valorReserva.value != '' && diaReserva.value != '' && pagamentoFinal != '') {

        // ATUALIZA O CONTRATO COM OS VALORES DIGITADOS
        dadosGerais.innerHTML = `Contratante: ${nome.value}. Profissão: ${profissao.value}. Rg:
    ${rg.value}. CPF: ${cpf.value}. CEP: ${cep.value}. Endereço completo: ${endereco.value}. Telefone para
    contato: ${tel.value}. E-mail: ${email.value}.`

        diaCasamento.innerHTML = `Data do casamento: ${dataCasamento.value}`
        diaEntrega.innerHTML = ` Data de entrega da peça: ${dataEntrega.value}`
        descrever.innerHTML = `Descrição técnica da peça: ${descricao.value}, Entremeio: ${entremeio.value} (Código: ${entremeioCod.value})`
        totalValor.innerHTML = `Valor: O valor total para a criação/confecção da peça escolhida é de R$ ${valorTotal.value}`
        reservaValor.innerHTML = `Valor de R$ ${valorReserva.value} efetuado no dia ${diaReserva.value}  para a
        reserva de sua peça.`
        finalPagamento.innerHTML = `Dia ${pagamentoFinal.value} efetivar o pagamento de 50% do valor da criação da peça e
        os outros 50% em
        dinheiro no dia da entrega (${dataEntrega.value})`

        switch (localEntrega.value) {
            case "novaAmerica":
                lugarEntrega.innerHTML = `Local da entrega/retirada da peça: Entrega será realizada no Shopping Nova América no dia ${dataEntrega.value} na parte da manhã.`
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
