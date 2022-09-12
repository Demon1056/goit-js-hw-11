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
   