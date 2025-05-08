// Please see documentation at https://learn.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.

let currentIndex = 0;
const images = document.querySelectorAll('.gallery img');
const totalImages = images.length;

// Open the lightbox
function openLightbox(event) {
    if (event.target.tagName === 'IMG') {
        const clickedIndex = Array.from(images).indexOf(event.target);
        currentIndex = clickedIndex;
        updateLightboxImage();
        document.getElementById('lightbox').style.display = 'initial';
    }
}

// Close the lightbox
function closeLightbox() {
    document.getElementById('lightbox').style.display = 'none';
}

// Change the lightbox image based on direction (1 for next, -1 for prev)
function changeImage(direction) {
    currentIndex += direction;
    if (currentIndex >= totalImages) {
        currentIndex = 0;
    } else if (currentIndex < 0) {
        currentIndex = totalImages - 1;
    }
    updateLightboxImage();
}

// Update the lightbox image and thumbnails
function updateLightboxImage() {
    const lightboxImg = document.getElementById('lightbox-img');
    const thumbnailContainer = document.getElementById('thumbnail-container');

    // Update the main lightbox image
    lightboxImg.src = images[currentIndex].src;

    // Clear existing thumbnails
    thumbnailContainer.innerHTML = '';

    // Add new thumbnails
    images.forEach((image, index) => {
        const thumbnail = document.createElement('img');
        thumbnail.src = image.src;
        thumbnail.alt = `Thumbnail ${index + 1}`;
        thumbnail.classList.add('thumbnail');
        thumbnail.addEventListener('click', () => updateMainImage(index));
        thumbnailContainer.appendChild(thumbnail);
    });

    // Highlight the current thumbnail
    const thumbnails = document.querySelectorAll('.thumbnail');
    thumbnails[currentIndex].classList.add('active-thumbnail');
}

// Update the main lightbox image when a thumbnail is clicked
function updateMainImage(index) {
    currentIndex = index;
    updateLightboxImage();
}

// Add initial thumbnails
updateLightboxImage();


// To add keyboard navigation (left/right arrow keys)
document.addEventListener('keydown', function (e) {
    if (document.getElementById('lightbox').style.display === 'flex') {
        if (e.key === 'ArrowLeft') {
            changeImage(-1);
        } else if (e.key === 'ArrowRight') {
            changeImage(1);
        }
    }
});

// provjeri jezik na loadu
function provjeriJezik()
{
    const userPreferredLanguage = localStorage.getItem('language');
    if (userPreferredLanguage.toString() === "hr") {
        promjeniJezikHR();
    }
    else if (userPreferredLanguage.toString() === "en") {
        promjeniJezikEN();
    }
    else { console.log("Nema odabranog jezika, odabirem engleski"); promjeniJezikEN(); }
}

