// put validation code here
// provide the validation code here
show();

const submitdata =(event)=> 
{
  event.preventDefault();
  let formData=document.getElementsByTagName("form")[0];
  let feedback=Object.fromEntries(new FormData(formData));

let errors=
{
firstNameError:validateFirstname(feedback.firstname),
lastNameError:validateLastname(feedback.lastname),
emailError:validateemail(feedback.email),
homeNoError:validateHomeNo(feedback.homeNo),
workNoError:validateWorkNo(feedback.workNo),
birthdateError: validateBirthDate(feedback.birthdate),
companyError:validateCompany(feedback.company),
jobTitleError:validateJobTitle(feedback.jobTitle)
}
let r=[];
let i=0;
if(errors.firstNameError!='')
{
  r[i]=errors.firstNameError;
  i++;
}
else if(errors.lastNameError!='')
{
  r[i]=errors.lastNameError;
  i++;
}
else if(errors.emailError!='')
{
  r[i]=errors.emailError;
  i++;
}
else if(errors.homeNoError!='')
{
  r[i]=errors.homeNoError;
  i++;
}
else if(errors.workNoError!='')
{
  r[i]=errors.workNoError;
  i++;
}
else if(errors.birthdateError!='')
{
  r[i]=errors.birthdateError;
  i++;
}
else if(errors.companyError!='')
{
  r[i]=errors.companyError;
  i++;
}
if(errors.jobTitleError!='')
{
  r[i]=errors.jobTitleError;
  i++;
}

let list='';
let errorMsgs=Object.values(r);

errorMsgs.map(error=>`<li>${error}</li>`).forEach(item=>{
    list+=item; })

    if(list.length>=1){
      document.getElementsByTagName('ul')[0].innerHTML=list;
    }
    else
    submit(feedback);

//console.log(list);
//document.getElementsByTagName('ul')[0].innerHTML=list; 
}

var validateFirstname=(firstname)=>{
if(firstname === '' ){
  document.getElementById("firstNameError").innerHTML="*";
  return "Firstname cannot be blank";
}

else if(!firstname.match(/^[A-Za-z\.\s]+/))
 return "Enter valid first name";
else
 return "";
}
var validateLastname=(lastname)=>{
if(lastname === ''){
return 'Lastname field can not be blank';
}

else if(!lastname.match(/^[A-Za-z\.\s]+/))
return "Enter valid last name";
else
return "";
}
var validateemail=(email)=>{
if(email === ''){
document.getElementById("emailError").innerHTML="*";
return 'Email id can not be blank'
}
 else if(!email.match(/[a-z]+[@][a-z]+[.][c][o][m]/))
return 'enter valid email';
else
return "";
}
var validateHomeNo=(homeNo)=>{
if(homeNo==='')
{
document.getElementById("homeNoError").innerHTML="*";
return 'Home Number cannot be blank';
}
else if(!homeNo.match(/[+91]+[0-9]{10}/))
{ return 'enter valid phone format';
}
else
return "";
}
var validateWorkNo=(workNo)=>{
if(workNo==''){
return "Work number cannot be blank filled";
}
else if(!workNo.match(/[+91]+[0-9]{8}/))
{ return 'enter valid phone format';
}
else
return "";
}
var validateBirthDate=(birthdate)=>{
if(birthdate===''){
return "Birth date must be filled";
}
else
return "";
}

var validateCompany=(company)=>{
if(company===''){
return "company must be filled";
}
else
return "";
}
var validateJobTitle=(jobTitle)=>{
if(jobTitle===''){
return "Job title must be filled";
}
else
return "";
}



document.getElementById("contactNos1").style.display="none";
var b=true;
document.getElementById('addContactNo').onclick=()=>{
 if(b)
{
document.getElementById("contactNos1").style.display='block';

b=false;
}
else{
document.getElementById("contactNos1").style.display='none';

b=true;
}
}