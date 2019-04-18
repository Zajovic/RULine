// CHOOSING PLOT(POLUPROIZVOD PAGE) //

/*  Event Listener*/

window.addEventListener("load", selectPlot);
document.getElementById("list1").addEventListener("change", selectPlot);
document.getElementById("list2").addEventListener("change", selectPlot);

/*  Obican plot */
const antalijaDim = ["67-93/205", "97-102/215"];
const antalijaPr = ["3,300.00", "3,950.00"];

const antalijaFurnirDim = ["67-97/215"];
const antalijaFurnirPr = ["5,750.00"];

const sideDim = ["67-93/220"];
const sidePr = ["3,850.00"];

const aeihDim = ["67-93/215"];
const aeihPr = ["3,850.00"];

/*  Furnir plot */
const dimensionsHJMB = ["67/207", "77/207", "87/207", "97/207"];
const priceHJM3 = ["5,100.00", "5,400.00", "5,700.00", "6,000.00"];
const priceHJM4 = ["5,350.00", "5,750.00", "6.050.00", "6,350.00"];
const bukvaPrice3 = ["4,300.00", "4,600.00", "4,900.00", "5,200.00"];
const bukvaPrice4 = ["4,500.00", "4,800.00", "5,100.00", "5,400.00"];

const siroviMdfDim = ["67-93/207", "67-93/220"];
const priceMdf4 = ["3,800.00", "4,100.00"];
const priceMdf6 = ["4,300.00", "4,600.00"];

/*  Create img  */

function printImg1(imgSrc1, imgAlt1) {
    let img1 = document.getElementById("img1");
    img1.src = imgSrc1;
    img1.alt = imgAlt1;
}

function printImg2(imgSrc2, imgAlt2) {
    let img2 = document.getElementById("img2");
    img2.src = imgSrc2;
    img2.alt = imgAlt2;
}

/*  Create plot */

function displayPlot(dimensions, prices, dimensionDiv, priceDiv) {

    dimensionDiv.innerHTML = "";
    let headerDimensionDiv = document.createElement("div");
    headerDimensionDiv.innerHTML = "Dimenzije:";
    dimensionDiv.appendChild(headerDimensionDiv);

    priceDiv.innerHTML = "";
    let headerPriceDiv = document.createElement("div");
    headerPriceDiv.innerHTML = "Cena:";
    priceDiv.appendChild(headerPriceDiv);


    for (let i = 0; i < dimensions.length; i++) {
        let paragraphDim = document.createElement("p");
        paragraphDim.innerHTML += dimensions[i];
        dimensionDiv.appendChild(paragraphDim);
    }
    for (let i = 0; i < prices.length; i++) {
        let paragraphPr = document.createElement("p");
        paragraphPr.innerHTML += prices[i];
        priceDiv.appendChild(paragraphPr);
    }

}

function selectPlot() {

    let list1 = document.getElementById("list1");
    let dimensionDiv1 = document.getElementById("dimensions1");
    let priceDiv1 = document.getElementById("price1");

    switch (list1.options[list1.selectedIndex].value) {
        case "antalija":
            displayPlot(antalijaDim, antalijaPr, dimensionDiv1, priceDiv1);
            printImg1("img/ANATOLIJA.jpg", "Antalija");
            break;
        case "side":
            displayPlot(sideDim, sidePr, dimensionDiv1, priceDiv1);
            printImg1("img/SIDE.jpg", "Side");
            break;
        case "assos":
            displayPlot(aeihDim, aeihPr, dimensionDiv1, priceDiv1);
            printImg1("img/ASSOS.jpg", "Assos");
            break;
        case "efes":
            displayPlot(aeihDim, aeihPr, dimensionDiv1, priceDiv1);
            printImg1("img/EFES.jpg", "Efes");
            break;
        case "imperial":
            displayPlot(aeihDim, aeihPr, dimensionDiv1, priceDiv1);
            printImg1("img/IMPERIAL.jpg", "Imperial");
            break;
        case "htit":
            displayPlot(aeihDim, aeihPr, dimensionDiv1, priceDiv1);
            printImg1("img/HTIT.jpg", "Htit");
            break;
        case "anatalija furnir hrast":
            displayPlot(antalijaFurnirDim, antalijaFurnirPr, dimensionDiv1, priceDiv1);
            printImg1("img/ANATOLIJA.jpg", "Antalija Furnir Hrast");
    }

    let list2 = document.getElementById("list2");
    let dimensionDiv2 = document.getElementById("dimensions2");
    let priceDiv2 = document.getElementById("price2");


    switch (list2.options[list2.selectedIndex].value) {
        case "hrast":
            displayPlot(dimensionsHJMB, priceHJM3, dimensionDiv2, priceDiv2);
            printImg2("img/door.png", "Hrast");
            break;
        case "jasen":
            displayPlot(dimensionsHJMB, priceHJM3, dimensionDiv2, priceDiv2);
            printImg2("img/door.png", "Jasen");
            break;
        case "mahagoni":
            displayPlot(dimensionsHJMB, priceHJM3, dimensionDiv2, priceDiv2);
            printImg2("img/door.png", "Mahagoni");
            break;
        case "bukva":
            displayPlot(dimensionsHJMB, bukvaPrice3, dimensionDiv2, priceDiv2);
            printImg2("img/door.png", "Bukva");
            break;
        case "sirovi mdf":
            displayPlot(siroviMdfDim, priceMdf4, dimensionDiv2, priceDiv2);
            printImg2("img/door.png", "Sirovi");
            break;
    }
    plotThickness();
    document.getElementsByClassName("thickness")[2].classList.remove("marked");
}


