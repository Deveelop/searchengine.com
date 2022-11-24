const body = document.querySelector('body');
const main = document.querySelector('.main');
const p = document.querySelector('p');
const label = document.querySelector('label');
const btn = document.querySelector('.toggle-btn');
const input = document.querySelector('.form-control');
btn.addEventListener('click', () => {
    btn.classList.toggle('active');

    if(btn.classList.toggle('inactive')) {
       body.style.backgroundColor = 'black';
       main.style.color = 'white';
       p.style.color = 'white';
       label.style.color = 'white'
        
    } else{
       body.style.backgroundColor = 'white';
       main.style.color = 'black';
       p.style.color = 'black';
       label.style.color = 'black'
    }
});


const btnn = document.querySelector('.btn');
const onSearch =   event => {
  event.preventDefault();
  
fetchData()
}


btnn.addEventListener('click', onSearch );


const options = {
  method: 'GET',
  url: 'https://planets-info-by-newbapi.p.rapidapi.com/api/v1/planet/list',
  headers: {
    'X-RapidAPI-Key': '754ead0033msh41bb76e064401fep111468jsnb43200015228',
    'X-RapidAPI-Host': 'planets-info-by-newbapi.p.rapidapi.com'
  }
};

const fetchData =  () => { axios.request(options)
.then(  (response) => {
const results =  response.data;
for (let result of results) {  
  const div = document.createElement('div');
  div.innerHTML = `
  <div class="card" style="width: 18rem;">
  <img src="${result.imgSrc[0].img}" class="card-img-top" alt="${result.imgSrc[0].imgDescription}">
  <div class="card-body">
    <h5 class="card-title" style ="color: black;">${result.name}</h5>
    <p class="card-text" style ="color: black;">${result.description}</p>
  </div>
  <ul class="list-group list-group-flush">
    <li class="list-group-item">mass: ${result.basicDetails[0].mass}</li>
    <li class="list-group-item">volume: ${result.basicDetails[0].volume}</li>
  </ul>
  <div class="card-body">
  <a href="${result.wikiLink}" class="btn btn-primary">Read more...</a>
  </div>
</div>
  
  `
  document.querySelector('.main').appendChild(div);
}

}).catch((error) => {
	console.error(error);
});
}