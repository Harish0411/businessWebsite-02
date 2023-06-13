 let counter1 = document.querySelector(".counter1");
 let counter2 = document.querySelector(".counter2");
 let counter3 = document.querySelector(".counter3");
 let counter4 = document.querySelector(".counter4");
 let counter = document.querySelector('.counter')

 const animateNumber = (number, item) =>{
	let startingNum = 0;
	let animationSpeed = 30;
	let animationGrowNumber = number / 100;

	let interval = setInterval(() => {
       if(startingNum >= number - animationGrowNumber){
		clearInterval(interval)
	   }else{
		startingNum += animationGrowNumber;
		item.innerText = Math.round(startingNum)
	   }
	},animationSpeed)
 }

 animateNumber(6805, counter1)
 animateNumber(906, counter2)
 animateNumber(600, counter3)
 animateNumber(9750, counter4)
 animateNumber(36, counter)

			
let navLinks = document.querySelectorAll(".nav-item");
let menuToggle = document.getElementById("navbarSupportedContent");
let bscollabse = new bootstrap.Collapse(menuToggle, {toggle : false});

navLinks.forEach((e) =>{
    e.addEventListener("click", () =>{bscollabse.toggle()})
});



$('.brand').owlCarousel({
    loop:true,
	autoplay:true,
	rewind:true,
	items:1,
    margin:30,
    smartSpeed:300,
	stagepadding:50,
	margin:25,
    nav:true,
    responsive:{
        0:{
            items:1,
			dotsEach: 3
        },
        600:{
            items:3
        },
        1000:{
            items:4,
			dotsEach: 1
        }
    }
})

$('.test').owlCarousel({
    loop:true,
	autoplay:true,
	rewind:true,
    margin:30,
	dots:false,
	pagination:false,
    smartSpeed:300,
	stagepadding:50,
	margin:25,
    nav:true,
	center:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
        1000:{
            items:3
        }
    }
})

$('.partner').owlCarousel({
    loop:true,
	autoplay:true,
	rewind:true,
    margin:30,
	dots:false,
	pagination:false,
    smartSpeed:300,
	stagepadding:50,
	margin:25,
    nav:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:5
        }
    }
})

document.addEventListener('scroll', () =>{
	var scrollValue = window.scrollY;
	let navBar = document.querySelector('.navbar')
	let header = document.querySelector('.header-top')
	header.classList.add('display')
	let headerContent = document.querySelector('.header-content')
	
	// console.log(scrollValue)

	if(scrollValue > 0){
		navBar.classList.add('bgColor')
		headerContent.classList.add('top')
	}else{ 	
		navBar.classList.remove('bgColor')
		headerContent.classList.remove('top')
	}
})

let navLink = document.querySelectorAll('.nav-link')

navLink.forEach(e => {
    e.addEventListener('click', () =>{
        // nav.classList.remove('active')
		console.log(e);
       console.log('click');
       document.querySelector('.active')?.classList.remove('active')
       e.classList.add('active')
    })
})
