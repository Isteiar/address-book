let contactList = [];
$('document').ready(function () {
  $('#add-contact-button').on('click', function () {
    $('.add-contact-form-container').show();
  });
  $('#submit').on('click', function (event) {
    event.preventDefault();
    const name = $('#name').val();
    const surname = $('#surname').val();
    const address = $('#address').val();
    const phone = $('#phoneNumber').val();
    if (name != '' && surname != '' && address != '' && phone != '') {
      contactList.push({
        name,
        surname,
        address,
        phone,
      });
      $('.add-contact-form-container').hide();
      $('#name').val('');
      $('#surname').val('');
      $('#address').val('');
      $('#phoneNumber').val('');
      const allContacts = contactList
        .map(function (el, idx) {
          return `<div class="contact">
        <div class="information">
          <div>Name: ${el.name}</div>
          <div>Surname: ${el.surname}</div>
          <div>Address: ${el.address}</div>
          <div>Phone: ${el.phone}</div>
        </div>
        <button type="button" onclick="deleteContact(${idx})">Delete</button>
        </div>`;
        })
        .join('\n');
      $('.contactList').html(allContacts);
    }
  });

  $('#reset').on('click', function () {
    $('.add-contact-form-container').hide();
  });
});

function deleteContact(id) {}
