import React from "react";
import ReactDOM from "react-dom/client";

// React.createElement() => Converts it into a object => then the object is converted into a virtual DOM => then the virtual DOM is converted into a real DOM => then the real DOM is rendered on the screen
const root = ReactDOM.createRoot(document.getElementById("root"));  
const heading = React.createElement(
  "h1", 
    { id: "heading" },
    "Hello World from React"
);

// JSX - is not HTML - is a syntax extension for JavaScript that looks similar to HTML. It allows you to write HTML-like code within JavaScript files, making it easier to create and manage React components. JSX is then transformed into JavaScript function calls by a compiler (like Babel) before being rendered in the browser.
// This also creates a React ELement just like above 
// This is not a pure javascript as jsx is not understood by the browser. It needs to be converted into a javascript code using babel or other compilers.
// So this JSX code is transpiled by parcel before it reaches to the JS engine.
// Parcel has babel integrated into it, so we don't need to do anything extra to transpile the code.
// The transpiled code will be similar to the one above using React.createElement() method.

const jsxHeading = <h1>Namaste React using JSX</h1>
// root.render(jsxHeading);

// React Component

// Functional Component
// A Functional Component is a JavaScript function that returns a JSX element which is also a React Element.

const HeadingComponent = () => {
    return (
        <h1>Namaste React using Functional Component</h1>   
    )
}

const TitleNo = 3;
// We can use variables inside JSX using curly braces {}. This is called JSX Expression.
// We can use any javascript expression inside the curly braces. This is called JSX Expression.
// JSX is so powerfull that it sanitizes the code and makes it safe to use. So we can use any javascript expression inside the curly braces.
// This prevents XSS attacks and makes the code safe to use.
const Title = () => {
  return <h1>Title {TitleNo}</h1>
}

// A component inside another component is known as Component Composition or Nested Components
// I can call the Title Component inside the brackets as function call.
const TitleInfo = () => {
    return(
    <>
    <Title />
    
    {Title()}
    <h3>Title Info</h3>
    </>
    )
}
root.render(<TitleInfo />); 