const validateEmpty = (value: string) =>
  value.trim().length !== 0 ? true : false;

export default validateEmpty;
