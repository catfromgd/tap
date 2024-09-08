const kapibara = document.querySelector('.main_div_hromosom_delete');
document.getElementById('kapibara').onclick = tap;
const delete_hromosoma = document.querySelector('.main_div_kapibara_button');
document.getElementById('delete_hromosom').onclick = dlt_hromosom;
const counter = document.querySelector('.hromosom_counter');
const awards = document.querySelector('.main_awards');
let hromosom = 0;

counter.innerHTML = document.cookie.split('=')[1];
console.log(document.cookie);

function tap() {
    hromosom = Number(document.cookie.split('=')[1]);
    hromosom += 1;
    document.cookie = 'hromosom' + '=' + encodeURIComponent(hromosom);
    counter.innerHTML = document.cookie.split('=')[1];
    if (hromosom == 46){
        awards.innerHTML = 'Congratulations with normal hromosom amount!'
    }
    if (hromosom == 47){
        awards.innerHTML = 'Congratulations! You are with Down Syndrome!'
    }
    if (hromosom == 100){
        awards.innerHTML = 'Congratulations! 100 hromosom amount!'
    }
    if (hromosom == 500){
        awards.innerHTML = 'Hromosom king!'
    }
    if (hromosom == 1000){
        awards.innerHTML = 'ivanzolo2004'
    }
};

function dlt_hromosom() {
    document.cookie = 'hromosom=0';
    counter.innerHTML = '0';
};




