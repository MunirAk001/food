import { deleteUser , postUser , editUser , compleated , selects, getData  } from "./api.js"

let box = document.querySelector(".box")
let infoModal = document.querySelector(".infoModal");
let infodiv = document.querySelector(".infodiv");

function get(data)


{

    box.innerHTML = ' '
    data.forEach(el =>
        {
        let div = document.createElement("div");
          div.className = "div";
        

          let avatar = document.createElement("img");
          avatar.src = el.avatar;
          avatar.className ="img"

        let texts = document.createElement("div");
          texts.className = "texts ";

        


          let title = document.createElement("p");
        title.innerHTML = el.title;
          div.className = "div";
        

          let praice = document.createElement("p");
          praice.innerHTML = el.praice;

          let info = document.createElement("p");
          info.innerHTML = el.info;

          let btnDelete = document.createElement("button");
          btnDelete.innerHTML = "DELETE";
          btnDelete.onclick = () => {
            deleteUser(el.id);
          };

          let btnEdit = document.createElement("button");
          btnEdit.innerHTML = "EDIT";
          btnEdit.onclick = () => {
            edit(el);
          };

          // --------info

          let infoh1 = document.createElement("h1");
          let infoprace = document.createElement("h1");
          let informetion = document.createElement("p");
          informetion.innerHTML = el.info;
        let infoimg = document.createElement("img");
        //   infoimg.className = "img";
        

          let btninfo = document.createElement("button");
          btninfo.innerHTML = "info";
          btninfo.onclick = () => {
            infoModal.showModal();

            infoprace.innerHTML = el.praice;
            infoh1.innerHTML = el.title;
            infoimg.src = el.avatar;
          infodiv.append(infoprace, infoh1, infoimg, informetion);


          };

          // -------- end of info

          let checkbox = document.createElement("input");
          checkbox.type = "checkbox";
          checkbox.checked = el.status;
          checkbox.onclick = () => {
            el.status = !el.status;
            compleated(el.id, el);
          };
          if (el.status) {
            title.style.color = "red";
          }

          texts.append(
            title,
            praice,
            info,
            btnDelete,
            btnEdit,
            checkbox,
            btninfo
          );
          div.append(avatar, texts, infoimg);
          box.appendChild(div);
        })
}

// add
let btnAdd = document.querySelector(".btnAdd")

btnAdd.onclick = () =>
{
    addModal.showModal()
}

let addModal = document.querySelector(".addModal")
let addForm = document.querySelector(".addForm")

addForm.onsubmit = (e) =>
{
    e.preventDefault()
    let user = 
    {
        avatar:addForm["avatar"].value,
        title:addForm["title"].value,
        praice:addForm["praice"].value,
        info:addForm["info"].value,
        status:false,
    }
    console.log(user);
    postUser(user)
    addForm.reset()
}

// edit
let editModal = document.querySelector(".editModal")
let editForm = document.querySelector(".editForm")
function edit(el)
{
    editModal.showModal()
    editForm["avatar"].value = el.avatar,
    editForm["title"].value = el.title,
    editForm["praice"].value = el.praice,
    editForm["info"].value = el.info

    editForm.onsubmit = (e) =>
    {
        e.preventDefault()
        let user =
        {
            avatar:editForm["avatar"].value,
            title:editForm["title"].value,
            praice:editForm["praice"].value,
            info:editForm["info"].value,
            status:false,
        }
        editUser(el.id , user)
    }
}




// ---- selects ---- 

let all = document.querySelector(".all")
all.className = "selectsBTN";
all.onclick = () =>
{
    getData()
    }
let brc = document.querySelector(".brc")
brc.className = "selectsBTN";

brc.onclick = () => {
  selects(brc.value);
};
let lunch = document.querySelector(".lunch")
lunch.className = "selectsBTN";

lunch.onclick = () => {
  selects(lunch.value);
};
let shecks = document.querySelector(".shecks")
shecks.className = "selectsBTN";

shecks.onclick = () => {
  selects(shecks.value);
};
let dinner = document.querySelector(".dinner")
dinner.className = "selectsBTN";

dinner.onclick = () => {
  selects(dinner.value);
};

// ----  end of selects ---- 


  export { get }