let nameValidate = emailValidate = phoneValidate = ageValidate = false
document.getElementById("myBtn").disabled = true;

const Removes_Validation_Class = (params) => {
  params.classList.remove("is-valid");
  params.classList.remove("is-invalid");
}
//vvvvvvvvvvvvvvvvvvvvvvvvvvvvvv NAme Validation Start vvvvvvvvvvvvvvvvvvvvvvvvvvvvvv
let Names = document.getElementById("name");
Names.addEventListener("keyup", () => {
  let VALUE = String(Names.value);
  re = /[a-zA-Z ]/gi;
  let Msg = document.getElementById("NameMsg");
  if (VALUE.length === 0) {
    Msg.innerText = "";
    nameValidate = false;
    Removes_Validation_Class(Names)
  } else if (VALUE[0].match(re) !== null) {
    VALUE = VALUE.match(re).join("");
    Names.value = VALUE;
    if (VALUE.length > 30) {
      Msg.innerText = "** Maximum 30 character allowed";
      Msg.style.color = "#DC3545";
      nameValidate = false;
      Names.classList.remove("is-valid");
      Names.classList.add("is-invalid");
    } else if (VALUE.length > 0 && VALUE.length < 5) {
      Msg.innerText = "** Minumum 5 character allowed";
      Msg.style.color = "#DC3545";
      nameValidate = false;
      Names.classList.remove("is-valid");
      Names.classList.add("is-invalid");
    } else {
      nameValidate = true;
      Names.classList.remove("is-invalid");
      Names.classList.add("is-valid");
    }
  } else {
    Names.value = "";
    Msg.innerText = "";
    nameValidate = false;
  }
});
//^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ Name Validation END ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

//vvvvvvvvvvvvvvvvvvvvvvvvvvvvvv Email Validation Start vvvvvvvvvvvvvvvvvvvvvvvvvvvvvv
let Emails = document.getElementById("email");
Emails.addEventListener("keyup", () => {
  let VALUE = Emails.value;
  let re = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/gi;
  let Msg = document.getElementById("EmailMsg");
  if (VALUE.length === 0) {
    Msg.innerText = "";
    emailValidate = false;
    Removes_Validation_Class(Emails)
  } else if (VALUE.match(re) !== null) {
    if (VALUE.length > 35) {
      Msg.innerText = "** Maximum 35 character allowed";
      Msg.style.color = "#DC3545";
      emailValidate = false;
      Emails.classList.remove("is-valid");
      Emails.classList.add("is-invalid");
    } else if (VALUE.length > 0 && VALUE.length < 10) {
      Msg.innerText = "** Minumum 10 character allowed";
      Msg.style.color = "#DC3545";
      emailValidate = false;
      Emails.classList.remove("is-valid");
      Emails.classList.add("is-invalid");
    } else {
      emailValidate = true;
      Emails.classList.remove("is-invalid");
      Emails.classList.add("is-valid");
    }
  } else {
    Msg.innerText = "** Please Enter Valid Email";
    Msg.style.color = "#DC3545";
    emailValidate = false;
    Emails.classList.remove("is-valid");
    Emails.classList.add("is-invalid");
  }
});
//^^^^^^^^^^^^^^^^^^^^^^^^^^^^ Email Validation END ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

//vvvvvvvvvvvvvvvvvvvvvvvvvvvvvv Phone Validation Start vvvvvvvvvvvvvvvvvvvvvvvvvvvvvv
let Phones = document.getElementById("phone");
Phones.addEventListener("keyup", () => {
  let VALUE = Phones.value;
  let re = /[0-9]/gi;
  let Msg = document.getElementById("PhoneMsg");
  if (VALUE.length === 0) {
    Msg.innerText = "";
    phoneValidate = false;
    Removes_Validation_Class(Phones)
  } else if (VALUE[0].match(re) !== null) {
    VALUE = VALUE.match(re).join("");
    Phones.value = VALUE;
    if (VALUE.length > 10) {
      Msg.innerText = "** Maximum 10 character allowed";
      Msg.style.color = "#DC3545";
      phoneValidate = false;
      Phones.classList.remove("is-valid");
      Phones.classList.add("is-invalid");
    } else if (VALUE.length > 0 && VALUE.length < 10) {
      Msg.innerText = "** Exactly 10 character allowed";
      Msg.style.color = "#DC3545";
      phoneValidate = false;
      Phones.classList.remove("is-valid");
      Phones.classList.add("is-invalid");
    } else {
      phoneValidate = true;
      Phones.classList.remove("is-invalid");
      Phones.classList.add("is-valid");
    }
  } else {
    Phones.value = "";
    Msg.innerText = "";
    phoneValidate = false;
    Removes_Validation_Class(Phones)
  }
});
//^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ Phone Validation END ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

