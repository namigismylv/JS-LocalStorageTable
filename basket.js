let basketTbody = document.getElementById("basketTbody")
let basketItems;
let table=document.querySelector(".table")
let supCount=document.getElementById("sup__count")
if (localStorage.getItem("basket")) {
    basketItems = JSON.parse(localStorage.getItem("basket"))
}
else {
    basketItems = []
    localStorage.setItem("basket", JSON.stringify(basketItems))
}
if(basketItems.length!=0){

    function renderUi(items) {
        basketTbody.innerHTML = ""
        for (let i = 0; i < items.length; i++) {
            basketTbody.innerHTML += `
            <tr>
                <td><img width=150px src="${items[i].image}"></td>
                <td>${items[i].name}</td>
                <td>${items[i].count}</td>
              </tr>
            `
        }
    }
}
else{
table.previousElementSibling.classList.remove("d-none")
}

function getSupCount(){
    supCount.innerText = basketItems.length;

}
getSupCount()
renderUi(basketItems)