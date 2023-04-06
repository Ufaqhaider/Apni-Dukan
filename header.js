nav=document.getElementById('nav')

nav.innerHTML= `
<nav class="navbar navbar-expand-lg ">
<a class="navbar-brand" href="index.html"><img src="assets/Screenshot_from_2023-04-06_17-36-48-removebg-preview (1).png" class="img-fluid"></a>
<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <i class="fa-solid fa-bars" style="color: #ffffff;"></i>
</button>
<div class="collapse navbar-collapse" id="navbarNav">
  <ul class="navbar-nav ml-auto">
    <li class="nav-item">
      <a class="nav-link" href="#"><i class="fas fa-user"></i> Login</a>
    </li>
    <li class="nav-item">
      <a class="nav-link" href="#">Shop</a>
    </li>
    <li class="nav-item">
      <a class="nav-link cart" href="/cart"><i class="fas fa-shopping-cart"></i><span>Cart <span class="cartlogo__badge">0</span></span></a>
    </li>
  </ul>
</div>
</nav>
`
