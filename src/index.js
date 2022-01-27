//import _ from "lodash";
//import "./style.css";
import "./styles.scss";
import hello from "./scripts/components/component";

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
