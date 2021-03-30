const navHeader = () => {
    // First we get the viewport height and we multiple it by 1% to get a value for a vh unit
    let vh = window.innerHeight * 0.01;
    // Then we set the value in the --vh custom property to the root of the document
    document.documentElement.style.setProperty("--vh", `${vh}px`);

    const body = document.querySelector("body");

    const navbar = document.querySelectorAll(".navbar-header");

    const menuToggle = document.getElementById("menu-toggle");

    const data_menu = document.querySelector(".burger-menu-wrapper");

    // const animate_navbar = document.querySelectorAll(".content-menu a");
    // Animate data in class .animateList
    const animate_navbar = document.querySelectorAll(".animateList");

    menuToggle.addEventListener("click", () => {
        // Toggle Menu
        data_menu.classList.toggle("wrapper-active");

        navbar.forEach((list, index) => {
            if (list.style.backgroundColor) {
                list.style.backgroundColor = "";
                // list.style.opacity = "";
                list.style.paddingTop = "";
                list.style.paddingBottom = "";
                list.style.zIndex = "";
            } else {
                list.style.backgroundColor = `rgba(0, 0, 0, 0.877)`;
                // list.style.opacity = `0.7`;
                list.style.paddingTop = `0.5rem`;
                list.style.paddingBottom = `0.8rem`;
                list.style.zIndex = `100`;
            }
        });

        // Animate Navbar Links
        animate_navbar.forEach((list, index) => {
            // link.style.animation = `navLinkFade 0.8s ease forwards ${index / 7 + 1.6}s`;
            // console.log(index / 7 + 1.6);
            if (list.style.animation) {
                list.style.animation = "";
            } else {
                list.style.animation = `navLinkFade 0.7s ease forwards ${index / 7 + 0.4}s`;
            }
        });

        // Toggle Animation

        menuToggle.classList.toggle("toggle");

        // Disable Scroll
        body.classList.toggle("disabledScroll");
    });

    // Toggle Submenu Dropdown

    const menuDropdown = document.querySelector(".btn-submenu");
    const menuDropdownActive = document.querySelector(".menu-group-list");

    const sub_menuDropdown = document.querySelector(".btn-submenu-drop");
    const subMenuDropdownActive = document.querySelector(".group-dropdown-link");

    // menu - drop - active;
    menuDropdown.addEventListener("click", () => {
        menuDropdownActive.classList.toggle("menu-drop-active");
        menuDropdown.classList.toggle("active");
    });

    sub_menuDropdown.addEventListener("click", () => {
        subMenuDropdownActive.classList.toggle("menu-active");
        sub_menuDropdown.classList.toggle("active");
    });
};

// Change Sticky Navbar Color When Scroll
const onScroll = () => {
    const navbar = document.querySelector(".navbar-header");
    const nav_menu = document.querySelector(".menu-group");
    const nav_submenu = document.querySelector(".group-dropdown-link");

    window.addEventListener("scroll", () => {
        if (this.scrollY > 20) {
            navbar.classList.add("bg-black", "bg-opacity-80", "lg:py-1", "py-3", "pt-2");
            navbar.classList.remove("lg:pt-9", "lg:py-2", "py-2", "pt-6");

            nav_menu.classList.add("navScroll");
            nav_submenu.classList.add("navScroll");
        } else {
            navbar.classList.remove("bg-black", "bg-opacity-80", "lg:py-1", "py-3", "pt-2");
            navbar.classList.add("lg:pt-9", "lg:py-2", "py-2", "pt-6");

            nav_menu.classList.remove("navScroll");
            nav_submenu.classList.remove("navScroll");
        }
    });
};

const backgroundChange = () => {
    function changeBackground() {
        var i = 0;
        const images = ["img/photo-1595841696677-6489ff3f8cd1.jpeg", "img/pexels-well-naves-1829067.jpg", "img/pexels-zeeshaan-shabbir-5020763.jpg", "img/pexels-alex-knight-2599247.jpg", "img/pexels-aleksandar-pasaric-2338113.jpg"];

        const backgroundWeb = document.querySelector(".bg-image");
        const bg = images[Math.floor(Math.random() * images.length)];
        backgroundWeb.style.backgroundImage = "url(" + bg + ")";
    }
    // setInterval(changeBackground, 7000);
};

$(".owl-carousel ").owlCarousel({
    stagePadding: 0,
    center: true,
    loop: true,
    margin: 1,
    lazyLoad: true,
    responsiveClass: true,

    autoplay: true,
    autoplayTimeout: 4000,
    autoplayHoverPause: true,

    autoHeight: true,
    autoWidth: true,
    responsive: {
        0: {
            items: 1,
            nav: false,
        },
        600: {
            items: 1,
            nav: false,
        },
        767: {
            items: 1,
            nav: false,
        },
        1250: {
            items: 1,
            nav: true,
        },
    },
});

navHeader();
backgroundChange();
onScroll();