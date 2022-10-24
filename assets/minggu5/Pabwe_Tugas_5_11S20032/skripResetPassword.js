function checkNama() {
    const nama = document.getElementById("inputNama")

    nama.addEventListener('input', function(e) {
        if (!e.target.value.trim()) {
            nama.classList.add("is-invalid")
            nama.classList.remove("is-valid")
        } else {
            nama.classList.remove("is-invalid")
            document.getElementById("semuaHarusDiisi").style.display = "none"
            nama.classList.add("is-valid")
        }
    })
}

function checkNIM() {
    const nim = document.getElementById("inputNIM1")

    nim.addEventListener('input', function(e) {
        if (!e.target.value.trim()) {
            nim.classList.add("is-invalid")
            nim.classList.remove("is-valid")
        } else if (nim.value.length < 8) {
            nim.classList.add("is-invalid")
            nim.classList.remove("is-valid")
        } else {
            document.getElementById("semuaHarusDiisi").style.display = "none"
            nim.classList.remove("is-invalid")
            nim.classList.add("is-valid")
        }
    })
}

function checkEmail() {
    const email = document.getElementById("inputEmail")

    email.addEventListener('input', function(e) {
        if (!e.target.value.trim()) {
            email.classList.add("is-invalid")
            email.classList.remove("is-valid")
        } else if (!(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email.value))) {
            email.classList.remove("is-valid")
            email.classList.add("is-invalid")
        }
         else {
            email.classList.remove("is-invalid")
            document.getElementById("semuaHarusDiisi").style.display = "none"
            email.classList.add("is-valid")
        }
    })
}

function checkWA() {
    const wa = document.getElementById("inputNoWA")

    wa.addEventListener('input', function(e) {
        if (!e.target.value.trim()) {
            wa.classList.remove("is-valid")
            wa.classList.add("is-invalid")
        } else if(!(/.\d{11,}/.test(wa.value))) {
            wa.classList.add("is-invalid")
            wa.classList.remove("is-valid")
        } else {
            wa.classList.remove("is-invalid")
            document.getElementById("semuaHarusDiisi").style.display = "none"
            wa.classList.add("is-valid")
        }
    })
}

function checkAll() {
    let nama = document.getElementById("inputNama")
    let nim = document.getElementById("inputNIM1")
    let email = document.getElementById("inputEmail")
    let wa = document.getElementById("inputNoWA")

    function namaBoolean() {
        if (nama.value.length == 0) {
            nama.classList.add("is-invalid")
            return true
        } else {
            return false
        }
    }

    function nimBoolean() {
        if (nim.value.length == 0) {
            nim.classList.add("is-invalid")
            return true
        } else {
            return false
        }
    }

    function emailBoolean() {
        if (email.value.length == 0) {
            email.classList.add("is-invalid")
            return true
        } else {
            return false
        }
    }

    function waBoolean() {
        if (wa.value.length == 0) {
            wa.classList.add("is-invalid")
            return true
        } else {
            return false
        }
    }

    if (namaBoolean() && nimBoolean() && emailBoolean() && waBoolean()) {
        $("#modalKonfirmasi").modal('hide')
        document.getElementById("semuaHarusDiisi").style.display = "block"
        
    } else if (nama.classList.contains("is-valid") && nim.classList.contains("is-valid") && email.classList.contains("is-valid") && wa.classList.contains("is-valid")){
        document.getElementById("outputNamaLengkap").innerHTML = nama.value
        document.getElementById("outputNIM").innerHTML = nim.value
        document.getElementById("outputEmail").innerHTML = email.value
        document.getElementById("outputNoWA").innerHTML = wa.value
        $("#modalKonfirmasi").modal('show')

    } else if (namaBoolean() || nimBoolean() || emailBoolean() || waBoolean()) {
        document.getElementById("semuaHarusDiisi").style.display = "block"
    }

}

function showSukses() {
    $("#modalKonfirmasi").modal('hide')
    $("#modalSukses").modal('show')
}

function changeToResetPassword() {
    document.getElementById("resetPassword").style.display = "block"
    document.getElementById("profil").style.display = "none"
}

function changeToProfil() {
    document.getElementById("resetPassword").style.display = "none"
    document.getElementById("profil").style.display = "block"
}