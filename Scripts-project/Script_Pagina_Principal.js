var input_pesquisa;
var btnPesquisa;
var btnCadastro;

function Pesquisar(){
    input_pesquisa=document.getElementById("campo_pesquisa").value.toLowerCase();

    if(input_pesquisa === "cadastro"){
        /*Direciona para o Footer*/
        scrollBy(3000,3000);
        input_pesquisa=document.getElementById("campo_pesquisa");
        input_pesquisa.value="";
    }
    else{
        alert("Conteúdo não encontrado.");
        input_pesquisa=document.getElementById("campo_pesquisa");
        input_pesquisa.value="";
    }    
}

function MainFunction(){
    btnPesquisa=document.getElementById("Btn_pesquisa").addEventListener("click",Pesquisar);
    btnCadastro=document.getElementById("btnNovoCadastro").addEventListener("click",() => {
        window.open("Cadastro.html");
    })
}

window.addEventListener("load",MainFunction);
