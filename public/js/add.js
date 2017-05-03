$('[data-toggle="popover"]').popover();   

function checkStatus(imageUrl) 
{
   var http = jQuery.ajax(
   {
      type:"HEAD",
      url: imageUrl,
      async: false
    })
  return http.status;
}

$("#imageInput").keyup(changeImage);
function changeImage() {    
    var imageUrl = $("#imageInput")[0].value;
    var statuscode = checkStatus(imageUrl);
    console.log(statuscode)
    if (statuscode == 200)
    {
        $("#imgPet").attr('src', $("#imageInput")[0].value);
    } else 
    {
        console.log(statuscode)
        $("#imgPet").attr('src', './img/animais.jpg');
    }
    
}

$("#nameInput").keyup(changeNome);
function changeNome() {
    let nome = $("#nameInput")[0].value;
    $("#nomePet").html(nome);
}

$("#racaInput").keyup(changeRaca);
function changeRaca() {
    let raca = $("#racaInput")[0].value;
    $("#racaPet").html(raca);
}

$("#sexoInput").change(changeSexo);
function changeSexo() {
    let sex = $('#sexoInput')[0].selectedIndex;
    $('#sexoPet')
    .removeClass('fa-mars fa-venus')
    .addClass((sex != 0)?((sex == 1)?'fa-mars':'fa-venus'):'');   
}

$("#situacaoInput").change(changeSituacao);
function changeSituacao() {
    let sit = $('#situacaoInput')[0].selectedIndex;
    
    $('#situacaoPet')
    .removeClass('fa-heart fa-heartbeat')
    .addClass(((sit == 0)?'fa-heart':'fa-heartbeat'));
    
    $('#icon').removeClass('fa-arrow-left').addClass('fa-bars')

    $('#previa').removeAttr('class')
    .addClass('material-card')
    .addClass($('#situacaoInput')[0].value)
}

$('#msgInput').focus(function(){
    $('.fa.fa-bars').click();
}).keyup(changeMsg)
function changeMsg(e){
    
    $('#descricaoPet').html($('#msgInput')[0].value)
}

$("#facebookInput").on("change", changeFacebook);
function changeFacebook(e) {
    $(".fa-facebook")
        .attr({ href: e.target.value })
        .removeClass("hidden");
}

$("#instagramInput").on("change", changeInstagram);
function changeInstagram(e) {
    $(".fa-instagram")
        .attr({ href: e.target.value })
        .removeClass("hidden");
}

$("#telefoneInput").on("change", changePhone);
function changePhone(e) {
    console.log(e.target.value)
    $(".fa-phone")
        .removeAttr('data-content')
        .attr({ 'data-content': e.target.value })
        .removeClass("hidden");
}

$("#emailInput").on("change", changeEmail);
function changeEmail(e) {
    $(".fa-envelope")
        .attr({ href: "mailto:"+e.target.value })
        .removeClass("hidden");
}

$('#btn').on('click', handleClickBtn);
$('#icon').on('click', handleClickIcon);

function handleClickBtn(event) {
    event.preventDefault()
    var el = event.target
    var card = $(el).parent('.material-card');
    var icon = $(el).children('i');
    icon.addClass('fa-spin-fast');
    if (card.hasClass('mc-active')) {
        card.removeClass('mc-active');
        window.setTimeout(function() {
            icon.removeClass('fa-arrow-left').removeClass('fa-spin-fast').addClass('fa-bars');
        }, 800);
    } else {
        card.addClass('mc-active');
        window.setTimeout(function() {
            icon.removeClass('fa-bars').removeClass('fa-spin-fast').addClass('fa-arrow-left');
        }, 800);
    }
}

function handleClickIcon(event) {
    event.preventDefault()
    var el = event.target
    var card = $(el).closest('.material-card');
    var icon = $(el).children('i');
    $(el).addClass('fa-spin-fast');
    if (card.hasClass('mc-active')) {
        card.removeClass('mc-active');
        window.setTimeout(function() {
            $(el).removeClass('fa-arrow-left').removeClass('fa-spin-fast').addClass('fa-bars');
        }, 800);
    } else {
        card.addClass('mc-active');
        window.setTimeout(function() {
            $(el).removeClass('fa-bars').removeClass('fa-spin-fast').addClass('fa-arrow-left');
        }, 800);
    }
}