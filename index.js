let allBtn = document.querySelectorAll(".btn")
let supCount=document.getElementById("sup__count")
let basketItems;
if (localStorage.getItem("basket")) {
    basketItems = JSON.parse(localStorage.getItem("basket"))
}
else {
    basketItems = []
    localStorage.setItem("basket", JSON.stringify(basketItems))
}

for (let i = 0; i < allBtn.length; i++) {
    allBtn[i].addEventListener("click", (e) => {
        e.preventDefault()
        let Id = allBtn[i].parentElement.parentElement.getAttribute("data-id")
        let Name = allBtn[i].previousElementSibling.previousElementSibling.innerText
        let Image =allBtn[i].parentElement.previousElementSibling.getAttribute("src")
        
        let target=basketItems.find((x)=>x.id==Id)
        if(target===undefined){
            let newBasketItem ={
                id: Id,
                count:1,
                name:Name,
                image:Image
            }
            basketItems.push(newBasketItem)
        }
        else{
            target.count++
        }
        localStorage.setItem("basket",JSON.stringify(basketItems))
        getSupCount()
    })
}

function getSupCount(){
    supCount.innerText = basketItems.length;
} 
getSupCount()
