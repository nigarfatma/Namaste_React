import React from "react";
import ReactDOM from "react-dom/client";
// const heaing = React.createElement(
//   "h1",
//   { id: "heading" },
//   "Hello World From React"
// );
// console.log(heaing); //object
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(heaing);

// nested div
{
  /* <div id="parent">
<div id="child">
    <h1>I am h1 tag</h1>
</div>
</div> */
}
// using react
// const headig = React.createElement(
//   "div",
//   { id: "parent" },
//   React.createElement(
//     "div",
//     { id: "child" },
//     React.createElement("h1", {}, "I am h1 Tag")
//   )
// );
// console.log(headig);
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(headig);

/* <div id="parent">
<div id="child">
    <h1>I am h1 tag</h1>
    <h2>I am h2 tag</h2>
</div>
<div id="child">
    <h1>I am h1 tag</h1>
    <h2>I am h2 tag</h2>
</div>
</div> */

// const heading = React.createElement(
//   "div",
//   { id: "parent" },
//   React.createElement("div", { id: "child" }, [
//     React.createElement("h1", {}, "I am h1 tag"),
//     React.createElement("h2", {}, "I am h2 tag"),
//   ]),
//   React.createElement("div", { id: "child2" }, [
//     React.createElement("h1", {}, "I am child2 h1 🚀"),
//     React.createElement("h1", {}, "I am child2 in h2"),
//   ])
// );
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(heading);

// laying the foundation
const heading = React.createElement("h1", { id: "headig" }, "This is React");
console.log("heading", heading);
const jsxHeading = <h1>This is jsx heading</h1>;
console.log("jsxHeading", jsxHeading);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);
root.render(jsxHeading);

// REACT COMPONENT-->there are two types of component-->1.class based componet(old way) 2.function component(new way)
// React functional component
const number = 1000;
const elem = <span>JSX</span>;
const Tiltle = () => {
  return (
    <>
      <div className="container">
        <h1 id="heading">TITLLE OF RAECT TUORIAL {elem}</h1>
      </div>
    </>
  );
};
const HeadigComponent = () => {
  return (
    <>
      <div className="container">
        {console.log({ Tiltle })}
        {console.log("fghf")}
        <h1 id="heading">RAECT TUORIAL</h1>
        {/* same allof them */}
        {/* <Tiltle /> */}
        {/* <Tiltle></Tiltle> */}
        {Tiltle()}
      </div>
    </>
  );
};
root.render(<HeadigComponent />);
