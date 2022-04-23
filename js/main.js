//1.VARIABLE
let body = document.querySelector("body");
let navbarCustom=document.querySelector(".navbar-custom"); 
let footerSocialMobileHolder  = document.querySelector('#footer-social-mobile')
let footerSocialDesktopHolder =document.querySelector('#footer-social-desktop')
let socialIcon=document.querySelector('.footer-social-icon')
let scrollDown= document.querySelector('#scroll-down')

//2.EVENT
AOS.init({
    easing: 'ease',
    duration: 1000,
    once: true,
});

window.addEventListener('scroll', (event) => {
    scrollHeader();
})

window.addEventListener('resize', (event) => {
    moveSocialIcon();
});

window.addEventListener('load', (event) => {
    moveSocialIcon();
    //loader();
    bannerAnimationDesktop()
});

jQuery(document).ready(function () {
	window.addEventListener("scroll", scrollTop);
	jQuery("a[href='#top']").click(function () {
		jQuery("html, body").animate({ scrollTop: 0 }, "slow");
		return false;
	});

	jQuery(window).scroll(function (event) {
		if (window.innerWidth <= 767) {
			let y = jQuery(this).scrollTop();
			let windowHieght = jQuery(window).height();
			let ctop = jQuery("#containerCopyright").offset().top;
			let currentScroll = ctop - y;
			if (currentScroll <= windowHieght) {
				jQuery("#scroll-top").addClass("fixed");
			} else {
				jQuery("#scroll-top").removeClass("fixed");
			}
		} else {
			jQuery("#scroll-top").removeClass("fixed");
		}
	});
});

scrollDown.addEventListener("click", (e) => { 
    e.preventDefault();
    gsap.to(window, {duration: 0.75, scrollTo: '#welcome', ease: "power2"});
}); 


//2.FUNCTION
moveSocialIcon = () => {
    if (window.innerWidth <= 991) {
        footerSocialMobileHolder.append(socialIcon)
    } else {
        footerSocialDesktopHolder.append(socialIcon)
    }
}


bannerAnimationDesktop =() =>{
    var tl = gsap.timeline({duration: 1});
    //tl.to('.banner__image',{duration: 3, scale:1}),
    tl.to('.banner__title',{duration: 0.5, opacity:1});
    tl.to('.banner__btn-discover',{duration: 0.5, opacity:1});
    tl.to('.scroll-to-botom',{duration: 0.5, opacity:1});
}

loader =() =>{
    let loader = gsap.timeline();
    loader.to(".loader__icon-container", {
        duration: 0.5,
        scale: 0,
        ease: "expo.inOut",
    })
    .to(".loader", {
        duration: 1.2,
        xPercent: -100,
        ease: "expo.inOut",
        onComplete: bannerAnimationDesktop,
    });
}

function scrollHeader(){
    const header = document.querySelector('.navbar-custom')
    // When the scroll is greater than 50 viewport height, add the scroll-header class to the header tag
    if(this.scrollY >= 150) header.classList.add('scroll-header'); 
    else header.classList.remove('scroll-header')
}


function scrollTop() {
	const scrollTop = document.getElementById("scroll-top");
	if (this.scrollY >= 30) scrollTop.classList.add("show-scroll");
	else scrollTop.classList.remove("show-scroll");
}



