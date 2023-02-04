const button = document.getElementById('convert-button')
const select = document.getElementById('currency-select')


const dolar = 5.11
const euro = 5.55
const bitcoin = 0.0000084

const convertValues = () => {
    const inputReais = document.getElementById('input-real').value
    const realvalueText = document.getElementById('real-value-text')
    const dolarValuetext = document.getElementById('dolar-value-text')

    realvalueText.innerHTML = new Intl.NumberFormat('pt-br',
        { style: 'currency', currency: 'BRL' }
    ).format(inputReais);


    if (select.value === 'US$ Dólar americano') {
        dolarValuetext.innerHTML = new Intl.NumberFormat('en-US',
            { style: 'currency', 
            currency: 'USD' }
        ).format(inputReais / dolar);
    }

    if (select.value === '€ Euro') {
        dolarValuetext.innerHTML = new Intl.NumberFormat('de-DE',
            { style: 'currency',
             currency: 'EUR' }
        ).format(inputReais / euro)
    }

    const vlaores = inputReais /bitcoin
    const result = Math.round(vlaores)

    if(select.value === 'Bitcoin'){
    dolarValuetext.innerHTML = result.toFixed(2)
    }
};

chagecurrency = () => {
    const trocarNime = document.getElementById('currency-name0')
    const trocarImg = document.getElementById('img-currency')
    const trocarBack= document.querySelector('section')

    if (select.value === '€ Euro') {
        trocarNime.innerHTML = 'Euro'
        trocarImg.src = 'assets/euro.svg'
        trocarBack.style.backgroundImage = `url(${'assets/ereopeia.gif'})`;
    } else {
        trocarNime.innerHTML = 'Dólar Americano'
        trocarImg.src = 'assets/estados-unidos (1) 1.svg'
        trocarBack.style.backgroundImage = `url(${'assets/badeiradoestadosunidos.gif'})`;
    }

    if(select.value === 'Bitcoin'){
        trocarNime.innerHTML = 'Bitcoin'
        trocarImg.src = 'assets/biticon.png'
        trocarBack.style.backgroundImage = `url(${'assets/biticon-bandeira.gif'})`;

    }

    convertValues();
}

button.addEventListener('click', convertValues)
select.addEventListener('change', chagecurrency)

