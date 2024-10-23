document.addEventListener("DOMContentLoaded",function(){
    dataAgora();
    setInterval(dataAgora, 1000);

    function dataAgora(){
        const  agora =  new Date();
        const diaSemana = agora.toLocaleString('pt-BR',{weekday:'long'});
        const diaMes = agora.toLocaleString('pt-BR',{month:'numeric',day:'numeric'});
        const horaMinuto = agora.toLocaleString('pt-BR',{hour:'numeric',minute:'numeric'});
        const dataFormatada = `${diaSemana}</br>${diaMes}</br>${horaMinuto}`;

        document.getElementById('datetime').innerHTML = dataFormatada;
    }

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

    let botoesFerramentas = this.documentElement.querySelectorAll('.botao');
    botoesFerramentas.forEach(botao => {
        botao.addEventListener('click',function(){
            abreFecha(this);
        },false)
    });

    function abreFecha(botao){
        const estado = botao.dataset.estado;
        const app = botao.parentElement.querySelector('.aplicacao');
        if(estado==='fechado'){
            botao.dataset.estado = 'aberto';
            botao.querySelector('i').className='fa-solid fa-chevron-up fa-sm';
            app.style.display = 'flex';

        }
        else{
            botao.dataset.estado = 'fechado';
            botao.querySelector('i').className='fa-solid fa-chevron-up fa-flip-vertical fa-sm';
            app.style.display = 'none';
        }
    }
},false);