const date = dayjs().$d;
const currentDay = document.querySelector("#currentDay");
currentDay.textContent = dayjs(date).format('dddd, MMMM DD');

$(".saveBtn").click(function() {

});