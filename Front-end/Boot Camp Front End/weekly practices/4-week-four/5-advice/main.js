import simulatedApi from "./server/server.js";

const adviceContainer = document.querySelector(".advice");
const heading = document.querySelector(".heading");
const btn = document.querySelector(".btn");

const generateAdvice = async () => {
  // TODO: implement getting the data from api and return the given data
  // API route: /advice
  // fetch(simulatedApi)
  //   .then((response) => response.json())
  //   .then((data) => {
  //     return data;
  //   });
  // let data = await simulatedApi;
  // return data;
  return simulatedApi.then((data) => {
    return data;
  });
};
btn.addEventListener("click", async () => {
  // TODO: call generateAdvice function
  // and then place the id in "heading" and place the advice in "adviceContainer"
  let Mydata = await generateAdvice();
  adviceContainer.innerHTML = Mydata.advice;
  heading.innerHTML = Mydata.id;
});
