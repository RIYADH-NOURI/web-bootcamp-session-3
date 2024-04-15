const adviceid = document.getElementById("advice-id");
const advicetxt = document.getElementById("advice-text");
const btnadvice = document.getElementById("btn-advice");
const url = "https://api.adviceslip.com/advice";

 async function getadvice(){
    const result = await fetch (url);
    const {slip : {id , advice}} = await result.json();
    adviceid.innerText = id;
    advicetxt.innerText = advice;
}
getadvice();

btnadvice.addEventListener('click', getadvice);

