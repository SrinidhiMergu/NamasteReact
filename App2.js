import React from "react";
import ReactDOM from "react-dom/client";

const parent = React.createElement(
    "div",
    {id: "parent"},[
    React.createElement(
        "div",
        {id: "child"},
        [React.createElement("h1", {}, "I'm an h1 tag"), 
        React.createElement("h2", {}, "I'm an h2 tag")]
    ),
    React.createElement(
        "div",
        {id: "child"},
        [React.createElement("h1", {}, "I'm an h1 tag"), 
        React.createElement("h2", {}, "I'm an h2 tag")]
    )
]);

// JSX helps to simplify such complex structures


const heading = React.createElement("div", {id: "heading"}, "Namaste React 🚀")

//JSX - is not HTML in JS
//JSX - is HTML like syntax
const jsxHeading = <h1>Namaste React using JSX 🚀</h1>

root.render(jsxHeading);

// const heading = React.createElement("h1", {id: "heading", xyz: "abc"}, "Hello World from React!");
const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(heading);
// console.log(heading);

root.render(parent);
console.log(parent);



/**
 * <div id="parent">
 *    <div id="child">
 *    <h1>I'm h1 tag</h1>
 *   </div>
 * </div>
 * 
 */

// const parent = React.createElement(
//     "div",
//     {id: "parent"},
//     React.createElement(
//         "div",
//         {id: "child"},
//         React.createElement("h1", {}, "I'm an h1 tag")
//     )
// );

/**
 * <div id="parent">
 *    <div id="child">
 *    <h1>I'm h1 tag</h1>
 *    <h2>I'm h2 tag</h2>
 *   </div>
 * </div>
 * 
 */

// const parent = React.createElement(
//     "div",
//     {id: "parent"},
//     React.createElement(
//         "div",
//         {id: "child"},
//         [React.createElement("h1", {}, "I'm an h1 tag"), 
//         React.createElement("h2", {}, "I'm an h2 tag")]
//     )
// );

/**
 * <div id="parent">
 *    <div id="child">
 *    <h1>I'm h1 tag</h1>
 *    <h2>I'm h2 tag</h2>
 *   </div>
 *   <div id="child2">
 *    <h1>I'm h1 tag</h1>
 *    <h2>I'm h2 tag</h2>
 *   </div>
 * </div>
 * 
 */

/**
//React Element
const heading = (
    <h1 className="head" tabIndex="5">
        Namaste React using JSX 🚀
    </h1>
);

//React Functional Component
const HeadingComponent = () => {
    return <h1>Namaste React Functional component</h1>;
};
*/

/** Shorthand syntax for react functional components */

/** 
const Title = function () {
  return (
    <h1 className="head" tabIndex="5">
        Namaste React using JSX 🚀
    </h1>
  );
};
const HeadingComponent2 = () => {
    return <h1 className="heading">Namesate React Functional Component</h1>
}
const HeadingComponent3 = () => (
    <div id="container">
    <h1 className="heading">Namesate React Functional Component</h1>
    </div>
)

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<HeadingComponent/>)
*/

/** Component Composition
const Title = () => (
    <h1 className="head" tabIndex="5">
        Namaste React using JSX 🚀
    </h1>
);

//React Functional Component
const HeadingComponent3 = () => (
    <div id="container">
    <Title/>
    <h1 className="heading">Namesate React Functional Component</h1>
    </div>
)
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<HeadingComponent/>)
*/

/**
const title = (
    <h1 className="head" tabIndex="5">
        Namaste React using JSX 🚀
    </h1>
);

const number = "100000"
//React Functional Component
const HeadingComponent = () => (
    <div id="container">
    {number}
    <h1 className="heading">Namesate React Functional Component</h1>
    </div>
)
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<HeadingComponent/>)
*/

/**
const title = (
    <h1 className="head" tabIndex="5">
        Namaste React using JSX 🚀
    </h1>
);

//React Functional Component
const HeadingComponent = () => (
    <div id="container">
    {title}
    <h1 className="heading">Namesate React Functional Component</h1>
    </div>
)
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<HeadingComponent/>)
*/
/**
const elem = <span>React span element</span>

//React Functional Component
const HeadingComponent = () => (
    <div id="container">
    <h1 className="heading">Namesate React Functional Component</h1>
    </div>
)

const title = (
    <h1 className="head" tabIndex="5">
        {elem}
        Namaste React using JSX 🚀
        <HeadingComponent/>
    </h1>
);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(title)
 */


/**
const Title = () => (
    <h1 className="head" tabIndex="5">
        Namaste React using JSX 🚀
    </h1>
);

//React Functional Component
const HeadingComponent = () => (
    <div id="container">
    {Title()}
    <Title>
    <Title></Title>
    <h1 className="heading">Namesate React Functional Component</h1>
    </div>
)

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<HeadingComponent/>)
 */

/**  Inline styles
const styleCard = {
    backgroundColor: "#f0f0f0",
};

const RestaurentCard = () => {
    return (
        <div className="res-card" style={styleCard}>
            <h3>Meghana Foods</h3>
        </div>
    )
}

const RestaurentCard = () => {
    return (
        <div className="res-card" style={{ backgroundColor: "#f0f0f0" }}>
            <h3>Meghana Foods</h3>
        </div>
    )
}
 */