function promjeniJezikEN()
{
    localStorage.removeItem('language', "hr");
    localStorage.setItem('language', "en");

    let trStranica = document.URL;
    let trenutnaStranica = trStranica.toString();
    let nas = $(document).find("title").text();

    const elementsList = ["strHome", "strPhotography", "strAbout", "strPricing", "strContact"];
    const elementsArray = ["Home", "Photo", "About Us", "Price", "Contact"];

    for (var i = 0; i < elementsList.length; i++) {
        var newName = elementsArray[i].toString();
        var oldName = elementsList[i].toString();
        document.getElementById(oldName).innerHTML = newName;
    }

    if (nas.includes("Home")) {
        console.log("ovo je index stranica");
        const IndexelementsList = ["i1", "i2", "i3", "i4", "i5", "i6", "i7", "i8", "i9", "j1", "j2", "j3", "j4", "j5", "j6", "j7", "j8", "j9", "indexwedphobtn", "indexfamphobtn", "indexprophobtn", "indexstuvidbtn", "indexwedvidbtn", "indexpromophotobtn", "indexreelsbtn", "indexpricebtn", "indexcontactbtn"];
        const IndexelementsArray = ["Wedding Photos", "Family Photos", "Promotional Photos", "Studio Photos", "Wedding Videos", "Promotional Videos", "Video Reels", "Prices", "Contact", "Wedding photo gallery", "Family photo gallery", "Promotional photo gallery", "Studio photo gallery", "Wedding video gallery", "Promotional video gallery", "Video reels gallery", "Our prices for the current year", "Any questions? Feel free to reach out", "Open Gallery", "Open Gallery", "Open Gallery", "Open Gallery", "Open Gallery", "Open Gallery", "Open Gallery", "Check Prices", "Contact"];
        for (var i = 0; i < IndexelementsList.length; i++) {
            var newName = IndexelementsArray[i].toString();
            var oldName = IndexelementsList[i].toString();
            document.getElementById(oldName).innerHTML = newName;
        }
    }
    else if (trenutnaStranica.includes("Photography")) {
        console.log("ovo je foto stranica");
        const PhotographyelementsArray = ["weddingFoto1", "studioFoto1", "familyFoto1", "promoFoto1"];
        const PhotographyelementsList = ["Wedding Photo", "Studio Photo", "Family Photo", "Promo Photo"];
        for (var i = 0; i < PhotographyelementsList.length; i++) {
            var newName = PhotographyelementsArray[i].toString();
            var oldName = PhotographyelementsList[i].toString();
            document.getElementById(oldName).innerHTML = newName;
        }
    }
    else if (trenutnaStranica.includes("WeddingPhoto")) {
        console.log("ovo je wedding foto stranica");
        document.getElementById("weddingphotogallery").innerHTML = "Wedding Photo Gallery";
    }
    else if (trenutnaStranica.includes("Studio")) {
        console.log("ovo je studio foto stranica");
        document.getElementById("studiophotogallery").innerHTML = "Studio Photo Gallery";
    }
    else if (trenutnaStranica.includes("PromoPhoto")) {
        console.log("ovo je promo foto stranica");
        document.getElementById("promofotogallery").innerHTML = "Promo Photo Gallery";
    }
    else if (trenutnaStranica.includes("FamilyPhoto")) {
        console.log("ovo je family foto stranica");
        document.getElementById("familyfotogallery").innerHTML = "Family Photo Gallery";
    }
    else if (trenutnaStranica.includes("Film")) {
        console.log("ovo je film stranica");
        document.getElementById("weddingvideo1").innerHTML = "Wedding Video Gallery";
        document.getElementById("promovideo1").innerHTML = "Promo Video Gallery";
    }
    else if (trenutnaStranica.includes("PromoVideo")) {
        console.log("ovo je promo video stranica");
        document.getElementById("promovideo1").innerHTML = "Promo Video Gallery";
    }
    else if (trenutnaStranica.includes("WeddingVideo")) {
        console.log("ovo je wedding video stranica");
        document.getElementById("weddingvideo1").innerHTML = "Wedding Video Gallery";
    }
    else if (trenutnaStranica.includes("Reels")) {
        console.log("ovo je reels stranica");
    }
    else if (trenutnaStranica.includes("About")) {
        console.log("ovo je about stranica");
        var au = "About us";
        var t1 = "Videographer, Photographer, Owner";
        var t2 = "Photographer, Second Videographer When Needed, Graphical Designer, Best Man";
        var p1 = "Mario got married recently. He's a proud father of a small son, whose presence means no more video edits during the night. He enjoys drinking beer, it doesn't have to be cold, and ocassional BBQ with his closest friends. While hiking is his passion, he rarely has time for it since he's constantly busy editing videos.";
        var p2 = "Professionaly, he works as a videographer and video editor, starting at the age of 17, with over 300 weddings passing through his hands. His music taste gravitates towards rock, while his favourite foods are various delicacies made out of healthy ingredients his wife prepares, altough he had never heard about some of those ingredients.";
        var p3 = "Mario is a perfectionist when it comes to work; every detail has to be perfectly set and carefully studied. Within the team, he's known for his relentless search for perfection in every photo and every frame, which is sometimes annoying to the other member of the team. He loves his job as it allows him to create unforgetable moments and memories for others, which gives him a great pleasure and fullfilment. His biggest fear is a bad colour grading on the video.";
        var p4 = "When he's not preoccupied with work, he relaxes in a company of a good book or watches a movie (that means he sleeps on a couch). As a nature lover, he often indulges in picnics on a mountain or walking through forest with his wife and son.";
        var p5 = "Branko is happilly married and a father to a 3 year old boy. During his free time, he enjoys the most playing with his son and spending time with his family.";
        var p6 = "Unlike Mario, beer has to be really cold. Likes to try new recipes, especially different kinds of meats, which you can tell by his figure.";
        var p7 = "He's been a photographer for over 15 years, starting as an amateur, but over the last years works professionally. Within the team he's in charge of photography and photo editing, often repeating editing after perfectionist complaints from his best man Mario. He considers himself as a more humourous part of the team and Mario agrees with that constatation.";
        var p8 = "He loves his job as it allows him to express his creativity and capture special moments, following the global industry trends. His optimistic and cheerfull approach makes him the favourite member of the team, always ready for laughs and fun.";
        const AboutelementsList = ["aboutus", "moskrititule", "aboutus1", "aboutus2", "aboutus3", "aboutus4", "brankotitule", "aboutus5", "aboutus6", "aboutus7", "aboutus8"];
        const AboutelementsArray = [au.toString(), t1.toString(), p1.toString(), p2.toString(), p3.toString(), p4.toString(), t2.toString(), p5.toString(), p6.toString(), p7.toString(), p8.toString()];
        for (var i = 0; i < AboutelementsList.length; i++) {
            var newName = AboutelementsArray[i].toString();
            var oldName = AboutelementsList[i].toString();
            document.getElementById(oldName).innerHTML = newName;
        }
    }
    else if (trenutnaStranica.includes("Price")) {
        console.log("ovo je cjenik stranica");
        var prices = "Prices 2025./2026.";
        var c1 = "Photographing and recording on locations according to your wishes";
        var c2 = "All photos come in full format on USB media";
        var c3 = "Arrival of 1 photographer and 1 videographer";
        var c4 = "Video length of your choice (Max 90 min)";
        var c5 = "Video 'Best Moments'";
        var c6 = "Material delivery on a personalised USB";
        var c7 = "Aerial drone footage";
        var c8 = "Photo book 30*30 in a box";
        var c9 = "Photo session separately on another day";
        var c10 = "Online gallery available for 6 months";
        document.getElementById("enq").innerHTML = "Send Inquiry";
        const AboutelementsList = ["prices", "c1", "c2", "c3", "c4", "c5", "c6", "c7", "c8", "c9", "c10"];
        const AboutelementsArray = [prices.toString(), c1.toString(), c2.toString(), c3.toString(), c4.toString(), c5.toString(), c6.toString(), c7.toString(), c8.toString(), c9.toString(), c10.toString()];
        for (var i = 0; i < AboutelementsList.length; i++) {
            var newName = AboutelementsArray[i].toString();
            var oldName = AboutelementsList[i].toString();
            document.getElementById(oldName).innerHTML = newName;
        }
        
    }
    else if (trenutnaStranica.includes("Contact")) {
        console.log("ovo je kontakt stranica");
        document.getElementById("imePrezime").placeholder = "Your full name";
        document.getElementById("email").placeholder = "Your email address";
        document.getElementById("telefon").placeholder = "Your phone number";
        document.getElementById("poruka").placeholder = "Your question";
        document.getElementById("submit").value = "Send";
        document.getElementById("contactform").innerHTML = "Contact Form";
        document.getElementById("mostelefon").innerHTML = "Phone: +385 91 225 0443";
        document.getElementById("dostupni").innerHTML = "Available worldwide.";
    }
    else {
        console.log($(document).find("title").text());
    }
}


