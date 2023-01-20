function func_for_btn() {
  const signUp = document.getElementById("signup");
  const signIn = document.getElementById("signin");
  const title = document.getElementById("title");
  const Name = document.getElementById("name");
  const mob_no = document.getElementById("phone-no");
  const confirm_pass = document.getElementById("c-password");

  signUp.addEventListener("click", () => {
    title.innerText = "Sign Up";
    Name.style.maxHeight = "55px";
    mob_no.style.maxHeight = "55px";
    confirm_pass.style.maxHeight = "55px";
    signUp.style.backgroundColor = "red";
    signUp.style.color = "white";
    signUp.style.border = "2px solid red";
    signIn.style.border = "2px solid white";
    signIn.style.backgroundColor = "white";
    signIn.style.color = "black";
  });

  signIn.addEventListener("click", () => {
    title.innerText = "Sign In";
    Name.style.maxHeight = "0";
    mob_no.style.maxHeight = "0";
    confirm_pass.style.maxHeight = "0";
    signIn.style.backgroundColor = "red";
    signIn.style.color = "white";
    signIn.style.border = "2px solid red";
    signUp.style.border = "2px solid white";
    signUp.style.backgroundColor = "white";
    signUp.style.color = "black";
  });
}
func_for_btn();

function signin() {
  let email = document.getElementById("inp-email").value;
  let password = document.getElementById("inp-password").value;
  const signIn = document.getElementById("signin");
  
  if (email === "himanshu" && password === "123456789") {
    console.log("you are successfully signin");
  } else {
    alert("Your email address and password is not valid");
  }
}
// signin();
