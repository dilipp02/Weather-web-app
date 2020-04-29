// const request = new XMLHttpRequest();

// request.open('GET', 'http://dataservice.accuweather.com/locations/v1/cities/search', );

const api = 'sAxToRtcM8AVv4Gtw2R6k8ALAp2BrIvK';

const getCity = async (city) => {
    const base1 = 'http://dataservice.accuweather.com/locations/v1/cities/search';
    let query1 = `?apikey=${api}&q=${city}`;
    const response1 = await fetch(base1+query1);
    const data1 = await response1.json();
    return data1[0];
};

const getTemp = async (region_id) => {
    const base = 'http://dataservice.accuweather.com/currentconditions/v1/';
    let query = `${region_id}?apikey=${api}`;
    const response = await fetch(base+query);
    const data = await response.json();
    return data;
};

const samp1 = abc => {
    console.log(abc);
};