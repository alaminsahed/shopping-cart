//product one plus handler
const firstProductQtyInc = document.getElementById("first-plus");
firstProductQtyInc.addEventListener("click",function(){
    const inputValue = document.getElementById("first-input").value;
    const inputValueInt = parseInt(inputValue);
    const inputValueUpdate = inputValueInt +1;
    document.getElementById("first-input").value = inputValueUpdate; 
    // increase product value
    const incPrice = 1219;
    const incPriceInt = parseInt(incPrice);
    const updatePrice = incPriceInt*inputValueUpdate;
    document.getElementById("first-price").innerText = updatePrice;
    // //increase subtotal 
     subtotal();
     tax();
     total();
})

//product one minus handler
const firstProductQtyDec = document.getElementById("first-minus");
firstProductQtyDec.addEventListener("click", function(){
    const inputValue = document.getElementById("first-input").value;
    const inputValueInt = parseInt(inputValue);
    
    if(inputValueInt===1)
    {
        const inputValueUpdate = inputValueInt;
        document.getElementById("first-input").value = inputValueUpdate;
        subtotal();
        tax();
        total();
    }
    else{
        const inputValueUpdate = inputValueInt -1;
        document.getElementById("first-input").value = inputValueUpdate;
        // decrease product value
        const incPrice = document.getElementById("first-price").innerText;
        const incPriceInt = parseInt(incPrice);
        const updatePrice = incPriceInt-1219;
        document.getElementById("first-price").innerText = updatePrice;
        subtotal();
        tax();
        total();

    }
})

//product two plus handler
const secondProductQtyInc = document.getElementById("second-plus");
secondProductQtyInc.addEventListener("click",function(){
    const inputValue = document.getElementById("second-input").value;
    const inputValueInt = parseInt(inputValue);
    const inputValueUpdate = inputValueInt +1;
    document.getElementById("second-input").value = inputValueUpdate; 
    // increase product value
    const incPrice = 59;
    const incPriceInt = parseInt(incPrice);
    const updatePrice = incPriceInt*inputValueUpdate;
    document.getElementById("second-price").innerText = updatePrice;
    subtotal();
    tax();
    total();
})

//product two minus handler
const secondProductQtyDec = document.getElementById("second-minus");
secondProductQtyDec.addEventListener("click", function(){
    const inputValue = document.getElementById("second-input").value;
    const inputValueInt = parseInt(inputValue);
    
    if(inputValueInt===1)
    {
        const inputValueUpdate = inputValueInt;
        document.getElementById("second-input").value = inputValueUpdate;
        subtotal();
        tax();
        total();
        
    }
    else{
        const inputValueUpdate = inputValueInt -1;
        document.getElementById("second-input").value = inputValueUpdate;
        // decrease product value
        const incPrice = document.getElementById("second-price").innerText;
        const incPriceInt = parseInt(incPrice);
        const updatePrice = incPriceInt-59;
        document.getElementById("second-price").innerText = updatePrice;
        subtotal();
        tax();
        total();

    }
})

function subtotal()
{
    
    subtotal1 = document.getElementById("first-price").innerText;
    subtotal2 = document.getElementById("second-price").innerText;
    subtotal1Int = parseInt(subtotal1);
    subtotal2Int = parseInt(subtotal2);
    subtotalUpdate = subtotal1Int + subtotal2Int;
    document.getElementById("update-subtotal").innerText = subtotalUpdate;
}

function tax()
{
    const tax = document.getElementById("update-subtotal").innerText;
    const taxInt = parseInt(tax);
    const updateTax = parseInt (taxInt * 0.15);
    document.getElementById("update-tax").innerText = updateTax; 
}

function total()
{
    const subtotal = parseInt(document.getElementById("update-subtotal").innerText);
    const tax      = parseInt(document.getElementById("update-tax").innerText);
    const updateTotal = subtotal + tax;
    document.getElementById("update-total").innerText = updateTotal;
}

// remove button handler item one

const removeFirst = document.getElementById("first-remove");
removeFirst.addEventListener("click", function(){
    document.getElementById("first-item").style.display = "none";
})

// remove button handler item two

const removeSecond = document.getElementById("second-remove");
removeSecond.addEventListener("click", function(){
    document.getElementById("second-item").style.display = "none";
})
