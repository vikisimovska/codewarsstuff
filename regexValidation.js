function validate(password) {
  return /^[a-zA-Z]{3,}$/.test(password);
}