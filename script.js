// 1. display numbers in text box

const displayNum = function (num) {
  result.value += num;
};

// 2. clear the textbox

const clearBox = function () {
  result.value = "";
};

// 3. evaluate the expression.

const evaluateExpr = function () {
  //   expr = result.value;
  //   output = eval(expr);

  result.value = eval(result.value);
};

// 4. backspace

const backSpace = function () {
  curExp = result.value;
  result.value = curExp.slice(0, -1);
};