/*  Chosing thickness plot function  */


function plotThickness() {
    let list2 = document.getElementById("list2");

    document.getElementsByClassName("thickness")[1].classList.add("marked");
    if (list2.options[list2.selectedIndex].value !== "sirovi mdf") {

        document.getElementsByClassName("thickness")[1].innerHTML = "3 mm";
        document.getElementsByClassName("thickness")[2].innerHTML = "4 mm";
    } else {
        document.getElementsByClassName("thickness")[1].innerHTML = "4 mm";
        document.getElementsByClassName("thickness")[2].innerHTML = "6 mm";
    }
}


document.getElementsByClassName("thickness")[1].onclick = function() {

    document.getElementsByClassName("thickness")[2].classList.remove("marked");
    this.classList.add("marked");
    let dimensionDiv2 = document.getElementById("dimensions2");
    let priceDiv2 = document.getElementById("price2");

    if (list2.options[list2.selectedIndex].value == "bukva") {
        displayPlot(dimensionsHJMB, bukvaPrice3, dimensionDiv2, priceDiv2);
    } else if (list2.options[list2.selectedIndex].value == "sirovi mdf") {
        displayPlot(siroviMdfDim, priceMdf4, dimensionDiv2, priceDiv2);
    } else if (list2.options[list2.selectedIndex].value == "hrast" || "jasen" || "mahagoni") {
        displayPlot(dimensionsHJMB, priceHJM3, dimensionDiv2, priceDiv2);
    }
}

document.getElementsByClassName("thickness")[2].onclick = function() {

    document.getElementsByClassName("thickness")[1].classList.remove("marked");
    this.classList.add("marked");
    let dimensionDiv2 = document.getElementById("dimensions2");
    let priceDiv2 = document.getElementById("price2");

    if (list2.options[list2.selectedIndex].value == "bukva") {
        displayPlot(dimensionsHJMB, bukvaPrice4, dimensionDiv2, priceDiv2);
    } else if (list2.options[list2.selectedIndex].value == "sirovi mdf") {
        displayPlot(siroviMdfDim, priceMdf6, dimensionDiv2, priceDiv2);
    } else if (list2.options[list2.selectedIndex].value == "hrast" || "jasen" || "mahagoni") {
        displayPlot(dimensionsHJMB, priceHJM4, dimensionDiv2, priceDiv2);
    }
}

// ZOOM(MODAL) IMAGE //

function createModal() {
    let div = document.createElement("div");
    div.classList.add("zoom-container");

    let zoomImg = document.createElement("img");
    zoomImg.setAttribute("src", "");
    zoomImg.classList.add("zoomImg");

    let span = document.createElement("span");
    span.innerHTML = "&times;";
    span.classList.add("closeButton");

    let caption = document.createElement("div");
    caption.id = "caption";

    div.appendChild(caption)
    div.appendChild(span);

    displayImg(div, zoomImg, caption, span);
    closeModal(span);
}

createModal();

function displayImg(div, zoomImg, caption) {
    let img = document.getElementsByClassName("get-img");
    for (let i = 0; i < img.length; i++) {
        img[i].onclick = function() {
            zoomImg.src = this.src;
            div.appendChild(zoomImg);
            caption.innerHTML = this.alt;
            document.body.appendChild(div);
        }
    }
}

function closeModal(span) {
    span.onclick = function() {
        this.parentElement.remove()
    }
}