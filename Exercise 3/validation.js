function formValidation() {
    var uid = document.registration.userid;
    var passid = document.registration.passid;
    var uname = document.registration.username;
    var uadd = document.registration.address;
    var ucountry = document.registration.country;
    var uzip = document.registration.zip;
    var uemail = document.registration.email;
    var umsex = document.registration.msex;
    var ufsex = document.registration.fsex;

    if (useridValidation(uid, 5, 12)) {
        if (passwordValidation(passid, 7, 12)) {
            if (allLetter(uname)) {
                if (alphanumeric(uadd)) {
                    if (countrySelect(ucountry)) {
                        if (allNumeric(uzip)) {
                            if (validateEmail(uemail)) {
                                if (validateSex(umsex, ufsex)) {
                                    alert("Form Successfully Submitted!");
                                    return true;
                                }
                            }
                        }
                    }
                }
            }
        }
    }
    return false;
}

function useridValidation(uid, mx, my) {
    var uid_len = uid.value.length;
    if (uid_len == 0 || uid_len >= my || uid_len < mx) {
        alert("User ID should be between " + mx + " and " + my + " characters.");
        uid.focus();
        return false;
    }
    return true;
}

function passwordValidation(passid, mx, my) {
    var passid_len = passid.value.length;
    if (passid_len == 0 || passid_len >= my || passid_len < mx) {
        alert("Password should be between " + mx + " and " + my + " characters.");
        passid.focus();
        return false;
    }
    return true;
}

function allLetter(uname) {
    var letters = /^[A-Za-z]+$/;
    if (uname.value.match(letters)) {
        return true;
    } else {
        alert("Username must contain alphabet characters only.");
        uname.focus();
        return false;
    }
}

function alphanumeric(uadd) {
    var letters = /^[0-9a-zA-Z]+$/;
    if (uadd.value.match(letters)) {
        return true;
    } else {
        alert("User address must have alphanumeric characters only.");
        uadd.focus();
        return false;
    }
}

function countrySelect(ucountry) {
    if (ucountry.value == "Default") {
        alert("Please select a country.");
        ucountry.focus();
        return false;
    }
    return true;
}

function allNumeric(uzip) {
    var numbers = /^[0-9]+$/;
    if (uzip.value.match(numbers)) {
        return true;
    } else {
        alert("ZIP code must contain numeric characters only.");
        uzip.focus();
        return false;
    }
}

function validateEmail(uemail) {
    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (uemail.value.match(mailformat)) {
        return true;
    } else {
        alert("Invalid email address.");
        uemail.focus();
        return false;
    }
}

function validateSex(umsex, ufsex) {
    if (!umsex.checked && !ufsex.checked) {
        alert("Please select Male or Female.");
        umsex.focus();
        return false;
    }
    return true;
}