// odredi jezik, spremi postavke u local st, prevedi sve stranice
function promjeniJezikHR()
{
    var x = decodeURIComponent(document.cookie);

    localStorage.removeItem('language', "en");
    localStorage.setItem('language', "hr");

    let trStranica = document.URL;
    let trenutnaStranica = trStranica.toString();
    let nas = $(document).find("title").text();

    const elementsList = ["strHome", "strPhotography", "strAbout", "strPricing", "strContact"];
    const elementsArray = ["Naslovna", "Fotografije", "O nama", "Cijene", "Kontakt"];
    
        for (var i = 0; i < elementsList.length; i++)
        {
            var newName = elementsArray[i].toString();
            var oldName = elementsList[i].toString();
            document.getElementById(oldName).innerHTML = newName;
        }

    if (nas.includes("Home")) {
        console.log("ovo je index stranica");
        const IndexelementsList = ["i1", "i2", "i3", "i4", "i5", "i6", "i7", "i8", "i9", "j1", "j2", "j3", "j4", "j5", "j6", "j7", "j8", "j9", "indexwedphobtn", "indexfamphobtn", "indexprophobtn", "indexstuvidbtn", "indexwedvidbtn", "indexpromophotobtn", "indexreelsbtn", "indexpricebtn", "indexcontactbtn"];
        const IndexelementsArray = ["Fotografije vjenčanja", "Obiteljske fotografije", "Promo fotografije", "Studijske fotografije", "Video Vjenčanja", "Promo Video", "Video Reels", "Cijene", "Kontakt", "Foto galerija vjenčanja", "Foto galerija obiteljskih slika", "Promo foto galerija", "Studio foto galerija", "Video galerija vjenčanja", "Promo video galerija", "Video reels galerija", "Naše cijene za trenutnu godinu", "Imate pitanja? Slobodno nas kontaktirajte", "Otvori Galeriju", "Otvori Galeriju", "Otvori Galeriju", "Otvori Galeriju", "Otvori Galeriju", "Otvori Galeriju", "Otvori Galeriju", "Provjeri Cijene", "Kontakt"];
        for (var i = 0; i < IndexelementsList.length; i++) {
            var newName = IndexelementsArray[i].toString();
            var oldName = IndexelementsList[i].toString();
            document.getElementById(oldName).innerHTML = newName;
        }
    }
    else if (trenutnaStranica.includes("Photography")) {
        console.log("ovo je foto stranica");
        const PhotographyelementsList = ["weddingFoto1", "studioFoto1", "familyFoto1", "promoFoto1"];
        const PhotographyelementsArray = ["Fotografije vjenčanja", "Studijske fotografije", "Obiteljske fotografije", "Promo fotografije"];
        for (var i = 0; i < PhotographyelementsList.length; i++) {
            var newName = PhotographyelementsArray[i].toString();
            var oldName = PhotographyelementsList[i].toString();
            document.getElementById(oldName).innerHTML = newName;
        }
    }
    else if (trenutnaStranica.includes("WeddingPhoto")) {
        console.log("ovo je wedding foto stranica");
        document.getElementById("weddingphotogallery").innerHTML = "Foto Galerija Vjenčanja";
    }
    else if (trenutnaStranica.includes("Studio")) {
        console.log("ovo je studio foto stranica");
        document.getElementById("studiophotogallery").innerHTML = "Studijska Foto Galerija";
    }
    else if (trenutnaStranica.includes("PromoPhoto")) {
        console.log("ovo je promo foto stranica");
        document.getElementById("promofotogallery").innerHTML = "Promo Foto Galerija";
    }
    else if (trenutnaStranica.includes("FamilyPhoto")) {
        console.log("ovo je family foto stranica");
        document.getElementById("familyfotogallery").innerHTML = "Obiteljska Foto Galerija";
    }
    else if (trenutnaStranica.includes("Film")) {
        console.log("ovo je film stranica");
        document.getElementById("weddingvideo1").innerHTML = "Video Galerija Vjenčanja";
        document.getElementById("promovideo1").innerHTML = "Promo Video Galerija";
    }
    else if (trenutnaStranica.includes("PromoVideo")) {
        console.log("ovo je promo video stranica");
        document.getElementById("promovideo1").innerHTML = "Promo Video Galerija";
    }
    else if (trenutnaStranica.includes("WeddingVideo")) {
        console.log("ovo je wedding video stranica");
        document.getElementById("weddingvideo1").innerHTML = "Video Galerija Vjenčanja";
    }
    else if (trenutnaStranica.includes("Reels")) {
        console.log("ovo je reels stranica");
    }
    else if (trenutnaStranica.includes("About")) {
        console.log("ovo je about stranica");
        var au = "O nama";
        var t1 = "Snimatelj, Fotograf, Gazda";
        var t2 = "Fotograf, Po potrebi drugi snimatelj, Grafički dizajner, Kum";
        var p1 = " Mario je nedavno uplovio u bračne vode. Ponosni je otac maloga sina, čije prisustvo znači da više nema noćnog editiranja videa.Uživa u ispijanju piva, ne mora biti hladno, i povremenom roštiljanju s najbližim prijateljima.Iako je planinarenje njegova strast, rijetko ima vremena za to jer je stalno zauzet uređivanjem videa.";
        var p2 = "Profesionalno, radi kao snimatelj i montažer videa još od 17. godine, a iza sebe ima više od 300 vjenčanja. Glazbeni ukus mu se kreće prema rocku, dok su mu omiljena hrana razne slastice od zdravih namirnica koje supruga priprema, iako za neke od sastojaka nikad nije čuo.";
        var p3 = "Mario je perfekcionist kada je posao u pitanju; svaki detalj mora biti savršeno postavljen i pomno proučen. U timu je poznat po svojoj neumoljivoj potrazi za savršenstvom u svakoj fotografiji i svakom kadru, što ponekad može ići na živce drugom članu tima. Voli svoj posao jer mu omogućuje da stvara nezaboravne trenutke i uspomene za druge, što mu pruža ogromno zadovoljstvo i ispunjenje. Njegova najveća fobija je loš color grade na videu.";
        var p4 = "Kad nije zaokupljen poslom, opušta se uz dobru knjigu ili gledanje filmova (čitaj spava na kauču). Kao ljubitelj prirode, često se sa suprugom i sinom upušta u kraće izlete u planine ili šetnje po šumi.";
        var p5 = "Branko je sretno oženjen i otac trogodišnjeg dječaka. U slobodno vrijeme najviše uživa u igri sa sinom i provođenju vremena s obitelji.";
        var p6 = "Za razliku od Marija, pivo mora biti jako hladno. Voli isprobavati nove recepte, posebno različite vrste mesa, što se i vidi po njegovoj figuri.";
        var p7 = "Fotografijom se bavi više od 15 godina, u početku amaterski, a posljednjih godina profesionalno. U timu je zadužen za fotografiranje i editiranje fotografija, često ponavljajući editiranje nakon perfekcionističkih prigovora kuma Marija. Sam sebe smatra humorističnijim dijelom tima, Mario se slaže s tim.";
        var p8 = "Svoj posao voli jer mu omogućuje da izrazi svoju kreativnost i uhvati posebne trenutke, prateći trendove iz svijeta industrije. Njegov optimističan i vedar pristup čini ga omiljenim članom tima, uvijek spremnim za smijeh i zabavu.";
        const AboutelementsList = ["aboutus", "moskrititule", "aboutus1", "aboutus2", "aboutus3", "aboutus4", "brankotitule", "aboutus5", "aboutus6", "aboutus7", "aboutus8"];
        const AboutelementsArray = [au.toString(), t1.toString(), p1.toString(), p2.toString(), p3.toString(), p4.toString(), t2.toString(), p5.toString(), p6.toString(), p7.toString(), p8.toString()];
        for (var i = 0; i < AboutelementsList.length; i++) {
            var newName = AboutelementsArray[i].toString();
            var oldName = AboutelementsList[i].toString();
            document.getElementById(oldName).innerHTML = newName;
        }
    }
    else if (trenutnaStranica.includes("Price")) {
        console.log("ovo je cjenik stranica");
        var prices = "Cjenik 2025./2026.";
        var c1 = "Fotografiranje i snimanje na lokacijama po želji";
        var c2 = "Sve fotografije u punom formatu na USB mediju";
        var c3 = "Dolazak 1 fotografa i 1 snimatelja";
        var c4 = "Video u trajanju po Vašoj želji (Max 90 min)";
        var c5 = "Video 'Best Moments'";
        var c6 = "Isporuka materijala na personaliziranom USB-u";
        var c7 = "Kadrovi iz zraka dronom";
        var c8 = "Foto album 30*30 u kutiji";
        var c9 = "Photo session posebno neki drugi dan";
        var c10 = "Online galerija dostupna 6 mjeseci";
        document.getElementById("enq").innerHTML = "Pošalji Upit";
        const AboutelementsList = ["prices", "c1", "c2", "c3", "c4", "c5", "c6", "c7", "c8", "c9", "c10"];
        const AboutelementsArray = [prices.toString(), c1.toString(), c2.toString(), c3.toString(), c4.toString(), c5.toString(), c6.toString(), c7.toString(), c8.toString(), c9.toString(), c10.toString()];
        for (var i = 0; i < AboutelementsList.length; i++) {
            var newName = AboutelementsArray[i].toString();
            var oldName = AboutelementsList[i].toString();
            document.getElementById(oldName).innerHTML = newName;
        }
    }
    else if (trenutnaStranica.includes("Contact")) {
        console.log("ovo je kontakt stranica");
        document.getElementById("imePrezime").placeholder = "Vaše puno ime";
        document.getElementById("email").placeholder = "Vaša email adresa";
        document.getElementById("telefon").placeholder = "Vaš broj telefona";
        document.getElementById("poruka").placeholder = "Vaš upit";
        document.getElementById("submit").value = "Pošalji";
        document.getElementById("contactform").innerHTML = "Formular za kontakt";
        document.getElementById("mostelefon").innerHTML = "Telefon: +385 91 225 0443";
        document.getElementById("dostupni").innerHTML = "Dostupni po cijelom planetu.";
    }
    else {
        console.log($(document).find("title").text());
    }
  
}

/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
function myDDFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown menu if the user clicks outside of it
window.onclick = function (event) {
    if (!event.target.matches('.dropbtn')) {
        var dropdowns = document.getElementsByClassName("dropdown-content");
        var i;
        for (i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
}
function upit()
{
    location.replace("Contact")
}
function naVjencanjaFoto() {
    location.replace("WeddingPhoto")
}
function naStudioFoto() {
    location.replace("StudioPhoto")
}
function naFamilyFoto() {
    location.replace("FamilyPhoto")
}
function naPromoFoto() {
    location.replace("PromoPhoto")
}
function naVjencanjaVideo() {
    location.replace("WeddingVideo")
}
function naPromoVideo() {
    location.replace("PromoVideo")
}
function naReelsVideo() {
    location.replace("Reels")
}
function naPrices() {
    location.replace("PriceList")
}




