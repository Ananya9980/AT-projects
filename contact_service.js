// put the solution code to persist

function submit(feedback)
{
    const xhr=new XMLHttpRequest();
    xhr.open('POST','http://localhost:3000/contacts');
    xhr.setRequestHeader("Content-Type","application/json");
    xhr.onload=function()  {
        if(xhr.status>=200 && xhr.status<=206) {
            console.log(this.response);
            console.log(xhr.status);
        }
        else{
            console.log('Some Error occured'+xhr.status);
        }
    }
    const c=JSON.stringify(feedback);
     xhr.send(c);
}


//to fetch the data
var r;
async function show() {

   r=await fetch('http://localhost:3000/contacts?_sort=firstname')
    .then(res=>{return res.json()})                     //then(function(res){return })
    .catch(err=>console.log(err));


    let tab ="";

         for (let i=0;i<r.length;i++)
          {
            tab += `<tr> 
        <td>${r[i].firstname} </td>
        <td>${r[i].lastname}</td>
        <td>${r[i].email}</td> 
        <td>${r[i].homeNo}</td> 
        <td><input type="button" id="modalBtn" value='+'  onclick='display(${i})' data-bs-toggle="modal" data-target="#exampleModal" /></td> 
        </tr>`;
        }
        document.getElementsByTagName("tbody")[0].innerHTML = tab;
    }

    display= function(var1)
    {
        window.alert(r[var1].firstname
        +"\nHome: "+ r[var1].homeNo+"\nWorkNo: " + r[var1].workNo
        +"\nBirthdate: " + r[var1].birthdate+"\njobTitle: "+ r[var1].jobTitle
        +"\ncompany: "+ r[var1].company+"\nnotes: "+ r[var1].notes);

        displayModal(var1);
        
    }

    // function displayModal(i)
    // {
    //     let paragraphElement=document.getElementById("contact-data");
    //     paragraphElement.appendChild(document.createElement("label").innerText=r[i].firstname);
        
    //     while (parent.firstChild) {
    //         parent.removeChild(parent.firstChild);
    //     }
    // }
    // console.log(i)


        


// method to fetch all contacts
// method to fetch contact by id
// Provide persistence solution code here














