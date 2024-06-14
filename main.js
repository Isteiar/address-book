$('document').ready(function () {
  $('#add-contact-button').on('click', function () {
    $('.add-contact-form-container').show();
  });
  $('#submit').on('click', function (event) {
    event.preventDefault();
    let addContact = [];
    const name = $('#name').val();
    const surname = $('#surname').val();
    const address = $('#address').val();
    const phone = $('#phoneNumber').val();
    // if(name!='' && surname!='' && address!='' && phone!=''){
    //   let obj = new ContactInfo(name, surname, address, phone);
    //   addContact.push(obj);
    // console.log(addContact);}
    console.log(name, surname, address, phone);
  });$('#submit').on('click', function () {
    $('.add-contact-form-container').hide();
  });
  $('#reset').on('click',function(){
    $('.add-contact-form-container').hide();
  })
});
// $('#submit').on('click',function(){

    
//   }
// })
// function ContactInfo(name,surname,address,phone){
//   this.name = name;
//   this.surname = surname;
//   this.address = address;
//   this.phone = phone;

// }
