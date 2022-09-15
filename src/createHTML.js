
   const imagesContainer = document.querySelector('.gallery')
   import SimpleLightbox from 'simplelightbox';
   import "simplelightbox/dist/simple-lightbox.min.css";
   export function createTemplateImage (images){let templateImage;  return templateImage = images.map(
      ({webformatURL,tags,likes,views,comments,downloads, largeImageURL}=image)=>{;  
    return `<div class="photo-card">
    <div class="img-container"> 
    <a href ="${largeImageURL}">
    <img src="${webformatURL}" alt="${tags} loading="lazy">
    </a>
    </div>
    <div class="info"> 
      <p class="info-item">
        <b>Likes</b><br>${likes}
      </p>
      <p class="info-item">
        <b>Views</b><br>${views}
      </p>
      <p class="info-item">
        <b>Comments</b><br>${comments}
      </p>
      <p class="info-item">
        <b>Downloads</b><br>${downloads}
      </p>
    </div>
    </div>`
    }).join('') 
    }
    export function renderImages (templateImage){
        imagesContainer.insertAdjacentHTML("beforeend", templateImage)
       
        let gallery = new SimpleLightbox('.gallery a')
        gallery.refresh()
      }  

      export function resetHtml () {return imagesContainer.innerHTML=''
 }
 
 