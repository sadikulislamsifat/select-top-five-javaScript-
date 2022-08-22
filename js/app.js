




 document.getElementById('calculate-total').addEventListener('click', function(){
    
    const playerExpenses = getElementValueById('player-expenses');
    const manager = getInputValueById('manager');
    const choach = getInputValueById('choach');
    const total = playerExpenses + manager + choach;
    setElementValueById('total', total);
 })