let tempoMicroondaseg = 0;
let pratoMicroondas = '';

let tempoPipoca = 10
let tempoMacarrao = 8
let tempoCarne = 15
let tempoFeijao = 12
let tempoBrigadeiro = 8


function microondas(pratoMicroondas,tempoMicroondaseg) {
    switch(pratoMicroondas) {
        case 'Pipoca':

            if (tempoMicroondaseg > 20) 
                return 'A comida queimou!\n';

            else if (tempoMicroondaseg > 30)
                return 'Kabumm\n';

            else if (tempoMicroondaseg < 10)
                return 'Tempo insuficiente!\n';
                
            else if (tempoMicroondaseg !== 10)
                return 'Prato inexistente!\n';
        
        break;

        case 'Macarrao':

            if (tempoMicroondaseg > 16) 
                return 'A comida queimou!\n';

            else if (tempoMicroondaseg > 24)
                return 'Kabumm\n';

            else if (tempoMicroondaseg < 8)
                return 'Tempo insuficiente!\n';
                
            else if (tempoMicroondaseg !== 8)
                return 'Prato inexistente!\n';
        break;


        case 'Carne':

            if (tempoMicroondaseg > 30) 
                return 'A comida queimou!\n';

            else if (tempoMicroondaseg > 45)
                return 'Kabumm\n';

            else if (tempoMicroondaseg < 15)
                return 'Tempo insuficiente!\n';
                
            else if (tempoMicroondaseg !== 15)
                return 'Prato inexistente!\n';
            }
        break;

        case 'Feijao':

            if (tempoMicroondaseg > 24) 
                return 'A comida queimou!\n';

            else if (tempoMicroondaseg > 36)
                return 'Kabumm\n';

            else if (tempoMicroondaseg < 12)
                return 'Tempo insuficiente!\n';
                
            else if (tempoMicroondaseg !== 12)
                return 'Prato inexistente!\n';
            
        break;

        case 'Brigadeiro':

            if (tempoMicroondaseg > 16) 
                return 'A comida queimou!\n';

            else if (tempoMicroondaseg > 24)
                return 'Kabumm\n';

            else if (tempoMicroondaseg < 8)
                return 'Tempo insuficiente!\n';
                
            Default:
                return 'Prato inexistente\n';

        break;

    console.log(microondas);
