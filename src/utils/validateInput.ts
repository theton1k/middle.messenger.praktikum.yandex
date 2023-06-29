export const validateInput = (inputName: string, inputValue = '') => {
  switch (inputName) {
    case 'first_name':
    case 'second_name':
      return {
        isValid: /^(?:[А-ЯA-Z][а-яa-z-]+)$/.test(inputValue),
        error: 'первая буква должна быть заглавной, без пробелов и без цифр',
      };
    case 'login':
      return {
        isValid: /^[A-Za-z][A-Za-z\d.-]{2,19}$/.test(inputValue),
        error: 'от 3 до 20 символов, латиница, без пробелов, без спецсимволов',
      };
    case 'email':
      return {
        isValid: /^[A-Za-z0-9-]+@[A-Za-z]+(?:\.[A-Za-z]+)+$/.test(inputValue),
        error:
          'латиница, обязательно должна быть «собака» (@), после нее точка',
      };
    case 'password':
    case 'oldPassword':
    case 'newPassword':
    case 'repeatNewPassword':
      return {
        isValid: /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9]).{8,30}$/.test(inputValue),
        error:
          'от 8 до 40 символов, обязательно хотя бы одна заглавная буква и цифра',
      };
    case 'phone':
      return {
        isValid: /^\+?\d{9,15}$/.test(inputValue),
        error:
          'от 10 до 15 символов, состоит из цифр, может начинается с плюса',
      };
    case 'message':
      return {
        isValid: /\w/.test(inputValue),
        error: ' не должно быть пустым.',
      };
    default:
      return { isValid: true, error: '' };
  }
};
