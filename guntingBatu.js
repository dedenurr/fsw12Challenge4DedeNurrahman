//menentukan pilihan komputer
function getPilihanKomputer() {
  const komputer = Math.random();
  if (komputer < 0.34) return `batu`;
  if (komputer >= 0.34 && komputer < 0.67) return `kertas`;
  return `gunting`;
}

//membuat rule game
function getHasil(komputer, pemain) {
  if (pemain == komputer) return `DRAW`;
  if (pemain == `batu`) return komputer == `gunting` ? `PLAYER 1 WIN` : `COM WIN`;
  if (pemain == `kertas`) return komputer == `gunting` ? `COM WIN` : `PLAYER 1 WIN`;
  if (pemain == `gunting`) return komputer == `batu` ? `COM WIN` : `PLAYER 1 WIN`;
}

//fungsi acak untuk mengacak gambar komputer
function acak() {
  const gambarKomputer = document.querySelector('.komputerPilihan');
  const gambar = ['batu', 'kertas', 'gunting'];
  let i = 0;
  const waktuAwal = new Date().getTime();
  setInterval(function () {
    if (new Date().getTime() - waktuAwal > 1000) {
      clearInterval;
      return;
    }
    gambarKomputer.setAttribute('src', 'assets/' + gambar[i++] + '.png');
    if (i == gambar.length) i = 0;
  }, 100);
}

//membandingkan pilihan pemain dan computer
const pilihanPemain = document.querySelectorAll('#pemain img');
pilihanPemain.forEach(function (i) {
  i.addEventListener('click', function () {
    const pKomputer = getPilihanKomputer();
    const pPemain = i.className;
    const hasil = getHasil(pKomputer, pPemain);

    //memanggil fungsi putar gambar
    acak();

    //menjalankan set time out setelah fungsi putar
    setTimeout(function () {
      const gambarKomputer = document.querySelector('.komputerPilihan');
      gambarKomputer.setAttribute('src', 'assets/' + pKomputer + '.png');
      const vs = document.querySelector('#vs');
      vs.innerHTML = `<p class="pemenang">${hasil}</p>`;
    }, 1000);
  });
});

//manipulasi reset game kertas gunting batu
const tombol = document.querySelector('#refresh');
tombol.onclick = function () {
  const vs = document.querySelector('#vs');
  vs.innerHTML = `VS`;
};

// //Pemain Pilih Batu
// const pBatu = document.querySelector('.batu');
// pBatu.addEventListener('click', function () {
//   const pKomputer = getPilihanKomputer();
//   const pPemain = pBatu.className;
//   const hasil = getHasil(pKomputer, pPemain);

//   const gambarKomputer = document.querySelector('.komputerPilihan');
//   gambarKomputer.setAttribute('src', 'assets/' + pKomputer + '.png');

//   const vs = document.querySelector('#vs');
//   vs.innerHTML = `<p class="pemenang">${hasil}</p>`;
// });

// //Pemain Pilih Kertas
// const pKertas = document.querySelector('.kertas');
// pKertas.addEventListener('click', function () {
//   const pKomputer = getPilihanKomputer();
//   const pPemain = pKertas.className;
//   const hasil = getHasil(pKomputer, pPemain);

//   const gambarKomputer = document.querySelector('.komputerPilihan');
//   gambarKomputer.setAttribute('src', 'assets/' + pKomputer + '.png');

//   const vs = document.querySelector('#vs');
//   vs.innerHTML = `<p class="pemenang">${hasil}</p>`;
// });

// //Pemain Pilih Gunting
// const pGunting = document.querySelector('.gunting');
// pGunting.addEventListener('click', function () {
//   const pKomputer = getPilihanKomputer();
//   const pPemain = pGunting.className;
//   const hasil = getHasil(pKomputer, pPemain);

//   const gambarKomputer = document.querySelector('.komputerPilihan');
//   gambarKomputer.setAttribute('src', 'assets/' + pKomputer + '.png');

//   const vs = document.querySelector('#vs');
//   vs.innerHTML = `<p class="pemenang">${hasil}</p>`;
// });
