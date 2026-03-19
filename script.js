import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";
import { getFirestore, collection, 
    addDoc ,serverTimestamp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js";
const firebaseConfig = {
  apiKey: "AIzaSyAHEqB5KmTcCbnup39q5Yj1FVWr4NpjvPc",
  authDomain: "message-c33.firebaseapp.com",
  projectId: "message-c33",
  storageBucket: "message-c33.firebasestorage.app",
  messagingSenderId: "18740517876",
  appId: "1:18740517876:web:1d53ef9ef7fd26daa6f7a1"
};
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const sub=document.querySelector("#Submit");
function push(data){
  const Add=document.querySelector(".add");
  
 const line= document.createElement("p");
  line.innerHTML="Sending message...";
  Add.appendChild(line);
  addDoc(collection(db, "messages"), {
//      name: data.nm,
  //    email: data.em,
      message: data.msg,
      timestamp: serverTimestamp()})
    .then(()=>{
      line.innerHTML="Message sent!";
      location.reload();})
   .catch((error)=>{
    alert("Error:",error);})}
sub.addEventListener('click',function(){
  //  const username =document.querySelector("#name");
  //const useremail=document.querySelector("#email");
  const usermsg=document.querySelector("#message");
 /* if(username.value===``){
    alert(`Enter your name`)
  }
  else if(useremail.value===``){
 alert(`Please Enter you mail id`);
  }
  else
    */ if(usermsg.value===``){
alert(`Please enter your message`);
  }
  else{
   
   const data={
   // nm:username.value,
    //em:useremail.value,
    msg:usermsg.value
  }
  push(data)
}
}
)