function handleTicketChange (ticket, isIncrease){
    const ticketInput = document.getElementById(ticket  + '-count');
    const ticketCount = parseInt(ticketInput.value);
    let ticketNewCount = ticketCount;
    if (isIncrease == true) {
        ticketNewCount = ticketCount + 1;
    }
    if (isIncrease == false && ticketCount > 0) {
        ticketNewCount = ticketCount - 1;
    }
    document.getElementById(ticket + '-count').value = ticketNewCount;
    // firstClassTotal = firstClassNewCount * 150;
    let ticketTotal = 0;
    if (ticket == 'firstClass') {
        ticketTotal = ticketNewCount * 150;
    }
    if (ticket == 'economy') {
        ticketTotal = ticketNewCount * 100;
    }
    document.getElementById(ticket + "-total").innerText = ticketTotal;
    calculateTotal();
    }


function calculateTotal() {
    const firstClassCount = getInputValue('firstClass');
    const economyCount = getInputValue('economy');

    const totalPrice = firstClassCount * 150 + economyCount * 100;
    document.getElementById('total-price').innerText = totalPrice;
    
    const tax = Math.round(totalPrice * 0.1);
    document.getElementById("tax-amount").innerText = tax;

    const grandTotal = totalPrice + tax;
    document.getElementById("grand-total").innerText = grandTotal;
}

function getInputValue(ticket){
    const ticketInput = document.getElementById(ticket + '-count');
    const ticketCount = parseInt(ticketInput.value);
    return ticketCount;
}