let contactList = [];

$('document').ready(function () {
  renderAllContacts(contactList);
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
        time: Date.now(),
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
    renderAllContacts(filteredContactList, searchValue);
  });
});

function deleteContact(time) {
  contactList = contactList.filter(function (el, idx) {
    return el.time !== time;
  });
  clearSearch();
}

function renderAllContacts(contactToShow, searchingFor) {
  const allContacts = contactToShow
    .map(function (el, idx) {
      return `<div class="contact">
    <div class="information">
    <div>Name: ${el.name}</div>
    <div>Surname: ${el.surname}</div>
    <div>Address: ${el.address}</div>
    <div>Phone: ${el.phone}</div>
    </div>
    <button type="button" onclick="deleteContact(${el.time})">Delete</button>
    </div>`;
    })
    .join('\n');
  const finalOutput = searchingFor
    ? `<div class="searchingFor">
  <div>Searching for: ${searchingFor}</div>
  <button type="button" class="clearSearchButton" onclick="clearSearch()"> Clear Search
  </button></div> ${allContacts}`
    : allContacts;
  $('.contactList').html(
    contactToShow.length === 0
      ? '<div class="noDataFound">No data found</div> '
      : finalOutput
  );
}

function clearSearch() {
  $('#search').val('');
  renderAllContacts(contactList);
}
