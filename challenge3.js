function AnnualNetSalary(basicsalary) {
    if (basicsalary >= 0 && basicsalary <=288000){
        return (basicsalary / 10)
    } if (basicsalary >= 288001 && basicsalary <= 388000){
        return (basicsalary / 25)
    } if (basicsalary >= 388001 && basicsalary <= 6000000){
        return (basicsalary / 30)
    }if (basicsalary >= 6000001 && basicsalary <= 9600000){
        return (basicsalary / 32.5)
    }if (basicsalary >= 9600000){
        return (basicsalary / 35.0)
    }


}
console.log(AnnualNetSalary(10000000))


function PayableNHIF(grossPay) {
    if (grossPay >= 0 && grossPay <= 5999) {
      return 150;
    } if (grossPay >= 6000 && grossPay <= 7999) {
      return 300;
    } if (grossPay >= 8000 && grossPay <= 11999) {
      return 400;
    } if (grossPay >= 12000 && grossPay <= 14999) {
      return 500;
    } if (grossPay >= 15000 && grossPay <= 19999) {
      return 600;
    } if (grossPay >= 20000 && grossPay <= 24999) {
      return 750;
    } if (grossPay >= 25000 && grossPay <= 29999) {
      return 850;
    } if (grossPay >= 30000 && grossPay <= 34999) {
      return 900;
    } if (grossPay >= 35000 && grossPay <= 39999) {
      return 950;
    } if (grossPay >= 40000 && grossPay <= 44999) {
      return 1000;
    } if (grossPay >= 45000 && grossPay <= 49999) {
      return 1100;
    } if (grossPay >= 50000 && grossPay <= 59999) {
      return 1200;
    } if (grossPay >= 60000 && grosspay <= 69999) {
      return 1300;
    } if (grossPay >= 70000 && grosspay <= 79999) {
      return 1400;
    } if (grossPay >= 80000 && grosspay <= 89999) {
      return 1500;
    } if (grossPay >= 90000 && grosspay <= 99999) {
      return 1600;
    } if (grossPay >= 100000){
      return 1700;
    }
  }
  console.log(PayableNHIF(35400));

  function PayableNSSF(grosspay){
    if (grosspay >=0 && grosspay <= 18000){
        return (grosspay / 6)
    }


  } 
  console.log(PayableNSSF(12000));
  


