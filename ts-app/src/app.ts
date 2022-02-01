/* ---------- Hello World ---------- */
let helloWorld: string = "Hello, World!";

let helloWorldDOMElement: HTMLHeadingElement = document.querySelector(
  ".helloWorld"
) as HTMLHeadingElement;

helloWorldDOMElement.textContent = helloWorld;
console.log(helloWorld);
