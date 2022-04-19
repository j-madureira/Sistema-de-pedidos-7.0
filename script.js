//BOAS VINDAS
alert(`Bem vindo ao sistema de pedidos Bacana 7.0 !`);

//RECEBENDO O NOME DE USUÁRIO
var nomeUsuario;
if(nomeUsuario = prompt(`Digite seu nome:`)){
    alert(`${nomeUsuario}, você precisa fazer cadastro para começar a fazer seus pedidos!`);
}
while(nomeUsuario == ""){
    alert(`Você ainda não informou seu nome!`);
    if(nomeUsuario = prompt(`Digite seu nome para continuar:`)){
    alert(`${nomeUsuario}, você precisa fazer cadastro para começar a fazer seus pedidos!`);
    break;
    }
}

//CADASTRO
var nomeDeUsuario;
if(nomeDeUsuario = prompt(`Crie seu nome de usuário:`)){
}
while(nomeDeUsuario == ""){
    alert(`${nomeUsuario}, você ainda não criou seu nome de usuário!`);
    if(nomeDeUsuario = prompt(`Crie seu nome de usuário para continuar:`)){
    break;
    }
}

var senhaUsuario;
if(senhaUsuario = prompt(`Crie sua senha:`)){
}
while(senhaUsuario == ""){
    alert(`${nomeUsuario}, você ainda não criou sua senha!`);
    if(senhaUsuario = prompt(`Crie sua senha para continuar:`)){
    break;
    }
}

//LOGIN
var nomeDeUsuarioLogin = prompt(`Nome de usuário:`);
if(nomeDeUsuarioLogin == nomeDeUsuario){
}
while(nomeDeUsuarioLogin != nomeDeUsuario || nomeDeUsuarioLogin == ""){
    alert(`Nome de usuário inválido ou não inserido!`);
    nomeDeUsuarioLogin = prompt(`Insira o nome de usuário para continuar:`);
    if(nomeDeUsuarioLogin == nomeDeUsuario){
    break;
    }
}

var senhaLogin = prompt(`Senha:`);
if(senhaLogin == senhaUsuario){
   alert(`Bem vindo ${nomeUsuario}`);
   console.log(`O cliente ${nomeUsuario} está conectado`)
}
while(senhaLogin != senhaUsuario || senhaLogin == ""){
    alert(`Senha inválida ou não inserida!`);
    senhaLogin = prompt(`Senha:`)
    if(senhaLogin == senhaUsuario){
    alert(`Bem vindo ${nomeUsuario}`);
    console.log(`O cliente ${nomeUsuario} está conectado`)
    }
}

//CARDÁPIO
alert(`De uma olhada em nosso cardápio!\n
       LANCHES:\n
       Bobo Guobo Big Chease\n
       Big Chease Professional\n
       Gourmet Bacon\n
       Fogo Bongo Salad\n
       Big Bacon Master\n
       BEBIDAS:\n
       Coquinha Gelada - 120ML\n
       Kuatzin - 120 ML\n
       Açai Ice Balgo\n
       Atroox Vex De Morango - 120ML\n`);
       
alert(`Quoto Ice Blaze - 120ML\n
       SORVETES:\n
       Menta Lima\n
       Morango Frrago\n
       Chocolate Baldo\n
       Uoco Gogo\n
       Coco lima\n`);


//PEDIDOS

//LANCHES
var lanche1 = "Um Bobo Guobo Big Chease";
var lanche2 = "Um Big Chease Professional";
var lanche3 = "Um Gourmet Bacon";
var lanche4 = "Um Fogo Bongo Salad";
var lanche5 = "Um Big Bacon Master";

//BEBIDAS
var bebida1 = "Uma Coquinha Gelada - 120ML";
var bebida2 = "Uma Kuatzin - 120 ML";
var bebida3 = "Uma Açai Ice Balgo - 120ML";
var bebida4 = "Uma Atroox Vex De Morango - 120ML";
var bebida5 = "Uma Quoto Ice Blaze - 120ML";

//SORVETES
var sorvete1 = "Um sorvete Menta Lima";
var sorvete2 = "Um sorvete Morango Frrago";
var sorvete3 = "Um sorvete Chocolate Baldo";
var sorvete4 = "Um sorvete Uoco Gogo";
var sorvete5 = "Um sorvete Coco lima";

//PEDIDOS
var pedidoLanche = prompt(`Peça algum lanche do cardápio:`);
if(pedidoLanche == lanche1 || pedidoLanche == lanche2 || pedidoLanche == lanche3
   || pedidoLanche == lanche4 || pedidoLanche == lanche5){
   }
else if(pedidoLanche == ""){
    pedidoLanche = "O cliente não pediu nenhum lanche";
}

var pedidoBebida = prompt(`Peça alguma bebida do cardápio:`);
if(pedidoBebida == bebida1 || pedidoBebida == bebida2 || pedidoBebida == bebida3 ||
    pedidoBebida == bebida4 || pedidoBebida == bebida5){
    }
else if(pedidoBebida == ""){
    pedidoBebida = "O cliente não pediu nenhuma bebida";
}

var pedidoSorvete = prompt(`Peça algum sorvete do cardápio:`);
if(pedidoSorvete == sorvete1 || pedidoSorvete == sorvete2 || pedidoSorvete == sorvete3
    || pedidoSorvete == sorvete4 || pedidoSorvete == sorvete5){
    }
else if(pedidoSorvete == ""){
    pedidoSorvete = "O cliente não pediu nenhum sorvete";
}

var cidadeCliente = prompt(`${nomeUsuario}, informe a cidade para a entrega:`);
while(cidadeCliente == ""){
    alert(`Você ainda não informou a cidade para a entrega do pedido ${nomeUsuario}!`);
    if(cidadeCliente = prompt(`Informe a cidade para a entrega:`)){
    break;
    }
}

var bairroCliente = prompt(`${nomeUsuario},Informe o bairro para a entrega`);
while(bairroCliente == ""){
    alert(`Você ainda não informou o bairro para a entrega do pedido ${nomeUsuario}!`);
    if(bairroCliente = prompt(`Informe o bairro para a entrega do pedido ${nomeUsuario}:`)){
    break;
    }
}

var rua = prompt(`Informe a sua rua para a entrega:`);
while(rua == ""){
    alert(`Você ainda não informou sua rua para a entrega do pedido ${nomeUsuario}!`);
    if(rua = prompt(`Informe a rua para a entrega do pedido ${nomeUsuario}:`)){
    break;
    }
}

var numeroCasa = prompt(`Informe o número da sua casa para a entrega:`);
while(numeroCasa == ""){
    alert(`Você ainda não informu o número da sua casa para a entrega ${nomeUsuario}!`);
    if(numeroCasa = prompt(`Informe o número da casa para finalizar seu pedido!`)){
    break;
    }
}

console.log(`O cliente ${nomeUsuario} fez um pedido:\n
             ${pedidoLanche}\n
             ${pedidoBebida}\n
             ${pedidoSorvete}\n
             Entregar em:\n
             cidade: ${cidadeCliente}\n
             bairro: ${bairroCliente}\n
             rua: ${rua}\n
             Número: ${numeroCasa}`); 