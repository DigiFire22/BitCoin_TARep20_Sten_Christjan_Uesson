const getBitcoinBtn = document.querySelector('.getBitcoin')
const AmountList = document.querySelector('.bitcoins')
const inputField = document.querySelector('input[type="amount"]')


getBitcoinBtn.addEventListener('click', GetBitcoin);

function GetBitcoin(){
    let amountOfBitcoin = inputField.value;
    let url = "https://api.coindesk.com/v1/bpi/currentprice.json";

    fetch(url).then(response => {
        return response.json();
    })
    .then(data => {
        console.log(data.time.updatedISO);
        console.log(data.bpi.USD.code);
    })
    .then(data => {
        let output = "";

        data.value.forEach(value => {
            console.log(value.Bitcoin)
            output += `<li>${value.Bitcoin}</li>`
        });
        AmountList.innerHTML = output;
    });
};