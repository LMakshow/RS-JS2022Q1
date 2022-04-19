const content = [
    {
      "id": 0,
      "name": "Jennifer",
      "img": "assets/images/pets-jennifer.png",
      "type": "Dog",
      "breed": "Labrador",
      "description": "Jennifer is a sweet 2 months old Labrador that is patiently waiting to find a new forever home. This girl really enjoys being able to go outside to run and play, but won't hesitate to play up a storm in the house if she has all of her favorite toys.",
      "age": "2 months",
      "inoculations": ["none"],
      "diseases": ["none"],
      "parasites": ["none"]
    },
    {
      "id": 1,
      "name": "Sophia",
      "img": "assets/images/pets-sophia.jpg",
      "type": "Dog",
      "breed": "Shih tzu",
      "description": "Sophia here and I'm looking for my forever home to live out the best years of my life. I am full of energy. Everyday I'm learning new things, like how to walk on a leash, go potty outside, bark and play with toys and I still need some practice.",
      "age": "1 month",
      "inoculations": ["parvovirus"],
      "diseases": ["none"],
      "parasites": ["none"]
    },
    {
      "id": 2,
      "name": "Woody",
      "img": "assets/images/pets-woody.png",
      "type": "Dog",
      "breed": "Golden Retriever",
      "description": "Woody is a handsome 3 1/2 year old boy. Woody does know basic commands and is a smart pup. Since he is on the stronger side, he will learn a lot from your training. Woody will be happier when he finds a new family that can spend a lot of time with him.",
      "age": "3 years 6 months",
      "inoculations": ["adenovirus", "distemper"],
      "diseases": ["right back leg mobility reduced"],
      "parasites": ["none"]
    },
    {
      "id": 3,
      "name": "Scarlett",
      "img": "assets/images/pets-scarlet.png",
      "type": "Dog",
      "breed": "Jack Russell Terrier",
      "description": "Scarlett is a happy, playful girl who will make you laugh and smile. She forms a bond quickly and will make a loyal companion and a wonderful family dog or a good companion for a single individual too since she likes to hang out and be with her human.",
      "age": "3 months",
      "inoculations": ["parainfluenza"],
      "diseases": ["none"],
      "parasites": ["none"]
    },
    {
      "id": 4,
      "name": "Katrine",
      "img": "assets/images/pets-katrine.png",
      "type": "Cat",
      "breed": "British Shorthair",
      "description": "Katrine is a beautiful girl. She is as soft as the finest velvet with a thick lush fur. Will love you until the last breath she takes as long as you are the one. She is picky about her affection. She loves cuddles and to stretch into your hands for a deeper relaxations.",
      "age": "6 months",
      "inoculations": ["panleukopenia"],
      "diseases": ["none"],
      "parasites": ["none"]
    },
    {
      "id": 5,
      "name": "Timmy",
      "img": "assets/images/pets-timmy.png",
      "type": "Cat",
      "breed": "British Shorthair",
      "description": "Timmy is an adorable grey british shorthair male. He loves to play and snuggle. He is neutered and up to date on age appropriate vaccinations. He can be chatty and enjoys being held. Timmy has a lot to say and wants a person to share his thoughts with.",
      "age": "2 years 3 months",
      "inoculations": ["calicivirus", "viral rhinotracheitis"],
      "diseases": ["kidney stones"],
      "parasites": ["none"]
    },
    {
      "id": 6,
      "name": "Freddie",
      "img": "assets/images/pets-freddie.png",
      "type": "Cat",
      "breed": "British Shorthair",
      "description": "Freddie is a little shy at first, but very sweet when he warms up. He likes playing with shoe strings and bottle caps. He is quick to learn the rhythms of his human’s daily life. Freddie has bounced around a lot in his life, and is looking to find his forever home.",
      "age": "2 months",
      "inoculations": ["rabies"],
      "diseases": ["none"],
      "parasites": ["none"]
    },
    {
      "id": 7,
      "name": "Charly",
      "img": "assets/images/pets-charly.jpg",
      "type": "Dog",
      "breed": "Jack Russell Terrier",
      "description": "This cute boy, Charly, is three years old and he likes adults and kids. He isn’t fond of many other dogs, so he might do best in a single dog home. Charly has lots of energy, and loves to run and play. We think a fenced yard would make him very happy.",
      "age": "8 years",
      "inoculations": ["bordetella bronchiseptica", "leptospirosis"],
      "diseases": ["deafness", "blindness"],
      "parasites": ["lice", "fleas"]
    }
  ];

