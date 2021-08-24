function getEmail() {
  const email = document.getElementById("myEmail").innerHTML;

  navigator.clipboard.writeText(email);
}