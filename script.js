let data = JSON.parse(localStorage.getItem('tasks')) || [];
localStorage.setItem('tasks', JSON.stringify(data));

const ul = document.querySelector(".AllTask")

function addTasks(name, alarm, color, id) {
  const li = document.createElement("li")
  li.classList.add("alltask__item")
  li.setAttribute("id", `li${id}`)
  li.innerHTML = `
    <div class="check-box" id="bt${id}" style="border-color: #${color};">
        <svg width="16" height="12" viewBox="0 0 16 12" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M14.8793 0.953998L5.66666 10.166C5.60472 10.2282 5.53111 10.2775 5.45005 10.3112C5.369 10.3449 5.28209 10.3622 5.19432 10.3622C5.10655 10.3622 5.01965 10.3449 4.93859 10.3112C4.85754 10.2775 4.78393 10.2282 4.72199 10.166L1.15932 6.6C1.09738 6.53781 1.02377 6.48847 0.942719 6.4548C0.861664 6.42114 0.774759 6.4038 0.686989 6.4038C0.59922 6.4038 0.512315 6.42114 0.43126 6.4548C0.350205 6.48847 0.276596 6.53781 0.214656 6.6C0.152471 6.66194 0.10313 6.73555 0.069462 6.8166C0.0357942 6.89766 0.0184631 6.98456 0.0184631 7.07233C0.0184631 7.1601 0.0357942 7.24701 0.069462 7.32806C0.10313 7.40912 0.152471 7.48273 0.214656 7.54467L3.77866 11.108C4.15462 11.4833 4.66412 11.694 5.19532 11.694C5.72652 11.694 6.23602 11.4833 6.61199 11.108L15.824 1.898C15.8861 1.83607 15.9353 1.7625 15.9689 1.68151C16.0025 1.60052 16.0198 1.51369 16.0198 1.426C16.0198 1.33831 16.0025 1.25148 15.9689 1.17049C15.9353 1.08949 15.8861 1.01593 15.824 0.953998C15.7621 0.891813 15.6884 0.842472 15.6074 0.808804C15.5263 0.775136 15.4394 0.757805 15.3517 0.757805C15.2639 0.757805 15.177 0.775136 15.0959 0.808804C15.0149 0.842472 14.9413 0.891813 14.8793 0.953998Z" fill="white"/>
        </svg>
    </div>
    <div class="task" id="text_bt${id}" style="background-color: #${color};"><p>${name}</p><p>${alarm}</p></div>
    <div class="actions">
      <button class="edit">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 8.00012L4 16.0001V20.0001L8 20.0001L16 12.0001M12 8.00012L14.8686 5.13146L14.8704 5.12976C15.2652 4.73488 15.463 4.53709 15.691 4.46301C15.8919 4.39775 16.1082 4.39775 16.3091 4.46301C16.5369 4.53704 16.7345 4.7346 17.1288 5.12892L18.8686 6.86872C19.2646 7.26474 19.4627 7.46284 19.5369 7.69117C19.6022 7.89201 19.6021 8.10835 19.5369 8.3092C19.4628 8.53736 19.265 8.73516 18.8695 9.13061L18.8686 9.13146L16 12.0001M12 8.00012L16 12.0001" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      </button>
      <button class="delete" id="d${id}">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M14 10V17M10 10V17M6 6V17.8C6 18.9201 6 19.4798 6.21799 19.9076C6.40973 20.2839 6.71547 20.5905 7.0918 20.7822C7.5192 21 8.07899 21 9.19691 21H14.8031C15.921 21 16.48 21 16.9074 20.7822C17.2837 20.5905 17.5905 20.2839 17.7822 19.9076C18 19.4802 18 18.921 18 17.8031V6M6 6H8M6 6H4M8 6H16M8 6C8 5.06812 8 4.60241 8.15224 4.23486C8.35523 3.74481 8.74432 3.35523 9.23438 3.15224C9.60192 3 10.0681 3 11 3H13C13.9319 3 14.3978 3 14.7654 3.15224C15.2554 3.35523 15.6447 3.74481 15.8477 4.23486C15.9999 4.6024 16 5.06812 16 6M16 6H18M18 6H20" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      </button>
    </div>
  `
  ul.appendChild(li)

// _______________________________________________________________________
  // const alltaskItem = document.querySelectorAll(".alltask__item")

  // alltaskItem.forEach(i => {
  //   const checkBox = i.querySelector(".check-box")
  //   const taskBar = i.querySelectorAll(".task")
  //   if (checkBox && taskBar) {
  //     checkBox.addEventListener("click", () => {
  //       checkBox.classList.toggle("active");
  //       if (checkBox.classList.contains("active")) {
  //         i.children[1].classList.add("active")
  //       }else {
  //         i.children[1].classList.remove("active")
  //       }
  //     })
  //   }

  
  // });
}


