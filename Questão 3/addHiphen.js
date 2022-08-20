function addHiphen(text) {
    if (text.length > 40) {
        return false
    } else {
        return text.replaceAll(' ', '-');
    }
}

// Função para retornar um print com as entradas filtradas

// let text = [
//     "rdDulBCrdn NsaLrAHbM", "qPe  FhMnukJimpzGeTb","UGczXfqibqAMSgFV win", "FBaOOhbFRumP dvOe QQ", "RMq EfVsMtAprmXBwwW",
//     "CZNaXbgr wtbCJ WYkOV", "XuvJIVVReQs XSiMlsHd", "gS af aRJDYw GASevMg", "FZjI  kXpPXa fWvudML", "WaGiky vO ljXBsFgH",
//     "Xtl Dl uftmmFZlQHrZB", "waQcVYlsVQvJtBwhl TF", "oMJDqMbG XwtwEfrWDbO", "GntNQ w fr kFuocDjHV", "OujofvZe sktGtYPgXoIV",
//     "JhIlIan WXfgWrobWscLI", "raFcfFtZ CHiMjUjCn Km", "LtTwrUMP VgH olwIddY", "gLnbWzPrf XuwLwxMXZFG", "kK sAgwMmrXxXLZPXC",
//     "WpnggLlHPYJp STg LO", "CuorE YOTbb yzXbt lzcp", "Wx YyzbBTzs jTogiBgnl", "U ZMKOQpb cRQ YrRKs y", "WCTxjnCdyAF yiPShIJoQ",
//     "nxVnl KR NKadhBnq g", "Nvry mSMopfGZ Ft PXL", "hVjyE mnOPU dICUTcY", "afJaca P T ROMWSQd", "IIIgLyYx GZsJZDQrXQ",
//     "aKNVdXqgnnZ aeKcWLgV", "AkZBPppNTJ kEggLaisl", "Yfrlz iDDkXDM lFBIOQO", "oByRA  pPFRxAr dvZdKs", "JuPAnKs bAkMZQ ISTB Y",
//     "FIR uEIgY pR T y PzI", "reK QMoORc  ICIZlxBTm", "dKmRFYEY SDrqywDCpxM", "GYKt CxnvZ DnqD rGqC", "hdIsEwxJA joV y umXJ",
//     "HxXMLXn  G p tzduce", "WQV KF rSpqLVX vAKTf", "OPRH DUbBUSLR qqSOFIBX", "uhTyW zRIOwB bEPNrcU V", "NZs dNaBzDNdwWaCHecr",
//     "kyuAYZ mQI QJAQHEPHI", "tfiUn zlWW PLUHgQbirFN", "Eykhl fQaJPG kIi LcVb", "rdIXUlIRz SXLZp iDqM", "nPEtIX TB tpnpAEroPY"
// ];

// function printReponse() {
//     let ar = [];
//     for (i = 0; i < text.length; i++) {
//         ar.push(addHiphen(text[i].toLowerCase())); 
//     }
//     console.log(ar);
// }

// printReponse();


module.exports = addHiphen;