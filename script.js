const kapibara = document.querySelector('.main_div_hromosom_delete');
document.getElementById('kapibara').onclick = tap;
const delete_hromosoma = document.querySelector('.main_div_kapibara_button');
document.getElementById('delete_hromosom').onclick = dlt_hromosom;
const counter = document.querySelector('.hromosom_counter');
let hromosom = 1;

if (document.cookie.split('=')[1] == 1){
    counter.innerHTML = 1;
} else {
    hromosom = document.coockie;
    counter.innerHTML = document.cookie.split('=')[1];
}

function tap() {
    counter.innerHTML = document.cookie.split('=')[1];
    hromosom = Number(document.cookie.split('=')[1]);
    hromosom += 1;
    document.cookie = 'hromosom' + '=' + encodeURIComponent(hromosom);
};

function dlt_hromosom() {
    document.cookie = 'hromosom=0';
    counter.innerHTML = '0';
};
