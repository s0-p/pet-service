export const validateEmail = email => { // email 입력 형식 확인
    const regex = /^[0-9?A-z0-9?]+(\.)?[0-9?A-z0-9?]+@[0-9?A-z]+\.[A-z]{2}.?[A-z]{0,3}$/;
    return regex.test(email);
  };
  
  export const removeWhitespace = text => { // 입력된 문자열에서 공백 모두 제거
    const regex = /\s/g;
    return text.replace(regex, '');
  };