import React, { useEffect, useState } from 'react';

export default function Weather() {

    const [data, setData] = useState(null);

    const [icon, setIcon] = useState('');

    useEffect(function() {
        fetch('https://api.openweathermap.org/data/2.5/weather?q=Brasov,Ro&appid=c7da641777760054e5ca6164eb47580a')
        .then(resUn => resUn.json())
        .then(function(res) {
            
            setData(res);
            setIcon(`http://openweathermap.org/img/wn/${res.weather[0].icon}@2x.png`);
        }); 
    }, []);

    

    function kConversion(degrees) {
        return (degrees -273.15).toFixed(2);
    }

    return !data ? <h1>Loading...</h1> : 
    <div>

        <h3>The weather for {data.name}</h3>

        <img src={icon} alt="Weather"></img>

        <div>Temperature: {kConversion(data.main.temp)} &#8451; </div>

        <div>Min: {kConversion(data.main.temp_min)} &#8451; <span>|</span> Max: {kConversion(data.main.temp_max)} &#8451;</div>

        <div>Feels like: {kConversion(data.main.feels_like)} &#8451;</div>

    </div>;
}