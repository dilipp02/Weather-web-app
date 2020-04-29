const form1 = document.querySelector('.change-location');
const details = document.querySelector('.details');
const card = document.querySelector('.card');
const time = document.querySelector('img.time');
const icon = document.querySelector('.icon img');

const updateUI = data => {
    // console.log(data);
    const { cityDets, weather } = data;
    details.innerHTML = `
        <p class="my-3">${cityDets.EnglishName}, ${cityDets.AdministrativeArea.EnglishName}, ${cityDets.Country.EnglishName}</p>
        <div class="my-3">${weather[0].WeatherText}</div>
        <div class="display-4 my-4">
            <span>${weather[0].Temperature.Metric.Value}</span>
            <span>&deg;C</span>
        </div>
    `;

    const timeSrc = weather[0].IsDayTime ? 'img/day.svg' : 'img/night.svg';
    time.setAttribute('src', timeSrc);
    
    const iconSrc = `img/icons/${weather[0].WeatherIcon}.svg`;
    icon.setAttribute('src', iconSrc);

    if(card.classList.contains('d-none')){
        card.classList.remove('d-none');
    }
};

samp1("hello");

const updateCity = async (city) => {
    const cityDets = await getCity(city);
    const weather = await getTemp(cityDets.Key);
    return { cityDets, weather }
};

form1.addEventListener('submit', e => {
    e.preventDefault();
    const city = form1.city.value.trim();
    updateCity(city)
        .then(data => updateUI(data))
        .catch(err => console.log('error occured'));
});
