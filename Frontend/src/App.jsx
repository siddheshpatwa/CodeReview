import { useState , useEffect, use } from 'react'
import "prismjs/themes/prism-tomorrow.css"
import prism from "prismjs"
import Editor from 'react-simple-code-editor'
import './App.css'
import axios from 'axios'
import Markdown from 'react-markdown';
import rehypeHighlight from "rehype-highlight";
import "highlight.js/styles/github-dark.css";
function App() {
 const [code ,setcode]= useState(`function sum(){
              return 1 + 1;
              }`)
  const [review , setreview]= useState('')
useEffect(() => {
prism.highlightAll()
},[])
async function reviewCode(){
const response= await axios.post('http://localhost:3000/ai/get-review',{code})
setreview(response.data.response.parts[0].text); // Access the 'text' from the first item in the 'parts' array
console.log(response.data.response.parts[0].text
)
}
  return (
    <>
    <main>
      <div className="left">
        <div className='code'>
        <Editor
  value={code}
  onValueChange={code => setcode(code)}
  highlight={code => prism.highlight(code, prism.languages.javascript , 'javascript')}
  padding={10}
  style={{
    fontFamily: '"Fira code", "Fira Mono", monospace',
    fontSize: 16,
    border: '1px solid #ddd',
    borderRadius: '5px',
    height: '100%',
    width: '100%'
  }}
/>

          <div className='review' onClick={reviewCode}>review </div>
        </div>
        </div>
      <div className="right">
        {/* {review && <h2>Review</h2>} */}

      <Markdown rehypePlugins={[ rehypeHighlight ]}>
      {review || "No review yet."}</Markdown>
      </div>
    </main>
    </>
  )
}

export default App
