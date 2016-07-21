function validate(password) {
  return /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d){6,}$/.test(password);
}