const ul = document.getElementsByTagName('li');
console.log(ul[0]);
const btn = document.querySelector('button');
const box = document.querySelector('div');
const video = document.querySelector('video');

btn.addEventListener('click', () => box.classList.remove('hidden'));
video.addEventListener('click', () => video.play());
box.addEventListener('click', () => box.classList.add('hidden'));

const random = (num)  => {
    return Math.floor(Math.random() * (num + 1))
}

const geneteTabel = ()  => {

  const tabel = document.createElement('table');
  const tbody = document.createElement('tbody');

  for(let i=0; i<2;i++){

    const row = document.createElement('tr');

    for (let index = 0; index < 2; index++) {
     const ceil = document.createElement('td');
     const ceilText = document.createTextNode(`row${i} ceil ${index}`);

     ceil.appendChild(ceilText);
     row.appendChild(ceil);

    }
    tbody.appendChild(row);
  }

  tabel.appendChild(tbody);
  document.body.appendChild(tabel);
  tabel.setAttribute('border', '2');
  tabel.style.backgroundColor = `rgb(${random(255)},${random(255)},${random(255)})`

}