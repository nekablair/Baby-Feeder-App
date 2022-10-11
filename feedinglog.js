let logg = localStorage.getItem('log')
const parseLog = JSON.parse(logg)
console.log(typeof parseLog)
const feedingLog = document.querySelector(".feedingLog")
parseLog.map(data => {
  feedingLog.innerHTML += `<li> <span class ="block">Date: ${data.date}</span>  <span class ="block">Time: ${data.time}</span> <span class ="block">Breast Side: ${data.foodBankChosen}</span>   <span class ="block">Feeding Time: ${data.stopWatchData}</span>  <button class="trash"></button></li>`
})
function removeItem(date, time) {
  parseLog.filter(data => {
    if (data.date === date && data.time === time)
      console.log(data)
  })
}
// removeItem()
const trashItem = document.querySelectorAll(".trash")
console.log(trashItem)