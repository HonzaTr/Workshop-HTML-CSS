const package = document.querySelector(".custom__select__choose");



package.addEventListener("click", function(){

    showSelect();

});

const productRow = document.querySelector(".product__row");
const productQuantity = document.querySelector("#quantity");
const productCalc = document.querySelector(".product__row").querySelector(".second__column");
const productSum = document.querySelector(".product__row").querySelector(".third__column");
const productPrice = 0.5;

const sum = document.querySelector(".total__sum");


productQuantity.addEventListener("change", function(){

    const quantity = parseInt(productQuantity.value);

    if(quantity > 0 && quantity !== "" ){

        visibilityVisible(productRow);
        productCalc.textContent = quantity + " * " + productPrice + " €";
        productSum.textContent = (quantity * productPrice) + " €";
        sum.textContent = absoluteSum() + " €";

    }else {

        visibilityHidden(productRow);
        productSum.textContent = 0;
        sum.textContent = absoluteSum() + " €";
    }

    

})

const ordersRow = document.querySelector(".orders__row");
const ordersQuantity = document.querySelector("#orders");
const ordersCalc = ordersRow.querySelector(".second__column");
const ordersSum = ordersRow.querySelector(".third__column");
const ordersPrice = 0.25;

ordersQuantity.addEventListener("change", function(){

    const quantity = parseInt(ordersQuantity.value);

    if(quantity > 0 && quantity!== ""){

        visibilityVisible(ordersRow);
        ordersCalc.textContent = quantity + " * " + ordersPrice + " €";
        ordersSum.textContent = (quantity * ordersPrice) + " €";
        sum.textContent = absoluteSum() + " €";
    }
    else{

        visibilityHidden(ordersRow);
        ordersSum.textContent = 0;
        sum.textContent = absoluteSum() + " €";
    }   
})

const choosePackage = document.querySelector(".custom__select__choose");
const choosePackageText = choosePackage.querySelector("p");
const allPackages = document.querySelectorAll(".select__option");
const packageRow = document.querySelector(".package__row");
const packageType = packageRow.querySelector(".second__column");
const packageSum = packageRow.querySelector(".third__column");

const basicPackage = 0;
const professionalPackage = 25;
const premiuimPackage = 60;

allPackages.forEach(function(element){

    element.addEventListener("click", function(){

        visibilityVisible(packageRow);
        choosePackageText.textContent = element.textContent;
        choosePackageText.style.color = "black";
        
        showSelect();

        packageType.textContent = element.textContent;

        if(element.textContent === "Basic"){

            packageSum.textContent = basicPackage + " €";
            sum.textContent = absoluteSum() + " €";
        }

        if(element.textContent === "Professional"){

            packageSum.textContent = professionalPackage + " €";
            sum.textContent = absoluteSum() + " €";
        }
        
        if(element.textContent === "Premium"){

            packageSum.textContent = premiuimPackage + " €";
            sum.textContent = absoluteSum() + " €";
        }

    })
})


const checkboxAccounting = document.querySelector("#checkbox__accounting");
const accountingRow = document.querySelector(".accounting__row");
const accountingSum = accountingRow.querySelector(".third__column");
const accountingPrice = 35;

checkboxAccounting.addEventListener("change", function(){

    if(checkboxAccounting.checked){

        visibilityVisible(accountingRow);
        accountingSum.textContent = accountingPrice + " €";
        sum.textContent = absoluteSum() + " €";

    }
    else{

        visibilityHidden(accountingRow);
        accountingSum.textContent = 0;
        sum.textContent = absoluteSum() + " €";
    }
})

const checkboxTerminal = document.querySelector("#checkbox__terminal");
const terminalRow = document.querySelector(".terminal__row");
const terminalSum = terminalRow.querySelector(".third__column");
const terminalPrice = 5;

checkboxTerminal.addEventListener("change", function(){

    if(checkboxTerminal.checked){

        visibilityVisible(terminalRow);
        terminalSum.textContent = terminalPrice + " €";
        sum.textContent = absoluteSum() + " €";
    }
    else{

        visibilityHidden(terminalRow);
        terminalSum.textContent = 0;
        sum.textContent = absoluteSum() + " €";
    }

})


function displayBlock(object){

    object.classList.remove("display-none");
}


function displayNone(object){

    object.classList.add("display-none");
}

function visibilityVisible(object){

    object.classList.remove("visibility-hidden");
}


function visibilityHidden(object){

    object.classList.add("visibility-hidden");
}

function showSelect (){

    const selectPackage = document.querySelector(".custom__select__options");
    const arrow = document.querySelector(".select__arrow");

    if(selectPackage.classList.contains("display-none")){

        displayBlock(selectPackage);
        arrow.style.transform = "rotate(-180deg)";

    } else {

        displayNone(selectPackage);
        arrow.style.transform = "rotate(360deg)";
    }
}

function absoluteSum(){

    const allSum = document.querySelectorAll(".third__column");
    let totalSum = 0;

    allSum.forEach(function(element){

        if(element.textContent === ""){

          totalSum=totalSum+0;

        }else{

            totalSum=totalSum + parseFloat(element.textContent);
        }
        
    });

    return totalSum;
}
