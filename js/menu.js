var request = new XMLHttpRequest()

var form = document.getElementById("formMenu")
var statusHTML='';

form.addEventListener('submit', function(e){
    e.preventDefault()
    var search= document.getElementById("txtBuscar").value
    var nombreReal = search.split(' ').join('')
    document.getElementById("divResul").innerHTML="";   
    fetch("https://api.github.com/users/"+nombreReal).then((result)=> result.json()).then((data)=>{
        console.log(data)
        document.getElementById("divResul").innerHTML= '<a target="blank"      <a href="https://www.github.com/'+nombreReal+'">         <img src="'+ data.avatar_url + '"/>                       </a>'
        document.getElementById("linkGithub").innerHTML='<a target="blank"      <a href="https://www.github.com/'+nombreReal+'">Ver página de Github</a>'
        document.getElementById("repositorios").innerHTML='<a target="blank"      <a href="https://www.github.com/'+nombreReal+'">Ver Repositorios</a>'
        document.getElementById("txtNombre").innerHTML='<h1>Nombre de Usuario: '+nombreReal+'</h1>'
    
        //document.getElementById("divResul").innerHTML='<a href="https://www.github.com/'+nombreReal+'">'  
       //'<a target='+_blank+'    
       //<a href="https://www.github.com/'+nombreReal+'">     
       //'<img src="'+ data.avatar_url + '"/>'  
       //'<a href="https://www.github.com/'+nombreReal+'">         <img src="'+ data.avatar_url + '"/> '
       //'<a href="https://www.github.com/'+nombreReal+'">'
       //'<a target="blank"  </a>'
   
   })


})

