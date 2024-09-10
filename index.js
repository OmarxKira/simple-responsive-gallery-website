const items = document.querySelectorAll(".slider .holder .item");
let next = document.getElementById('next');
let prev = document.getElementById('prev');
let reviews = document.querySelectorAll('.review .item');


let countItem = items.length;
let itemActive = 0;
let autoslideinterval;


next.onclick = function () {
    itemActive += 1;
    if (itemActive >= countItem) {
        itemActive = 0;
    }
    showSlider();
};

prev.onclick = function () {
    itemActive -= 1;
    if (itemActive < 0) {
        itemActive = countItem - 1;
    }
    showSlider();
};

reviews.forEach((reviewItem, index) => {
    reviewItem.onclick = function () {
        itemActive = index; 
        showSlider();
    };
});




function showSlider() {
    let itemActiveOld = document.querySelector('.slider .holder .item.active');
    let reviewActiveOld = document.querySelector('.review .item.active');

        itemActiveOld.classList.remove('active');
        reviewActiveOld.classList.remove('active');

        items[itemActive].classList.add('active');
        reviews[itemActive].classList.add('active');
}

// Start automatic slide functionality
function startAutoSlide() {
    autoslideinterval = setInterval(() => {
        next.click(); 
    }, 5000); 
}


function stopAutoSlide() {
    clearInterval(autoslideinterval);
}



document.querySelector('.slider').addEventListener('mouseover', stopAutoSlide);
document.querySelector('.slider').addEventListener('mouseout', startAutoSlide);

startAutoSlide();
