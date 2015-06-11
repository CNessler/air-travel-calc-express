module.exports = {
  cost: function(departure, arrival) {
    if (departure === arrival){
      return 0;
    }
    else if (departure === "chicago" && arrival === "newyork") {
      return 250;
    }
    else if (departure === "chicago" && arrival === "losangeles") {
      return 350;
    }
    else if (departure === "losangeles" && arrival === "chicago") {
      return 350;
    }
    else if (departure === "losangeles" && arrival === "newyork") {
      return 545;
    }
    else if (departure === "newyork" && arrival === "chicago") {
      return 250;
    }
    else {
      return 545;
    }
  },

  bags: function(bags){
  if (bags<0){
    return 0;
  } else {
    return bags * 25;
  }
},

  wifi: function(wifiChecked){
  if (on) {
    return 12;
  }
  else {
    return 0;
  }
},


  discount: function(discountCode, baseFare) {
  if (discountCode === "10OFF") {
    return baseFare*0.9;
  }
  else if (discountCode === "20OFF") {
    return 0.8;
  }
  else {
    return 1;
  }
},


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
}
