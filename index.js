


async function getAdvide (){
    let rand = Math.floor(Math.random() * 200)
    
const api = "https://api.adviceslip.com/advice/" + rand
console.log(api)
    const resp = await fetch(api);
    const respdata = await resp.json();

    console.log(respdata.slip.id)
    document.getElementById("advice").innerText = respdata.slip.advice;
    document.getElementById("advice_number").innerHTML = respdata.slip.id;

}

getAdvide()