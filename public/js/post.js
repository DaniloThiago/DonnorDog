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

$("#imageInput").on("change", changeImage);
function changeImage() {

    var imageUrl = $("#imageInput")[0].value;
    var statuscode = checkStatus(imageUrl);

    if (statuscode == 200)
    {
        $("#imgPet").attr('src', $("#imageInput")[0].value);
    } else 
    {
        console.log(statuscode)
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
    $(".fa-facebook.hidden")
        .attr({ href: e.target.value })
        .removeClass("hidden");
}

$("#instagramInput").on("change", changeInstagram);
function changeInstagram(e) {
    $(".fa-instagram.hidden")
        .attr({ href: e.target.value })
        .removeClass("hidden");
}

$("#telefoneInput").on("change", changePhone);
function changePhone(e) {
    $(".fa-phone.hidden")
        .attr({ href: e.target.value })
        .removeClass("hidden");
}

$("#emailInput").on("change", changeEmail);
function changeEmail(e) {
    $(".fa-envelope.hidden")
        .attr({ href: e.target.value })
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

var $contactForm = $('.contact-form');

$contactForm.submit(function(e) {
    e.preventDefault();
    console.log('enviando...')
    $.ajax({
        url: 'https://formspree.io/adm.donnordog@gmail.com',
        type: 'POST',
        data: $(this).serialize(),
        dataType: 'json',
        beforeSend: function() {
            $contactForm.find('#msgForm').html('<div class="alert alert-info">Enviando mensagem</div>');
            $contactForm[0].reset();
        },
        success: function(data) {
            $contactForm.find('.alert-info').html('<div class="alert alert-success">Mensagem enviada!</div>').removeClass('alert alert-info');
        },
        error: function(err) {
            $contactForm.find('.alert-info').html('<div class="alert alert-danger">Ocorreu um erro ao enviar sua mensagem, tente novamente mais tarde.</div>').removeClass('alert alert-info');
        }
    });
});