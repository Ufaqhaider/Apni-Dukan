fetch('product.json')
  .then(response => response.json())
  .then(data => {
    const productList = document.getElementById('product-list');

    for(let i=0;i<=data.product.length;i++){
      let products = data.product[i];
        productList.innerHTML+=`
     <div class="card mt-5 col-md-4 col-sm-6">   
       <img src="${products.img}" class="card-img-top img-fluid" alt="...">
       <div class="card-body">
       <h5 class="card-title">${products.name}</h5>
       <p class="card-text">₹${products.price}</p>
       <button href="#" class="btn btn-primary" onclick="search(event,${products.id})">View Details</button>
       </div>
    </div>
`

    }
  })


async function search(event, productId) {
  event.preventDefault();
  const response = await fetch("product.json")
  const data = await response.json();
  const product = data.product.find(product => product.id === productId);


  localStorage.setItem('product', JSON.stringify(product));

  window.location.href = 'product_detail.html';

 
}