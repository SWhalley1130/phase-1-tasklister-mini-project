////////////////////////////////////////////////
// COME BACK TO THIS LAB TO:
//    -Make the other input work
//    -Add if statement so handleSubmit() only
//     works if there is a value in e
////////////////////////////////////////////////


document.addEventListener("DOMContentLoaded", () => 
{
    document.getElementById('create-task-form').addEventListener('submit', e=> {
      e.preventDefault();
      handleSubmit(e.target['new-task-description'].value);
      console.log(document.getElementById("new-task-description").textContent);
      //e.target['new-task-description'].value="";
      document.getElementById('new-task-description').textContent="";
    });



    function handleSubmit(e)
    { 
      const newListItem=document.createElement("li");
      const textContainer=document.createElement("wrap");
      textContainer.textContent=e+"   ";

      const deleteButton=document.createElement("button");
      deleteButton.textContent='X';

      const editButton=document.createElement("button")
      editButton.textContent="Edit";

      newListItem.append(textContainer, editButton,deleteButton);

      const list = document.querySelector('ul');
      list.appendChild(newListItem);
      
      deleteButton.addEventListener('click', ()=> {
        newListItem.remove();
      }
      )

        editButton.addEventListener('click', ()=>{
          textContainer.textContent=prompt("New Task:");
      }
      )
    }
});


