var dados1;
var dados2;
var vencendor = document.getElementById('vencedor');


function getJSON(url, callback) {
  var xhr = new XMLHttpRequest();
  xhr.open('GET', url, true);
  xhr.responseType = 'json';
  xhr.onreadystatechange = function() {
    var status = xhr.status;
    if (status === 200) { 
      // Callback caso de tudo certo
      callback(null, xhr.response);
    } else {
      // Callback caso de algum erro
      callback(status, xhr.response);
    }
  };
  xhr.send();
}

// Utilizando o método
getJSON('dados_tabela.json', function(err, data) {
  if (err !== null) {
    console.log('Erro ao carregar dados1: ' + err);
  } else {
    dados1 = data && data.ultimoCicloTempo ? data.ultimoCicloTempo : {};
    compararDados();
  }
});

getJSON('dados_tabela2.json', function(err, data) {
  if (err !== null) {
    console.log('Erro ao carregar dados2: ' + err);
  } else {
    dados2 = data && data.ultimoCicloTempo2 ? data.ultimoCicloTempo2 : {};
    compararDados();
  }
});

function compararDados() {
  // Verifica se ambos os conjuntos de dados foram carregados
  if (dados1.tempoSensor5 !== undefined && dados2.tempoSensor5 !== undefined) {

    // Comparar os valores de "tempoSensor5"
    var tempoSensor5Dados1 = dados1.tempoSensor5;
    var tempoSensor5Dados2 = dados2.tempoSensor5;

    console.log("tempoSensor5Dados1:", tempoSensor5Dados1);
    console.log("tempoSensor5Dados2:", tempoSensor5Dados2);

    // Exemplo de comparação
    if (tempoSensor5Dados1 < tempoSensor5Dados2) {
      console.log("time 1");
      vencendor.innerHTML = 'Time 1 Com um tempo de ' + tempoSensor5Dados1 + " segundos "
    } else if(tempoSensor5Dados1 > tempoSensor5Dados2){
      vencendor.innerHTML = 'Time 2 Com um tempo de ' + tempoSensor5Dados2 + " segundos "
    } else{ 
      vencendor.innerHTML = 'Houve empate na corridas'


    }
  } else {
    console.log("Erro: Alguma propriedade ou objeto não está definido nos dados.");
    console.log("dados1:", dados1);
    console.log("dados2:", dados2);
  }
}