//vvvvvvvvvvvvvvvvvvvvvvvvvvvvvv Age Validation Start vvvvvvvvvvvvvvvvvvvvvvvvvvvvvv
let Ages = document.getElementById("age");
Ages.addEventListener("keyup", () => {
  let VALUE = Ages.value;
  let re = /[0-9]/gi;
  let Msg = document.getElementById("AgeMsg");
  if (VALUE.length === 0) {
    Msg.innerText = "";
    ageValidate = false;
    Removes_Validation_Class(Ages)
  } else if (VALUE[0] == 0) {
    Ages.value = "";
    Msg.innerText = "";
    ageValidate = false;
    Removes_Validation_Class(Ages)
  } else if (VALUE[0].match(re) !== null) {
    VALUE = VALUE.match(re).join("");
    Ages.value = VALUE;
    if (VALUE.length > 2) {
      Msg.innerText = "** Maximum 2 character allowed";
      Msg.style.color = "#DC3545";
      ageValidate = false;
      Ages.classList.remove("is-valid");
      Ages.classList.add("is-invalid");
    } else {
      ageValidate = true;
      Ages.classList.remove("is-invalid");
      Ages.classList.add("is-valid");
    }
  } else {
    Ages.value = "";
    Msg.innerText = "";
    ageValidate = false;
    Removes_Validation_Class(Ages)
  }
});
//^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ Age Validation END ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

//vvvvvvvvvvvvvvvvvvvvvvvvvvvvvv Gender Validation Start vvvvvvvvvvvvvvvvvvvvvvvvvvvvvv
let Males = document.getElementById("male");
let Females = document.getElementById("female");
let Others = document.getElementById("others");
let GenderMsg = document.getElementById("GenderMsg");
let GenderValue = null;

genderArray = [Males, Females, Others]
const genderValidate = (genderVal, val) => {
  for (let i = 0; i < 3; i++) {
    if (genderArray[i] != genderVal) {
      Removes_Validation_Class(genderArray[i])
    }
    else {
      genderArray[i].classList.remove("is-invalid")
      genderArray[i].classList.add("is-valid")
    }
  }
  GenderValue = val;
  GenderMsg.innerText = "";
}

Males.addEventListener("click", () => {
  genderValidate(Males, "Male")
});

Females.addEventListener("click", () => {
  genderValidate(Females, "Female")
});

Others.addEventListener("click", () => {
  genderValidate(Others, "Others")
});
//^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ Gender Validation END ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

//^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ Habbits Validation Start ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
let codings = document.getElementById("Coding")
let singings = document.getElementById("Singing")
let dancings = document.getElementById("Dancing")
let readings = document.getElementById("Reading")
let playings = document.getElementById("Playing")
let HabbitsMsg = document.getElementById("HabbitsMsg")

let habbitsArray = []

habbitsList = [codings, singings, dancings, readings, playings]
const checkHabbitsValidation = (habbit, val) => {
  for (let i = 0; i < 5; i++) {
    if (habbitsList[i] !== habbit) {
      if (habbitsList[i].checked) {
        habbitsList[i].classList.add("is-valid")
      }
      else {
        Removes_Validation_Class(habbitsList[i])
      }
    }
    else {
      habbitsList[i].classList.remove("is-invalid")
      habbitsList[i].classList.add("is-valid")
    }
  }
  habbitsArray.push(val)
  HabbitsMsg.innerText = ""
  habbitsArray = [...new Set(habbitsArray)]
}

const checkHabbitsValidationElse = (habbit, val) => {
  let index = habbitsArray.indexOf(val)
  if (index !== -1) {
    habbitsArray.splice(index, 1)
  }
  Removes_Validation_Class(habbit)
}

codings.addEventListener("click", () => {
  if (codings.checked == true) {
    checkHabbitsValidation(codings, "Coding")
  }
  else {
    checkHabbitsValidationElse(codings, "Coding")
  }
})

singings.addEventListener("click", () => {
  if (singings.checked == true) {
    checkHabbitsValidation(singings, "Singing")
  }
  else {
    checkHabbitsValidationElse(singings, "Singing")
  }
})

dancings.addEventListener("click", () => {
  if (dancings.checked == true) {
    checkHabbitsValidation(dancings, "Dancing")
  }
  else {
    checkHabbitsValidationElse(dancings, "Dancing")
  }
})

readings.addEventListener("click", () => {
  if (readings.checked == true) {
    checkHabbitsValidation(readings, "Reading")
  }
  else {
    checkHabbitsValidationElse(readings, "Reading")
  }
})

