import { useState } from 'react'
import './App.css'
import { marked } from 'marked';

function App() {
  const [text, setText] = useState(`
  # Title as H1 
  ## Title as H2 
  ------
  [The google](https://www.google.com)

  \`code\`

  \`\`\`
  function foo() {
    return "bar"
  }
  \`\`\`

  1. One
  2. Two
  3. Three

  - Three
  - Two
  - One

  > Here's an example of a blockquote

  ![alt text](image.jpg)

  **Poop**
  `);

  const html = marked.parse(text);

  const handleChange = (e) => {
    let md = marked(e.target.value, {
      mangle:false,
      headerIds:false,
    });
    console.log(typeof md)
    setText(md);
  }

  return (
    <>
      <span id="editor">
        <div 
          className="section-title"
        >#Editor</div>
        <textarea
          name="editor" 
          id="area" 
          cols="60" 
          rows="20"
          onChange={(e) => handleChange(e)}
        >{text}</textarea>
      </span>
      <div
        id="preview"
      >
        <div 
          className="section-title"
        >#Previewer</div>
        <main
          className="target"
          dangerouslySetInnerHTML={{
            __html: html
          }}
        ></main>
      </div>
    </>
  )
}

export default App