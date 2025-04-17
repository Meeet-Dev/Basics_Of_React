# 🧠 React Interview Concepts Cheat Sheet

A comprehensive breakdown of essential React concepts, commonly asked in interviews and useful for solidifying core React knowledge.

---

## ● Is JSX mandatory for React?

JSX is **not mandatory** for React. You can use `React.createElement()` to create elements manually. However, JSX is highly recommended because:
- It improves readability and developer experience.
- It allows writing HTML-like code directly inside JavaScript.
- It compiles to `React.createElement()` under the hood.

---

## ● Is ES6 mandatory for React?

**No**, but it's **strongly recommended**.

React projects commonly use ES6+ features like:
- `let` and `const`
- Arrow functions (`=>`)
- Destructuring
- Spread/rest operators
- Modules (`import`/`export`)
- Template literals

Using ES6 enhances code clarity and makes React development smoother.

---

 ● `{TitleComponent}` vs `{<TitleComponent/>}` vs `{<TitleComponent></TitleComponent>}` in JSX

| Syntax                         | Meaning                                                                 |
|--------------------------------|-------------------------------------------------------------------------|
| `{TitleComponent}`             | Refers to the function itself, not rendering it.                       |
| `{<TitleComponent />}`         | Renders the component — invokes the function and outputs JSX.          |
| `{<TitleComponent></TitleComponent>}` | Same as above — useful when passing children to the component. |

Inside JSX, always use the angle bracket form to render components:<TitleComponent />
---
## ● How can I write comments in JSX?

Inside JSX blocks, wrap comments inside curly braces:

{/* This is a JSX comment */}

---
## 🔹 What is `<React.Fragment></React.Fragment>` and `<> </>`?

These are used to **group multiple elements without adding extra DOM nodes**.

- `<React.Fragment>` is the full syntax.
- `<> </>` is the shorthand.

They are useful when returning multiple elements from a component without wrapping them in unnecessary `<div>` elements.

---

## 🔹 What is Virtual DOM?

The **Virtual DOM (VDOM)** is a lightweight JavaScript object representing the actual DOM.

React uses it to:

- Determine what changed after a render.
- Minimize direct DOM manipulation (which is slow).
- Update only the changed parts efficiently.

---

## 🔹 What is Reconciliation in React?

**Reconciliation** is the process where React:

- Compares the new Virtual DOM with the previous one.
- Determines what has changed (using a diffing algorithm).
- Applies the minimal set of changes to the actual DOM.

This process enables **fast and efficient UI updates**.

---

## 🔹 What is React Fiber?

**React Fiber** is the **reconciliation engine** introduced in **React 16**.

### ✅ Benefits:
- Enables **incremental rendering** by breaking rendering into units of work.
- **Prioritizes updates** (e.g., animations over background tasks).
- Improves **error handling** and supports **asynchronous rendering**.

---

## 🔹 Why do we need keys in React? When do we need keys?

**Keys** help React identify elements in a list and track their changes over time.

### Use keys when rendering lists to:
- Maintain component state properly.
- Avoid unnecessary re-renders.
- Improve performance.

---

## 🔹 Can we use index as keys in React?

You **can**, but it’s **not recommended** if:

- List items are dynamic.
- Items can be inserted, deleted, or reordered.

### Using index may cause:
- Incorrect UI updates.
- Bugs with controlled inputs.
- Reduced performance.

✅ **Best practice**: Use **unique IDs** for keys.

---

## 🔹 What is `props` in React? Ways to use them?

**Props** (short for *properties*) are **read-only inputs** passed from **parent to child components**.

They help:

- Enable **data-driven UI**.
- Allow **component reuse**.

---

# ⚛️ React: Props and Config Driven UI

---

## 🔹 Using Props in React

You can pass data to components via props like this:

```js
<RestaurantCard name="KFC" rating={4.5} />
```

---

## 🔹 Using Props in React

