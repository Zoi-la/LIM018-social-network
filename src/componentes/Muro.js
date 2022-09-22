import { onNavigate } from '../main.js';
import { createPost, getPosts, ongetPost } from '../firebase/firebaseconfig.js';

export const Muro = () => {
  const homeDiv = document.createElement('div');
  homeDiv.textContent = 'Publicaciones';

  const sectionMuro = document.createElement('section');
  const divmuro = document.createElement('div');
  const formPost = document.createElement('form');

  const inputPost = document.createElement('textarea');
  inputPost.setAttribute('type', 'text');
  inputPost.id = 'post';
  inputPost.placeholder = 'Esccribe tu tip o recomendación de viaje';

  const btnPost = document.createElement('button');
  btnPost.type = 'submit';
  btnPost.textContent = 'Publicar';

  const btnHome = document.createElement('button');
  btnHome.textContent = 'Home';

  btnHome.addEventListener('click', () => onNavigate('/'));

  sectionMuro.appendChild(formPost);
  formPost.appendChild(inputPost);
  formPost.appendChild(btnPost);
  homeDiv.appendChild(sectionMuro);
  homeDiv.appendChild(divmuro);
  homeDiv.appendChild(btnHome);

  ongetPost((querySnapshot) => {
    let html = '';

    querySnapshot.forEach((doc) => {
      const post = doc.data();

      // eslint-disable-next-line no-template-curly-in-string
      html += `
      <div>
       <h3> ${post.user}</h3>  
       <p> ${post.description} </p>
       <button class='btnEdit' data-id="${doc.id}"> Editar </button>
       <button class='btndelete' data-id="${doc.id}"> Borrar </button>
      </div>
      `;
    });
    divmuro.innerHTML = html;

    formPost.addEventListener('submit', (e) => {
      e.preventDefault();

      const post = inputPost.value;
      createPost('name', post).then((res) => {
        console.log(res);
      });
      getPosts.forEach((doc) => {
      // doc.data() is never undefined for query doc snapshots
        console.log(doc.id, ' => ', doc.data());
      });
    });
  });
  return homeDiv;
};
