
/*  Event Listener  */

window.addEventListener("load", selectPlot);
document.getElementById("list3").addEventListener("change", selectPlot);

/*  Proizvod(vrata)- dimenzije i cene */

const dim1 = ["70 x 220 x 15 ", "80 x 220 x 15", "90 x 220 x 15", "100 x 220 x15", "70 x 220 x 25", "80 x 220 x 25", "90 x 220 x 25", "100 x 220 x25", "70 x 220 x 35", "80 x 220 x 35", "90 x 220 x 35", "100 x 220 x35"];
const dim2 = ["70 x 205 x 15 ", "80 x 205 x 15", "90 x 205 x 15", "100 x 205 x15", "70 x 205 x 25", "80 x 205 x 25", "90 x 205 x 25", "100 x 205 x25", "70 x 205 x 35", "80 x 205 x 35", "90 x 205 x 35", "100 x 205 x35"];

const price1 = ["22500", "23300", "24200", "25000", "28100", "29300", "30600", "31800", "34200", "35400", "36700", "38000"];
const price2 = ["21000", "21800", "22700", "23900", "26200", "27200", "28300", "29300", "32000", "33100", "34400", "35600"];
const price3 = ["21500", "22400", "23200", "24400", "26700", "27800", "28800", "29800", "32600", "33600", "34900", "36200"];


/*  Create img  */

function printImg3(imgSrc, imgAlt) {
    let img = document.getElementById("img");
    img.src = imgSrc;
    img.alt = imgAlt;
}

/*  Create plot  */

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
    let list3 = document.getElementById("list3");
    let dimensionDiv3 = document.getElementById("dimensions3");
    let priceDiv3 = document.getElementById("price3");


    switch (list3.options[list3.selectedIndex].value) {
        case "Antalija-RU301":
            displayPlot(dim2, price2, dimensionDiv3, priceDiv3);
            printImg3("img/ANATOLIJA.jpg", "Antalija-RU301");
            break;
        case "Antalija-RU301D":
            displayPlot(dim1, price2, dimensionDiv3, priceDiv3);
            printImg3("img/ANATOLIJA.jpg", "Antalija-RU301D");
            break;
        case "Aside-RU302":
            displayPlot(dim1, price1, dimensionDiv3, priceDiv3);
            printImg3("img/SIDE.jpg", "Aside-RU302");
            break;
        case "Assos-RU303":
            displayPlot(dim2, price3, dimensionDiv3, priceDiv3);
            printImg3("img/ASSOS.jpg", "Assos-RU303");
            break;
        case "Efes-RU304":
            displayPlot(dim2, price3, dimensionDiv3, priceDiv3);
            printImg3("img/EFES.jpg", "Efes-RU304");
            break;
        case "Imperial-RU305":
            displayPlot(dim2, price3, dimensionDiv3, priceDiv3);
            printImg3("img/IMPERIAL.jpg", "Imperial-RU305");
            break;
        case "Htit-RU306":
            displayPlot(dim2, price3, dimensionDiv3, priceDiv3);
            printImg3("img/HTIT.jpg", "Htit-RU306");
            break;
        case "Olympus-RU307":
            displayPlot(dim2, price3, dimensionDiv3, priceDiv3);
            printImg3("img/OLYMPUS.jpg", "Olympus-RU307");
            break;  
        case "Perge-RU308":
            displayPlot(dim2, price3, dimensionDiv3, priceDiv3);
            printImg3("img/PERGE.jpg", "Perge-RU308");
            break;
        case "Somela-RU309":
            displayPlot(dim2, price3, dimensionDiv3, priceDiv3);
            printImg3("img/SOMELA.jpg", "Somela-RU309");
            break;
        case "Truva-RU310":
            displayPlot(dim2, price3, dimensionDiv3, priceDiv3);
            printImg3("img/TRUVA.jpg", "Truva-RU310");
            break;   
    }
}

/*  Create modal(zoom img)   */


function createModal() {
    let div = document.createElement("div");
    div.classList.add("zoom-container");

    let span = document.createElement("span");
    span.innerHTML = "&times;";
    span.classList.add("closeButton");
    div.appendChild(span);

    let zoomImg = document.createElement("img");
    zoomImg.setAttribute("src", "");
    zoomImg.classList.add("zoomImg");

    let caption = document.createElement("div");
    caption.id = "caption";
    div.appendChild(caption)

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