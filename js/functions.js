var diretory = 'projeto_03'
$('[goto=contato]').click(function(){
    location.href=diretory+'index.html?contato';
    return false;
})
checkUrl();
function checkUrl(){
    var url = location.href.split('/');
    var curPage =url[url.length=-1].split('?');
    if (curPage[1] != undefined && curPage[1] == 'contato'){
    $('header nav a').css('color','black')
    $('foter nav a').css('color','white')
    $(['goto=contato']).css('color','white')
    $('html,body').animate({'scrollTop'; $('#contato').offset().top});
}
}