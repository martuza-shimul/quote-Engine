//Quote engine code

const qepath = document.querySelector(".quote-engine-wrapper .first");
const qepathSecond = document.querySelector(".quote-engine-wrapper .second");
const qepathType = document.querySelector(".quote-engine-wrapper .type");
const qepathThird = document.querySelector(".quote-engine-wrapper .third");
const qepathFourth = document.querySelector(".quote-engine-wrapper .fourth");
const qepathLast = document.querySelector(".quote-engine-wrapper .last");

const handleRadioClick = () => {
  // qepath.getElementsByTagName('input')[3].checked
  // let list = qepath.getElementsByTagName("input");
  // let counter = 0;
  // for (let i = 0; i < list.length; i++) {
  //   // const decision = list[i].checked;
  //   if (list[i].checked) {
  //     qepath.classList.add("hide");
  //     qepathType.classList.remove("hide");
  //     counter++;
  //   }
  // }
  // if (counter == 0) {
  //   qepath.innerHTML += `<p class= "text-center red" style="font-weight: bold" >Please select something</p>`;
  // }

  var location = document.getElementById("location").value;
  var condition = document.getElementById("condition").value;
  var price = document.getElementById("price").value;

  if (location != "" && condition != "" && price != "") {
    qepath.classList.add("hide");
    qepathType.classList.remove("hide");
  } else {
    qepath.innerHTML += `<p class= "text-center red" style="font-weight: bold" >Please select first</p>`;
  }
};

const handleType = () => {
  var type = document.getElementById("type").value;
  var pSize = document.querySelector("input[name=preferred_size]").value;
  var room = document.getElementById("room").value;
  var bath = document.getElementById("bath").value;
  var garden = document.getElementById("garden").value;
  var gSize = document.querySelector("input[name=garden_size]").value;
  var balconies = document.getElementById("balconies").value;
  var balconiesNo = document.getElementById("balconiesNo").value;
  var furnitures = document.getElementById("furnitures").value;
  var pFurnitures = document.getElementById("pFurnitures").value;
  var floor = document.getElementById("floor").value;
  var seaView = document.getElementById("seaView").value;
  var mountainView = document.getElementById("room").value;

  if (
    type != "" &&
    pSize != "" &&
    room != "" &&
    bath != "" &&
    garden != "" &&
    gSize != "" &&
    balconies != "" &&
    balconiesNo != "" &&
    furnitures != "" &&
    pFurnitures != "" &&
    floor != "" &&
    seaView != "" &&
    mountainView != ""
  ) {
    qepathType.classList.add("hide");
    qepathThird.classList.remove("hide");
  } else {
    qepathType.innerHTML += `<p class= "text-center red" style="font-weight: bold" >Maybe you've missed something</p>`;
  }
};

const handleThird = () => {
  var pUsage = document.getElementById("pUsage").value;
  var gUsage = document.getElementById("gUsage").value;

  if (pUsage != "" && gUsage != "") {
    qepathThird.classList.add("hide");
    qepathLast.classList.remove("hide");
  } else {
    qepath.innerHTML += `<p class= "text-center red" style="font-weight: bold" >Please fill up the fields</p>`;
  }
};

const handleFourth = () => {
  let list = qepathFourth.getElementsByTagName("input");
  let counter = 0;
  for (let i = 0; i < list.length; i++) {
    // const decision = list[i].checked;
    if (list[i].checked) {
      qepathFourth.classList.add("hide");
      qepathLast.classList.remove("hide");
      counter++;
    }
  }
  if (counter == 0) {
    qepathFourth.innerHTML += `<p class= "text-center red" style="font-weight: bold" >Please select something</p>`;
  }
};
