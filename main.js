let sub = document.getElementById('sub')
let name = document.getElementById('name')
let gen = document.getElementById('gen')
let inp = document.getElementById('inp')
let pos = document.getElementById('pos')
sub.addEventListener('click', () => {
  fetch(`https://api.genderize.io?name=${inp.value}`).then((res) => res.json()).then((data) => {
    console.log(data);
    name.innerHTML = `${inp.value}`
    gen.innerHTML = `${data.gender}`
    pos.innerHTML = `${data.probability}00%`
    inp.value = "";

  })
})

//////////////API///////////////////////
// (4). https://api.genderize.io?name=Muzaffar
