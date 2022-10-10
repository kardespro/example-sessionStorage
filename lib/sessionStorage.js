// https://functions.nego-dev.com/funcs/sessionStorage.js

/*
*
*  @author Nego
*
*  SessionStorage In HTML & PHP & EJS & HandleBars Templates
*  Easily Use !
*/
function setSession(data){
    //
   return window.sessionStorage.setItem(data)
}

function removeSession(data){
  return  window.sessionStorage.removeItem(data)
}

function getSession(data){
   return window.sessionStorage.getItem(data)
}