- **Using props object**
```js
function RestaurantCard(props) {
  return <h1>{props.name}</h1>;
}
```

- OR using destructuring
```js
 function RestaurantCard({ name }) {
  return <h1>{name}</h1>;
 }
```
---
# ⚙️ What is a Config Driven UI?

A **Config Driven UI** is a user interface that is built dynamically based on configuration or data, rather than being hardcoded.

---

## 🧩 Example

You have an array of restaurant objects, and you use `.map()` to generate components for each one:

resList.map((restaurant) => (
  <RestaurantCard key={restaurant.name} {...restaurant} />
));

## ✅ Benefits of Config Driven UI

- **Scalable** – Easily handle many UI elements.
- **Maintainable** – Easier to update via config/data changes.
- **Reusable** – Components adapt to different data sets.
- **Dynamic** – UI updates automatically based on data.



## 📦 Exports in JavaScript

### ✅ Named Export
Used to export multiple variables/functions from a file.

```js
// file: utils.js
export const add = (a, b) => a + b;
export const subtract = (a, b) => a - b;
```

```js
//Usage
import { add, subtract } from './utils';
```
---

### 🌟 Default Export
Used when you want to export a single main thing from a file.

```js
// file: utils.js
export default function multiply(a, b) {
  return a * b;
}
```

```js
//Usage
import multiply from './utils';
```
---
### 🧺 * as Export
Used to import everything from a module under a single namespace.

```js
import * as Utils from './utils';
Utils.add(2, 3);
```
---
### ⚙️ Importance of config.js
The config.js file usually contains app-wide constants, like:

API URLs

App name/version

Feature toggles

It helps to keep code clean, centralized, and easy to manage.

---

### 🪝 What are React Hooks?
Hooks are functions that let you use React features (like state, lifecycle, context) inside functional components.

Examples:

useState for state

useEffect for lifecycle

useContext for context

---

### 🔄 Why use useState Hook?
useState allows you to add state to functional components.

```js
import { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);
  return (
    <button onClick={() => setCount(count + 1)}>
      Count: {count}
    </button>
  );
}
```
---

# 🧱 What is a Microservice?
A microservice is a small, independently deployable service that handles a specific business function. It communicates with other services via APIs.

# 🏛️ What is Monolith Architecture?
A monolith is a single, tightly-coupled application where all features are in one codebase and deploy together.

---
## 🆚 Monolith vs Microservice

| Feature      | Monolith                  | Microservices                         |
|--------------|---------------------------|----------------------------------------|
| Deployment   | Single unit               | Independent services                   |
| Scalability  | Hard to scale parts       | Easy to scale individually             |
| Development  | Slower for large apps     | Parallel team development possible     |
| Maintenance  | Risky updates             | Easier to isolate and fix              |

---

## 🎣 Why use useEffect Hook?
useEffect handles side effects (like API calls, subscriptions, DOM updates).

```js
import { useEffect, useState } from 'react';

function User() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    fetch('/api/user')
      .then(res => res.json())
      .then(data => setUser(data));
  }, []); // empty dependency = run only once
}
```

---

## ❓ What is Optional Chaining?
Optional chaining (?.) lets you safely access nested properties without crashing if something is undefined or null.

```js
const user = { name: 'Alex', address: null };
console.log(user.address?.city); // undefined (no error)
```

## 💫 What is Shimmer UI?

Shimmer UI is a **loading placeholder** that mimics the structure of actual content while the data is loading — often animated with a shimmer effect.

Used to **enhance UX** during data fetching.

---

## 🔣 JS Expression vs JS Statement

| Type       | Example            | Returns a value? |
|------------|--------------------|------------------|
| Expression | `1 + 2`, `x === 3` | ✅ Yes           |
| Statement  | `if`, `for`, `while` | ❌ No          |

```js
// Expression
const sum = 1 + 2;

// Statement
if (sum === 3) {
  console.log("Correct");
}
```


