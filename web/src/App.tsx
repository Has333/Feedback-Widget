/*
//? main React factors: components and properties

//? A component is a function that returns HTML, for example, our App function

//? A property works the same as a HTML tag attribute, but is specific for React components

interface ButtonProps {
  text?: string;
}

function Button(props: ButtonProps) {

  //! On React, to use Tailwind, we use the ClassName property
  return <button className="bg-[#8257e6] p-2 h-10 rounded text-violet-100 hover:bg-violet-700 transition-colors">{props.text ?? 'Default'}</button>
}

function App() {
  return (
    <div className="flex gap-2">
      <Button text="Send" />
      <Button text="Ok" />
      <Button />
    </div>
  )
}

export default App
*/

import { Widget } from "./components/Widget";

export function App(){
  return <Widget />
}
