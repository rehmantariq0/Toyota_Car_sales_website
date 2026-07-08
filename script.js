/* =============================
   1. Car Database (Updated to PNG)
   ============================= */
   const carsDatabase = {
    "Corolla": {
        title: "Toyota Corolla Altis X",
        price: "PKR 5,500,000",
        desc: "The all-new Corolla Altis X offers a prestigious exterior and a luxurious interior.",
        engine: "1.6L Dual VVT-i",
        trans: "CVT-i Automatic",
        hp: "138 HP",
        fuel: "Petrol",
        img: "images/car1.png"
    },
    "Yaris": {
        title: "Toyota Yaris ATIV X",
        price: "PKR 4,800,000",
        desc: "Smart, stylish, and fun to drive. The Yaris is perfect for city driving.",
        engine: "1.5L Inline-4",
        trans: "CVT Automatic",
        hp: "106 HP",
        fuel: "Petrol",
        img: "images/car2.png"
    },
    "Fortuner": {
        title: "Toyota Fortuner Legender",
        price: "PKR 18,000,000",
        desc: "Conquer any terrain with the Fortuner Legender. A true SUV.",
        engine: "2.8L Diesel Turbo",
        trans: "6-Speed Auto",
        hp: "201 HP",
        fuel: "Diesel",
        img: "images/car3.png"
    },
    "Hilux": {
        title: "Toyota Hilux Revo",
        price: "PKR 14,500,000",
        desc: "The king of pickups. Hilux Revo combines power with luxury.",
        engine: "2.8L Diesel",
        trans: "Automatic",
        hp: "201 HP",
        fuel: "Diesel",
        img: "images/car4.png"
    },
    "LandCruiser": {
        title: "Toyota Land Cruiser ZX",
        price: "PKR 80,000,000",
        desc: "The ultimate status symbol. Luxury meets durability.",
        engine: "3.5L Twin Turbo V6",
        trans: "10-Speed Auto",
        hp: "409 HP",
        fuel: "Petrol",
        img: "images/car5.png"
    },
    "Camry": {
        title: "Toyota Camry Hybrid",
        price: "PKR 25,000,000",
        desc: "Luxury hybrid sedan.",
        engine: "2.5L Hybrid",
        trans: "e-CVT",
        hp: "218 HP",
        fuel: "Hybrid",
        img: "images/car6.png"
    },
    "Prius": {
        title: "Toyota Prius",
        price: "PKR 9,500,000",
        desc: "The hybrid revolution.",
        engine: "1.8L Hybrid",
        trans: "CVT",
        hp: "121 HP",
        fuel: "Hybrid",
        img: "images/car7.png"
    },
    "Supra": {
        title: "Toyota GR Supra",
        price: "PKR 35,000,000",
        desc: "Pure driving pleasure.",
        engine: "3.0L Turbo",
        trans: "Automatic",
        hp: "382 HP",
        fuel: "Petrol",
        img: "images/car8.png"
    },
    "Crown": {
        title: "Toyota Crown",
        price: "PKR 16,000,000",
        desc: "Japanese luxury.",
        engine: "2.5L Hybrid",
        trans: "e-CVT",
        hp: "200 HP",
        fuel: "Hybrid",
        img: "images/car9.png"
    }
};

/* =============================
   2. Slider Logic (Loop Fixed)
   ============================= */
const track = document.getElementById('sliderTrack');
if (track) {
    let currentIndex = 0;
    const slides = document.querySelectorAll('.slide');
    const totalSlides = slides.length;
    let autoSlideInterval;

    function updateSliderPosition() {
        track.style.transform = `translateX(-${currentIndex * 100}%)`;
    }

    function nextSlide() {
        currentIndex++;
        if (currentIndex >= totalSlides) currentIndex = 0;
        updateSliderPosition();
    }

    function prevSlide() {
        currentIndex--;
        if (currentIndex < 0) currentIndex = totalSlides - 1;
        updateSliderPosition();
    }

    function startAutoSlide() {
        if (autoSlideInterval) clearInterval(autoSlideInterval);
        autoSlideInterval = setInterval(nextSlide, 3000);
    }

    // Attach to window so HTML buttons can use it
    window.manualSlide = function(direction) {
        clearInterval(autoSlideInterval);
        if (direction === 1) nextSlide(); else prevSlide();
        startAutoSlide();
    };

    startAutoSlide();
}

/* =============================
   3. Details Page Logic
   ============================= */
window.onload = function() {
    const urlParams = new URLSearchParams(window.location.search);
    const carName = urlParams.get('car');

    if (carName && carsDatabase[carName]) {
        const data = carsDatabase[carName];

        // Text Update
        if(document.getElementById('car-title')) document.getElementById('car-title').innerText = data.title;
        if(document.getElementById('car-price')) document.getElementById('car-price').innerText = data.price;
        if(document.getElementById('car-desc')) document.getElementById('car-desc').innerText = data.desc;
        
        // Specs Update
        if(document.getElementById('spec-engine')) document.getElementById('spec-engine').innerText = data.engine;
        if(document.getElementById('spec-trans')) document.getElementById('spec-trans').innerText = data.trans;
        if(document.getElementById('spec-hp')) document.getElementById('spec-hp').innerText = data.hp;
        if(document.getElementById('spec-fuel')) document.getElementById('spec-fuel').innerText = data.fuel;
        
        // Image Update
        const mainImg = document.getElementById('main-img');
        if(mainImg) mainImg.src = data.img;

        // Thumbnails Update
        const thumbs = document.querySelectorAll('.thumbnail-row img');
        thumbs.forEach(img => img.src = data.img);
    }
};

function viewDetails(carKey) {
    window.location.href = "details.html?car=" + carKey;
}

function changeImage(smallImg) {
    var fullImg = document.getElementById("main-img");
    if(fullImg) fullImg.src = smallImg.src;
}