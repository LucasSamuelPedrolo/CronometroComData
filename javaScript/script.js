const cronometro = document.querySelector('.timerCount');
const btnStart = document.querySelector('#start');
const btnStop = document.querySelector('#stop');
const btnReset = document.querySelector('#reset');
let segundos = 0;
let timer;

function contadorSegundos(segundos){
    const contador = new Date(segundos * 1000);
    return contador.toLocaleTimeString('pt-BR',{
        hour12: false,
        timeZone: 'UTC'
    });
}

function iniciaContador(){
    timer = setInterval(()=>{
        segundos++;
        cronometro.innerText = contadorSegundos(segundos);
    },1000);
}

btnStart.addEventListener('click',()=>{
    cronometro.style.color = 'black';
    clearInterval(timer) //evita que tenha varios timers
   iniciaContador();
});

btnStop.addEventListener('click',()=>{
    cronometro.style.color = 'red';
    clearInterval(timer);
});

btnReset.addEventListener('click',()=>{
    cronometro.style.color = 'black';
    clearInterval(timer)
    segundos = 0;
    cronometro.innerText = '00:00:00'
});
