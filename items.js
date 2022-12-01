// http://localhost:8000/product
let API = "http://localhost:8000/product"


// инпуты и кнопки для создания новых данных
let inpDetails = document.querySelector(".section__add__details")
let inpPrice = document.querySelector(".section__add__price")
let inpQuantity = document.querySelector(".section__add__quantity")
let inpCategory = document.querySelector(".section__add__catygory")
let inpSales = document.querySelector(".section__add__sales")
let inpUrl = document.querySelector(".section__add__url")
let btnAdd = document.querySelector(".section__add__btn-add")
let accordion = document.querySelector(".accordion__header")


// тег для отображения данных
let sectiondRead =document.querySelector("#section__read")













 
// // ? =========== ACCORDION END ==========

// // ! ============== Create start ============

// async function createProduct(obj){
//    await fetch(API, {
//         method: "POST",
//         headers: {
//             "Content-type": "application/json; charset=utf-8"
//         },
//         body: JSON.stringify(obj)
            
//     }).then((res) =>res.json())
// }

// btnAdd.addEventListener("click", ()=>{
//     // провера на заполненность полей
//     if (!inpDetails.value.trim() 
//     || !inpPrice.value.trim()
//      || !inpCategory.value.trim()
//       || !inpQuantity.value.trim() 
//       || !inpSales.value.trim() 
//       || !inpUrl.value.trim()){
//         alert("Заполните поля!")
//         return;
//     }
//     let obj ={
//         details: inpDetails.value,
//         price: inpPrice.value,
//         category: inpCategory.value,
//         quantity: inpQuantity.value,
//         sale: inpSales.value,
//         urlimg: inpUrl.value,
//     }
//     // console.log(obj);
//     inpDetails.value =""
//     inpPrice.value =""
//     inpCategory.value =""
//     inpQuantity.value =""
//     inpSales.value =""
//     inpUrl.value =""
//     createProduct(obj)

// })


// // ! =========  Read start ==========
// async function readProducts(){
//     let data = await fetch(API).then((res)=>res.json())
//     sectiondRead.innerHTML =""
//     data.forEach(item => {
    //     sectiondRead.innerHTML += `
    //     <div class="card">
    //     <div class="card2">
    //       <div class="front2" style="background-image: url(${item.urlimg})"></div>
    //       <div class="back2">
    //         <div id="card-details2">
    //         <p>${item.details}</p>
    //         </div>
    //       </div>
    //       <div class="text">
    //         <h2>${item.category}</h2>
            
    //         <span class="card_price">Цена: ${item.price} сом</span>
    //         <br />
    //         <span class="card_sales">Скидка: ${item.sale} %</span>
    //       </div>
    //       <div class="userIcon" id="userPanel">
    //         <img src="https://cdn-icons-png.flaticon.com/512/2107/2107956.png" alt="" width="20px" />
    //         <button class="btnBuy">Выбрать</button>
    //       </div>
    //       <div class="admin-panel" id="admin">
    //         <img src="https://cdn-icons-png.flaticon.com/512/1799/1799391.png" width="20px" class="read_del" />
    //         <img src="https://www.freeiconspng.com/thumbs/edit-icon-png/edit-new-icon-22.png" width="20px" />
    //       </div>
    //     </div>
//     //   </div>`
//         sectiondRead.innerHTML += `
//         <div class="card">
       
//             <div id="card-details2">
           
//           </div>
//           <div class="text">
//             <h2>${item.category}</h2>
//             <span class="card_sales">Скидка: ${item.sale} %</span>
//             <div class="card2">
//           <div class="front2" style="background-image: url(${item.urlimg})"></div>
//           <div class="back2"> <h5>${item.details}</h5><span class="card_price">Цена: ${item.price} сом</span>
//           <br />
//           </div>
//           </div>
            
//           </div>
//           <div class="userIcon" id="userPanel">
//             <img src="https://cdn-icons-png.flaticon.com/512/458/458534.png" alt="" width="20px"/>
//             <button class="btnBuy">Выбрать</button>
//           </div>
//           <div class="admin-panel" id="admin">
//             <img src="https://cdn-icons-png.flaticon.com/512/1799/1799391.png" width="20px" class="read_del" />
//             <img src="https://www.freeiconspng.com/thumbs/edit-icon-png/edit-new-icon-22.png" width="20px" />
//           </div>
//         </div>
//       </div>`
//         // readProducts()
//     });
//     // console.log(data);
// }
// readProducts()
// // ? блок куда добавляется карточки товара








// ! carusel

let card1 =document.querySelector('#card1')
let card2 =document.querySelector('#card-2')
let card3 =document.querySelector('#card3')
let btnNext = document.querySelector(".btn-next")
let btnprev = document.querySelector(".btn-prev")
// console.log(card1,card2,card3,btnNext,btnprev)
let arr = [card1,card2,card3]

btnNext.addEventListener("click",()=>{
    for(let i =0; i<arr.length; i++){
      if (i==1){
        card1.style.display = "none"
        card2.style.display = "block"
      }
    }
    
})



















