let who = ['the dog','my granma','his turtle','my bird'];
let what = ['eat','pissed','crushed','broked'];
let when = ['before the class','right in time','when I finished','during my lunch','while I was praying'];

function getRandomElement(listElement) {
    let element = "";
    element = listElement[Math.floor(Math.random() * listElement.length)];
    return element;
    //console.log(element)
}


function onLoad() {
    let excuseGen = document.querySelector("#excuse");
    excuseGen.innerHTML = getRandomElement(who) + " " + getRandomElement(what) + " " + getRandomElement(when);
    //return getRandomElement(who) + " " + getRandomElement(what) + " " + getRandomElement(when);
    //console.log(getRandomElement(who) + " " + getRandomElement(what) + " " + getRandomElement(when));
 };

 
//  document.addEventListener("DOMContentLoaded", function(){
//     // let excuseGen = document.querySelector("#excuse");
//     // excuseGen.innerHTML = getRandomElement(who) + " " + getRandomElement(what) + " " + getRandomElement(when);
//     onLoad();
//  })


window.onLoad = onLoad();
//     let excuseGen = document.querySelector("#excuse");
//     excuseGen.innerHTML = onLoad();
//  });


 