function change(cash) {
  // Your code goes here
  var twoBill = 0;
  var fiveBill = 0;
  var tenBill = 0;

  var aux = 0;

  if (cash <= 1) {
    return null;
  } else {
    if (cash % 5 === 0) {
      aux = cash % 10;
      if (aux === 5) {
        fiveBill += 1;
        tenBill += cash / 10;
      }
    } else {
      if (cash % 2 === 0) {
        aux = cash % 10;
        if (aux === 2) {
          twoBill += 1;
          tenBill += cash / 10;
        }
      } else {
        if (cash % 10 === 0) {
          tenBill = cash / 10;
        }
      }
    }
  }
}
