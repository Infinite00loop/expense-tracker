var list=document.getElementById('list-items');
function tracker(){
    var expAmount_=document.getElementById('id1').value;
    var desc_=document.getElementById('id2').value;
    var categ_=document.getElementById('id3').value;
    

    let myObj={
        expAmount: expAmount_,
        description: desc_,
        category: categ_
    };
     var myObjSerial=JSON.stringify(myObj);
    localStorage.setItem(desc_,myObjSerial);

    
    var newList=document.createElement('li');
    var text=expAmount_+" - "+categ_+" - "+desc_+" - ";
    newList.appendChild(document.createTextNode(text));
    var delButton=document.createElement('button');
    delButton.className='delete';
     delButton.appendChild(document.createTextNode('Delete'));
    newList.appendChild(delButton);
    var EditButton=document.createElement('button');
    EditButton.className='edit';
     EditButton.appendChild(document.createTextNode('Edit'));
    newList.appendChild(EditButton);

    list.appendChild(newList);



// function removeElement(e){
//     if(e.target.classList.contains('delete')){
//         if(confirm('Are you sure to delete ?')){
//             var li=e.target.parentElement;
           
//             var email=li.textContent.split(" - ")[1];
//             localStorage.removeItem(description);
//             list.removeChild(li);
//         }
//     }
//     else if(e.target.classList.contains('edit')){
//         var li=e.target.parentElement;
//         const arr=li.textContent.split(" - " );
//         var email=arr[1];
//         localStorage.removeItem(email);
//         document.getElementById('id1').value=arr[0];
//         document.getElementById('id2').value=arr[1];
//         document.getElementById('id3').value=arr[3];
//         list.removeChild(li);
//     }
}