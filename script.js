window.addEventListener('load', function(){

    const pullDownButton = document.getElementById("lists")
    console.log("load")
  
    pullDownButton.addEventListener('mouseover', function(){
      pullDownButton.setAttribute("style","background-color:rgb(60, 126, 240);")
      console.log("mouseover,blue")
    })

    pullDownButton.addEventListener('mouseout', function(){
      pullDownButton.removeAttribute("style","background-c0lor:rgb(243, 96, 96);")
        console.log("mouseout,red")
    })

    pullDownButton.addEventListener('click', function(){
      pullDownButton.setAttribute("style","background-color:rgb(51, 184, 91);")
        console.log("click,green")
    })
})

