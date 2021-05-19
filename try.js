let HomeDropdownOpen = document.querySelector('.home-drop-open');
let home = document.querySelector('.home');
let ShopDropdownOpen = document.querySelector('.shop-drop-open');
let shop = document.querySelector('.shop');
let categoryDropdownOpen = document.querySelector('.category-drop-open');
let category = document.querySelector('.categories');
let productDropdownOpen = document.querySelector('.product-drop-open');
let product = document.querySelector('.product');
let snippetsDropdownOpen = document.querySelector('.snippets-drop-open');
let snippets = document.querySelector('.snippets');
let thirdHeader = document.querySelector('.third-header');
let moreDropdownOpen = document.querySelector('.more-drop-open');
let more = document.querySelector('.more');
let blogDropdownOpen = document.querySelectorAll('.blog-drop-open');
let kidsCat = document.querySelector('.kids-cat');
let homeCat = document.querySelector('.home-cat');
let homeLivingDropdownOpen = document.querySelector('.home-living-drop-open');
let kidsDropdownOpen = document.querySelector('.kids-drop-open');
let womenDropdownOpen = document.querySelector('.women-drop-open');
let womenCat = document.querySelector('.women-cat');
let menDropdownOpen = document.querySelector('.men-drop-open');
let menCat = document.querySelector('.men-cat');
let navVerticalBtn = document.querySelector('.navbar_vertical_btn_home');
let navVerticalHome = document.querySelector('.navbar_vertical_home');
let navVerticalShopBtn = document.querySelector('.navbar_vertical_btn_shop');
let navVerticalShop = document.querySelector('.navbar_vertical_shop');
let navVerticalCategoriesBtn = document.querySelector('.navbar_vertical_btn_categories');
let navVerticalCategories = document.querySelector('.navbar_vertical_categories');
let hamburger = document.querySelector('.hamburger');
let verticalDropNavbar = document.querySelector('.vertical_drop_navbar');

HomeDropdownOpen.addEventListener('mouseover',()=>{
    home.style.display='grid';
    shop.style.display='none';
    category.style.display='none';
    product.style.display='none';
    snippets.style.display='none';
    more.style.display='none';
    thirdHeader.style.borderBottom='1px solid #eaeaea';
});
home.addEventListener('mouseleave',()=>{
    home.style.display='none';
    thirdHeader.style.borderBottom='0';
});

ShopDropdownOpen.addEventListener('mouseover',()=>{
    home.style.display='none';
    shop.style.display='grid';
    homeLivingDropdownOpen.style.display='grid';
    kidsDropdownOpen.style.display='none';
    womenDropdownOpen.style.display='none';
    menDropdownOpen.style.display='none';
    category.style.display='none';
    product.style.display='none';
    snippets.style.display='none';
    more.style.display='none';
    thirdHeader.style.borderBottom='1px solid #eaeaea';
});
shop.addEventListener('mouseleave',()=>{
    shop.style.display='none';
    thirdHeader.style.borderBottom='0';
});

categoryDropdownOpen.addEventListener('mouseover',()=>{
    home.style.display='none';
    shop.style.display='none';
    category.style.display='grid';
    product.style.display='none';
    snippets.style.display='none';
    more.style.display='none';
    thirdHeader.style.borderBottom='1px solid #eaeaea';
});
category.addEventListener('mouseleave',()=>{
    category.style.display='none';
    thirdHeader.style.borderBottom='0';
});

productDropdownOpen.addEventListener('mouseover',()=>{
    home.style.display='none';
    shop.style.display='none';
    category.style.display='none';
    product.style.display='grid';
    snippets.style.display='none';
    more.style.display='none';
    thirdHeader.style.borderBottom='1px solid #eaeaea';
});
product.addEventListener('mouseleave',()=>{
    product.style.display='none';
    thirdHeader.style.borderBottom='0';
});

snippetsDropdownOpen.addEventListener('mouseover',()=>{
    home.style.display='none';
    shop.style.display='none';
    category.style.display='none';
    product.style.display='none';
    snippets.style.display='grid';
    more.style.display='none';
    thirdHeader.style.borderBottom='1px solid #eaeaea';
});
snippets.addEventListener('mouseleave',()=>{
    snippets.style.display='none';
    thirdHeader.style.borderBottom='0';
});
moreDropdownOpen.addEventListener('mouseover',()=>{
    home.style.display='none';
    shop.style.display='none';
    category.style.display='none';
    product.style.display='none';
    snippets.style.display='none';
    more.style.display='block';
    thirdHeader.style.borderBottom='1px solid #eaeaea';
});
more.addEventListener('mouseleave',()=>{
    more.style.display='none';
    thirdHeader.style.borderBottom='0';
});
for(i=0;i<blogDropdownOpen.length;i++){
    blogDropdownOpen[i].addEventListener('mouseover',()=>{
        home.style.display='none';
        shop.style.display='none';
        category.style.display='none';
        product.style.display='none';
        snippets.style.display='none';
        more.style.display='none';
        thirdHeader.style.borderBottom='1px solid #eaeaea';
    });
    blogDropdownOpen[i].addEventListener('mouseleave',()=>{
        thirdHeader.style.borderBottom='0';
    });
}
homeCat.addEventListener('mouseover',()=>{
    homeLivingDropdownOpen.style.display='grid';
    kidsDropdownOpen.style.display='none';
    womenDropdownOpen.style.display='none';
    menDropdownOpen.style.display='none';
});
kidsCat.addEventListener('mouseover',()=>{
    kidsDropdownOpen.style.display='grid';
    homeLivingDropdownOpen.style.display='none';
    womenDropdownOpen.style.display='none';
    menDropdownOpen.style.display='none';
});
womenCat.addEventListener('mouseover',()=>{
    kidsDropdownOpen.style.display='none';
    homeLivingDropdownOpen.style.display='none';
    womenDropdownOpen.style.display='grid';
    menDropdownOpen.style.display='none';
});
menCat.addEventListener('mouseover',()=>{
    kidsDropdownOpen.style.display='none';
    homeLivingDropdownOpen.style.display='none';
    womenDropdownOpen.style.display='none';
    menDropdownOpen.style.display='grid';
});
navVerticalBtn.addEventListener('click',()=>{
    navVerticalHome.classList.toggle('toggler');
});
navVerticalShopBtn.addEventListener('click',()=>{
    navVerticalShop.classList.toggle('toggler');
});
navVerticalCategoriesBtn.addEventListener('click',()=>{
    navVerticalCategories.classList.toggle('toggler');
});
hamburger.addEventListener('click',()=>{
    verticalDropNavbar.classList.toggle('toggler');
});

$('.owl-carousel').owlCarousel({
    loop:false,
    margin:10,
    dots:false,
    nav:true,
    autoplay:false,   
    smartSpeed: 500, 
    autoplayTimeout:7000,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
        1000:{
            items:4
        }
    }
})
