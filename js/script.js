$(document).ready(function () {

    // Controla animações do menu principal
    $(".disciplinas-menu-item").click(function () {
        $(".disciplinas-menu-item").removeClass("menu-selected", 300, "swing");
        $("#disciplinas-menu-item-opcoes").removeClass("disabled", 300, "swing");
        $(this).addClass("menu-selected", 300, "swing");
    });

    // Modal - Notas
    var modalNotas = document.querySelector('#notas-modal');
    var abrirModalNotas = document.querySelector('#disciplinas-menu-notas');
    dialogPolyfill.registerDialog(modalNotas);
    abrirModalNotas.addEventListener('click', function () {
        modalNotas.showModal();

        $("#notas-modal").animate({
            opacity:1
        }, 300, function(){});
    });

    document.querySelector('#notas-modal-botao-fechar').addEventListener('click', function () {
        $("#notas-modal-listaalunos").addClass("disabled", 300, "swing");
        $("#notas-botao-editatividade").addClass("disabled", 300, "swing");
        $(".atividades-item").removeClass("menu-selected", 300, "swing");
        modalNotas = document.querySelector('#notas-modal');

        $("#notas-modal").animate({
            opacity:0
        }, 300, function(){
            modalNotas.close();
        });  
    });
    document.querySelector('#notas-modal-botao-enviar').addEventListener('click', function () {
        
        // AS ACOES E VALIDAÇÕES DE ENVIO DOS DADOS FICAM AQUI
        // USAR AJAX

        $(".atividades-item").removeClass("menu-selected", 300, "swing");
        $("#notas-modal-listaalunos").addClass("disabled", 300, "swing");
        modalNotas = document.querySelector('#notas-modal');

        $("#notas-modal").animate({
            opacity:0
        }, 300, function(){
            modalNotas.close();
        });  
    });
    $(".atividades-item").click(function () {
        $(".atividades-item").removeClass("menu-selected", 300, "swing");
        $("#notas-modal-listaalunos").removeClass("disabled", 300, "swing");
        $("#notas-botao-editatividade").removeClass("disabled", 300, "swing");
        $(this).addClass("menu-selected", 300, "swing");
    });

    // Modal - Adicionar Atividade
    var modalAddAtividade = document.querySelector('#addatividade-modal');
    var abrirModalAddAtividade = document.querySelector('#notas-botao-addatividade');
    dialogPolyfill.registerDialog(modalAddAtividade);
    abrirModalAddAtividade.addEventListener('click', function () {
        modalAddAtividade.showModal();
    
        $('#addatividade-modal').animate({
            opacity:1
        }, 300, function(){});
    });
    document.querySelector('#addatividade-modal-botao-fechar').addEventListener('click', function () {
        modalAddAtividade = document.querySelector('#addatividade-modal');

        $("#addatividade-modal").animate({
            opacity:0
        }, 300, function(){
            modalAddAtividade.close();
        }); 
       
    });
    document.querySelector('#addatividade-modal-botao-enviar').addEventListener('click', function () {
        
        // AS ACOES E VALIDAÇÕES DE ENVIO DOS DADOS FICAM AQUI
        // USAR AJAX
        
        modalAddAtividade = document.querySelector('#addatividade-modal');
        
        $("#addatividade-modal").animate({
            opacity:0
        }, 300, function(){
            modalAddAtividade.close();
        }); 
    });

    // Modal - Editar Atividade
    var modalEditAtividade = document.querySelector('#editatividade-modal');
    var abrirModalEditAtividade = document.querySelector('#notas-botao-editatividade');
    dialogPolyfill.registerDialog(modalEditAtividade);
    abrirModalEditAtividade.addEventListener('click', function () {

        $("#editatividade-modal-input").val($(".atividades-item.menu-selected span:first").text().trim());

        modalEditAtividade.showModal();
        
        $('#editatividade-modal').animate({
            opacity:1
        }, 300, function(){
            
        });
    
    });
    document.querySelector('#editatividade-modal-botao-fechar').addEventListener('click', function () {
        modalEditAtividade = document.querySelector('#editatividade-modal');

        $("#editatividade-modal").animate({
            opacity:0
        }, 300, function(){
            modalEditAtividade.close();
        }); 
       
    });
    document.querySelector('#editatividade-modal-botao-enviar').addEventListener('click', function () {
        // AS ACOES E VALIDAÇÕES DE ENVIO DOS DADOS FICAM AQUI
		// USAR AJAX
        modalEditAtividade = document.querySelector('#editatividade-modal');
        
        $("#editatividade-modal").animate({
            opacity:0
        }, 300, function(){
            modalEditAtividade.close();
        }); 
    });

    // Modal - Faltas
    var modalFaltas = document.querySelector('#faltas-modal');
    var abrirModalFaltas = document.querySelector('#disciplinas-menu-faltas');
    dialogPolyfill.registerDialog(modalFaltas);
    abrirModalFaltas.addEventListener('click', function () {

        $("#tudo").addClass("fundo-noscroll");

        modalFaltas.showModal(); 

        $('#faltas-modal').animate({
            opacity:1
        }, 300, function(){
               
        });
        
    });
    document.querySelector('#faltas-modal-botao-fechar').addEventListener('click', function () {
        $("#faltas-modal-listaalunos").addClass("disabled", 300, "swing");
        modalFaltas = document.querySelector('#faltas-modal');

        $("#tudo").removeClass("fundo-noscroll");
        
        $('#faltas-modal').animate({
            opacity:0
        }, 300, function(){
            modalFaltas.close();       
        });
        
    });
    document.querySelector('#faltas-modal-botao-enviar').addEventListener('click', function () {
        // AS ACOES E VALIDAÇÕES DE ENVIO DOS DADOS FICAM AQUI
		// USAR AJAX
        $("#faltas-modal-listaalunos").addClass("disabled", 300, "swing");
        modalFaltas = document.querySelector('#faltas-modal');

        $("#tudo").removeClass("fundo-noscroll");
        
        $('#faltas-modal').animate({
            opacity:0
        }, 300, function(){
            modalFaltas.close();       
        });
    });
    $(".faltas-item-data").click(function () {
        $(".faltas-item-data").removeClass("menu-selected", 300, "swing");
        $("#faltas-modal-listaalunos").removeClass("disabled", 300, "swing");
        $(this).addClass("menu-selected", 300, "swing");
    });

   // Modal - Materiais
    var modalMateriais = document.querySelector('#materiais-modal');
    var abrirModalMateriais = document.querySelector('#disciplinas-menu-materiais');
    dialogPolyfill.registerDialog(modalMateriais);
    abrirModalMateriais.addEventListener('click', function () {
        modalMateriais.showModal();
        
        $('#materiais-modal').animate({
            opacity:1
        }, 300, function(){
            
        });
    
    });
    document.querySelector('#materiais-modal-botao-fechar').addEventListener('click', function () {
        modalMateriais = document.querySelector('#materiais-modal');

        $("#materiais-modal").animate({
            opacity:0
        }, 300, function(){
            modalMateriais.close();
        }); 
       
    });


    // Modal - Upload Arquivo 
    var modalUploadArquivo = document.querySelector('#uploadarquivo-modal');
    var abrirModalUploadArquivo = document.querySelector('#materiais-botao-addarquivo');
    dialogPolyfill.registerDialog(modalUploadArquivo);
    abrirModalUploadArquivo.addEventListener('click', function () {

        modalUploadArquivo.showModal();
        
        $('#uploadarquivo-modal').animate({
            opacity:1
        }, 300, function(){});
    });
    document.querySelector('#uploadarquivo-modal-botao-fechar').addEventListener('click', function () {
        modalUploadArquivo = document.querySelector('#uploadarquivo-modal');

        $("#uploadarquivo-modal").animate({
            opacity:0
        }, 300, function(){
            modalUploadArquivo.close();
        }); 
       
    });
    document.querySelector('#uploadarquivo-modal-botao-enviar').addEventListener('click', function () {
        // AS ACOES E VALIDAÇÕES DE ENVIO DOS DADOS FICAM AQUI
		// USAR AJAX
        modalUploadArquivo = document.querySelector('#uploadarquivo-modal');
        
        $("#uploadarquivo-modal").animate({
            opacity:0
        }, 300, function(){
            modalUploadArquivo.close();
        }); 
    });
    document.getElementById("uploadarquivo-modal-botao").onchange = function () {
        document.getElementById("uploadarquivo-modal-nomearquivo").value = this.files[0].name;
    };


    // Modal - Questões
    var modalQuestoes = document.querySelector('#questoes-modal');
    var abrirModalQuestoes = document.querySelector('#disciplinas-menu-questoes');
    dialogPolyfill.registerDialog(modalQuestoes);
    abrirModalQuestoes.addEventListener('click', function () {
    
    modalQuestoes.showModal();
        
    $("#questoes-modal").animate({
        opacity:1
    }, 300, function(){});

    });

    document.querySelector('#questoes-modal-botao-fechar').addEventListener('click', function () {
        $("#questoes-modal-listaalunos").addClass("disabled", 300, "swing");
        modalQuestoes = document.querySelector('#questoes-modal');

        $(".questoes-item").removeClass("menu-selected", 300, "swing");
        $(".temas-item").removeClass("menu-selected", 300, "swing");
        $("#questoes-botao-edittema").addClass("disabled", 300, "swing");

        $("#questoes-modal").animate({
        opacity:0
        }, 300, function(){
            modalQuestoes.close();
        });  
    });
    document.querySelector('#questoes-modal-botao-enviar').addEventListener('click', function () {
        // AS ACOES E VALIDAÇÕES DE ENVIO DOS DADOS FICAM AQUI
		// USAR AJAX
        $("#questoes-modal-listaalunos").addClass("disabled", 300, "swing");
        modalQuestoes = document.querySelector('#questoes-modal');

        $("#questoes-modal").animate({
            opacity:0
        }, 300, function(){
            modalQuestoes.close();
        });  
    });
    $(".temas-item").click(function () {
        $(".temas-item").removeClass("menu-selected", 300, "swing");
        $("#questoes-botao-edittema").removeClass("disabled", 300, "swing");
        $("#questoes-modal-listaalunos").removeClass("disabled", 300, "swing");
        $(this).addClass("menu-selected", 300, "swing");
    });


    // Modal - Adicionar Questão
    var modalAddQuestao = document.querySelector('#addquestao-modal');
    var abrirModalAddQuestao = document.querySelector('#questoes-botao-addquestao');
    dialogPolyfill.registerDialog(modalAddQuestao);
    abrirModalAddQuestao.addEventListener('click', function () {
        modalAddQuestao.showModal();
            
        $("#addquestao-modal").animate({
            opacity:1
        }, 300, function(){});
    });

    document.querySelector('#addquestao-modal-botao-fechar').addEventListener('click', function () {
        $("#addquestao-modal-listaalunos").addClass("disabled", 300, "swing");
        modalAddQuestao = document.querySelector('#addquestao-modal');

        $(".addquestao-item").removeClass("menu-selected", 300, "swing");

        $("#addquestao-modal").animate({
            opacity:0
        }, 300, function(){
            modalAddQuestao.close();
        });  
    });
    document.querySelector('#addquestao-modal-botao-enviar').addEventListener('click', function () {
        // AS ACOES E VALIDAÇÕES DE ENVIO DOS DADOS FICAM AQUI
		// USAR AJAX
        modalAddQuestao = document.querySelector('#addquestao-modal');

        $("#addquestao-modal").animate({
            opacity:0
        }, 300, function(){
            modalAddQuestao.close();
        });  
    });


    // Modal - Editar Questão
    var modalEditQuestao = document.querySelector('#editquestao-modal');

    var abrirModalEditQuestao = document.querySelector('.questoes-item');
    dialogPolyfill.registerDialog(modalEditQuestao);

    $(".questoes-item").click(function () {
        $(".questoes-item").removeClass("menu-selected", 300, "swing");
        $("#questoes-modal-listaalunos").removeClass("disabled", 300, "swing");
        $(this).addClass("menu-selected", 300, "swing");
        $("#editquestao-modal-tituloinput").val($(this).children("span:first").text());
        modalEditQuestao.showModal();
            
        $("#editquestao-modal").animate({
            opacity:1
        }, 300, function(){});
    }); 
    document.querySelector('#editquestao-modal-botao-fechar').addEventListener('click', function () {
        modalEditQuestao = document.querySelector('#editquestao-modal');
        $(".questoes-item").removeClass("menu-selected", 300, "swing");
        $("#editquestao-modal").animate({
            opacity:0
        }, 300, function(){
            modalEditQuestao.close();
        });  
    });
    document.querySelector('#editquestao-modal-botao-enviar').addEventListener('click', function () {
        // AS ACOES E VALIDAÇÕES DE ENVIO DOS DADOS FICAM AQUI
		// USAR AJAX
        modalEditQuestao = document.querySelector('#editquestao-modal');

        $("#editquestao-modal").animate({
            opacity:0
        }, 300, function(){
            modalEditQuestao.close();
        });  
    });


    // Modal - Adicionar Tema
    var modalAddTema = document.querySelector('#addtema-modal');
    var abrirModalAddTema = document.querySelector('#questoes-botao-addtema');
    dialogPolyfill.registerDialog(modalAddTema);
    abrirModalAddTema.addEventListener('click', function () {
        modalAddTema.showModal();
        
        $('#addtema-modal').animate({
            opacity:1
        }, 300, function(){});
    });
    document.querySelector('#addtema-modal-botao-fechar').addEventListener('click', function () {
        modalAddTema = document.querySelector('#addtema-modal');

        $("#addtema-modal").animate({
            opacity:0
        }, 300, function(){
            modalAddTema.close();
        }); 
    });
    document.querySelector('#addtema-modal-botao-enviar').addEventListener('click', function () {
        // AS ACOES E VALIDAÇÕES DE ENVIO DOS DADOS FICAM AQUI
		// USAR AJAX
        modalAddTema = document.querySelector('#addtema-modal');
        
        $("#addtema-modal").animate({
            opacity:0
        }, 300, function(){
            modalAddTema.close();
        }); 
    });

    // Modal - Editar Tema
    var modalEditTema = document.querySelector('#edittema-modal');
    var abrirModalEditTema = document.querySelector('#questoes-botao-edittema');
    dialogPolyfill.registerDialog(modalEditTema);
    abrirModalEditTema.addEventListener('click', function () {
        $("#edittema-modal-input").val($(".temas-item.menu-selected span:first").text().trim());
        modalEditTema.showModal();
        
        $('#edittema-modal').animate({
            opacity:1
        }, 300, function(){});
    });
    document.querySelector('#edittema-modal-botao-fechar').addEventListener('click', function () {
        modalEditTema = document.querySelector('#edittema-modal');

        $("#edittema-modal").animate({
            opacity:0
        }, 300, function(){
            modalEditTema.close();
        });  
    });
    document.querySelector('#edittema-modal-botao-enviar').addEventListener('click', function () {
        // AS ACOES E VALIDAÇÕES DE ENVIO DOS DADOS FICAM AQUI
		// USAR AJAX
        modalEditTema = document.querySelector('#edittema-modal');
        
        $("#edittema-modal").animate({
            opacity:0
        }, 300, function(){
            modalEditTema.close();
        }); 
    });
});