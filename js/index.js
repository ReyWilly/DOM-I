const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"]);
logo.src = siteContent['nav']['img-src'];

let ctaImg = document.querySelector('#cta-img');
ctaImg.src = siteContent['cta']['img-src'];

let midImg = document.querySelector('#middle-img');
midImg.src = siteContent['main-content']['middle-img-src'];

let nav = document.querySelectorAll('nav a');
nav[0].innerHTML = siteContent.nav['nav-item-1'];
nav[1].innerHTML = siteContent.nav['nav-item-2'];
nav[2].innerHTML = siteContent.nav['nav-item-3'];
nav[3].innerHTML = siteContent.nav['nav-item-4'];
nav[4].innerHTML = siteContent.nav['nav-item-5'];
nav[5].innerHTML = siteContent.nav['nav-item-6'];
nav.forEach(i => i.style.color = "black");

let ctaHead = document.querySelector('.cta-text h1');
ctaHead.innerHTML = siteContent.cta["h1"];

let ctaBut = document.querySelector('.cta-text button');
ctaBut.innerHTML = siteContent.cta["button"]

let mainConH = document.querySelectorAll('.main-content .text-content h4');
let mainConP = document.querySelectorAll('.main-content .text-content p')
let mainConImg = document.querySelector('#middle-img');

mainConImg.src = siteContent['main-content']['middle-img-src'];

mainConH[0].textContent = siteContent['main-content']['features-h4'];
mainConP[0].textContent = siteContent['main-content']['features-content'];

mainConH[1].textContent = siteContent['main-content']['about-h4'];
mainConP[1].textContent = siteContent['main-content']['about-content'];

mainConH[2].textContent = siteContent['main-content']['services-h4'];
mainConP[2].textContent = siteContent['main-content']['services-content'];

mainConH[3].textContent = siteContent['main-content']['product-h4'];
mainConP[3].textContent = siteContent['main-content']['product-content'];

mainConH[4].textContent = siteContent['main-content']['vision-h4'];
mainConP[4].textContent = siteContent['main-content']['vision-content'];

let contH = document.querySelector('.contact h4');
let contCon = document.querySelectorAll('.contact p');

contH.textContent = siteContent['contact']['contact-h4'];

contCon[0].textContent = siteContent['contact']['address'];
contCon[1].textContent = siteContent['contact']['phone'];
contCon[2].textContent = siteContent['contact']['email'];

let footCon = document.querySelector('footer p');
footCon.textContent = siteContent['footer']['copyright'];