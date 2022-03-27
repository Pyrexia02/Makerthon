const sideMenu = document.querySelector("aside");
const menuBtn = document.querySelector("#menu-btn");
const closeBtn = document.querySelector("#close-btn");

menuBtn.addEventListener("click",function(){
  sideMenu.style.display = "block";
})

closeBtn.addEventListener("click",function(){
  sideMenu.style.display = "none";
})

/*--------------------------Dark Theme Toggler-------------------------------*/
const themeToggler = document.querySelector(".theme-toggler");

themeToggler.addEventListener("click",function(){
  document.body.classList.toggle("dark-theme-variables");
  themeToggler.querySelector("span:nth-child(1)").classList.toggle("active");
  themeToggler.querySelector("span:nth-child(2)").classList.toggle("active");
})

const Orders = [
  {
    productName: "LIDAR Drone Pro",
    company: "AsiaTech",
    productNumber: "85631",
    shipping: "In-Use",
    date:"04/03/2022"
  },
  {
    productName: "Green Vehicles",
    company: "Suria Labs",
    productNumber: "36378",
    shipping: "Malfunction",
    date:"23/01/2022"
  },
  {
    productName: "Permeable Pavements",
    /*Permeable pavements infiltrate, treat, and/or store rainwater where it falls. They can be made of pervious concrete, porous asphalt, or permeable interlocking pavers. This practice could be particularly cost effective where land values are high and flooding or icing is a problem.*/
    company: "DXC Technology",
    productNumber: "49347",
    shipping: "Service",
    date:"16/12/2021"
  },
  {
    productName: "Piezoelectric Technology",
    company: "Twine",
    productNumber: "96996",
    shipping: "In-Use",
    date:"08/10/2021"
  },
  {
    productName: "Hybrid Cars",
    company: "Tesla",
    productNumber: "22821",
    shipping: "Service",
    date:"25/08/2021"
  },
]

Orders.forEach(order => {
  const tr = document.createElement("tr");
  const trContent =`
                    <td>${order.productName}</td>
                    <td>${order.company}</td>
                    <td>${order.productNumber}</td>
                    <td class="${order.shipping === 'Malfunction' ? 'danger' : order.shipping === 'Service' ? 'warning' : 'primary'}">${order.shipping}</td>
                    <td class=""primary>${order.date}</td>
                    `;
  tr.innerHTML = trContent;
  document.querySelector("table tbody").appendChild(tr);
})

/*------------------------Change value of cars in-used------------------------*/

function changeNumber(){
  const number = [
    '1,940,056',
    '1,943,921',
    '1,955,345',
    '1,958,678',
    '1,966,934',
    '1,978,435',
    '1,984,342',
    '1,996,897',
    '2,023,721',
    '2,196,435',
    '2,209,009'
  ]
  const carNumber = document.querySelector('.car-in-used')
  const updatedNumber = number[Math.floor(Math.random()*
    number.length)];
  carNumber.innerHTML = updatedNumber;
}
function changePercentage(){
  const percentage = [
    '90%',
    '65%',
    '52%',
    '43%',
    '87%',
    '80%',
    '56%',
    '73%',
    '30%'
  ]
  const percentageChange = document.querySelector('.percentages')
  const updatedPercentage = percentage[Math.floor(Math.random()*percentage.length)];
  percentageChange.innerHTML = updatedPercentage;
}

setInterval(changeNumber,300)
setInterval(changePercentage,300)

/*------------------------Change value for traffic delayed-----------------------*/

function changeTraffic(){
  const delay = [
    '15 mins',
    '10 mins',
    '18 mins',
    '19 mins',
    '20 mins',
    '24 mins',
    '26 mins',
    '35 mins',
    '38 mins',
  ]
  const trafficNumber = document.querySelector('.trafficDelay')
  const updatedTraffic = delay[Math.floor(Math.random()*
    delay.length)];
  trafficNumber.innerHTML = updatedTraffic;
}
function changePercentages(){
  const percentage = [
    '90%',
    '65%',
    '52%',
    '43%',
    '87%',
    '80%',
    '56%',
    '73%',
    '30%'
  ]
  const percentageChange = document.querySelector('.percentagess')
  const updatedPercentage = percentage[Math.floor(Math.random()*percentage.length)];
  percentageChange.innerHTML = updatedPercentage;
}

setInterval(changeTraffic,1000)
setInterval(changePercentages,1000)

/*------------------------Change value for Ranking-----------------------*/

function changeRanking(){
  const rank = [
    '210/404',
    '198/404',
    '207/404',
    '203/404',
    '187/404',
    '224/404',
  ]
  const rankNumber = document.querySelector('.ranking')
  const updatedRank = rank[Math.floor(Math.random()*
    rank.length)];
  rankNumber.innerHTML = updatedRank;
}
function changePercentagess(){
  const percentage = [
    '90%',
    '65%',
    '52%',
    '43%',
    '87%',
    '80%',
    '56%',
    '73%',
    '30%'
  ]
  const percentageChange = document.querySelector('.percentagesss')
  const updatedPercentage = percentage[Math.floor(Math.random()*percentage.length)];
  percentageChange.innerHTML = updatedPercentage;
}

setInterval(changeRanking,3000)
setInterval(changePercentagess,3000)
