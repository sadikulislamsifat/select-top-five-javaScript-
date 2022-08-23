
  const  player = [];
  

  function setPlayer(player){
    const playerList = document.getElementById('player-list');
    
    for(let i = 1; i < 2; i++){
      const name = player;
      const li = document.createElement("li");
      li.innerText = name;
      playerList.appendChild(li);
      // name.target.disabled = true;
      
    }
  }

 function selectPlayer(event){
   const playerName = event.parentNode.parentNode.children[1].children[0].innerText;
  //  console.log(playerName.target.disabled)
   if(player.length >= 5){
    alert("please you can't take no more player")
    event.target.disabled = true;
   };
   
   
   player.push(playerName);

     

   const totalSelectedPlayer = document.getElementById('selected').innerText = player.length;
  
   
  setPlayer(playerName);
  


  
   
 };



//  calculate Palyer expenses

 document.getElementById('calculate').addEventListener('click', function(){
  const totalPlayer = getElementValueById('selected');
  const perPlayerBudget = getInputValueById('per-player');
  const playerTotalExpenses = totalPlayer * perPlayerBudget;

  setElementValueById('player-expenses', playerTotalExpenses);
 });




//  calculate total amount 
 document.getElementById('calculate-total').addEventListener('click', function(){
    
    const playerExpenses = getElementValueById('player-expenses');
    const manager = getInputValueById('manager');
    const choach = getInputValueById('choach');
    const total = playerExpenses + manager + choach;
    setElementValueById('total', total);
 });