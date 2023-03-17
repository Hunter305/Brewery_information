const userCardTemplate = document.querySelector("[data-user-template]")
const userCardContainer = document.querySelector("[data-user-cards-container]")
const searchInput = document.querySelector("[data-search]")




fetch("https://api.openbrewerydb.org/breweries")
  .then(res => res.json())
  .then(data => {
    users = data.map(user => {
      const card = userCardTemplate.content.cloneNode(true).children[0]
      const header = card.querySelector("[data-header]")
      const body1 = card.querySelector("[data-body1]")
      const body2 = card.querySelector("[data-body2]")  
      header.textContent = user.name
      body1.textContent = `${user.name} is a ${user.brewery_type} type brewery located in ${user.street}, ${user.state},${user.country}`
      body2.textContent=`Phone : ${user.phone}    website: ${user.website_url}`
      userCardContainer.append(card)
      return { name: user.name, website: user.website_url, element: card }
    })
  })


  function search_brew(){
    let input=document.querySelector("input").value.toLowerCase();
    let x = document.getElementsByClassName('card');
    for(let i=0;i<x.length;i++){
      if (!x[i].innerHTML.toLowerCase().includes(input)){
        x[i].style.display="none";
      }
      else{
        x[i].style.display="flex"; 
      }
    }
    console.log(x[0])
  }

