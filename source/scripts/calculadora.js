
function calcular() {
    var num1 = parseFloat(document.getElementById("num1").value);
    var num2 = parseFloat(document.getElementById("num2").value);
    var operador = document.getElementById("operador").value;
    var resultado;
  
    if (operador === "+") {
      resultado = num1 + num2;
    } else if (operador === "-") {
      resultado = num1 - num2;
    } else if (operador === "*") {
      resultado = num1 * num2;
    } else if (operador === "/") {
      resultado = num1 / num2;
    }
  
    document.getElementById("resultado").value = resultado;
  }
  

  document.getElementById("calcular").addEventListener("click", calcular);
  