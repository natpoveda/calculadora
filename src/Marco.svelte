<script>

    import operando from './operaciones';

    let val1 = '';
    let val2 = '';
    let operador = null;
    let visor = 0;
    let vista = '';

    const elementos = {
        7:7,
        8:8,
        9:9,
        4:4,
        5:5,
        6:6,
        1:1,
        2:2,
        3:3,
        point:'.',
        0:0,
        igual:'='
    }

    const operaciones ={
        div:'/',
        mul:'x',
        min:'-',
        plus:'+'
    }

    function setOperacion(e){
        console.log(e.target);
        operador = e.target.innerText;
        console.log('OPERMARCO  ',operador);
        vista += operador;

    }

    function creaNumero(e){
        let numero = e.target.innerText;

        if (numero != '=' ){
            if (operador==null ){
            val1 += numero;
            vista = val1;
            } else {
                val2 += numero;
                vista += val2;
            }
        } else {
            callOperando();
        }

    }

    function callOperando(){
        if (operador!=null ){
            let resultado = operando([val1,val2,operador]);
            visor = resultado;
            val1 =resultado;
            val2 = ''
            operador=null;
        }
    }

</script>


<div class="calculadora" id="frame">
    <div class="visores">
        <input type="Text" name="result" bind:value={vista}/>
        <input type="Text" name="result" bind:value={visor}/>
    </div>
    <div class="operadores">
        {#each Object.values(operaciones) as oper}
      <div class="oper" on:click={setOperacion}>{oper}</div>
    {/each}
    </div>
    <div class="numeros">
        {#each Object.values(elementos) as elem}
      <div class="num" on:click={creaNumero}>{elem}</div>
    {/each}
    </div>

</div>


<style>
    .calculadora{
        width: 500px;
        height: 500px;
        display:flex;
        flex-direction: column;
        background-color: rgb(60, 153, 122);
    }
    .visores{
        display: flex;
        flex-direction: column;
    }
    .operadores{
        display: flex;
        flex-direction: row;
        justify-content: space-around;
    }
    .numeros{
        display: flex;
        flex-wrap: wrap;
        justify-content: space-around;
    }
    .num{
        width: 30%;
        text-align: center;
        background-color: cadetblue;
        color: #FFF;
    }
</style>
