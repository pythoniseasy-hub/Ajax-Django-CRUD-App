"use strict"
let nameValidate, emailValidate, phoneValidate, ageValidate
nameValidate = emailValidate = phoneValidate = ageValidate = false
let Submit_Btn = document.getElementById("myBtn")
Submit_Btn.disabled = true;
const Removes_Validation_Class = (params) => {
  params.classList.remove("is-valid");
  params.classList.remove("is-invalid");
}
//vvvvvvvvvvvvvvvvvvvvvvvvvvvvvv Name Validation Start vvvvvvvvvvvvvvvvvvvvvvvvvvvvvv
let Names = document.getElementById("name");
const nameValidationLogic = () => {
  let VALUE = String(Names.value);
  let Msg = document.getElementById("NameMsg");
  let re = /[a-zA-Z ]/gi;
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
  submitButtonActivation()
}
Names.addEventListener("keyup", () => {
  nameValidationLogic()
});
//^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ Name Validation END ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

//vvvvvvvvvvvvvvvvvvvvvvvvvvvvvv Email Validation Start vvvvvvvvvvvvvvvvvvvvvvvvvvvvvv
let Emails = document.getElementById("email");
const emailValidationLogic = () => {
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
  submitButtonActivation()
}
Emails.addEventListener("keyup", () => {
  emailValidationLogic()
});
//^^^^^^^^^^^^^^^^^^^^^^^^^^^^ Email Validation END ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

//vvvvvvvvvvvvvvvvvvvvvvvvvvvvvv Phone Validation Start vvvvvvvvvvvvvvvvvvvvvvvvvvvvvv
let Phones = document.getElementById("phone");
const phoneValidationLogic = () => {
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
  submitButtonActivation()
}
Phones.addEventListener("keyup", () => {
  phoneValidationLogic()
});
//^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ Phone Validation END ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

//vvvvvvvvvvvvvvvvvvvvvvvvvvvvvv Age Validation Start vvvvvvvvvvvvvvvvvvvvvvvvvvvvvv
let Ages = document.getElementById("age");
const ageValidationLogic = () => {
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
  submitButtonActivation()
}
Ages.addEventListener("keyup", () => {
  ageValidationLogic()
});
//^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ Age Validation END ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

//vvvvvvvvvvvvvvvvvvvvvvvvvvvvvv Gender Validation Start vvvvvvvvvvvvvvvvvvvvvvvvvvvvvv
let Males = document.getElementById("male");
let Females = document.getElementById("female");
let Others = document.getElementById("others");
let GenderMsg = document.getElementById("GenderMsg");
let GenderValue = null;

let genderArray = [Males, Females, Others]
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
  submitButtonActivation()
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

let habbitsList = [codings, singings, dancings, readings, playings]
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
  submitButtonActivation()
}

const checkHabbitsValidationElse = (habbit, val) => {
  let index = habbitsArray.indexOf(val)
  if (index !== -1) {
    habbitsArray.splice(index, 1)
  }
  Removes_Validation_Class(habbit)
  submitButtonActivation()
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
const submitButtonActivation = () => {
  if (habbitsArray.length !== 0) {
    if (nameValidate && emailValidate && phoneValidate && ageValidate && GenderValue) {
      Submit_Btn.disabled = false;
    } else {
      Submit_Btn.disabled = true;
    }
  }
  else {
    Submit_Btn.disabled = true;
  }
}
//^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ Disable|Active submit button's logic END ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
const callApi = async (url, params) => {
  let response = await fetch(url, params)
  let data = response.json()
  return data
}


let tbodyId = document.getElementById("tbodyId")
const elementSet = (st) => {
  let output = ""
  let el
  let len = st.length
  for (el = 0; el < len; el++) {
    // console.log(st[el].id, typeof st[el].id);
    output += `<tr><th scope="row">${el + 1}</th><td>${st[el].Name}</td><td>${st[el].Email}</td><td>${st[el].Phone}</td><td>${st[el].Age}</td><td>${st[el].Gender}</td><td>${st[el].Habbits}</td><td><input type="button" value="Edit" class="btn btn-info btn-sm edtBtn m-2" data-sid="${String(st[el].id)}" > <input type="submit" value="Delete" class="btn btn-danger btn-sm dltBtn" data-sid="${String(st[el].id)}" ></td></tr>`
  }
  tbodyId.innerHTML = output
}
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

    const AsyncFunTimeOut = () => {
      jQuery.noConflict();
      jQuery(document).ready(($) => {
        $('#showMsg').slideUp();
      })
    }
    setTimeout(AsyncFunTimeOut, 5000)
    let resultObj = {
      stId: document.getElementById("stId").value,
      Name: Names.value,
      Email: Emails.value,
      Phone: Phones.value,
      Age: Ages.value,
      Gender: GenderValue,
      Habbits: habbitsArray
    }
    // Ajax Logic for Save Data into Database
    let url = location.href + 'student'
    let csrftoken = document.querySelector('[name=csrfmiddlewaretoken]').value;
    let params = {
      method: "post",
      headers: {
        'Accept': 'application/json, text/plain, */*',
        'Content-Type': 'application/json',
        "X-CSRFToken": csrftoken
      },
      body: JSON.stringify(resultObj)
    }
    let data = callApi(url, params)
    data.then((data) => {
      // console.log(data.stuObj)
      elementSet(data.stuObj)
      resetForm()
    })
  }
})
//^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ Form Submission logic END ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

//vvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv Delete Button Functionality Start vvvvvvvvvvvvvvvvvvvvvvvvvvvvv
let dltBtn = document.getElementsByClassName("dltBtn")
for (let i = 0; i < dltBtn.length; i++) {
  dltBtn[i].addEventListener("click", () => {
    let attr = dltBtn[i].getAttribute("data-sid");
    let url = location.href + 'delete-data'
    let csrftoken = document.querySelector('[name=csrfmiddlewaretoken]').value;
    let dataObj = { "id": attr }
    // Ajax Logic for Delete Data into Database
    let params = {
      method: "post",
      headers: {
        'Accept': 'application/json, text/plain, */*',
        'Content-Type': 'application/json',
        "X-CSRFToken": csrftoken
      },
      body: JSON.stringify(dataObj)
    }
    let data = callApi(url, params)
    data.then((data) => {
      // console.log(data.stuObj)
      elementSet(data.stuObj)
      resetForm()
    })
  })
}
//^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ Delete Button Functionality End ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

//vvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv Edit Button Functionality Start vvvvvvvvvvvvvvvvvvvvvvvvvvvvv
let edtBtn = document.getElementsByClassName("edtBtn")
for (let i = 0; i < edtBtn.length; i++) {
  edtBtn[i].addEventListener("click", () => {
    resetForm()
    let attr = edtBtn[i].getAttribute("data-sid");
    let url = location.href + 'edit-data'
    let csrftoken = document.querySelector('[name=csrfmiddlewaretoken]').value;
    let dataObj = { "id": attr }
    let params = {
      method: "post",
      headers: {
        'Accept': 'application/json, text/plain, */*',
        'Content-Type': 'application/json',
        "X-CSRFToken": csrftoken
      },
      body: JSON.stringify(dataObj)
    }
    let data = callApi(url, params)
    data.then((data) => {
      // console.log(data.stuObj)
      let st = data.stuObj
      document.getElementById("stId").value = st.id
      Names.value = st.Name
      Emails.value = st.Email
      Phones.value = st.Phone
      Ages.value = st.Age
      GenderValue = st.Gender
      let hab = st.Habbits
      let Habbit_regex = /(\w+)/g;
      habbitsArray = hab.match(Habbit_regex);

      if (GenderValue == "Male") {
        genderValidate(Males, "Male")
        Males.checked = true
      }
      else if (GenderValue == "Female") {
        genderValidate(Females, "Female")
        Females.checked = true
      }
      else if (GenderValue == "Others") {
        genderValidate(Others, "Others")
        Others.checked = true
      }
      else {
        console.log("error")
      }
      for (let h = 0; h < habbitsArray.length; h++) {
        if (habbitsArray[h] == "Coding") {
          codings.checked = true
        }
        else if (habbitsArray[h] == "Singing") {
          singings.checked = true
        }
        else if (habbitsArray[h] == "Dancing") {
          dancings.checked = true
        }
        else if (habbitsArray[h] == "Reading") {
          readings.checked = true
        }
        else if (habbitsArray[h] == "Playing") {
          playings.checked = true
        }
        else {
          console.log("error")
        }
      }
      nameValidationLogic()
      emailValidationLogic()
      phoneValidationLogic()
      ageValidationLogic()
    })
  })
}
//^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ Edit Button Functionality End ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

//vvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv Search Functionality Start vvvvvvvvvvvvvvvvvvvvvvvvvvvvv
jQuery.noConflict();
jQuery(document).ready(($) => {
  $("#searchBtn").on("keyup", function () {
    let value = $(this).val().toLowerCase();
    $("#tbodyId tr").filter(function () {
      $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
    });
  });
})
//^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ Search Functionality End ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^