function pullDown(){

    const pullDownButton = document.getElementById("lists")
    const pullDownParents = document.getElementById("pull-down")
    const pullDownChild = document.querySelectorAll(".pull-down-list")
    const currentList = this.document.getElementById("current-list")
  
    pullDownButton.addEventListener('mouseover', function(){
      this.setAttribute("style","background-color:rgb(60, 126, 240);")
      console.log("mouseover,blue")
    })

    pullDownButton.addEventListener('mouseout', function(){
      this.removeAttribute("style","background-c0lor:rgb(243, 96, 96);")
        console.log("mouseout,red")
    })

    pullDownButton.addEventListener('click', function(){
      if(pullDownParents.getAttribute('style') == "display:block;"){
        pullDownParents.removeAttribute("style","display:block;")
        console.log("非表示")
      }else{
        pullDownParents.setAttribute("style","display:block;")
        console.log("表示")
      }
      })

    pullDownChild.forEach(function(list) {
      list.addEventListener('click',function(){
        const value = list.innerHTML
        currentList.innerHTML = value
          console.log(value)
      })
    })
}
window.addEventListener('load', pullDown)

