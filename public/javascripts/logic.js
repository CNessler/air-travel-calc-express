module.exports = {
  cost: function(departure, arrival, bags, wifi, discountCode) {
    if (departure === arrival){
      flight= 0;
    }
      if (flight= 0)
        return "CHANGE FLIGHT"
    else if (departure === "chicago" && arrival === "newyork") {
      flight= 250;
    }
    else if (departure === "chicago" && arrival === "losangeles") {
      flight= 350;
    }
    else if (departure === "losangeles" && arrival === "chicago") {
      flight= 350;
    }
    else if (departure === "losangeles" && arrival === "newyork") {
      flight= 545;
    }
    else if (departure === "newyork" && arrival === "chicago") {
      flight= 250;
    }
    else {
      flight= 545;
    }


  if (bags<0){
    bagCost= 0;
  } else {
    bagCost= bags * 25;
  }


  if (wifi === true) {
    wifi= 12;
  }
  else {
    wifi= 0;
  }

  if (discountCode === "10OFF") {
    discount= 0.9;
  }
  else if (discountCode === "20OFF") {
    discount= 0.8;
  }
  else {
    discount= 1;
  }

  return (parseInt(flight) + parseInt(bagCost) + parseInt(wifi)) * discount;
  }
};



  //
  // getTotalFare: function (baseFare, wifiCost, upgradeCost, flightAndDiscount, bagFee){
  // if (baseFare === 0) {
  //   alert("Please choose separate cities");
  //   return document.getElementsByTagName('h6')[0].innerHTML= "NA";
  // } else {
  //   return  + wifiCost + upgradeCost + flightAndDiscount + bagFee;
  // }
//
// }
//
