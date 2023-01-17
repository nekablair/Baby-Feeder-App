let logg = localStorage.getItem('log')
let parseLog = JSON.parse(logg)

const feedingLog = document.querySelector(".feedingLog")
//before mapping the array check for a valid array 
  if(parseLog!==null ){
  parseLog.map(data => {
  feedingLog.innerHTML += `<li id=${data.uid}> <span class ="block date">Date: ${data.date}</span>  <span class ="block time">Time: ${data.time}</span> <span class ="block">Breast Side: ${data.foodBankChosen}</span>   <span class ="block">Feeding Time: ${data.stopWatchData}</span>  <button class="trash"></button></li>`
})
}

function deleteLog(e){
  let FeedingLogId=e.target.parentNode.id
    
     //filter feeding log array
      parseLog=parseLog.filter(id=>id.uid !== FeedingLogId)

     //stringify feeding log enable local storage
      let localStore=JSON.stringify(parseLog)
      localStorage.setItem("log",localStore)
   //remove feeding log container
       e.target.parentNode.remove()
}
const trashItem = document.querySelectorAll(".trash")
   trashItem.forEach((trash)=>{
   trash.addEventListener("click",(e)=>deleteLog(e))
   })