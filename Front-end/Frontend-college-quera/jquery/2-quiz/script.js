const questions = [
  {
    id: 1,
    title:
      "برای اینکه لینک در صفحه یا تب جدید باز شود، از کدام صفت استفاده میشود؟",
    options: [
      {
        key: 1,
        title: "_blank",
      },
      {
        key: 2,
        title: "_self",
      },
      {
        key: 3,
        title: "_new",
      },
      {
        key: 4,
        title: "_parent",
      },
    ],
    answerKey: 1,
  },
  {
    id: 2,
    title:
      "کدام عملگر true برمیگرداند اگر دو مقداری که با هم مقایسه میشوند، برابر نباشند؟",
    options: [
      {
        key: 1,
        title: "<>",
      },
      {
        key: 2,
        title: "~",
      },
      {
        key: 3,
        title: "==!",
      },
      {
        key: 4,
        title: "!==",
      },
    ],
    answerKey: 4,
  },
  {
    id: 3,
    title: "کدام یک کلمه کلیدی در جاوااسکریپت نیست؟",
    options: [
      {
        key: 1,
        title: "this",
      },
      {
        key: 2,
        title: "catch",
      },
      {
        key: 3,
        title: "function",
      },
      {
        key: 4,
        title: "array",
      },
    ],
    answerKey: 4,
  },
  {
    id: 4,
    title:
      "کدام یک راه درست برای اینکه تعداد پاراگراف‌های موجود در صفحه را بدست بیاوریم با استفاده از jquery است؟",
    options: [
      {
        key: 1,
        title: '$("p").count()',
      },
      {
        key: 2,
        title: '$("p").length',
      },
      {
        key: 3,
        title: '$("*").find("p")',
      },
      {
        key: 4,
        title: '$("p").length()',
      },
    ],
    answerKey: 2,
  },
];

const questionsHtml = questions.map((q) => {
  return `
    <div class="question">
          <h3>${q.title}</h3>
          <div class="choices">
                ${q.options
                  .map(
                    (op) =>
                      `
                    <div class="choice">
                      <label for="choice${q.id}${op.key}">${op.title}</label>
                      <input type="radio" name="question${q.id}" id="choice${q.id}${op.key}" value="${op.key}"/>
                    </div>
                      
                    `
                  )
                  .join("")}
          </div>
    </div>
      `;
});
$("form").html(
  questionsHtml.join("") + '<button type="submit">ثبت</button>'
);

const button = $("#quizForm");
const rightAnswers = $("#rightAnswers");
const wrongAnswers = $("#wrongAnswers");
const emptyAnswers = $("#emptyAnswers");

button.submit(answer);

function answer() {
  let right = 0;
  let wrong = 0;
  let empty = 0;
  questions.forEach((q) => {
    let val = $(`input[name="question${q.id}"]:checked`).val();
    console.log("val:" + val);
    val ? (val == q.answerKey ? right++ : wrong++) : empty++;
  });
  rightAnswers.text(right);
  wrongAnswers.text(wrong);
  emptyAnswers.text(empty);
  return false;
}
