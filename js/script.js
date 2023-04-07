const util = {
    teclas: document.querySelectorAll(".bt"),
    opera: document.querySelectorAll(".op"),
    btlimp: document.querySelector(".li"),
    btapag: document.querySelector("#apagar"),
    btigual: document.querySelector("#igual"),
    result: document.querySelector(".result"),
    sinal: false,
    decimal: false,
    clean() {
        this.btlimp.addEventListener('click', (evt) => {
            this.result.innerHTML = "0"
            this.sinal = false
            this.decimal = false
        })
    },
    resultar(){
        
        this.btigual.addEventListener('click', (evt) => {
            this.sinal= false
            this.decimal= false
            let res = eval(util.result.innerHTML)
            this.result.innerHTML= res
        
        })
    }

}
util.teclas.forEach((el) => {
    el.addEventListener('click', (evt) => {
        util.sinal = false

        if (evt.target.innerHTML == ",") {
            if (!util.decimal) {
                util.decimal = true
                if (util.result.innerHTML == "0") {
                    util.result.innerHTML = "0."
                } else {
                    util.result.innerHTML += "."
                }
            }
        } else {
            if (util.result.innerHTML == "0") {
                util.result.innerHTML = ""
            }
            util.result.innerHTML += evt.target.innerHTML
        }
    })
})
util.opera.forEach((el) => {
    el.addEventListener('click', (evt) => {
        if (!util.sinal) {
            util.sinal = true
            util.decimal = false
            if (util.result.innerHTML == "0") {
                util.result.innerHTML = ""
            }
            util.result.innerHTML += evt.target.innerHTML

        }

    })
})
util.clean()
util.resultar()