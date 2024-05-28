const validateIdentificationNumber = (
  identificationNumber: string
): boolean => {
  // 정규식으로 기본 형식 확인 (13자리 숫자)
  const regex = /^\d{6}[1-4]\d{6}$/;
  if (!regex.test(identificationNumber)) {
    return false;
  }

  // 유효성 검사 알고리즘
  const weight = [2, 3, 4, 5, 6, 7, 8, 9, 2, 3, 4, 5];
  let sum = 0;

  for (let i = 0; i < 12; i++) {
    sum += parseInt(identificationNumber[i]) * weight[i];
  }

  const checkDigit = (11 - (sum % 11)) % 10;

  return checkDigit === parseInt(identificationNumber[12]);
};

export default validateIdentificationNumber;
