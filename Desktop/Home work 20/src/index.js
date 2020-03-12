const url = 'https://api.privatbank.ua/p24api/pubinfo?json&exchange&coursid=5';
fetch(url)
    .then(response => response.json())
    .then(result => {
        let usd = result[0];
        let eur = result[1];
        let rur = result[2];
        let btc = result[3];

        document.querySelector('.form')
            .addEventListener('submit' ,e => {
                e.preventDefault();
                const data = document.querySelector('.grivna').value;
                let currency = document.querySelector('.currency');

                if(currency.value === 'usd'){
                    const resultBuy = data / usd.buy;
                    const resultSale = data / usd.sale;
                    document.querySelector('.buy')
                        .innerHTML = `buying: ${resultBuy} selling: ${resultSale}`;
                }
                if(currency.value === 'eur'){
                    const resultBuy = data / eur.buy;
                    const resultSale = data / eur.sale;
                    document.querySelector('.buy')
                        .innerHTML = `buying: ${resultBuy} selling: ${resultSale}`;
                }
                if(currency.value === 'rur'){
                    const resultBuy = data / rur.buy;
                    const resultSale = data / rur.sale;
                    document.querySelector('.buy')
                        .innerHTML = `buying: ${resultBuy} selling: ${resultSale}`;
                }
                if(currency.value === 'btc'){
                    const resultBuy = data / btc.buy;
                    const resultSale = data / btc.sale;
                    document.querySelector('.buy')
                        .innerHTML = `buying: ${resultBuy} selling: ${resultSale}`;
                }
            });
    });


