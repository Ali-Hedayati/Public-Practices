document.addEventListener("DOMContentLoaded", function () {
  let button = document.querySelector("#calculateBtn");
  let result = document.querySelector("#result");
  let result_p = document.createElement("p");
  result.append(result_p);
  button.onclick = function Get_Data() {
    let height = Number(document.querySelector("#height").value / 100);
    let weight = Number(document.querySelector("#weight").value);
    if (height <= 0 || weight <= 0) {
      result_p.innerHTML = `لطفا مقادیر معتبر قد و وزن خود را وارد نمایید!`;
    } else {
      let BMI = (weight / (height * height)).toFixed(2);
      if (BMI < 18.5) {
        result_p.innerHTML = `نتیجه تست شما: ${BMI} (کمبود وزن)`;
      } else if (BMI >= 18.5 && BMI < 25) {
        result_p.innerHTML = `نتیجه تست شما: ${BMI} (وزن سلامت)`;
      } else if (BMI >= 25 && BMI < 30) {
        result_p.innerHTML = `نتیجه تست شما: ${BMI} (اضافه وزن)`;
      } else if (BMI > 30) {
        result_p.innerHTML = `نتیجه تست شما: ${BMI} (چاقی)`;
      }
    }
  };
});
