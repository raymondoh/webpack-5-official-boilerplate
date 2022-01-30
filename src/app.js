//import _ from "lodash";
//import "./style.css";
import "./styles.scss";
import Test from "./scripts/modules/Test";

document.body.append(Test());

if (process.env.NODE_ENV !== "production") {
  console.log("Looks like we are in development mode!");
}

if (module.hot) {
  module.hot.accept();
}
