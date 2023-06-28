export const validateInput = (inputName: string, inputValue = '') => {
  switch (inputName) {
    case 'first_name':
    case 'second_name':
      return /^(?:[А-ЯA-Z][а-яa-z-]+)$/.test(inputValue);
    case 'login':
      return /^[A-Za-z][A-Za-z\d.-]{2,19}$/.test(inputValue);
    case 'email':
      return /^[A-Za-z0-9-]+@[A-Za-z]+(?:\.[A-Za-z]+)+$/.test(inputValue);
    case 'password':
    case 'oldPassword':
    case 'newPassword':
    case 'repeatNewPassword':
      return /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9]).{8,30}$/.test(inputValue);
    case 'phone':
      return /^\+?\d{9,15}$/.test(inputValue);
    case 'message':
      return /\w/.test(inputValue);
    default:
      return true;
  }
};
