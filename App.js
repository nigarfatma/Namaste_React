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

const heading = React.createElement(
  "div",
  { id: "parent" },
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", {}, "I am h1 tag"),
    React.createElement("h2", {}, "I am h2 tag"),
  ]),
  React.createElement("div", { id: "child2" }, [
    React.createElement("h1", {}, "I am child2 h1"),
    React.createElement("h1", {}, "I am child2 in h2"),
  ])
);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);
