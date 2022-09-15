import {loadMoreButton} from './api'
import { Notify } from 'notiflix/build/notiflix-notify-aio';
export function showButton (button){
  return button.classList.remove('display-none')
   }
    export function hideButton (button){
    return button.classList.add ('display-none')
     }

     export function showNotifyError(){
        return Notify.failure("Sorry, there are no images matching your search query. Please try again." )
     }

     export function findLastImage (error){
      if(error.response.status===400){
         showNotifyLastImage ()
         hideButton (loadMoreButton)
      }
    }

    function showNotifyLastImage (){
      Notify.failure("We're sorry, but you've reached the end of search results.")
    }
    export function numberImages (number){
      Notify.success(`Hooray! We found ${number} images.`);
    }
    
    