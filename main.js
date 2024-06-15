let contactList = [];

$('document').ready(function () {
  $('#addContactButton').on('click', function () {
    $('.addContactFormContainer').show();
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
      $('.addContactFormContainer').hide();
      $('#name').val('');
      $('#surname').val('');
      $('#address').val('');
      $('#phoneNumber').val('');
      renderAllContacts(contactList);
    }
  });
  $('#reset').on('click', function () {
    $('.addContactFormContainer').hide();
  });
  $('.searchButton').on('click', function (ev) {
    const searchValue = $('#search').val().toLowerCase();

    const filteredContactList = contactList.filter(function (el) {
      return (
        el.name.toLowerCase().includes(searchValue) ||
        el.surname.toLowerCase().includes(searchValue) ||
        el.address.toLowerCase().includes(searchValue) ||
        el.phone.toLowerCase().includes(searchValue)
      );
    });
    $('#search').val('');
    renderAllContacts(filteredContactList);
  });
});

function deleteContact(id) {
  const filteredContactList = contactList.filter(function (el, idx) {
    return idx !== id;
  });
  renderAllContacts(filteredContactList);
}

function renderAllContacts(contactToShow) {
  const allContacts = contactToShow
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
