alert("Aplikasi Pembelian Tiket")

const nama = prompt("Masukkan nama")
const umur = prompt("Masukkan umur")

if (umur >=13) {
    const studio = prompt("Pilih studio: (Studio A, Studio B, atau Studio C)!")

    let message = "Tiket Anda: \n"
    message += `Nama : ${nama} \n`
    message += `Studio : Studio ${studio} \n`
    message += `Umur : ${umur} \n`

    alert(message)
} else {
    alert("Anda belum cukup umur untuk masuk ke studio!")
}