let info = {
    personagem: 'Margarida',
    origem: 'Pato Donald',
    nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
  };

// exercício 1:
console.log('Bem-vinda,' + info.personagem);

// exercício 2:
info.recorrente = 'sim';
console.log(info.recorrente);

//exercicio 3:

for(let key in info){
    console.log(key);
}

//exercício 4:
for (key in info){
    console.log(info[key]);
}

//exercicio 5:
let infoTwo = {
    personagem: 'Tio Patinhas',
    origem: "Christmas on Bear Mountain, Dell's Four Color Comics #178",
    nota: 'O último MacPatinhas',
    recorrente: 'sim',
};

for(key in info){
    for(key in infoTwo){ 
        if (key!== "recorrente"){
            console.log(info[key] + " e " + infoTwo[key]);
        }else if (info.recorrente === "sim" && infoTwo.recorrente === "sim"){
            console.log("Ambos recorrentes");

        } else{
            console.log("pelo menos um não é recorrente");
        }
            
     }
        
}

//Para os exercícios 6, 7, 8:
let leitor = {
    nome: 'Julia',
    sobrenome: 'Pessoa',
    idade: 21,
    livrosFavoritos: [
      {
        titulo: 'O Pior Dia de Todos',
        autor: 'Daniela Kopsch',
        editora: 'Tordesilhas',
      },
    ],
  };
//exercício 6:
let fullName = leitor.nome + " " + leitor.sobrenome;
console.log("O livro favorito de " + fullName + " se chama " + leitor.livrosFavoritos[0].titulo);

