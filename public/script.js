const email = document.querySelector("#email")
const errorMsg = document.querySelector("#error-text")
const emailReg =
  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/

document.querySelector("form").addEventListener("submit", (e) => {
  e.preventDefault()
  validCheck()

  if (email.value !== "" && emailReg.test(email.value)) {
    localStorage.setItem("email", email.value)

    location.href = "success.html"

    // email.value = ""
  }
})

email.addEventListener("blur", () => {
  validCheck()
})

email.addEventListener("keyup", () => {
  validCheck()
})

const validCheck = () => {
  if (email.value === "" || !emailReg.test(email.value)) {
    email.classList.add(
      "ring-1",
      "ring-rose-400",
      "bg-rose-200",
      "text-rose-600",
      "placeholder:text-rose-400"
    )

    errorMsg.textContent = "valid email required"
  } else {
    email.classList.remove(
      "ring-1",
      "ring-rose-400",
      "bg-rose-200",
      "text-rose-600",
      "placeholder:text-rose-400"
    )
    errorMsg.textContent = ""
  }
}

/*
 group-invalid:bg-rose-200 group-invalid:ring-1 group-invalid:ring-rose-600 group-invalid:text-rose-600 group-invalid:placeholder:text-rose-500
group-invalid:placeholder:hidden
*/
