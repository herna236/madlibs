### Conceptual Exercise

Answer the following questions below:

- What is React? When and why would you use it?
a javascript library (created by facebook). It is used for front end applications. it allows you to use jsx.

- What is Babel?
its a javascript compilier. it can convert newer syntax like jsx to older syntax that is broadly used amongst browsers.

- What is JSX?
its a compination of js and html

- How is a Component created in React?
you have to define a JavaScript function or class that returns JSX (JavaScript XML) to describe the UI elements that the component represents

- What are some difference between state and props?
Props (short for properties) are used to pass data from a parent component to a child component. They are immutable and read-only for the child component.
State is managed within a component and is used for mutable data that affects a component's rendering or behavior.

- What does "downward data flow" refer to in React?
it refers to how data is passed from parent to child

- What is a controlled component?
Controlled components are components where form data (such as input field values) and their behavior are controlled by React state.
- What is an uncontrolled component?
Uncontrolled components are components where the form data is handled by the DOM itself rather than React state. The value of the form element is managed by the DOM and can be accessed via a ref after the component has been rendered.
- What is the purpose of the `key` prop when rendering a list of components?
The key prop in React is a special attribute that should be included when rendering lists of elements or components. Its primary purpose is to help React identify which items have changed, are added, or are removed from a list.
- Why is using an array index a poor choice for a `key` prop when rendering a list of components?
because the indicies can change when the list is changed. 

- Describe useEffect.  What use cases is it used for in React components?
allows you to run side effects, like when a prop is interacted with a function wil run.  

- What does useRef do?  Does a change to a ref value cause a rerender of a component?
useRef is a hook in React that allows you to create a mutable reference to a DOM element or any mutable value that persists across renders without causing the component to re-render when the ref value changes.
- When would you use a ref? When wouldn't you use one?
Besides DOM elements, useRef can also store any mutable value that you want to persist between renders without triggering a re-render. This value persists for the entire lifecycle of the component. so if you want a value to persist even after a render 
- What is a custom hook in React? When would you want to write one?
A custom hook in React is a JavaScript function whose name starts with use and that may call other hooks. Custom hooks allow you to extract and reuse logic across multiple components in a React application. They encapsulate common patterns or behaviors into reusable functions, enhancing code organization, reusability, and maintainability.