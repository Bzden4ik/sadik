document.getElementById('recordForm').addEventListener('submit', function(event) {
    event.preventDefault(); // предотвращаем отправку формы

    var form = event.target;
    var isValid = form.checkValidity();

    if (!isValid) {
        form.reportValidity();
        return;
    }

    var formData = new FormData(form);

    fetch('process_form.php', {
        method: 'POST',
        body: formData
    })
    .then(response => response.text())
    .then(data => {
        var responseMessage = document.getElementById('responseMessage');
        responseMessage.style.display = 'block';
        responseMessage.style.opacity = 1;
        form.reset(); // сбрасываем форму

        setTimeout(() => {
            responseMessage.style.transition = 'opacity 2s';
            responseMessage.style.opacity = 0;
            setTimeout(() => {
                responseMessage.style.display = 'none';
            }, 2000); // удаляем элемент из DOM после затухания
        }, 1000); // задержка перед началом затухания
    })
    .catch(error => {
        console.error('Error:', error);
    });
});

let slideIndex = 0;
showSlides();

function plusSlides(n) {
    slideIndex += n;
    showSlides();
}

function showSlides() {
    let slides = document.querySelectorAll(".slide");
    if (slideIndex >= slides.length) {
        slideIndex = 0;
    } else if (slideIndex < 0) {
        slideIndex = slides.length - 1;
    }
    slides.forEach(slide => slide.style.display = "none");
    slides[slideIndex].style.display = "block";
}

let newsIndex = 0;
const newsItems = document.querySelectorAll(".blog-post");

function showNews() {
    newsItems.forEach((item, index) => {
        if (index >= newsIndex && index < newsIndex + 3) {
            item.classList.add("fade-out-left");
        }
    });

    setTimeout(() => {
        newsItems.forEach((item, index) => {
            item.style.display = "none";
            item.classList.remove("fade-out-left", "fade-in-right");
        });

        newsIndex = (newsIndex + 3) % newsItems.length;

        newsItems.forEach((item, index) => {
            if (index >= newsIndex && index < newsIndex + 3) {
                item.style.display = "block";
                item.classList.add("fade-in-right");
            }
        });
    }, 1000); // Задержка перед показом новых новостей
}

setInterval(showNews, 5000);
showNews();

let reviewsIndex = 0;
const reviewItems = document.querySelectorAll(".review");

function showReviews() {
    reviewItems.forEach((item, index) => {
        if (index >= reviewsIndex && index < reviewsIndex + 3) {
            item.classList.add("fade-out-left");
        }
    });

    setTimeout(() => {
        reviewItems.forEach((item, index) => {
            item.style.display = "none";
            item.classList.remove("fade-out-left", "fade-in-right");
        });

        reviewsIndex = (reviewsIndex + 3) % reviewItems.length;

        reviewItems.forEach((item, index) => {
            if (index >= reviewsIndex && index < reviewsIndex + 3) {
                item.style.display = "block";
                item.classList.add("fade-in-right");
            }
        });
    }, 1000); // Задержка перед показом новых отзывов
}

setInterval(showReviews, 5000);
showReviews();

ymaps.ready(init);

function init() {
    var myMap = new ymaps.Map("map", {
        center: [55.1766235651928, 61.32662536335715],
        zoom: 18
    });

    var myPlacemark = new ymaps.Placemark([55.1766235651928, 61.32662536335715], {
        hintContent: 'Садик "МАДОУ ДС №250"',
        balloonContent: 'ул.Наркома Малышева, 1, Челябинск, 454136'
    });

    myMap.geoObjects.add(myPlacemark);
}

document.getElementById('openModalBtn').onclick = function() {
    document.getElementById('myModal').style.display = "block";
}

document.getElementsByClassName('close')[0].onclick = function() {
    document.getElementById('myModal').style.display = "none";
}

window.onclick = function(event) {
    if (event.target == document.getElementById('myModal')) {
        document.getElementById('myModal').style.display = "none";
    }
}

document.addEventListener('DOMContentLoaded', function() {
    var elements = document.querySelectorAll('.fade-in');
    var observer = new IntersectionObserver(function(entries) {
        entries.forEach(function(entry) {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, {
        threshold: 0.1
    });

    elements.forEach(function(element) {
        observer.observe(element);
    });
});
