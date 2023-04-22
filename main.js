//https://api.telegram.org/bot5239792044:AAEA2IIk6zhg3LTOcn_HbUCVTHVkQjKg0PM/sendMessage?chat_id=-965512652&text=hallo%0Ajuga&parse_mode=html




function kirimPesan() {

    var nama = document.getElementById('nama');
    var email = document.getElementById('email');
    var pesan = document.getElementById('pesan');

    var gabungan = 'Nama%3A%0A' + nama.value + '%0AEmail%3A%0A' + email.value + '%0APesan%3A%0A' + pesan.value;

    var token = '5239792044:AAEA2IIk6zhg3LTOcn_HbUCVTHVkQjKg0PM'; // Ganti dengan token bot yang kamu buat
    var grup = '-965512652'; // Ganti dengan chat id dari bot yang kamu buat

    $.ajax({
        url: `https://api.telegram.org/bot${token}/sendMessage?chat_id=${grup}&text=${gabungan}&parse_mode=html`,
        method: `POST`,
    })
}
