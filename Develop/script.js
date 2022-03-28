const date = dayjs().$d;
const currentDay = document.querySelector("#currentDay");
currentDay.textContent = dayjs(date).format('dddd, MMMM DD');
const form = document.querySelectorAll(".time-block");

console.log(dayjs(date).format('HH'));

for (var i = 0; i < form.length; i++) {
    console.log(form[0].dataset.time);
    if (dayjs(date).format('HH') > form[i].dataset.time) {
        form[i].classList.add("past");
    }
    if (dayjs(date).format('HH') == form[i].dataset.time) {
        form[i].classList.add("present");
    }
    if (dayjs(date).format('HH') < form[i].dataset.time) {
        form[i].classList.add("future");
    }
}
$(".time-block").on("shown.bs.modal", function() {
    // highlight textarea
    $(".description").trigger("focus");
  });