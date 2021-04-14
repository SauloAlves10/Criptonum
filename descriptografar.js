function descriptografar() {
    let dchave = document.querySelector('#dchave')
    let dmensagem = document.querySelector('#dmensagem')
    let dcriptomensagem = document.querySelector('#dcriptomensagem')

    dcriptomensagem.innerHTML = ""

    if (dchave.value != "" && dmensagem.value != "" && parseInt(dmensagem.value)) {
        let chave = dchave.value
        let texto = dmensagem.value
        let qchave = chave.length
        let qtexto = texto.length
        qtexto = qtexto / 3
        let alfanumerico = "0123456789aáàâAÁÀÂbBcCçÇdDeéèêEÉÈÊfFgGhHiíIÍjJkKlLmMnNoóòôöOÓÒÔÖpPqQrRsStTuúùüUÚÙÜvVxXzZ!?,.:;\/*-+=<>@#$%&*()[]{}|_'' "
        let x = -3
        let y = -2
        let z = -1
        let f = -1
        let cont = 0
        let contchave = 0

        while (cont < qtexto) {
            if (contchave < qchave) {
                cont++
                contchave++
                x += 3
                y += 3
                z += 3
                let m = texto.charAt(x)
                let n = texto.charAt(y)
                let o = texto.charAt(z)

                let l = m + n + o
                let h = l++

                f++
                let charchave = chave.charAt(f)
                let poschave = alfanumerico.indexOf(charchave)

                let descr = h - poschave
                descr = alfanumerico.charAt(descr)

                dcriptomensagem.innerHTML += descr
            } else {
                contchave = 0
                f = -1
            }
        }
    } else {
        if (dchave.value == "") {
            alert("Informe um valor para a chave de descriptografia")
        }
        if (dmensagem.value == "") {
            alert("Informe a mensagem a ser decriptografada")
        } else if (!parseInt(dmensagem.value)) {
            alert("Informe uma mensagem criptografa válida")
        }
    }
}