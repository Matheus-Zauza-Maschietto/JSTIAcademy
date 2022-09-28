function Pessoa(nome, idade){
    this.nome = nome
    this.idade = idade

    this.str= function(){
        alert(`${this.nome} tem ${this.idade} anos`)
    }
}

Pessoa.prototype.carac = function(){
    alert(`As caracteristicas dessa pessoa são Nome: ${this.nome}  idade: ${this.idade}`);
}

let joao = new Pessoa("Maria", 18);
joao.str();
joao.carac();
console.log(joao)

let cadastro = [{'nome': 'marcio', 'idade': 18}, {'nome': 'andre', 'idade': 23}];

cadastro[1].__proto__.msg = function(){
     alert(`A pessoa ${cadastro[1].nome} foi chamada`);
}
cadastro[1].msg();