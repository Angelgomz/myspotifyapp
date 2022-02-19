const url = '/'

function login() {
  return fetch(`${url}api/login`)
    .then(res => res.json())
}
/*function getDataCategorieSelected(){
    
    return fetch(`${url}api/`)
    .then(res => res.json())
} */ 
export default {
  login
}