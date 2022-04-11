let info = {
    personagem: 'Margarida',
    origem: 'Pato Donald',
    nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
  };

// exercício 1:
console.log('Bem-vinda,' + info.personagem);

// exercício 2:
info.recorrente='sim';
console.log(info.recorrente);

//exercicio 3:
for(let key in info){
    console.log(key);
}