# JavaScript DOM Questions & Answers

## 1. What is the difference between `getElementById`, `getElementsByClassName`, and `querySelector` / `querySelectorAll`?

### `getElementById()`
- Selects an element by its **id**.
- Returns a **single element**.
- IDs should be unique in a webpage.

**Example:**
```javascript
const title = document.getElementById("title");
```

---

### `getElementsByClassName()`
- Selects elements by their **class name**.
- Returns a **live HTMLCollection**.
- If elements are added or removed, the collection updates automatically.

**Example:**
```javascript
const cards = document.getElementsByClassName("card");
```

---

### `querySelector()`
- Selects the **first matching element** using any valid CSS selector.
- Returns a **single element**.

**Example:**
```javascript
const button = document.querySelector(".btn");
```

---

### `querySelectorAll()`
- Selects **all matching elements** using a CSS selector.
- Returns a **static NodeList**.
- The list does not automatically update if the DOM changes.

**Example:**
```javascript
const buttons = document.querySelectorAll(".btn");
```

---

### Summary

| Method | Selects By | Returns |
|---------|------------|----------|
| `getElementById()` | ID | Single Element |
| `getElementsByClassName()` | Class | Live HTMLCollection |
| `querySelector()` | CSS Selector | First Matching Element |
| `querySelectorAll()` | CSS Selector | Static NodeList |

---

# 2. How do you create and insert a new element into the DOM?

To create and insert a new element into the DOM:

### Step 1: Create the element
```javascript
const newDiv = document.createElement("div");
```

### Step 2: Add content
```javascript
newDiv.textContent = "Hi!";
```

### Step 3: Insert it into the DOM
```javascript
document.body.appendChild(newDiv);
```

### Complete Example

```javascript
const p = document.createElement("p");
p.textContent = "This is a new paragraph.";
document.body.appendChild(p);
```

---

# 3. What is Event Bubbling? And how does it work?

**Event Bubbling** is a JavaScript event mechanism where an event starts from the **target element** and then moves upward through its parent elements until it reaches the `document`.

For example:

```html
<div id="parent">
    <button id="child">Click Me</button>
</div>
```

```javascript
document.getElementById("child").addEventListener("click", () => {
    console.log("Button clicked");
});

document.getElementById("parent").addEventListener("click", () => {
    console.log("Parent clicked");
});
```

When the button is clicked, the output will be:

```
Button clicked
Parent clicked
```

The event first occurs on the button, then bubbles up to its parent.

---

# 4. What is Event Delegation in JavaScript? Why is it useful?

**Event Delegation** is a technique where instead of adding event listeners to multiple child elements, we attach **one event listener to their parent**.

The parent listens for events that bubble up from its children.

### Example

```javascript
document.getElementById("list").addEventListener("click", function(event) {
    if (event.target.tagName === "LI") {
        console.log(event.target.textContent);
    }
});
```

### Why is it useful?

- Improves performance by using fewer event listeners.
- Works automatically for dynamically added elements.
- Makes the code cleaner and easier to maintain.

---

# 5. What is the difference between `preventDefault()` and `stopPropagation()` methods?

### `preventDefault()`

- Prevents the browser's default behavior.
- Does **not** stop the event from bubbling.

**Example:**

```javascript
document.querySelector("form").addEventListener("submit", function(event) {
    event.preventDefault();
});
```

This prevents the form from submitting.

---

### `stopPropagation()`

- Stops the event from bubbling to parent elements.
- Does **not** prevent the browser's default action.

**Example:**

```javascript
button.addEventListener("click", function(event) {
    event.stopPropagation();
});
```

Now the click event will not reach the parent element.

---

### Difference

| `preventDefault()` | `stopPropagation()` |
|--------------------|---------------------|
| Prevents the browser's default action | Stops event bubbling |
| Example: Prevent form submission | Example: Prevent parent click event |
| Event still bubbles | Event does not bubble |