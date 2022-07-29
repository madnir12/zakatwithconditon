function checkGold(){
  let totalGold =   document.getElementById("gold").value;
  if(totalGold < 7.5){
    document.getElementById("showG").innerText = "No zakat on this amount of gold";

  }
  else{
    let zakatG = totalGold*120000/40;
    document.getElementById("showG").innerText = zakatG;

  }
}
function checkSilver(){
    let totalSilver = document.getElementById("silver").value;
    
    if(totalSilver < 52.5){
        document.getElementById("showS").innerText = "No zakat on this amount of silver";

    } else{
        let zakatS = totalSilver*1500/40;
        document.getElementById("showS").innerText = zakatS;
    }
 
}
function checkCash(){
    let totalCash = document.getElementById("cash").value;
    
    if(totalCash < 52.5*1500){
        document.getElementById("showS").innerText = "No zakat on this amount of cash";

    } else{
        let zakatC = totalCash/40;
        document.getElementById("showC").innerText = zakatC;
    }
 
}