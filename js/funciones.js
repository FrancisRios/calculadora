function limpiar() {
    document.getElementById('formulario').reset();
}

function calcular(){
    var a = parseInt(document.getElementById('valor1').value);
    var b = parseInt(document.getElementById('valor2').value);

    document.getElementById('el-resultado').innerHTML = a/(1/b);
}