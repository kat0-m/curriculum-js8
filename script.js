window.addEventListener('load', function(){

    const pullDownButton = document.getElementById("lists")
    console.log("load")
  
    pullDownButton.addEventListener('mouseover', function(){
      console.log("mouseover")
    })

    pullDownButton.addEventListener('mouseout', function(){
        console.log("mouseout")
      })
})