let slidesUnique = new Set();
let slidesUnique8 = new Set();
let slidesUnique6 = new Set();
let slidesUnique3 = new Set();
const tabletWidth = 1279;
const mobileWidth = 767;
const petsNumber = 48;
let pages = [];

// Start the page

window.onload = function () {
    console.log(`It's ali-i-ive!`);

    // Hamburger
    addHamburgerClickHandler();

    // Slider
    if (window.location.pathname.includes('index')) {
        renderSlider();
        addLeftButtonClickHandler();
        addRightButtonClickHandler();
        addSlideClickHandler();
    };

    // Pagination
    if (window.location.pathname.includes('our_pets')) {
        content.forEach((e) => e.img = '../../' + e.img);
        createPages();
        renderPagesSlider();
        addSlideClickHandler();
        addFirstPageButtonClickHandler();
        addPrevPageButtonClickHandler();
        addNextPageButtonClickHandler();
        addLastPageButtonClickHandler();
    }
}


// Hamburger

addHamburgerClickHandler = () => {
    document.querySelector('.header__hamburger').addEventListener('click', toggleHamburgerMenu)
    document.querySelector('.overlay').addEventListener('click', removeHamburgerMenu)
    document.querySelector('.header__hamburger-list').addEventListener('click', (e) => {
        console.log(e.target);
        if (e.target.classList.contains('header__hamburger-item')) {
        removeHamburgerMenu();}})
}

toggleHamburgerMenu = () => {
    document.querySelector('.header__hamburger-menu').classList.toggle('opened');
    document.querySelector('.hamburger').classList.toggle('opened');
    document.querySelector('.popup').innerHTML = '';
    document.querySelector('.overlay').classList.toggle('hidden');
    toggleScroll();
}

removeHamburgerMenu = () => {
    document.querySelector('.header__hamburger-menu').classList.remove('opened');
    document.querySelector('.hamburger').classList.remove('opened');
    document.querySelector('.overlay').classList.add('hidden');
    enableScroll();
}

// Scroll Toggle

disableScroll = () => {
    document.body.style.overflow = 'hidden';
}

enableScroll = () => {
    document.body.style.overflow = '';
}

toggleScroll = () => {
    (document.body.style.overflow === 'hidden') ? document.body.style.overflow = '' : document.body.style.overflow = 'hidden';
}

// Slider

renderSlider = () => {
    let slider = document.querySelector('.slider');
    slider.innerHTML = '';
    for (i = 0; i < slidesNumber(); i++) {
        slider.append(generateSlide(content[randomSlide()]));
    }
}

slidesNumber = () => {
    if (window.innerWidth <= mobileWidth) {
        return 1 } 
    else if (window.innerWidth <= tabletWidth) {
        return 2 } 
    else { 
        return 3 }
            }

slideOffset = () => {
    if (window.innerWidth <= mobileWidth) {
        return 310 } 
    else if (window.innerWidth <= tabletWidth) {
        return 620 } 
    else { 
        return 1080 }
            }

generateSlide = (content) => {
    let slide = document.createElement('div');
    slide.className = 'slide';
    let template = `<img src="${content.img}" alt="${content.name}">`;
    template += `<p class="card-title">${content.name}</p>`;
    template += `<button class="learn-more" type="button">Learn more</button>`;
    slide.innerHTML = template;
    slide.setAttribute('data-id', content.id);
    return slide;
}

