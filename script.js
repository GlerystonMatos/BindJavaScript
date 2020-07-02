// O principal objetivo do método bind é alterar o contexto this de uma função independente de onde a mesma esteja sendo chamada.

// É muito comum, ocorrer a transformação do this conforme são efetuadas novas chamadas de métodos, e que seja esperado um determinado
// valor para nosso contexto this, porém nos deparamos com um this muitas vezes inesperado ou undefined.

// Um dos erros mais comuns quando não temos conhecimento do método bind é a tentativa de executar métodos com contextos inicialmente inválidos.

function cook() {
    console.log(this.ingredients);
}

cook();

// No caso que executado, recebemos o valor undefined pelo fato que this não recebeu uma propriedade ingredients.

function cook() {
    console.log(this.ingredients);
}
  
let dinner = {
    ingredients: 'bacon'
}

let cookBoundToDinner = cook.bind(dinner);

cookBoundToDinner();

// Você pode perceber no exemplo anterior que criamos o objeto dinner onde estamos setando a propriedade ingredients: 'bacon,
// e na sequência chamamos a função cook utilizando o método bind com o parâmetro dinner que será o seu novo contexto this.

// Agora que conhecemos como trabalhar com o método bind, vamos efetuar a atividade anterior, porém sem a necessidade do método bind.

let cook = function() {
    console.log(this.ingredients);
}
  
let dinner = {
    cookDinner: cook,
    ingredients: 'bacon'
}

dinner.cookDinner();
  
let lunch = {
    cookLunch: cook,
    ingredients: 'salad'
}

lunch.cookLunch();

// Nos dois exemplos anteriores estamos utilizando o método cook, tanto no objeto lunch quanto no dinner.
// Sendo que a função esteja no mesmo contexto, ela vai utilizar a propriedade disponível que se encaixa à sua necessidade
// que no caso é ingredients na qual retornou ao executar a função.

// Não estamos limitados a atribuir apenas valores em suas propriedades, pode também utilizar métodos como propriedades.

let calc = function() {
  return {
    sum: this.sum,
    mult: this.mult,
    div: this.div,
  }
}

let methods = {
  sum: function(x, y) {
    return x + y;
  },
  mult: function(x, y) {
    return x * y;
  },
  div: function(x, y) {
    return x / y;
  }
}

calcBound = calc.bind(methods);

console.log(calcBound().sum(2,2));
console.log(calcBound().mult(2,3));
console.log(calcBound().div(6,3));

// Neste exemplo foi utilizado o higher-order function onde são passadas funções como parâmetros para o contexto this, sendo estes os métodos sum, mult e div.

// Com os exemplos acima pode-se observar como o método bind facilita a execução das atividades ao trabalhar com contextos this em diferentes métodos.