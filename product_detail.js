let image = document.getElementById('left2');
let images = document.getElementById('left1');
let respon = document.getElementById('respon');

window.onload = () => {
    const product = JSON.parse(localStorage.getItem('product'));
    console.log(product);
    image.innerHTML = `<div class="search-image">
        <img src=${product.img} width="370">
    </div>`;
    images.innerHTML = `
    <div class="myimages d-block">
        <div class="image1 hover-effect"> <!-- Add 'hover-effect' class directly -->
            <img src=${product.img1} width="80">
        </div>
        <hr>
        <div class="image2">
            <img src=${product.img2} width="80">
        </div>
        <hr>
        <div class="image3">
            <img src=${product.img3} width="80">
        </div>
        <hr>
        <div class="image3">
            <img src=${product.img4} width="80">
        </div>
        <hr>
        <div class="image3">
            <img src=${product.img5} width="80">
        </div>

    </div>`;
    
    
    
let descrip=""
for (let key in product.details) {
  if (product.details.hasOwnProperty(key)) {
    descrip+= "<strong>"+ key + "</strong>" + ": " + product.details[key] + "<br>" +"<br>";
  }
}

desc.innerHTML=`
<div id="details">
  <div id="desc">
    <h2>Description</h2>
    <div class="underline mx-0"></div><br>

    <div id="kurta_detail"><h6>${descrip}<h6></div>



  <div id="other_detail">
     <div class="mt-4">
        <div><h5>Sizes Available*</h5></div> 
         <div style="display: flex;">
            <div class="newborder">XS</div>
            <div class="newborder">S</div>
            <div class="newborder">ML</div>
            <div class="newborder">XL</div>
         </div>
        </div>          
     <div class="mt-4"> 
        <div><h6>Single choice( with images)*</h6></div> 
        <div class="circle-container">
          <div class="circle circle-1"></div>
          <div class="circle circle-2"></div>
          <div class="circle circle-3"></div>
      </div>
  </div>
</div>
`


    respon.innerHTML=`
    <div class="owl-carousel owl-theme">
    <div class="types_img"><img src=${product.img}></div>
    <div class="types_img"><img src=${product.img2}></div>
    <div class="types_img"><img src=${product.img3}></div>
    <div class="types_img"><img src=${product.img4}></div>
    <div class="types_img"><img src=${product.img5}></div>
    </div>
  `




$(".owl-carousel").owlCarousel({
    loop: true,
    margin: 15,
    nav: false,
    autoplay: true,
    responsive: {
      100: {
        items: 1,
      },
      712: {
        items: 2,
      },
      1000: {
        items: 3,
      },
      1246: {
        items: 4,
      },
      1400: {
        items: 5,
      },
    },
  });




    // Add click event listener to images element
    images.addEventListener('click', (event) => {
        // Check if the clicked target is an image
        if (event.target.tagName === 'IMG') {
            // Remove 'selected' class from previously selected image, if any
            const prevSelected = images.querySelector('.selected');
            if (prevSelected) {
                prevSelected.classList.remove('selected');
            }
            // Add 'selected' class to the clicked image
            event.target.classList.add('selected');

            // Update the image element with the clicked image
            image.innerHTML = `<div class="search-image">
                <img src=${event.target.src} width="370">
            </div>`;
        }
    });
};


       


     //    window.onload = () => {
     //      const product = JSON.parse(localStorage.getItem('product'));
     //      const showsearch = document.querySelector('#search-section_search');
     //      showsearch.innerHTML = `
     //        <div class="card position-relative m-3 " style="width:280px;">
     //          <div class="badge-overlay">
     //            <span class="top-left badge ">${product.off}</span>
     //          </div>
     //          <span class="position-absolute top-10 start-100 translate-middle badge1  badge-danger" id="disc_search">
     //            ${product.discount}
     //          </span>
     //          <img src=${product.img} class="card-img-top" width="100%" height="300px">
     //          <div class="card-body pt-0 px-0">
     //            <div class="d-flex flex-row justify-content-between p-3 mid">
     //              <a class="d-flex flex-column text-muted mb-1">
     //                ${product.brand}
     //              </a>
     //              <p class="d-flex flex-column text-muted mb-2">${product.model}</p>
     //            </div>
     //            <strong class="pl-3">${product.name}</strong>
     //            <p>${product.price} &nbsp; <s>${product.cutprice}</s></p>
     //            <div class=" add mx-3 mt-3 d-block">
     //              <input type="number" class="quantity__input" value="1">
     //              <button type="button" onclick="addToCart(event,${product.id},'cart')" class="btn btn-danger btn-block mb-1"><small>ADD TO CART</small></button>&nbsp; &nbsp; &nbsp;
     //              <i class="fa-regular fa-heart mb-2 " onclick=" addToCart(event,${product.id},'wishlist')"></i> &nbsp; &nbsp;
     //              <i class="fa-solid fa-arrow-right-arrow-left"></i>
     //            </div>
     //            <div class="d-flex flex-row justify-content-between p-3 mid">
     //              <p class="d-flex flex-column mb-1">
     //                <i class="fa-solid fa-dollar" style="color: lightgreen;"></i>Buy Now
     //              </p>
     //              <p class="d-flex flex-column mb-2"><i class="fa-solid fa-question" style="color: red;"></i>Question</p>
     //            </div>
     //          </div>
     //        </div>`;
     //    };
        









// fetch("product.json")
//     .then((response) => response.json())
//     .then((data) => {
//         console.log(data)
//         let product = data.products;
//         let get_id = parseInt(idValue)
//         for(let i =0 ; i<product.length ;i++){
//             if(product[i].id === get_id){
//                 console.log('match')
