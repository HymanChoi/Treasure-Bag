new Vue({
  el: '#app',
  data: {
    equation: '0', // 计算过程
    isDecimalAdded: false, // 是否已添加小数点
    isOperatorAdded: false, // 是否已添加运算符
    isStarted: false // 是否已添加第一个数值
  },
  methods: {
    /**
     * 判断当前点击是否为 + / - / × / ÷
     * 
     * @param character
     */
    isOperator(character) {
      return ['+', '-', '×', '÷'].indexOf(character) > -1
    },
    /**
     * 点击运算符和数字
     * 
     * @param character
     */
    append(character) {
      // 首次添加数值
      if (this.equation === '0' && !this.isOperator(character)) {
        if (character === '.') {
          this.equation += '' + character
          this.isDecimalAdded = true
        } else {
          this.equation = '' + character
        }

        this.isStarted = true
        return
      }

      // 继续添加数值
      if (!this.isOperator(character)) {
        // 防止连续添加多个小数点
        if (character === '.' && this.isDecimalAdded) {
          return
        }

        if (character === '.') {
          this.isDecimalAdded = true
          // 防止添加小数点后直接添加运算符
          this.isOperatorAdded = true
        } else {
          this.isOperatorAdded = false
        }

        this.equation += '' + character
      }

      // 添加运算符
      if (this.isOperator(character) && !this.isOperatorAdded) {
        this.equation += '' + character
        this.isDecimalAdded = false
        this.isOperatorAdded = true
      }
    },
    /**
     * 点击 =
     */
    calculate() {
      // 转换运算符
      let result = this.equation.replace(new RegExp('×', 'g'), '*').replace(new RegExp('÷', 'g'), '/')
      // 保留到小数点后9位
      this.equation = parseFloat(eval(result).toFixed(9)).toString()
      this.isDecimalAdded = false
      this.isOperatorAdded = false
    },
    /**
     * 点击 ±
     */
    calculateToggle() {
      if (this.isOperatorAdded || !this.isStarted) {
        return
      }

      this.equation = this.equation + '* -1'
      this.calculate()
    },
    /**
     * 点击 %
     */
    calculatePercentage() {
      if (this.isOperatorAdded || !this.isStarted) {
        return
      }

      this.equation = this.equation + '* 0.01'
      this.calculate()
    },
    /**
     * 点击 AC
     */
    clear() {
      this.equation = '0'
      this.isDecimalAdded = false
      this.isOperatorAdded = false
      this.isStarted = false
    }
  }
})