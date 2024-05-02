document.addEventListener('DOMContentLoaded', () => {
    let imgSlider = document.querySelector('.history img');
    let indicator = document.querySelectorAll('.slideContainer .slideIndicator span');
    let imgs = ['images/rectangle_23_copy.jpg', 'images/rectangle_23.jpg', 'images/rectangle_23_copy.jpg', 'images/rectangle_23.jpg'];
    let time = 3000;
    let i = 0;

    function slideImages() {
        indicator.forEach((el) => {
            el.classList.remove("active");
        });
        imgSlider.src = imgs[i];
        indicator[i].classList.add("active");

        if (i < imgs.length - 1) {
            i++;
        } else {
            i = 0;
        }

        setTimeout(slideImages, time);
    }

    slideImages();

    if (window.innerWidth <= 700) {
        const sectionLinks = document.querySelectorAll('.section ul li');

        sectionLinks.forEach(link => {
            link.addEventListener('click', function () {
                const isActive = link.classList.contains('active');
                sectionLinks.forEach(item => {
                    item.classList.remove('active');
                    item.querySelector('.accordion-content').style.display = 'none';
                });
                if (!isActive) {
                    link.classList.add('active');
                    link.querySelector('.accordion-content').style.display = 'block';
                }
            });
        });
    }
});
