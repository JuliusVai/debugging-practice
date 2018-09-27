const name = localStorage.getItem('name');

if(name){
  alert(`you name is ${name}`);
}


const input = prompt("please enter your name");

localStorage.setItem('name', input);