randomSlide = () => {
    while (true) {
        console.log(slidesUnique);
        let j = Math.floor(Math.random() * 8);
        if (!slidesUnique.has(j)) {
            slidesUnique.add(j);
            return j};
    }
}

// Slider buttons

addLeftButtonClickHandler = () => {
    document.querySelector('.slider__button-left').addEventListener('click', moveSliderLeft)
}

addRightButtonClickHandler = () => {
    document.querySelector('.slider__button-right').addEventListener('click', moveSliderRight)
}

moveSliderLeft = () => {
    let slider = document.querySelector('.slider');
    
    // Add new cards
    slider.style.transition = 'all 0.5s'
    slider.style.justifyContent = 'left';
    let slidesOld = [...slidesUnique]
    for (i = 0; i < slidesNumber(); i++) {
        slider.append(generateSlide(content[randomSlide()]));
    }
    slidesOld.forEach(e => slidesUnique.delete(e));
    slider.style.transform = `translateX(-${ slideOffset() }px)`;

    // Delete old cards after transition
    setTimeout(() => {
        slider.style.transition = 'none'
        slider.style.justifyContent = 'right';
        slider.style.transform = '';
        for (i = 0; i < slidesNumber(); i++) {
            slider.firstChild.remove();
        };
     },500);
}

moveSliderRight = () => {
    let slider = document.querySelector('.slider');
    
    // Add new cards
    slider.style.transition = 'all 0.5s'
    slider.style.justifyContent = 'right';
    let slidesOld = [...slidesUnique]
    for (i = 0; i < slidesNumber(); i++) {
        slider.prepend(generateSlide(content[randomSlide()]));
    }
    slidesOld.forEach(e => slidesUnique.delete(e));
    slider.style.transform = `translateX(${ slideOffset() }px)`;

    // Delete old cards after transition
    setTimeout(() => {
        slider.style.transition = 'none'
        slider.style.justifyContent = 'left';
        slider.style.transform = '';
        for (i = 0; i < slidesNumber(); i++) {
            slider.lastChild.remove();
        };
     },500);
}

// Popup window

const addSlideClickHandler = () => {
    document.querySelector('.slider').addEventListener('click', (e) => {
        if (e.target.closest('.slide')) {
            let clickedSliderId = e.target.closest('.slide').getAttribute('data-id');
            document.querySelector('.popup').innerHTML = ''
            document.querySelector('.popup').append(createPopup(clickedSliderId));
            document.querySelector('.popup').append(createPopupButton());
            document.querySelector('.overlay').classList.remove('hidden');
            popupButtonHover();
            disableScroll();
        }
    })
}

createPopup = (i) => {
    let popup = document.createElement('div');
    popup.className = 'popup__wrapper';
    let template = `<img class="popup__image"  src="${content[i].img}" alt="${content[i].name}">`;
    template += `<div class="popup__text">`;
    template += `<h3>${content[i].name}</h3>`;
    template += `<h4>${content[i].type} - ${content[i].breed}</h4>`;
    template += `<p>${content[i].description}</p>`;
    template += `<ul class="popup__list">`;
    template += `<li><b>Age:</b> ${content[i].age}</li>`;
    template += `<li><b>Inoculations:</b> ${content[i].inoculations.join(', ')}</li>`;
    template += `<li><b>Diseases:</b> ${content[i].diseases.join(', ')}</li>`;
    template += `<li><b>Parasites:</b> ${content[i].parasites.join(', ')}</li>`;
    template += `</ul></div>`;
    popup.innerHTML = template;
    return popup;
}

createPopupButton = () => {
    let button = document.createElement('div');
    button.className = 'popup__button';
    (window.location.pathname.includes('index')) ? 
        button.innerHTML = `<img src="assets/icons/close-x.svg" alt="Arrow right"></img>` : 
        button.innerHTML = `<img src="../../assets/icons/close-x.svg" alt="Arrow right"></img>` ; 
     return button;
}

