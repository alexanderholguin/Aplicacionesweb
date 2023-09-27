import { suma,resta, mult, div, mod } from "./operations.js"
const root = document.getElementById("root");
var value2;
var value1;
var result;

document.querySelector("form").addEventListener("submit", (e) => {
  e.preventDefault();
});

document.getElementById("send").addEventListener("click", () => {
  value1 = document.getElementById("value1").value;
  value2 = document.getElementById("value2").value;

  for (let index = 0; index < 5; index++) {
    if (index == 0) {
      result = suma(parseInt(value1), parseInt(value2));
      root.innerHTML = `
    <div class="card">
      <p>iteracion numero: ${index + 1}</p>
      <div>resultado de suma: ${result}</div>
    </div>
    `;
    } else {
      if (index == 1) {
        result = resta(parseInt(value1), parseInt(value2));
        root.innerHTML += `
      <div class="card">
        <p>iteracion numero: ${index + 1}</p>
        <div>resultado de resta: ${result}</div>
      </div>
      `;
      } else {
        if (index == 2) {
          result = mult(parseInt(value1), parseInt(value2));
          root.innerHTML += `
        <div class="card">
          <p>iteracion numero: ${index + 1}</p>
          <div>resultado de multiplicacion: ${result}</div>
        </div>
        `;
        } else {
          if (index == 3) {
            result = division(parseInt(value1), parseInt(value2));
            root.innerHTML += `
            <div class="card">
              <p>iteracion numero: ${index + 1}</p>
              <div>resultado de division: ${result.toFixed(3)}</div>
            </div>
          `;
          } else {
            if (index == 4) {
              result = mod(parseInt(value1), parseInt(value2));
              root.innerHTML += `
              <div class="card">
                <p>iteracion numero: ${index + 1}</p>
                <div>resultado de modulo: ${result}</div>
              </div>
            `;
            }
          }
        }
      }
    }
  }
});