const storedTask = localStorage.getItem('tasks')
const taskObject =  storedTask ? JSON.parse(storedTask) : [];
if (taskObject.length) {
  taskObject.forEach(task => {
    addTasks(task.name, task.alarm, task.color, task.id); 
  });
}


const burger = document.querySelector(".burger")
const menu = document.querySelector(".dropdown-menu")
const catBtn = document.querySelector(".category_btm")
const categoryMenu = document.querySelector(".category__menu")


burger.addEventListener("click", function () {
  menu.classList.toggle("active")
  burger.classList.toggle("active")
  categoryMenu.classList.remove("active")

})
document.addEventListener("click", function (event) {
  if (!document.body.contains(event.target) && !document.body.contains(event.target)) {
    burger.classList.remove("active");
    menu.classList.remove("active");
    categoryMenu.classList.remove("active")

  }
});

// ------------------------------------

catBtn.addEventListener("click", function () {
  categoryMenu.classList.toggle("active")
  menu.classList.remove("active")
  burger.classList.remove("active")
})

// ---------------------------------------
const watchHour = document.querySelector("#watch__hour") 
const watchMinut = document.querySelector("#watch__minut") 
const watchSecond = document.querySelector("#watch__second") 
let second = 0
let minut = 0
let hour = 0
let d = new Date()

setInterval(
  function() {
    d = new Date
    second = d.getSeconds();
    minut = d.getMinutes();
    hour = d.getHours();
    watchHour.innerHTML = hour
    watchMinut.innerHTML = minut
    watchSecond.innerHTML = second
    document.getElementById("second-hand").style.transform = "rotate(" + (second * 6) + "deg) "
    document.getElementById("minut-hand").style.transform = "rotate(" + (minut * 6) + "deg) "
    document.getElementById("hour-hand").style.transform = "rotate(" + (hour * 30) + "deg) "
    // console.log(hour + ":" + minut + ":" + second);
    
  }, 1000
)
// ----------------------------------------------------------




  // const taskText = document.querySelectorAll(".task")
  // document.querySelectorAll(".alltask__item").forEach((i) => {
  //   i.querySelectorAll(".check-box").addEventListener('click', () => {
  //     console.log(i.attributes[1])
  //   })
  // })
  // taskChecker.forEach((i) => {
  //   i.addEventListener("click", () => {
  //     console.log("clicked")
  //     data.forEach((j) => {
        
  //       console.log(j.name)
  //     })
  //   })
  // })
// checkButton(data)
// ---------------------------------------------------
const addBtn = document.querySelector(".nav_add-btn")
const addSection = document.querySelector("#add")

addBtn.addEventListener("click", () => {
  addSection.classList.toggle("active")
  addBtn.classList.toggle("active")
})

// ------------------------------------------------------


const addForm = document.querySelector("#addForm")
const nameInp = document.querySelector("#name")
const dateInp = document.querySelector("#date")
const categoryInp = document.querySelector("#add_category")
const importance = document.querySelector("#importance")
const colors = document.querySelectorAll(".add_color")
const alarmInp = document.querySelector("#alarm")
const timeDuting = document.querySelector("#timeDuting")
const description = document.querySelector("#description")
addForm.addEventListener('submit', onSubmit);




