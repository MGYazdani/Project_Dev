console.log('I am here');
let bagItem;
onLoad();

function onLoad(){
 let bagItemStr=localStorage.getItem('bagItem');
 bagItem=bagItemStr?JSON.parse(bagItemStr):[];
displayHomePage();
displayBagIcon();
}

function addToBag(itemID){
    bagItem.push(itemID);
    localStorage.setItem('bagItem', JSON.stringify(bagItem));
    displayBagIcon();
};

function displayBagIcon(){
  let bagItemCount=document.querySelector('.topIcon');
  if(bagItem.length>0){
    bagItemCount.style.visibility='visible';
   bagItemCount.innerText=bagItem.length;
}else{bagItemCount.style.visibility='hidden';}
} 

function displayHomePage(){
let itemsContainerElement=document.querySelector('.container');
if(!itemsContainerElement){
    return;
}
let innerHtml='';
items.forEach(item=>{
         innerHtml+=`<div
                class="part-contain">
                <img class="image" src="${item.image}" alt="item_image">
                <div class="rating">
                    ${item.rating.star}⭐| ${item.rating.count}
                </div>
                <div class="company_name">${item.company}</div>
                <div class="item_name">${item.item_name}</div>
            
            <div class="price">
                <span class="Current">Rs ${item.current_price}</span>
                <span class="original">Rs ${item.original_price}</span>
                <span class="discount">(${item.discount_percentage}% OFF)</span>
            </div>
            <button class="addBag" onclick="addToBag(${item.id});">Add To Bag</button>
            </div>`;
});
itemsContainerElement.innerHTML = innerHtml;
}