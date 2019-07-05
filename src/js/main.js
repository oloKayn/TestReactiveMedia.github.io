window.onload = function() {
  
// Отправка заявки 
    $('#form').submit(function() { 

      if (document.forms[0].email.value === '' || document.forms[0].name.value === '' || document.forms[0].phone.value === ''  ) {
        valid = false; 
        console.log(valid);
        return valid; 
      } 
      $.ajax({
        type: "POST",
        url: "mail/mail.php",
        data: $(this).serialize() 
      }).done(function(data) {
        console.log("done"); 
        $('#popupTitle').html(data);
        $('.js-overlay-thank-you').fadeIn();
        $(this).find('input').val('');
        $('#form').trigger('reset'); 
        console.log(data);
      });

      return false;
  });



console.log(document.forms);
console.log(document.forms[1].email);

  // отправка сообщения 
  $('#form-message').submit(function(){
    if (document.forms[1].email.value === '' || document.forms[1].name.value === '' || document.forms[1].phone.value === ''  ) {
      valid = false; 
      console.log(valid);
      return valid; 
    } 
    $.ajax({
      type: "POST",
      url: "mail/mail.php",
      data: $(this).serialize() 
    }).done(function(data) {
      console.log("donemessage"); 
      $('#staus').html(data);
      $(this).find('input').val('');
      $('#form-message').trigger('reset'); 
      console.log(data);
   
    });

    return false;

  });


  // Закрыть попап «спасибо»
  $('.js-close-thank-you').click(function() { // по клику на крестик
    $('.js-overlay-thank-you').fadeOut(1000);
  });

  $(document).mouseup(function (e) { // по клику вне попапа
    var popup = $('.popup');
    if (e.target!=popup[0]&&popup.has(e.target).length === 0){
      $('.js-overlay-thank-you').fadeOut(1000);
    }
  });

  // открыть «сообщение»
  $('.button-1').click(function() { // по клику на крестик
    $('.js-overlay-sendmail').show();
  });
  
  // Закрыть попап «сообщение»
  $('.close-popup').click(function() { // по клику на крестик
    $('.js-overlay-sendmail').hide();
  });

  $(document).mouseup(function (e) { // по клику вне попапа
    var popup = $('.popup-message');
    if (e.target!=popup[0]&&popup.has(e.target).length === 0){
      $('.js-overlay-sendmail').fadeOut(1000);
    }
  });







  // Маска ввода номера телефона 
  $(function($){
    $('[name="phone"]').mask("+7(999) 999-9999");
  });
  // Маска ввода номера email  
  $(document).ready(function(){   
    $('[name="email"]').inputmask("email");
  }); 

};

