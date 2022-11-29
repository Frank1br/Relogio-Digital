const horas = document.querySelector('[data-hora]')
const minutos = document.querySelector('[data-minuto]')
const segundos = document.querySelector('[data-segundo]')

setInterval(function time(){
    let dateToday = new Date();
    let hours = dateToday.getHours();
    let minutes = dateToday.getMinutes();
    let seconds = dateToday.getSeconds();

    horas.textContent = setZero(hours);
    minutos.textContent = setZero(minutes);
    segundos.textContent = setZero(seconds);

})

function setZero(number){
    if(number < 10) return `0${number}`
    return number
}