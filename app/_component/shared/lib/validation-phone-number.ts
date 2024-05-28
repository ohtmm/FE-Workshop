const validatePhoneNumber = (phoneNumber: string): boolean => {
  const regex = /^010\d{8}$/;
  return regex.test(phoneNumber);
};

export default validatePhoneNumber;
