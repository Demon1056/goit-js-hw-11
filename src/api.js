import axios from 'axios'

import {createTemplateImage,renderImages, resetHtml} from './createHTML'
import { showButton, hideButton, showNotifyError } from './interface';
export const form = document.querySelector('#search-form')
export const loadMoreButton = document.querySelector('.load-more')
const BASEURL='https://pixabay.com/api/'
let requestParams = {params:{
  key: '29803921-0264c7261e6b7092956a87835', 
  image_type:'photo',
  orientation: 'horizontal',
  safesearch:'faulse',
  page:1,
  per_page:40
  }}
let findValue='';
  form.addEventListener('input', searchValueImage)

  function searchValueImage (event){ 
    return requestParams.params.q=event.target.value}
 export function startSeach(event) {
 event.preventDefault()
 checkFindValue()
    axios.get(BASEURL, requestParams)
    .then(getData)
    .then(createTemplateImage)
    .then(renderImages)
    .catch(error=>console.log(error))
    .finally(()=>{console.log(requestParams.params.page)} )
    }
   
    function getData(response){
        const images = response.data.hits
        if(images.length===0){ 
          showNotifyError() 
          return
        } showButton(loadMoreButton)
      return images} 
       
 
    function checkFindValue (){
        if (findValue!==requestParams.params.q){
            resetHtml ()
            hideButton(loadMoreButton)
            requestParams.params.page=1
           return findValue=requestParams.params.q
        }    
        requestParams.params.page+=1 }
    
      