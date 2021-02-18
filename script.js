

let dataFromServer = [
   {  
      name: "Supervisor", 
      text: "Monitors activity to identify project roadblocks",
      color: "hsl(180, 62%, 55%)",
   },
   {  
      name: "Team-Builder", 
      text: "Scans our talent network to create the optimal team for your project",
      color: "hsl(0, 78%, 62%)"
   },
   {  
      name: "Karma", 
      text: "Regularly evaluates our talent to ensure quality",
      color: "hsl(34, 97%, 64%)"
   },
   {  
      name: "Calculator", 
      text: "Uses data from past projects to provide better delivery estimates",
      color: "hsl(212, 86%, 64%)"
   },
]
function addCard () {
   let quantity = dataFromServer.length
   let container = document.querySelector('.card_container_grid')
   for(let i = 0; i< quantity; i++) {
      let cardContent = `<div style="border-top: solid 5px ${dataFromServer[i].color};"
                           id="${dataFromServer[i].name.toLowerCase()}" class="card">
                           <h3>${dataFromServer[i].name}</h3>
                           <p>${dataFromServer[i].text}</p>
                        </div>`
      container.insertAdjacentHTML("beforeEnd", cardContent )
      console.log(cardContent)
   }
   
   
}
// function addTextContent(arr) {
//    let cardArray = document.querySelectorAll('.card')
//    console.log(cardArray)
//    let content = {}
//    cardArray.forEach(e => {
//       content.push
//       console.log(e)
//    })
// }
// addTextContent()
addCard()
