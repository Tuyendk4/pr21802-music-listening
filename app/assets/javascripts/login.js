$(document).on('turbolinks:load', function () {
  
  function isValidEmailAddress(emailAddress) {
    var pattern = /^([a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+(\.[a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+)*|'((([ \t]*\r\n)?[ \t]+)?([\x01-\x08\x0b\x0c\x0e-\x1f\x7f\x21\x23-\x5b\x5d-\x7e\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|\\[\x01-\x09\x0b\x0c\x0d-\x7f\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))*(([ \t]*\r\n)?[ \t]+)?')@(([a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.)+([a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.?$/i;
    return pattern.test(emailAddress);
  }

  function checkFormatEmail() {
    var mail = $('#user_email').val();

    var length_email = mail.length;

    if (length_email === 0) {
      $('#note-exist-email').hide();
      $('#InforCheckEmailMatch').hide();
      $('#InforCheckEmailError').hide();
      return;
    }

    var user = { email: mail };

    var response = -1;

    // $.ajax({
    //   type: 'GET',
    //   url: '/check-user',
    //   data: user,
    //   async: false,
    //   success: function (text) {
    //     response = parseInt(text);
    //   }
    // });

    if (response === 1) {
      $('#note-exist-email').show();
    }

    if (isValidEmailAddress(mail) && response === 0) {
      $('#note-exist-email').hide();
      $('#InforCheckEmailMatch').show();
      $('#InforCheckEmailError').hide();
    }
    else {
      $('#InforCheckEmailMatch').hide();
      $('#InforCheckEmailError').show();
    }

  }

  function checkNameLength() {
    var name = $('#user_name').val();
    var size_of_name = name.length;

    if (size_of_name === 0) {
      $('#InforCheckNameMatch').hide();
      $('#InforCheckNameError').hide();
      return;
    }

    if ((size_of_name >= 3) && (size_of_name <= 25)) {
      $('#InforCheckNameMatch').show();
      $('#InforCheckNameError').hide();
    }
    else {
      $('#InforCheckNameMatch').hide();
      $('#InforCheckNameError').show();
    }
  }

  function checkPasswordLength() {
    var password = $('#user_password').val();
    var size_of_password = password.length;

    if (size_of_password === 0) {
      $('#InforCheckPasswordLength').hide();
      $('#InforCheckPasswordLengthError').hide();
      $('#show-message-password').hide();
      return;
    }

    if (size_of_password >= 6) {
      $('#InforCheckPasswordLength').show();
      $('#InforCheckPasswordLengthError').hide();
    }
    else {
      $('#InforCheckPasswordLength').hide();
      $('#InforCheckPasswordLengthError').show();
    }

  }

  function checkLostFocusPasswordBox() {
    var password = $('#user_password').val();
    var size_of_password = password.length;

    if (size_of_password >= 6) {
      $('#show-message-password').html('<br><br>Your password : ' + '<b>' + password + '</b>');
      $('#show-message-password').css('color', 'green');

      $('#show-message-password').show();
      $('#show-message-password').fadeOut(6000);
    }
    else {
      $('#show-message-password').hide();
    }
  }

  function checkPasswordMatch() {
    var password = $('#user_password').val();
    var confirmPassword = $('#user_password_confirmation').val();

    if (confirmPassword.length === 0) {
      $('#InforCheckPasswordMatch').hide();
      $('#InforCheckPasswordError').hide();
      return;
    }

    if ((password === confirmPassword) && (password.length > 0)) {
      $('#InforCheckPasswordMatch').show();
      $('#InforCheckPasswordError').hide();
    }
    else {
      $('#InforCheckPasswordMatch').hide();
      $('#InforCheckPasswordError').show();
    }
  }

  $(document).ready(function () {
    $('#InforCheckNameMatch').hide();
    $('#InforCheckNameError').hide();

    $('#InforCheckEmailMatch').hide();
    $('#InforCheckEmailError').hide();

    $('#InforCheckPasswordMatch').hide();
    $('#InforCheckPasswordError').hide();

    $('#InforCheckPasswordLength').hide();
    $('#InforCheckPasswordLengthError').hide();

    $('#note-exist-email').hide();
    $('#show-message-password').hide();

    $('#user_email').focusout(checkFormatEmail);
    $('#user_name').keyup(checkNameLength);

    $('#user_name').mouseup(checkNameLength);
    $('#user_name').focusout(checkNameLength);

    $('#user_password').keyup(checkPasswordLength);
    $('#user_password').focusout(checkLostFocusPasswordBox);

    $('#user_password_confirmation').keyup(checkPasswordMatch);
  });
});
