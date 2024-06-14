$('document').ready(function () {
  $('#add-contact-button').on('click', function (ev) {
    $('.add-contact-form-container').show();
  });
  $('#submit').on('click', function (event) {
    event.preventDefault();
    const name = $('#name').val();
    const surname = $('#surname').val();
    const phone = $('#phoneNumber').val();
    const address = $('#address').val();
    console.log(name, surname, phone, address);
  });
});
