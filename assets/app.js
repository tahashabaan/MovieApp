const addMovieEle = document.getElementById("add-modal");
const deleteMovieEle = document.getElementById('delete-modal');
const backdropEle = document.getElementById("backdrop");
const startAddMovieButton = document.querySelector('header button');
const cancleMovieBtn =addMovieEle.querySelector('.btn--passive')
const addMovieBtn = document.querySelector('.btn--success')

const inputs =document.querySelectorAll('input')
const entryTextSection = document.querySelector('#entry-text');
const movieList = document.getElementById('movie-list');

let movies = [];

  const updateUI  = () => {
    movies.length===0?
      entryTextSection.style.display='block':   entryTextSection.style.display='none'
  }

  const showMovieModal = (modalEle) => {
    backdropEle.classList.remove('invisible')
    backdropEle.classList.add('visible')
    modalEle.classList.remove('invisible');
    modalEle.classList.add('visible');
   }

  const hideMovieModal = (modalEle) => {
    backdropEle.classList.remove('visible')
    backdropEle.classList.add('invisible')
    modalEle.classList.remove('visible');
    modalEle.classList.add('invisible');
        }

  const startDeleteMovieHandler = (movieId) => {
  

    let confirmDelMovieBtn=deleteMovieEle.querySelector('.btn--danger');
    const cancleDelMovieBtn= deleteMovieEle.querySelector('.btn--passive');

    showMovieModal(deleteMovieEle);
    // confirmDelMovieBtn.removeEventListen('click', deleteMovieEleHandle.bind(null,movieId));
    //removecancleDelMovieBtn

    confirmDelMovieBtn.replaceWith(confirmDelMovieBtn.cloneNode(true));

    confirmDelMovieBtn=deleteMovieEle.querySelector('.btn--danger');

    cancleDelMovieBtn.removeEventListener('click',hideMovieModal.bind(null, deleteMovieEle))

    cancleDelMovieBtn.addEventListener('click',hideMovieModal.bind(null, deleteMovieEle));

   confirmDelMovieBtn.addEventListener('click',deleteMovieEleHandle.bind(null,movieId));

 }
  
  const renderNewMovieElement =(movieEle) => {

     console.log(movieEle.id)
     const li = document.createElement('li');
     li.className ='card movie_element';

     li.innerHTML = 
      ` <img 
         src="${movieEle.imgUrl} 
         alt="${movieEle.title}
         class="movie__img">

        <div class="movie__des">
         <h3 class="movie__title">
          ${movieEle.title}
         </h3>
         <p class="movie__rating">
          ${movieEle.rating}/5 stars
         </p>
        </div>`

    li.addEventListener('click', () => { 
      startDeleteMovieHandler(movieEle.id)
        })
      
   

       movieList.appendChild(li);
       
  }

  const deleteMovieEleHandle = (id) => { 
    const indEleDel= movies.findIndex(movie => movie.id===id);
    console.log(indEleDel);
    movies.splice(indEleDel,1);
    movieList.children[indEleDel].remove();
    updateUI();
    hideMovieModal(deleteMovieEle);
  }

  
  


  const clearInp = ()=> {
      for(let input of inputs){
        input.value ='';
      }
  }

   const handleInput= () => {
   
    const titleInp =inputs[0].value;
    const imgInp = inputs[1].value;
    const ratInp = parseInt(inputs[2].value);
    
    if ( titleInp.trim() ==='' || 
         imgInp.trim() ==='' ||
         ratInp ==='' ||
         ratInp <1 ||
         ratInp >5 ) {
          alert('enter vailed inputs [rating   betwwen 1 and 5] ');
          return;
      }
    
        const newInp = {
          id:Math.random().toString(),
          title:titleInp,
          imgUrl:imgInp,
          rating:ratInp }

          movies.push(newInp);
          renderNewMovieElement(newInp)
          clearInp();
          updateUI();
          console.log(movies);

       }    



startAddMovieButton.addEventListener('click', showMovieModal.bind(null, addMovieEle))
cancleMovieBtn.addEventListener('click', hideMovieModal.bind(null, addMovieEle))
addMovieBtn.addEventListener('click', handleInput)


