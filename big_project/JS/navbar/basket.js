let cartBtns = document.querySelectorAll(".add-to-card");
let flowerCount = document.querySelector(".flower-count");
let flowerSumPrice = document.querySelector(".flower-sum-price");

let sumPrice = 0;


[...cartBtns].forEach(cart=>{
    cart.addEventListener("click",function(){
        let floId = this.parentNode.getAttribute("data-id");
        let title = this.parentNode.children[1].children[0].innerText;
        let price = this.parentNode.children[2].children[1].innerText;
        let image = this.parentNode.children[0].children[0].getAttribute("src");
        
        let flowerObject = {
            id: floId,
            title: title,
            price: price,
            image: image,
            count: 1
        }

        let basket = [];

        if(localStorage.getItem("basket") == null){
            basket = [flowerObject];
            localStorage.setItem("basket",JSON.stringify(basket));
        }
        else{
            let newbasket = JSON.parse(localStorage.getItem("basket"));
            let isExist = [...newbasket].find(item=>item.id===flowerObject.id);
            if(isExist == undefined){
                newbasket.push(flowerObject);
                localStorage.setItem("basket",JSON.stringify(newbasket));
            }
            else{
                isExist.count += 1;
                localStorage.setItem("basket",JSON.stringify(newbasket));
            }
        }

        //Displaying flowers count near icon
        let localLength = JSON.parse(localStorage.getItem("basket")).length;
        flowerCount.style.cssText = `visibility: visible`;
        flowerCount.innerText = localLength;

        //Flower sum price
        let slicePrice = price.slice(1);
        // console.log(slicePrice);
        sumPrice += Number(slicePrice);
        console.log(sumPrice);
        flowerSumPrice.innerText = `CART($${sumPrice})`;
    })
})