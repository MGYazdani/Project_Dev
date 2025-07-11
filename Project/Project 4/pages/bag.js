const CONVINIENCE=99;
let bagItemObject;
onload();
function onload(){
    loadBagItemsObj();
    displayBagItems();
    displayBagSum();
}
function displayBagSum(){
    let bagSumElement=document.querySelector('.bag-summary');
    let totalItem=bagItemObject.length;
    let totalMRP=0;
    let totalDis=0;
   

    bagItemObject.forEach(bagItem=>{
        totalMRP+=bagItem.original_price;
        totalDis+=bagItem.original_price-bagItem.current_price;
    });
     let finalPay=totalMRP-totalDis+ CONVINIENCE;


    bagSumElement.innerHTML=`  <div class="bag-details-container">
            <div class="price-header">PRICE DETAILS (${totalItem} Items) </div>
            <div class="price-item">
              <span class="price-item-tag">Total MRP</span>
              <span class="price-item-value">Rs${totalMRP}</span>
            </div>
            <div class="price-item">
              <span class="price-item-tag">Discount on MRP</span>
              <span class="price-item-value priceDetail-base-discount">-Rs${totalDis}</span>
            </div>
            <div class="price-item">
              <span class="price-item-tag">Convenience Fee</span>
              <span class="price-item-value">Rs 99</span>
            </div>
            <hr>
            <div class="price-footer">
              <span class="price-item-tag">Total Amount</span>
              <span class="price-item-value">Rs ${finalPay}</span>
            </div>
          </div>
          <button class="btn-place-order">
            <div class="css-xjhrni">PLACE ORDER</div>
          </button>`;
}

function loadBagItemsObj(){
    console.log(bagItem);
    bagItemObject= bagItem.map(itemId=>{
        for(let i=0;i<items.length;i++){
            if(itemId==items[i].id){
              return items[i];  
            }
        }
    });
    console.log(bagItemObject);
}
function displayBagItems(){
    console.log(bagItem);
    let containerElement=document.querySelector('.bag-items-container');
    let innerHTML='';
    bagItemObject.forEach(bagItem=>{
        innerHTML+=generateItemHTML(bagItem);
    });
    containerElement.innerHTML=innerHTML;
}

function removeFromBag(itemId){
   bagItem= bagItem.filter(bagItemId=>bagItemId!=itemId);
   localStorage.setItem('bagItem',JSON.stringify(bagItem));
   loadBagItemsObj();
   displayBagIcon();
   displayBagItems();
   displayBagSum();
}

function generateItemHTML(item){
    return `<div class="bag-item-container">
            <div class="item-left-part">
              <img class="bag-item-img" src="../${item.image}">
            </div>
            <div class="item-right-part">
              <div class="company">${item.company}</div>
              <div class="item-name">${item.item_name}</div>
              <div class="price-container">
                <span class="current-price">Rs ${item.current_price}</span>
                <span class="original-price">Rs ${item.original_price}</span>
                <span class="discount-percentage">(${item.discount_percentage}% OFF)</span>
              </div>
              <div class="return-period">
                <span class="return-period-days">${item.return_period} days</span> return available
              </div>
              <div class="delivery-details">
                Delivery by
                <span class="delivery-details-days">${item.delivery_date}</span>
              </div>
            </div>

            <div class="remove-from-cart" onclick="removeFromBag(${item.id});">X</div>
          </div>`
}