
function descobrirNome() {
    let diaEscolhido = document.querySelector("#dia").value;
    let mesEscolhido = document.querySelector("#mes").value;


    let escolhaMes = "";
    let escolhaDia = "";


    switch (mesEscolhido) {
        case "1":
            escolhaMes = "Capirotos";
            break;
        case "2":
            escolhaMes = "chupacabras";
            break;
        case "3":
            escolhaMes = "eliotarios";
            break;
        case "4":
            escolhaMes = "pingas";
            break;
        case "5":
            escolhaMes = "jumentinos";
            break;
        case "6":
            escolhaMes = "pipoqueiros";
            break;
        case "7":
            escolhaMes = "sartuninos";
            break;
        case "8":
            escolhaMes = "salamaleicos";
            break;
        case "9":
            escolhaMes = "soweto";
            break;
        case "10":
            escolhaMes = "abutres";
            break;
        case "11":
            escolhaMes = "taxistas";
            break;
        case "12":
            escolhaMes = "artpopular"
            break;

    }

    switch (diaEscolhido) {
        case "1":
            escolhaDia = "do papa";
            break;
        case "2":
            escolhaDia = "Do caca";
            break;
        case "3":
            escolhaDia = "Da guia";
            break;
        case "4":
            escolhaDia = "Do papoco";
            break;
        case "5":
            escolhaDia = "Do faro ";
            break;
        case "6":
            escolhaDia = "Do papai";
            break;
        case "7":
            escolhaDia = "Das chagas";
            break;
        case "8":
            escolhaDia = "Do bau";
            break;
        case "9":
            escolhaDia = "Dos faustos";
            break;
        case "10":
            escolhaDia = "De piupiu";
            break;
        case "11":
            escolhaDia = "Das almas";
            break;
        case "12":
            escolhaDia = "podres";
            break;
        case "13":
            escolhaDia = "da silva";
            break;
        case "14":
            escolhaDia = "tchutchuca";
            break;
        case "15":
            escolhaDia = "Do tempo";
            break;
        case "16":
            escolhaDia = "Do grilo";
            break;
        case "17":
            escolhaDia = "alexandre de morais";
            break;
        case "18":
            escolhaDia = "limões";
            break;
        case "19":
            escolhaDia = "nescal";
            break;
        case "20":
            escolhaDia = "Maloqueiros";
            break;
        case "21":
            escolhaDia = "pimpao";
            break;
        case "22":
            escolhaDia = "machupichu";
            break;
        case "23":
            escolhaDia = "samurai";
            break;
        case "24":
            escolhaDia = "fulos";
            break;
        case "25":
            escolhaDia = "mascara";
            break;
        case "26":
            escolhaDia = "zuados";
            break;
        case "27":
            escolhaDia = "Da ilha do dicaprio";
            break;
        case "28":
            escolhaDia = "Da praia";
            break;
        case "29":
            escolhaDia = "Rebel laion";
            break;
        case "30":
            escolhaDia = "psicodelicos";
            break;
        case "31":
            escolhaDia = "Do snaif";
            break;

        default:
            ""
    }

    alert(`O nome da sua banda é ${escolhaMes} ${escolhaDia}`);

}

function testarIdade() {
    let idadeMinima = document.querySelector("#idade").value;

    if (idadeMinima >= 18) {
        alert("Maior de idade");
    } else {
        alert("Menor de idade");
    }
}

function testarNumero() {
    let numero = document.querySelector("#numero").value;

    if (numero > 0) {
        alert("Positivo");
    } else if (numero == 0) {
        alert("Zero");
    } else {
        alert("Negativo");
    }
}

function compararValores() {
    let numeroA = document.querySelector("#numero1").value;
    let numeroB = document.querySelector("#numero2").value;

    if (numeroA > numeroB) {
        alert(`${numeroA} é maior que ${numeroB}`);
    } else if (numeroB > numeroA) {
        alert(`${numeroB} é maior que ${numeroA}`);
    } else {
        alert("Os números são iguais");
    }

}

function parOuImpar() {
    let numero = document.querySelector("#par").value;

    if ((numero % 2) == 0) {
        alert(`${numero} é par!`);
    } else {
        alert(`${numero} é impar!`);
    }

}

function media() {
    let notaA = Number(document.querySelector("#media1").value);
    let notaB = Number(document.querySelector("#media2").value);
    let notaC = Number(document.querySelector("#media3").value);
    let media = ((notaA + notaB + notaC) / 3).toFixed(1);
    let situacao = "";

    if (media >= 7) {
        situacao = "Aprovado";
    } else if (media > 5 && media < 7) {
        situacao = "Recuperação";
    } else {
        situacao = "Reprovado";
    }
    alert(`${situacao}, média: ${media}`);

}

function aplicarDesconto() {
    let valor = Number(document.querySelector("#valor").value);
    let desconto = 0.1;
    if (valor > 100) {
        alert(`Total a pagar: R$ ${(valor - (valor * desconto)).toFixed(2)}`);
    } else {
        alert(`Total a pagar: R$ ${valor.toFixed(2)}`);
    }
}
function verificarAno() {
    let anoValor = Number(document.querySelector("#ano").value);

if (anoValor % 400 == 0) {
    console.log(`${anoValor} é bisexto`);
} else if (anoValor % 4 == 0 && anoValor % 100 != 0) {
    console.log(`${anoValor} é bisexto`);
} else {
    console.log(`${anoValor} não é bisexto`);
}

}