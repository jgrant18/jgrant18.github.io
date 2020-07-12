const projects = document.querySelectorAll("div.project")
let z = 0

projects.forEach(project => {
  const mover = project.querySelector("div.move")
  const resize = project.querySelector("div.resize")

  let isMoving = false
  let isResizing = false
    
  let t = 50 + Math.random() * (window.innerHeight - 500)
  let l = 50 + Math.random() * (window.innerWidth - 700)
  let w = 600
  let h = 400
  
  let mx = 0
  let my = 0
  let diffX = 0
  let diffY = 0
  
  project.style.top = t + "px"
  project.style.left = l + "px"
  
  resize.addEventListener("mousedown", function (event) {
    isResizing = true
    isMoving = false
    
    mx = event.pageX
    my = event.pageY
    
    diffX = 0
    diffY = 0
    
    z += 1
    project.style.zIndex = z
  })
  
  resize.addEventListener("mouseup", function () {
    isResizing = false
    isMoving = false
    w = w + diffX
    h = h + diffY
  })
  
  mover.addEventListener("mousedown", function (event) {
    isMoving = true
		isResizing = false
    
    mx = event.pageX
    my = event.pageY
    
    diffX = 0
    diffY = 0
   	    
    z += 1
    project.style.zIndex = z
  })
  
  mover.addEventListener("mouseup", function () {
    isMoving = false
    isResizing = false
    l = l + diffX
    t = t + diffY
  })  
  
  document.addEventListener("mousemove", function (event) {
    diffX = event.pageX - mx
    diffY = event.pageY - my
    
     if (isResizing) {
      project.style.width = (w + diffX) + "px"
      project.style.height = (h + diffY) + "px"
    } else if (isMoving) {            
      project.style.left = (l + diffX) + "px"
      project.style.top = (t + diffY) + "px"
    }
  })  
  
}) 



