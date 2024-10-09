let numerosAdicionados = []; 
function adicionar() {
  let inicial = parseInt(document.getElementById("inicial").value);
  let selsoma = document.getElementById("selsoma");

  if (isNaN(inicial)) {
    window.alert("Preencha com um número zolhão!");
    return;
  }

  if (inicial < 1 || inicial > 100) {
    window.alert("Preencha com um numero entre 1 e 100");
    return;
  }
  if (numerosAdicionados.includes(inicial)) {
    window.alert("Número já adicionado!");
    return;
  }

  if (numerosAdicionados.length > 1) {
    let item = document.createElement("option"); 
    item.text = `Valor ${inicial} adicionado.`; 
    selsoma.appendChild(item); 
    numerosAdicionados.push(inicial); 
    return;
  } else {
    let item = document.createElement("option");
    item.text = `Valor ${inicial} adicionado.`;
    selsoma.appendChild(item);
    numerosAdicionados.push(inicial);
    return;
  }
}

function finalizar() {

 
  let res = document.createElement("p"); 
  if (numerosAdicionados.length == 0) {
    window.alert("Cabeção, adicione valores lá na caixinha antes de finalizar!");
    return; 
  }
  let soma = 0;
  for(let d = 0; d < numerosAdicionados.length; d++){
    soma += numerosAdicionados[d];
  }
  
  res.innerHTML += `Agora, temos ${numerosAdicionados.length} valores`;
  res.innerHTML += `<p>O maior valor informado foi ${Math.max(...numerosAdicionados)}</p>`;
  res.innerHTML += `<p>O menor valor informado foi ${Math.min(...numerosAdicionados)}</p>`;
  res.innerHTML += `<p>Somando todos os valores, temos ${soma }</p>`;
  res.innerHTML += `<p>A média dos valores digitados é ${numerosAdicionados.reduce((a, b) => a + b, 0) / numerosAdicionados.length}</p>`;
  document.getElementById("res").appendChild(res);
  
}
