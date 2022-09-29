function validasi() {
    let username = document.getElementById("inputNama")
    let tempatLahir = document.getElementById("inputTempatLahir")
    let tanggalLahir = document.getElementById("inputTanggalLahir")
    let jenisKelamin = document.getElementById("inputJenisKelamin")
    let pendidikanTerakhir = document.getElementById("inputPendidikanTerakhir")

    if (username.value.length == 1) {
        alert("Nama harus di isi")
    } else if (username.value.length < 7) {
        alert("Nama harus memiliki panjang minimal 7 karakter")
    } else {
        document.getElementById("outputNama").innerHTML = username.value
        document.getElementById("outputTempatLahir").innerHTML = tempatLahir.value
        document.getElementById("outputTanggalLahir").innerHTML = tanggalLahir.value
        document.getElementById("outputJenisKelamin").innerHTML = jenisKelamin.value
        document.getElementById("outputPendidikanTerakhir").innerHTML = pendidikanTerakhir.value
    }




    
}


function buttonClickable() {
    let username = document.getElementById("inputNama").value
    let tempatLahir = document.getElementById("inputTempatLahir").value
    
    if (username !== '' && tempatLahir !== '') {
        document.getElementById("btnSubmit").removeAttribute("disabled")
    } else {
        document.getElementById("btnSubmit").setAttribute("disabled", null)
    }
}

const showUpDataDiri = (nama, tempatLahir, tanggalLahir, jenisKelamin, pendidikanTerakhir) => {
}