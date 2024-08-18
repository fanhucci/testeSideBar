document.addEventListener("DOMContentLoaded",function(){
    let a = document.getElementById('n1a');
    let b = document.getElementById('n1b');
    let c = document.getElementById('n2a');
    let resultado = document.getElementById('n2b');

    function regra3(){
        if(a.value&&b.value&&c.value){
            resultado.value = (b.value*c.value/a.value).toFixed(2);
        }
    }
    a.addEventListener('input',regra3,false);
    b.addEventListener('input',regra3,false);
    c.addEventListener('input',regra3,false);
},false);