$(document).ready(function(){

    $('#telefone').mask('(00)00000-0000',{
        placeholder: '(XX)XXXXX-XXXX'
    })

    $('#cpf').mask('000.000.000-00',{
        placeholder:'XXX.XXX.XXX-XX'
    })

    $('#cep').mask('00000-000',{
        placeholder:'XXXXX-XXX'
    })

    $('form').validate({
        rules:{
            nome:{
                required:true
            },
            email:{
                required:true,
                email:true
            },
            telefone:{
                required:true
            },
            cpf:{
                required:true
            },
            enderecoCompleto:{
                required:true
            },
            cep:{
                required:true
            }

        },
        messages:{
            nome: 'Por Favor insira seu nome',
            email: {
                required: "Por favor, insira um endereço de e-mail.",
                email: "Por favor, insira um endereço de e-mail válido."
            },
            telefone: "Por favor, insira um número de telefone válido.",
            cpf: "Por favor, insira um CPF válido.",
            enderecoCompleto: "Por favor, insira seu endereço completo.",
            cep: "Por favor, insira um CEP válido."
        },
        submitHandler: function(form){
            console.log(form)
            form.reset();
        },
        invalidHandler: function(evento, validador){
            let camposIncorretos = validador.numberOfInvalids();
            if(camposIncorretos){
                alert(`Existem ${camposIncorretos} Campos Incorretos`)
            }
        }
    })

})
