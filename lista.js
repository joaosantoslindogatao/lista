1.

let nome = "Carlos"
let idade = 19

console.log("Olá meu nome é " + nome + " e tenho " + idade + " anos")


2.

let celsius = 22
let fahrenheit = celsius * 1.8 + 32

console.log("Fahrenheit:", fahrenheit)


3.

let peso = 81
let altura = 1.72

let imc = peso / (altura * altura)

console.log("IMC:", imc)


4.

let preco = 350
let desconto = 20

let valorDesconto = preco * desconto / 100
let valorFinal = preco - valorDesconto

console.log("Desconto:", valorDesconto)
console.log("Preço final:", valorFinal)


5.

let conta = 97
let gorjeta = conta * 0.10

console.log("Gorjeta:", gorjeta)
console.log("Total:", conta + gorjeta)


6.

let numero = 14

if(numero % 2 == 0){
    console.log("Par")
}
else{
    console.log("Impar")
}


7.

let idadePessoa = 15

if(idadePessoa <= 12){
    console.log("Criança")
}
else if(idadePessoa <= 17){
    console.log("Adolescente")
}
else if(idadePessoa <= 59){
    console.log("Adulto")
}
else{
    console.log("Idoso")
}


8.

let usuario = "admin"
let senha = "12345"

if(usuario == "admin" && senha == "12345"){
    console.log("Acesso concedido")
}
else{
    console.log("Acesso negado")
}


9.

let nota1 = 5
let nota2 = 8
let nota3 = 6

let media = (nota1 + nota2 + nota3) / 3

console.log(media)

if(media >= 7){
    console.log("Aprovado")
}
else if(media >= 5){
    console.log("Recuperação")
}
else{
    console.log("Reprovado")
}


10.

let ano = 2032

if((ano % 4 == 0 && ano % 100 != 0) || ano % 400 == 0){
    console.log("Ano bissexto")
}
else{
    console.log("Não é bissexto")
}


11.

let dia = 4

if(dia == 1 || dia == 7){
    console.log("Fim de semana")
}
else{
    console.log("Dia útil")
}


12.

for(let i = 1; i <= 15; i++){
    console.log(i)
}


13.

let soma = 0
let contador = 1

while(contador <= 100){
    soma = soma + contador
    contador++
}

console.log(soma)


14.

let tabuada = 9

for(let i = 1; i <= 10; i++){
    console.log(tabuada + " x " + i + " = " + tabuada * i)
}


15.

for(let i = 1; i <= 50; i++){

    if(i % 2 == 0){
        console.log(i)
    }

}


16.

let contagem = 10

while(contagem >= 0){
    console.log(contagem)
    contagem--
}

console.log("Feliz Ano Novo")


17.

let numeroFatorial = 6
let fatorial = 1

for(let i = numeroFatorial; i > 0; i--){
    fatorial = fatorial * i
}

console.log(fatorial)


18.

let senhaCorreta = "4321"
let tentativas = 3

let testes = ["1111", "2222", "4321"]

for(let i = 0; i < testes.length; i++){

    if(testes[i] == senhaCorreta){
        console.log("Cofre aberto")
        break
    }
    else{
        tentativas--
        console.log("Senha errada")
    }

}


19.

let numeroPrimo = 11
let primo = true

for(let i = 2; i < numeroPrimo; i++){

    if(numeroPrimo % i == 0){
        primo = false
    }

}

if(primo){
    console.log("É primo")
}
else{
    console.log("Não é primo")
}


20.

let anterior = 0
let atual = 1

console.log(anterior)
console.log(atual)

for(let i = 0; i < 8; i++){

    let proximo = anterior + atual

    console.log(proximo)

    anterior = atual
    atual = proximo

}