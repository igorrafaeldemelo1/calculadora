function criaCalculadora() {

    return {
        display: document.querySelector('.input'),



        clearDisplay() {
            this.display.innerText = '';
        },

        clearOne() {
            this.display.innerText = this.display.innerText.slice(0, -1);
        },

        iniciar() {
            this.clickBotoes();

        },

        raizQuadrada() {

            let raiz = Number(this.display.innerText);
            let qtr = Math.sqrt(raiz).toFixed(0)
            this.display.innerHTML = qtr

        },

        troca() {
            let raiz = Number(this.display.innerText);
            if (raiz < 0) {
                let qtr = Math.abs(raiz)
                this.display.innerHTML = qtr
                console.log(qtr)
                return
            }
            if(raiz >= 0 ){
                let qtr = raiz
                this.display.innerHTML = -qtr
                return
            }
            
        },


        fazerConta() {
            let cont = this.display.innerText;

            try {
                cont = eval(cont)
                if (!cont) {
                    alert("Conata Invalida")
                    return;
                }
                this.display.innerText = eval(cont)
            } catch (e) {
                alert("Conata Invalida")
            }
        },

        clickBotoes() {
            document.addEventListener('click', e => {
                const el = e.target;

                if (el.classList.contains('troca')) {
                    this.troca();
                }

                if (el.classList.contains('raiz')) {
                    this.raizQuadrada();
                }

                if (el.classList.contains('porcento')) {
                    this.porcentagem();
                }

                if (el.classList.contains('number')) {
                    this.btnParaDisplay(el.innerText);
                }

                if (el.classList.contains('clearAll')) {
                    this.clearDisplay();
                }
                if (el.classList.contains('backspace')) {
                    this.clearOne();
                }

                if (el.classList.contains('multiplay')) {
                    this.btnParaDisplay(el.innerText);
                }

                if (el.classList.contains('minus')) {
                    this.btnParaDisplay(el.innerText);
                }

                if (el.classList.contains('plus')) {
                    this.btnParaDisplay(el.innerText);
                }

                if (el.classList.contains('divider')) {
                    this.btnParaDisplay(el.innerText);
                }

                if (el.classList.contains('equal')) {
                    this.fazerConta();
                }
            });
        },

        btnParaDisplay(valor) {
            this.display.innerText += valor;
        }

    }



}
const calculadora = criaCalculadora();
calculadora.iniciar();