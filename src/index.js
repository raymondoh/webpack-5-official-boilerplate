import _ from "lodash";
//import "./style.css";
import "./styles.scss";

function component() {
  const element = document.createElement("div");

  const button = document.createElement("button");
  const br = document.createElement("br");

  button.innerHTML = "Click me and look at the console!";
  element.innerHTML = _.join(["Hello", "webpack"], " ");
  element.appendChild(br);
  element.appendChild(button);

  // Note that because a network request is involved, some indication
  // of loading would need to be shown in a production-level site/app.
  button.onclick = e =>
    import(/* webpackChunkName: "print" */ "./print").then(module => {
      const print = module.default;

      print();
    });

  return element;
}

document.body.appendChild(component());

if (process.env.NODE_ENV !== "production") {
  console.log("Looks like we are in development mode!");
}

if (module.hot) {
  module.hot.accept("./print.js", function () {
    console.log("Accepting the updated printMe module!");
    printMe();
  });
}
if (module.hot) {
  module.hot.accept();
}
