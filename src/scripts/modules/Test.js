import logo from "../../images/d&m.jpg";

function Test() {
  let main = document.createElement("main");
  let para = document.createElement("p");
  let img = document.createElement("img");

  main.append(para);
  para.append(img);
  img.src = logo;
  img.alt = "Diana & Michael";

  return main;
}

export default Test;
