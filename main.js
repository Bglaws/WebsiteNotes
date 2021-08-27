// var app = new Vue({
//     el: '#app',
//     data: {
//         product: 'socks'
//     }
// })

class Calculator {
    constructor(previousOperandElement, currentOperandElement) {
        this.previousOperandElement = previousOperandElement
        this.currentOperandElement = currentOperandElement
        this.clear()
    }

    clear() {
        this.currentOperand = ''
        this.previousOperand = ''
        this.operation = undefined
    }
    
    delete() {
        
    }

    appendNumber(number) {
        if (number === '.' && this.currentOperand.includes('.')) return
        this.currentOperand = this.currentOperand.toString() + number.toString()
    }
    
    chooseOperation(operation) {
        if (this.currentOperand === '') return
        if (this.previousOperand !== '') {
            this.compute()
        }
        this.operation = operation
        this.previousOperand = this.currentOperand
        this.currentOperand = ''
    }

    compute() {
        let computation
        const prev = parseFloat(this.previousOperand)
        const cur = parseFloat(this.currentOperand)
        if (noNum(prev) || noNum(cur)) return 
        switch (this.operation) {
            case '+':
                computation = prev + cur
                break
            case '-':
                computation = prev - cur
                break
            case '*':
                computation = prev * cur
                break
            case '/':
                computation = prev / cur
                break

            default: return
        }
        this.currentOperand = computation
    }

    updateDisplay() {
        this.currentOperandElement.innerText = this.currentOperand
        this.previousOperandElement.innerText = this.currentOperand
    }
}

const numberButtons = document.querySelectorAll('[data-number]')
const operationButtons = document.querySelectorAll('[data-operation]')
const equalsButton = document.querySelector('[data-equals]')
const deleteButton = document.querySelector ('[data-delete]')
const allClearButton = document.querySelectorAll('[data-all-clear]')
const previousOperandElement = document.querySelectorAll('[data-previous-operand]')
const currentOperandElement = document.querySelectorAll('[data-current-operand]')


const calculator = new Calculator(previousOperandElement, currentOperandElement)

numberButtons.forEach(button => {
    button.addEventListener('click', () => {
        calculator.appendNumber(button.innerText)
        calculator.updateDisplay()
    })
});