popupButtonHover = () => {
    document.querySelector('.overlay').addEventListener('mouseover', () => {
        if (!document.querySelector('.popup__button')) return;
        document.querySelector('.popup__button').classList.add('hover');
    });
    document.querySelector('.overlay').addEventListener('mouseout', () => {
        if (!document.querySelector('.popup__button')) return;
        document.querySelector('.popup__button').classList.remove('hover');
    });
    document.querySelector('.popup').addEventListener('mouseover', (e) => {
        if (!document.querySelector('.popup__button')) return;
        document.querySelector('.popup__button').classList.remove('hover');
        e.stopPropagation()
    });
    document.querySelector('.popup').addEventListener('click', (e) => {
        if (!document.querySelector('.popup__button')) return;
        e.stopPropagation()
    });
}

popupButtonNoHoverWhenOverPopupWrapper = () => {
    document.querySelector('.popup').addEventListener('mouseover', () => {
      document.querySelector('.popup__button').classList.add('nohover');
    });
    document.querySelector('.popup').addEventListener('mouseout', () => {
        document.querySelector('.popup__button').classList.remove('nohover');
    });
};


// Pagination

createPages = () => {
    while (pages.length < petsNumber) {
    let j = Math.floor(Math.random() * 8);
    if (!slidesUnique8.has(j) && !slidesUnique6.has(j) && !slidesUnique3.has(j)) {
        pages.push(content[j]);
        slidesUnique8.add(j);
        slidesUnique6.add(j);
        slidesUnique3.add(j);
        if (slidesUnique8.size === 8) { slidesUnique8.clear() }
        if (slidesUnique6.size === 6) { slidesUnique6.clear() }
        if (slidesUnique3.size === 3) { slidesUnique3.clear() }
        };
    }
    console.log(pages);
}

pagesNumber = () => {
    if (window.innerWidth <= mobileWidth) {
        return 3 } 
    else if (window.innerWidth <= tabletWidth) {
        return 6 } 
    else { 
        return 8 }
            }

renderPagesSlider = () => {
    let slider = document.querySelector('.slider');
    slider.innerHTML = '';
    for (i = 0; i < pagesNumber(); i++) {
        slider.append(generateSlide(pages[i]));
    }
}

generatePageSlide = (content) => {
    let slide = document.createElement('div');
    slide.className = 'slide';
    let template = `<img src="../../${content.img}" alt="${content.name}">`;
    template += `<p class="card-title">${content.name}</p>`;
    template += `<button class="learn-more" type="button">Learn more</button>`;
    slide.innerHTML = template;
    slide.setAttribute('data-id', content.id);
    return slide;
}

addFirstPageButtonClickHandler = () => {
    document.querySelector('.button-first').addEventListener('click', movePagesFirst)
}

addPrevPageButtonClickHandler = () => {
    document.querySelector('.button-prev').addEventListener('click', movePagesPrev)
}

addNextPageButtonClickHandler = () => {
    document.querySelector('.button-next').addEventListener('click', movePagesNext)
}

addLastPageButtonClickHandler = () => {
    document.querySelector('.button-last').addEventListener('click', movePagesLast)
}

movePagesFirst = () => {
    let slider = document.querySelector('.slider');
    let currentPage = Number(document.querySelector('.button-number').innerHTML);
    let newPage = 1;

    // Add new cards
    slider.style.transition = 'all 0.5s'
    slider.style.alignContent = 'flex-end';
    for (i = 1; i <= pagesNumber(); i++) {
        slider.prepend(generateSlide(pages[newPage * pagesNumber() - i]));
    }
    slider.style.transform = `translateX(${ document.querySelector('.slider__wrapper').offsetWidth + 40 }px)`;

    // Delete old cards after transition
    setTimeout(() => {
        slider.style.transition = 'none'
        slider.style.alignContent = 'flex-start';
        slider.style.transform = '';
        for (i = 0; i < pagesNumber(); i++) {
            slider.lastChild.remove();
        };
     },500);

    // Change number in the center
    document.querySelector('.button-number').innerHTML = `${newPage}`;

    // Check other buttons
    disableEnableButtons(newPage);
}

