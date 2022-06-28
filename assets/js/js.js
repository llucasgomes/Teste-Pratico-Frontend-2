
let imagens = $('.slider')
let imagemAtual = 1;

$('#next').click(function () {
    if (imagemAtual == imagens.length) {
        return
    }
    $('.slider:nth-child(' + imagemAtual + ')').removeClass('mostrar')
    imagemAtual++;
    $('.slider:nth-child(' + imagemAtual + ')').addClass('mostrar')
    opacidade();
});
$('#back').click(function () {
    if (imagemAtual == 1) {
        return
    }
    $('.slider:nth-child(' + imagemAtual + ')').removeClass('mostrar')
    imagemAtual--;
    $('.slider:nth-child(' + imagemAtual + ')').addClass('mostrar')
    opacidade()
});
function opacidade() {
    if (imagemAtual > 1) {
        $('#back').removeClass('opacidade');
    
    }
    if (imagemAtual == 1) {
        $('#back').addClass('opacidade');
     
    }
    if (imagemAtual == imagens.length) {
        $('#next').addClass('opacidade');
       
    }
    if (imagemAtual < imagens.length) {
        $('#next').removeClass('opacidade');
      
    }
}
