const variaveis = {
    chek: document.querySelector("#chek"),
    teclas: document.querySelectorAll(".bt"),
    opera: document.querySelectorAll(".op"),
    btlimp: document.querySelectorAll(".li"),
    btapag: document.querySelectorAll("#apagar"),
    btigual: document.querySelectorAll("#igual"),
    result: document.querySelector("#resultado"),
    sinal: false,
    decimal: false,
    calculate: document.querySelectorAll(".calculadora"),
    teclado: document.querySelectorAll(".teclas"),
    label: document.querySelectorAll(".label"),
    ball: document.querySelectorAll(".ball"),
    result1: document.querySelectorAll(".result"),
    body: document.querySelectorAll(".body"),
    clean() {
        this.btlimp.forEach((evt) => {
            evt.addEventListener('click', () => {
                this.result.innerHTML = "0"
                this.sinal = false
                this.decimal = false
            })
        })
    },
    resultar() {
        this.btigual.forEach((evt) => {
            evt.addEventListener('click', () => {
                this.sinal = false
                this.decimal = false
                let res = eval(variaveis.result.innerHTML)
                this.result.innerHTML = res

            })
        })
    },

    dark() {
        this.chek.addEventListener('change', () => {
            this.body.forEach((evt)=>{
                evt.classList.toggle("dark")
            })
            this.result1.forEach((evt) => {
                evt.classList.toggle('dark')
            })
            this.teclas.forEach((ev) => {
                ev.classList.toggle('dark')
            })
            this.opera.forEach((ev) => {
                ev.classList.toggle('dark')
            })
            this.btapag.forEach((ev) => {
                ev.classList.toggle('dark')
            })
            this.calculate.forEach((ev) => {
                ev.classList.toggle('dark')
            })
            this.btigual.forEach((ev) => {
                ev.classList.toggle('dark')
            })
            this.btlimp.forEach((ev) => {
                ev.classList.toggle('dark')
            })
            this.teclado.forEach((ev) => {
                ev.classList.toggle('dark')
            })
            this.label.forEach((evt) => {
                evt.classList.toggle('dark')
            })
            this.ball.forEach((evt) => {
                evt.classList.toggle('dark')
            })
        })
    },
    escrever() {
        this.teclas.forEach((el) => {
            el.addEventListener('click', (evt) => {
                this.sinal = false

                if (evt.target.innerHTML == ",") {
                    if (!this.decimal) {
                        this.decimal = true
                        if (this.result.innerHTML == "0") {
                            this.result.innerHTML = "0."
                        } else {
                            this.result.innerHTML += "."
                        }
                    }
                } else {
                    if (this.result.innerHTML == "0") {
                        this.result.innerHTML = ""
                    }
                    this.result.innerHTML += evt.target.innerHTML
                }
            })
        })
    },
    operar() {
        this.opera.forEach((el) => {
            el.addEventListener('click', (evt) => {
                if (!this.sinal) {
                    this.sinal = true
                    this.decimal = false
                    if (this.result.innerHTML == "0") {
                        this.result.innerHTML = ""
                    }
                    this.result.innerHTML += evt.target.innerHTML

                }

            })
        })
    }
}
variaveis.escrever()
variaveis.operar()
variaveis.dark()
variaveis.clean()
variaveis.resultar()