movePagesPrev = () => {
    let slider = document.querySelector('.slider');
    let currentPage = Number(document.querySelector('.button-number').innerHTML);
    let newPage = currentPage - 1;

    // Add new cards
    slider.style.transition = 'all 0.5s'
    slider.style.alignContent = 'flex-end';
    for (i = 1; i <= pagesNumber(); i++) {
        slider.prepend(generateSlide(pages[newPage * pagesNumber() - i]));
    }
    slider.style.transform = `translateX(${ document.querySelector('.slider__wrapper').offsetWidth + 40 }px)`;

    // Delete old cards after transition
    setTimeout(() => {
        slider.style.transition = 'none'
        slider.style.alignContent = 'flex-start';
        slider.style.transform = '';
        for (i = 0; i < pagesNumber(); i++) {
            slider.lastChild.remove();
        };
     },500);

    // Change number in the center
    document.querySelector('.button-number').innerHTML = `${newPage}`;

    // Check other buttons
    disableEnableButtons(newPage);
}

movePagesNext = () => {
    let slider = document.querySelector('.slider');
    let currentPage = Number(document.querySelector('.button-number').innerHTML);
    let newPage = currentPage + 1;

    // Add new cards
    slider.style.transition = 'all 0.5s'
    slider.style.alignContent = 'flex-start';
    for (i = 0; i < pagesNumber(); i++) {
        slider.append(generateSlide(pages[currentPage * pagesNumber() + i]));
    }
    slider.style.transform = `translateX(-${ document.querySelector('.slider__wrapper').offsetWidth + 40 }px)`;

    // Delete old cards after transition
    setTimeout(() => {
        slider.style.transition = 'none'
        slider.style.alignContent = 'flex-end';
        slider.style.transform = '';
        for (i = 0; i < pagesNumber(); i++) {
            slider.firstChild.remove();
        };
     },600);

    // Change number in the center
    document.querySelector('.button-number').innerHTML = `${newPage}`;

    // Check other buttons
    disableEnableButtons(newPage);
}

movePagesLast = () => {
    let slider = document.querySelector('.slider');
    let currentPage = Number(document.querySelector('.button-number').innerHTML);
    let newPage = petsNumber / pagesNumber();

    // Add new cards
    slider.style.transition = 'all 0.5s'
    slider.style.alignContent = 'flex-start';
    for (i = 0; i < pagesNumber(); i++) {
        slider.append(generateSlide(pages[(newPage - 1) * pagesNumber() + i]));
    }
    slider.style.transform = `translateX(-${ document.querySelector('.slider__wrapper').offsetWidth + 40 }px)`;

    // Delete old cards after transition
    setTimeout(() => {
        slider.style.transition = 'none'
        slider.style.alignContent = 'flex-end';
        slider.style.transform = '';
        for (i = 0; i < pagesNumber(); i++) {
            slider.firstChild.remove();
        };
     },600);

    // Change number in the center
    document.querySelector('.button-number').innerHTML = `${newPage}`;

    // Check other buttons
    disableEnableButtons(newPage);
}

disableEnableButtons = (newPage) => {
    if (newPage === 1) {
        document.querySelector('.button-first').disabled = true;
        document.querySelector('.button-prev').disabled = true;
    }

    if (newPage > 1) {
        document.querySelector('.button-first').disabled = false;
        document.querySelector('.button-prev').disabled = false;
    }

    if (newPage < petsNumber / pagesNumber()) {
        document.querySelector('.button-next').disabled = false;
        document.querySelector('.button-last').disabled = false;
    }

    if (newPage === petsNumber / pagesNumber()) {
        document.querySelector('.button-next').disabled = true;
        document.querySelector('.button-last').disabled = true;
    }
}