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