function onSubmit(e) {
  e.preventDefault();
  let color;
  colors.forEach((i) => {
    if (i.checked) {
      color = i
    }
  })
  
  

  let ready = nameInp.value && dateInp.value && alarmInp.value;
  
  if (!ready) {
    if (!nameInp.value) nameInp.style.borderColor = "red";
    if (!dateInp.value) dateInp.style.borderColor = "red";
    if (!alarmInp.value) alarmInp.style.borderColor = "red";
    return;
  }



  let newTask = 
  {
    "id" : `${data.length + 1}`,
    "name" : `${nameInp.value}`,
    "description" : `${description.value}`,
    "date" : `${dateInp.value}`,
    "category" : `${categoryInp.value}`,
    "importance" : `${importance.value}`,
    "color" : `${color.value}`,
    "alarm" : `${alarmInp.value}`,
    "timeDuring" : `${timeDuting.value}`,
    "status" : false,
  }
  data.push(newTask)
  localStorage.setItem('tasks', JSON.stringify(data));
  data = JSON.parse(localStorage.getItem('tasks')) || [];
  addTasks(nameInp.value, alarmInp.value, color.value, newTask.id)
  addSection.classList.remove("active")
  addBtn.classList.remove("active")
  
  

  nameInp.value = ""
  description.value = ""
  dateInp.value = ""
  categoryInp.value = "work"
  importance.value = "important"
  alarmInp.value = ""
  timeDuting.value = ""
  colors[0].checked = true
  
  
  
  // -------------------------------
  document.querySelectorAll(".check-box").forEach(i => {
    i.addEventListener("click", () => clicked(i.getAttribute("id")))
  })
  // ---------------------------
  changeUI()
  swipe()
  const deleteBtn = document.querySelectorAll('.delete')

  deleteBtn.forEach(j => {
    j.addEventListener("click", () => {
      deleteTask(j.getAttribute("id"))
    })  
  })

}


document.querySelectorAll(".check-box").forEach(i => {
  i.addEventListener("click", () => clicked(i.getAttribute("id")))
})

function clicked(id) {
  data.forEach((i) => {
    if (`bt${i.id}` === id) {
      i.status = true
      localStorage.setItem("tasks", JSON.stringify(data))
      data = JSON.parse(localStorage.getItem("tasks")) || [];
    }
  })
  changeUI()

}


function changeUI() {
  data = JSON.parse(localStorage.getItem("tasks"))
  data.forEach((i) => {
    if (i.status === true) {
      let btn = document.querySelectorAll(`#bt${i.id}`)
      let text = document.querySelectorAll(`#text_bt${i.id}`)
      btn.forEach(j => {
        j.classList.add("active")
        if (`bt${i.id}` === j.getAttribute("id")) {
          j.style.backgroundColor = `#${i.color}`
        }
      })
      text.forEach(k => {
        k.classList.add("active")
 
      })
    }

  })
}
changeUI()



function swipe() {
  const taskLi = document.querySelectorAll(".alltask__item")
  taskLi.forEach(li => {
    let startX = 0;
    let isSwiped = false;
    let isDragging = false;
    // touchscreen
    li.addEventListener("touchstart", (e) => {
      startX = e.touches[0].clientX;
    })
    
    li.addEventListener("touchmove", (e) => {
      let moveX = e.touches[0].clientX;
      let diff = startX - moveX;

      if (diff > 50) {
        li.style.transform = "translateX(-140px)"
        isSwiped = true
      }else if (diff < -50) {
        li.style.transform = "translateX(0)"
      }
    })

    // mouse 
    li.addEventListener("mousedown", (e) => {
      startX = e.clientX;
      isDragging = true;
    })

    document.addEventListener("mousemove", (e) => {
      if (!isDragging) return;
      let diff = startX - e.clientX;

      if (diff > 50) {
        li.style.transform = "translateX(-140px)"
        isSwiped = true;
      }else if (diff < -50) {
        li.style.transform = "translateX(0)";
        isSwiped = false
      } 
    })

    document.addEventListener('mouseup', () => {
      isDragging = false
    });

    document.addEventListener("click", (event) => {
      if (isSwiped && !li.contains(event.target)) {
        li.style.transform = "translateX(0)"
        isSwiped = false
      }
    })

    // delBtn = document.querySelectorAll(".delete")
    // delBtn.forEach(l => {
    //   l.addEventListener("click", () => {
    //     isSwiped = false
    //   })
    // })
  })
}
swipe()


function deleteTask(id) {
  let newData = JSON.parse(localStorage.getItem('tasks')) || [];
  const digits = id.match(/\d+/g).join('');
  const li = document.querySelectorAll(".alltask__item")
  li.forEach(i => {
    if (i.getAttribute("id") === `li${digits}`) {
      // i.style.display = "none"
      i.classList.add("deleted")
    }
  })
  // console.log(newData)
  newData = newData.filter(task => `d${task.id}` !== `${id}`);
  localStorage.setItem('tasks', JSON.stringify(newData));
  // console.log(newData)
}


const deleteBtn = document.querySelectorAll('.delete')

deleteBtn.forEach(j => {
  j.addEventListener("click", () => {
    deleteTask(j.getAttribute("id"))
    
  })  
})


