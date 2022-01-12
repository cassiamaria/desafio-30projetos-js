document.querySelector('.busca').addEventListener('submit', async (event) => {
    event.preventDefault();

    const input = document.querySelector('#searchInput').value;

    if(input !== '') {
        Utils.showWarning('Carregando...');

        const url = `https://api.openweathermap.org/data/2.5/weather?q=${encodeURI(input)}&appid=b4d0b90859d36430106b469c88c615c3&units=metric&lang=pt_br`;
        
        const results = await fetch(url);
        const json = await results.json();
        
        if(json.cod === 200) {
            Utils.showInfo({
                name: json.name,
                country: json.sys.country,
                temp: json.main.temp,
                tempIcon: json.weather[0].icon,
                tempDescription: json.weather[0].description,
                windSpeed: json.wind.speed,
                windAngle: json.wind.deg
            });
        } else {
            Utils.clearInfo()
            Utils.showWarning('Não encontramos esta localização.'); 
        }
    }

});

const Utils = {
    showInfo(json) {
        this.showWarning('');

        document.querySelector('.resultado').style.display = 'block';
        document.querySelector('.titulo').innerHTML = `${json.name}, ${json.country}`;

        const convertedTemp = parseInt(json.temp)
        document.querySelector('.tempInfo').innerHTML = `${convertedTemp} <sup>ºC</sup>`

        document.querySelector('.ventoInfo').innerHTML = `${json.windSpeed} <span>km/h</span>`
        document.querySelector('.ventoPonto').innerHTML = `${json.windAngle}`
        document.querySelector('.temp img').setAttribute('src', `http://openweathermap.org/img/wn/${json.tempIcon}@2x.png`)
        document.querySelector('.tempDescription').innerHTML = `${json.tempDescription}`
        document.querySelector('.ventoPonto').style.transform = `rotate(${json.windAngle-90}deg)`
        document.querySelector('.ventoAngulo').innerHTML = `${json.windAngle-90}°`
    },

    showWarning(msg) {
        document.querySelector('.aviso').innerHTML = msg;
        document.querySelector('.resultado').style.display = 'none';
    },

    clearInfo() {
        this.showWarning('');
    }
}
