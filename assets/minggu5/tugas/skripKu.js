function validasi() {
    let username = document.getElementById("inputNama")
    let tempatLahir = document.getElementById("inputTempatLahir")
    let tanggalLahir = document.getElementById("inputTanggalLahir")
    let jenisKelamin = document.getElementById("inputJenisKelamin")
    let pendidikanTerakhir = document.getElementById("inputPendidikanTerakhir")

    if (username.value.length == 1) {
        alert("Nama harus di isi")
    } else if (username.value.length < 7) {
        document.getElementById("namaTidakMemenuhi").style.display = "block"
        document.getElementById("namaMemenuhi").style.display = "none"

    } else {
        document.getElementById("namaTidakMemenuhi").style.display = "none"
        document.getElementById("namaMemenuhi").style.display = "block"

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
    let tanggalLahir = document.getElementById("inputTanggalLahir").value
    let jenisKelamin = document.getElementById("inputJenisKelamin").value
    let pendidikanTerakhir = document.getElementById("inputPendidikanTerakhir").value
    
    if (username !== '' && tempatLahir !== '' && tanggalLahir.length != 0 && jenisKelamin !== '' && pendidikanTerakhir !== '') {
        document.getElementById("btnSubmit").removeAttribute("disabled")
    } else {
        document.getElementById("btnSubmit").setAttribute("disabled", null)
    }
}
