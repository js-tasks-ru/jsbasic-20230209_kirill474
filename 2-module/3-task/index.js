let calculator = {
  read(a, b) {
    return (calculator.first = a), (calculator.second = b);
  },
  sum() {
    return this.first + this.second;
  },
  mul() {
    return this.first * this.second;
  },
};

// НЕ УДАЛЯТЬ СТРОКУ, НУЖНА ДЛЯ ПРОВЕРКИ
window.calculator = calculator; // делает ваш калькулятор доступным глобально
