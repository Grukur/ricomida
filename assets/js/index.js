const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))

$('#btnSendEmail').click(function(){
    alert('El correo fue enviado correctamente..')
})

$('body').on('dblclick' , 'h3, p', function(){
    $(this).css('color','red');
})

$('.title').click(function(){
    $('.card-text').toggle()
})