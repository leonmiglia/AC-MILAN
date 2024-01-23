const dropdownMenu = document.getElementById('dropdownMenu');

//disappearence
const disappearMenu = () => {
    if(dropdownMenu.style.display === "block") {
        dropdownMenu.style.display="none";
    }
}
dropdownMenu.addEventListener("mouseleave",disappearMenu);

// function to make disappear others sections
const allSections = dropdownMenu.children;
function hideAllSectionsExcept(selectedSection) {
    for (let section of allSections) {
        if (section !== selectedSection) {
            section.style.display = "none";
        }
    }
}

//NEWS
const forNews = document.getElementById('fornews');
const news = document.getElementById('news');

news.addEventListener("mouseover", function () {
    dropdownMenu.style.display="block";
    forNews.style.display="flex";
    hideAllSectionsExcept(forNews);
});

//BIGLIETTERIA
const forBiglietteria = document.getElementById('forbiglietteria');
const biglietteria = document.getElementById('biglietteria');

biglietteria.addEventListener("mouseover", function () {
    dropdownMenu.style.display="block";
    forBiglietteria.style.display="flex";
    hideAllSectionsExcept(forBiglietteria);
});

//SQUADRE
const forSquadre = document.getElementById('forsquadre');
const squadre = document.getElementById('squadre');

squadre.addEventListener("mouseover", function () {
    dropdownMenu.style.display="block";
    forSquadre.style.display="flex";
    hideAllSectionsExcept(forSquadre);
});

//STAGIONE
const forStagione = document.getElementById('forstagione');
const stagione = document.getElementById('stagione');

stagione.addEventListener("mouseover", function () {
    dropdownMenu.style.display="block";
    forStagione.style.display="flex";
    hideAllSectionsExcept(forStagione);
});

//CLUB
const forClub = document.getElementById('forclub');
const club = document.getElementById('club');

club.addEventListener("mouseover", function () {
    dropdownMenu.style.display="block";
    forClub.style.display="flex";
    hideAllSectionsExcept(forClub);
});

//SHOP
const forShop = document.getElementById('forshop');
const shop = document.getElementById('shop');

shop.addEventListener("mouseover", function () {
    dropdownMenu.style.display="block";
    forShop.style.display="flex";
    hideAllSectionsExcept(forShop);
});

//FAN
const forFan = document.getElementById('forfan');
const fan = document.getElementById('fan');

fan.addEventListener("mouseover", function () {
    dropdownMenu.style.display="block";
    forFan.style.display="flex";
    hideAllSectionsExcept(forFan);
});

//ACADEMY
const forAcademy = document.getElementById('foracademy');
const academy = document.getElementById('academy');

academy.addEventListener("mouseover", function () {
    dropdownMenu.style.display="block";
    forAcademy.style.display="flex";
    hideAllSectionsExcept(forAcademy);
});
