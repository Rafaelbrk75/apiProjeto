const url = 'http://127.0.0.1:3333';
const cadastro = document.getElementById('cadastro');
const bnt = document.getElementById('bnt');

const token = 'cadastro';

const myHeaders = new Headers({
  'Authorrization': `Bearer ${token}`
});

const myInit = {
  method: 'GET',
  headers: myHeaders
};

fetch (url).then(response => {
  return response.json();
})
.then(data => {
  const { id } = data.id
  console.log(id);
});

function trazer(){
  
  axios
      .get(url)
  .then(response => {
    const imagesContainer = document.getElementById('images-container');
    
    console.log("Dados da API:", response.data);
  })
  .catch(error => {
    console.error('Erro ao consumir API:', error);
  });


}

trazer();
