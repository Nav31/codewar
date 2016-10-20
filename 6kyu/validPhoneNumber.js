function validPhoneNumber(phoneNumber){
  let regx = /^\(?([0-9]{3})\)? [-. ]?([0-9]{3})[-.]?([0-9]{4})$/
  return regx.test(phoneNumber);
}