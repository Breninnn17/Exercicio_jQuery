function adicionarTarefa() {
    var tarefaTexto = $('#tarefa').val();
    if (tarefaTexto !== "") {
        $('#lista-tarefas').append('<li>' + tarefaTexto + '</li>');
        $('#tarefa').val("");
    }
}
function completarTarefa() {
    $(this).toggleClass('completed');
}

$(document).ready(function() {
    $('#adicionar').click(adicionarTarefa);
    $('#lista-tarefas').on('click', 'li', completarTarefa);
});