playings.addEventListener("click", () => {
  if (playings.checked == true) {
    checkHabbitsValidation(playings, "Playing")
  }
  else {
    checkHabbitsValidationElse(playings, "Playing")
  }
})
//^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ Habbits Validation END ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

//vvvvvvvvvvvvvvvvvvvvvvvvvv Disable|Active submit button's logic start vvvvvvvvvvvvvvvvvvvvvvvvvv
list = [Names, Emails, Phones, Ages];
for (let i = 0; i < list.length; i++) {
  list[i].addEventListener("keyup", () => {
    if (nameValidate && emailValidate && phoneValidate && ageValidate) {
      document.getElementById("myBtn").disabled = false;
    } else {
      document.getElementById("myBtn").disabled = true;
    }
  });
}
//^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ Disable|Active submit button's logic END ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

//vvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv Form Submission logic start vvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv
const GenderValidationFun = () => {
  Males.classList.add("is-invalid");
  Males.classList.remove("is-valid");
  Females.classList.add("is-invalid");
  Females.classList.remove("is-valid");
  Others.classList.add("is-invalid");
  Others.classList.remove("is-valid");
  GenderMsg.innerText = "Please select your gender";
}

const HabbitsValidationFun = () => {
  HabbitsMsg.innerText = "Please select atleast one habbits"
  codings.classList.add("is-invalid")
  codings.classList.remove("is-valid")
  singings.classList.add("is-invalid")
  singings.classList.remove("is-valid")
  dancings.classList.add("is-invalid")
  dancings.classList.remove("is-valid")
  readings.classList.add("is-invalid")
  readings.classList.remove("is-valid")
  playings.classList.add("is-invalid")
  playings.classList.remove("is-valid")
}

let headerMsg = document.getElementById("headerMsg")
let bodyMsg = document.getElementById("bodyMsg")
let showMsg = document.getElementById("showMsg")

const resetForm = () => {
  const cl = [Names, Emails, Phones, Ages, Males, Females, Others, codings, singings, dancings, readings, playings]
  for (let i = 0; i < cl.length; i++) {
    Removes_Validation_Class(cl[i])
  }
  document.getElementById("myForm").reset()
  Names.value = ""
  Emails.value = ""
  Phones.value = ""
  Ages.value = ""
  GenderValue = null
  habbitsArray = []
}

document.getElementById("myForm").addEventListener("submit", (e) => {
  e.preventDefault();
  if (GenderValue == null && habbitsArray.length == 0) {
    GenderValidationFun()
    HabbitsValidationFun()
  }
  else if (GenderValue == null) {
    GenderValudationFun()
  }
  else if (habbitsArray.length == 0) {
    HabbitsValidationFun()
  }
  else {
    headerMsg.innerText = "Success!"
    bodyMsg.innerText = " Your form is successfully submitted"
    jQuery.noConflict();
    jQuery(document).ready(($) => {
      $('#showMsg').slideDown();
    })

    AsyncFunTimeOut = () => {
      jQuery.noConflict();
      jQuery(document).ready(($) => {
        $('#showMsg').slideUp();
      })
    }
    setTimeout(AsyncFunTimeOut, 5000)
    // const csrftoken = document.querySelector('[name=csrfmiddlewaretoken]').value;
    // console.log(csrftoken)
    let resultObj = {
      Name: Names.value,
      Email: Emails.value,
      Phone: Phones.value,
      Age: Ages.value,
      Gender: GenderValue,
      Habbits: habbitsArray,
    }
    // Ajax Logic for Save Data into Database
    const xhr = new XMLHttpRequest()
    const url = location.href + 'student'
    xhr.open("POST", url, true)
    xhr.responseType = 'json'
    xhr.onload = () => {
      if (xhr.status === 200) {
        let st = xhr.response.stuObj
        let output = ""
        for (let i = 0; i < st.length; i++) {
          output += `<tr>
            <th scope="row">${i + 1}</th>
            <td>${st[i].Name}</td>
            <td>${st[i].Email}</td>
            <td>${st[i].Phone}</td>
            <td>${st[i].Age}</td>
            <td>${st[i].Gender}</td>
            <td>${st[i].Habbits}</td>
            <td>
                <a class="btn btn-info btn-sm" data-sid="${st[i].id}" href="">Edit</a>&nbsp;
                <a class="btn btn-danger btn-sm" data-sid="${st[i].id}" href="">Delete</a>
            </td>
          </tr>`
        }
        document.getElementById("tbodyId").innerHTML = output
        resetForm()
      }
      else {
        console.log("error")
      }
    }
    data = JSON.stringify(resultObj)
    xhr.send(data)
  }
});
//^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ Form Submission logic END ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^