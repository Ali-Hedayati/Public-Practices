const dayInput = document.getElementById("dayInput");
const monthInput = document.getElementById("monthInput");
const yearInput = document.getElementById("yearInput");
const btn = document.getElementById("submit__btn");
const yearsResult = document.getElementById("date__years--result");
const monthsResult = document.getElementById("date__months--result");
const daysResult = document.getElementById("date__days--result");
const errorContainer = document.querySelector(".error");

const initialState = {
  year: 0,
  month: 0,
  day: 0,
};

dayInput.addEventListener("change", (e) => {
  // TODO: store input in proper initialState key
  initialState.day = Number(e.target.value);
});

monthInput.addEventListener("change", (e) => {
  // TODO: store input in proper initialState key
  initialState.month = Number(e.target.value);
});

yearInput.addEventListener("change", (e) => {
  // TODO: store input in proper initialState key
  initialState.year = Number(e.target.value);
});

const calculateAge = (dateOfBirth) => {
  const { day, month, year } = dateOfBirth;
  const result = [];

  // TODO: calculate year of age, month of age and date of age
  //  and return result array with this scheme => ['year', 'month', 'day']
  // your code here...
  let currentDate = new Date();
  let ThisMonth = currentDate.getMonth() + 1;
  let ThisDay = currentDate.getDate();
  let ThisYear = currentDate.getFullYear();
  let D, DiffDay, DiffMonth, DiffYear;
  if (ThisMonth >= 6) {
    let D = 30;
  } else {
    let D = 31;
  }
  DiffDay = ThisDay - day;

  if (DiffDay >= 0) {
    DiffMonth = ThisMonth - month;

    if (DiffMonth >= 0) {
      DiffYear = ThisYear - year;
    } else {
      DiffMonth = DiffMonth + 12;
      DiffYear = ThisYear - year - 1;
    }
  } else {
    DiffDay = DiffDay + D;
    DiffMonth = ThisMonth - month - 1;
    if (DiffMonth >= 0) {
      DiffYear = ThisYear - year;
    } else {
      DiffMonth = DiffMonth + 12;
      DiffYear = ThisYear - year - 1;
    }
  }
  result.push(DiffYear);
  result.push(DiffMonth);
  result.push(DiffDay);
  console.log(result);
  return result;
};

btn.addEventListener("click", () => {
  if (
    initialState.day &&
    initialState.month &&
    initialState.year &&
    initialState.month <= 12 &&
    initialState.day <= 31
  ) {
    const result = calculateAge(initialState);
    yearsResult.textContent = result[0];
    monthsResult.textContent = result[1];
    daysResult.textContent = result[2];
  } else {
    errorContainer.innerHTML = `<p>Input is invalid!</p>`;
    errorContainer.style.setProperty("display", "block");
    setTimeout(() => {
      errorContainer.style.setProperty("display", "none");
    }, 1500);
  }
});
