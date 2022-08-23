
  const  player = [];
  

  function setPlayer(player){
    const playerList = document.getElementById('player-list');
    
    for(let i = 0; i < 1; i++){
      const name = player;
      const li = document.createElement("li");
      li.innerText = name;
      playerList.appendChild(li);
    }
  }

 function selectPlayer(event){
   const playerName = event.parentNode.parentNode.children[1].children[0].innerText;
  //  event.target.disabled = true;
  //  event.target.style.background = "skyblue";
  //  const playerList = document.getElementById('player-list');
   
   
   player.push(playerName);

    // event.target.disabled = true;

   const totalSelectedPlayer = document.getElementById('selected').innerText = player.length;
   
  setPlayer(playerName);
   
 };

 document.getElementById('calculate').addEventListener('click', function(){
  const totalPlayer = getElementValueById('selected');
  const perPlayerBudget = getInputValueById('per-player');
  const playerTotalExpenses = totalPlayer * perPlayerBudget;

  setElementValueById('player-expenses', playerTotalExpenses);
 });



 document.getElementById('calculate-total').addEventListener('click', function(){
    
    const playerExpenses = getElementValueById('player-expenses');
    const manager = getInputValueById('manager');
    const choach = getInputValueById('choach');
    const total = playerExpenses + manager + choach;
    setElementValueById('total', total);
 })