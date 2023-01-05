// Variáveis e tipos de dados

/*
nome = Johanne
idade = 18

Inteiros
2.000, -8

Reais
1.23, -2.3, 60.5, -100,23

Caracteres 
'Johanne', 'Olha que legal essa foto que tirei',

Lógicos
true - verdadeiro, false - falso
1 - verdadeiro, 0 - falso

*/

var nome = 'Johanne';
console.log(nome);

**************************************************************

Tipos Específicos do JavaScript


// Tipos de dados JavaScrpt

// Number - numero
var idade = 18;
var saldo = 123.23;

// Infinito
var resultado = 42 / 0;
console.log(resultado);

// NaN - Not a Number - Não é um número
const resultado_2 = 42 / 'Johanne';
console.log(resultado_2);

// String - caracteres
var nome = "Johanne";
var contrato = "Declaro ....";

// Booleano - bool - lógico 
var verdadeiro = true;
var falso = false;
var cartao_esta_valido = true;

// Null - vazio
var vazia = null;
console.log(vazia);

// Undefined - nao definida
var endereco;
console.log(endereco);

/*
Objeto - um objeto é uma entidade independente, com propriedades e tipos. 
Compare-o com uma xícara, por exemplo. Uma xícara é um objeto, com propriedades. 
Uma xícara tem uma cor, uma forma, peso, um material de composição, etc.

Arrays - Utilizado para criação de listas como 
lista de itens em um carrinho de compras, nomes 
de usuários aprovados em um teste, etc.
 
O que é array?
Uma matriz é um objeto que pode armazenar vários valores de uma só vez. 
Por exemplo, const words = ['olá', 'mundo', 'bem-vindo']; Aqui, words é um array.
*/


**************************************************************
// Variáveis e constantes em JavaScript
// var => const, let

/*
let nome_do_site = "Vendinha da Leticia";
console.log(nome_do_site);

let nome_do_site = "Venda da";
console.log(nome_do_site);

var saldo = 100;
saldo = saldo - 10;
console.log(saldo);
*/
 
// Typeof - tipo de

const variavel_1 = 3; // Number
const variavel_2 = "3"; // String
const variavel_3 = true; // bool
const variavel_4 = "true"; // String

console.log(typeof variavel_1);
console.log(typeof variavel_2);
console.log(typeof variavel_3);
console.log(typeof variavel_4);
*******************************************************

// Operadores 
// aritmeticos, atribuição, comparação, lógico

/*
aritmeticos
soma (+),
subtração (-),
multiplicação (*),
divisão (/).
*/
/*
console.log(2+3);
console.log(2-3);
console.log(2*3);
console.log(2/3);
*/
/*
Incremento (++)
Decremento (--)
/*
let saldo = 30;
//console.log(--saldo);

console.log(saldo--);
console.log(saldo);
*/

/*
Negação (-)
Adição (+)
*/

/*
let saldo = 100;
console.log(saldo);
console.log(-saldo);

let idade = "18";
console.log(typeof idade);

idade = +"18";
console.log(idade);
console.log(typeof idade);

// atribuição (=)
const idade = 18;

/*

x += y

x -= y

x *= y

x /= y

*/

/*Let saldo = 100
saldo = saldo - 10;
saldo -= 10;
*/
/*
let saldo = 100;
//saldo = saldo + 10;
saldo += 10;
*/

// comparação
/*
== igual a - verifica o valor da variavel
=== estritamente igual - verifica o tipo da variavel

!= diferente a
> maior que
>= maior ou igual que
< menor que
<= menor ou igual que
*/

// == & ===
/*const nome_do_cartao = "Johanne"; // nome legitimo
const nome_no_site = "Joao";

const sao_iguais = nome_do_cartao == nome_no_site;
console.log(sao_iguais);

const sao_diferentes = nome_do_cartao != nome_no_site;
console.log(sao_diferentes);


const saldo = 100; // Number 
const saldo_string = "100"; // String

const sao_iguais = saldo != saldo_string;
console.log(sao_iguais);

*/

/*
> maior que
>= maior ou igual que
< menor que
<= menor ou igual que
*/
/*
const saldo = 100;
const saque = 200;

const pode_sacar = saldo > saque;
console.log(pode_sacar);
*/
/*
const saldo = 100;
const saque = 100;

const pode_sacar = saldo >= saque;
console.log(pode_sacar);
*/

/*
Operadores logicos
&& - E
|| - OU
! - Negação
*/

/*
const nome_do_cartao = "Johanne";
const nome_no_site = "Johanne";
const nome_esta_certo = nome_do_cartao === nome_no_site;
console.log(nome_esta_certo);

const numero_do_cartao = 123456789;
const numero_no_site = 123456788;
const numero_esta_certo = numero_do_cartao === numero_no_site;
console.log(numero_esta_certo);

const cartao_esta_valido = nome_esta_certo && numero_esta_certo;
console.log(cartao_esta_valido);
*/

const resposta_certa_1 = "cinza claro";
const resposta_certa_2 = "cinza escuro";

const resposta_aluno = "cinza escuro";

const resposta_esta_certa =
  (resposta_aluno === resposta_certa_1)
  ||
  (resposta_aluno === resposta_certa_2);
  
