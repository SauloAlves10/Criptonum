function criptografar() {
    let cchave = document.querySelector('#cchave')
    let cmensagem = document.querySelector('#cmensagem')
    let ccriptomensagem = document.querySelector('#ccriptomensagem')

    ccriptomensagem.innerHTML = ""

    if (cchave.value != "" && cmensagem.value != "") {
        let chave = cchave.value
        let texto = cmensagem.value
        let c = chave.length
        let l = texto.length
        let cont = 0
        let contchave = 0
        let x = -1
        let y = 0
        let k = -1
        let j = 0
        let alfanumerico = "0123456789aáàâAÁÀÂbBcCçÇdDeéèêEÉÈÊfFgGhHiíIÍjJkKlLmMnNoóòôöOÓÒÔÖpPqQrRsStTuúùüUÚÙÜvVxXzZ!?,.:;\/*-+=<>@#$%&*()[]{}|_'' "

        while (cont < l) {
            if (contchave < c) {
                x++
                y++
                cont++
                let m = texto.substring(x, y)

                let pos = alfanumerico.indexOf(m)
                k++
                j++
                contchave++
                let nchave = chave.substring(k, j)
                nchave = alfanumerico.indexOf(nchave)
                pos = pos + nchave

                if (pos < 10) {
                    pos = "00" + pos
                } else {
                    if (pos < 100) {
                        pos = "0" + pos
                    }
                }

                ccriptomensagem.innerHTML += pos
            } else {
                contchave = 0
                k = -1
                j = 0
            }
        }
    } else {
        if (cchave.value == "") {
            alert("Informe um valor para a chave de criptografia")
        }
        if (cmensagem.value == "") {
            alert("Informe uma mensagem a ser criptografada")
        }
    }
}