console.log(resposta_esta_certa);

console.log(!resposta_esta_certa);

*******************************************************

// Estruturas de controle Condicionais

/*

simples (SE/ENTÃO), -> if - SE


composta (SE/ENTÃO/SENÃO), if - else SE - SENÃO


encadeada (SE/ ENTÃO/SENÃO/SE/ENTÃO/SENÃO), if - else if


múltipla (CASO/SELECIONE) switch

*/

// IF 
/*const num = 3;
if(num > 2){
  console.log('numero é maior que 2');
}*/

// if else 
/*let num = 3;
if(num > 2){
  
  console.log('numero é maior que 2');
  num++;
  
  console.log(num);
  
} else {
  console.log('numero é menor ou igual 2');
}
*/

// if - else variaas vezes
/*const mes = 2000;

if(mes===1){
  console.log('Janeiro');
} else if(mes === 2) {
  console.log('Fevereiro');
} else if(mes >= 3) {
  console.log('Ese mês é de Março até Dezembro');
}*/

// switch - case - break
/*const mes = 3;
switch(mes) {
  case 1:
    console.log('Janeiro');
    break;
  case 2:
    console.log('Fevereiro');
    break;
  default:
    console.log('Ese mês é de Março até Dezembro');
    break;
}*/

// Desafio: avaliação - estrelas 
/*
"Avaliação: ruim" se a avaliação for menor que 2,
"Avaliação: média" se for maior ou igual 2 e menor ou igual a 4,
"Avaliação: boa" se for maior que 4.
*/

const avaliacao = 5;
if(avaliacao < 2) {
console.log("Avaliação: ruim");
} else if(avaliacao >= 2 && avaliacao <= 4) {
  console.log("Avaliação: média");
} else if(avaliacao > 4) {
  console.log("Avaliação: boa");
}

*******************************************************
// Estruturas de controle - laços de repetição - loops
// for, while, do-while

// for
/*
for(let i = 1; i <= 20; i++) {
  console.log(i);
}*/

// while
let i = 1;
while(i <= 10) {
  console.log(i);
  
  i++;
}

// do-while
/*let i = 12;
do {
  console.log(i);
  i++;
} while(i <= 10);*/

*******************************************************
// Funções
/*
function somar(x=0, y=0) {
  
  // corpo => é onde escrevemos os comandos
  //console.log("olá função!");
  
  const resultado = x + y;
  return resultado;
}


const resultado_somar = somar(3);
console.log(resultado_somar);
*/

// escopo

const antes = 'antes da função (fora)';

function testando_escopo() {
  const dentro = 'dentro da função';
  // console.log(dentro);
  console.log(antes);
  console.log(depois);
}

testando_escopo();

const depois = 'depois da função (fora)';

console.log(dentro); //erro

// Desafio
/* criar uma função, que vai receber 3 parametros,
essa funcao é uma funcao verificacao_cartao_credito
os parametros vão ser nome_cartao, numero_cartao e o codigo_verificador
retorno dever ser logico true or false indicando se 
o cartao está valido ou invalido;
no console.log("") deve imprimir para cada parametro
se está correto ou incorreto; para os 3 parametros


  const nome_cartao = "Johanne C.";
  const numero_cartao = 12345678;
  const codigo_verificador = 123;
  
function verificar_dados_cartao(nome, numero, codigo) {
  const nome_correto = nome === nome_cartao;
  if(nome_correto) {
    console.log("nome está correto");
  } else {
    console.log("nome está errado");
  }
  
  const numero_correto = numero === numero_cartao;
  if(numero_correto) {
    console.log("numero está correto");
  } else {
    console.log("numero está errado");
  }
  
  const codigo_correto = codigo === codigo_verificador;
  if(codigo_correto) {
    console.log("codigo está correto");
  } else {
    console.log("codigo está errado");
  }
    
  const todos_dados_corretos = nome_correto 
  && numero_correto 
  && codigo_correto;  
    
  return todos_dados_corretos;
}

const cartao_valido = verificar_dados_cartao('Johanne C.', 12345678, 123);
console.log(cartao_valido);
*/

- Declarar uma função
- Parâmetros (valor de entrada)
- Retorno (valor de saída)
- Escopo

*******************************************************

// Funções de seta (arrow functions)

/*
function somar(x=0, y=0) {
  return x+y;
}

console.log(somar(3,5));

const somar_seta = (x=0, y=0) => {
  // corpo da função
  return x+y;
}

console.log(somar_seta (10,20));

const somar_seta_2 = (x=0, y=0) => x+y;

console.log(somar_seta_2(10,20));

const saudacao = texto => console.log(texto);

saudacao('Olá mundooo!');
*/

// Desafio multiplicação em =>

const multiplicar_seta = (x=0, y=0) => { return x*y;};

console.log(multiplicar_seta(15,36));


// Revisão e Próximos Passos
/*
Variáveis - let, const e var

Tipos de dados - Genéricos, Primitivos e Específicos

Operadores - Aritméticos, Atribuição, Comparação e Lógicos

Estruturas de Controle -
Condicionais
if/else e switch 
Laços de Repetição
for, while e do/while

Funções e suas diferente formas
*/
