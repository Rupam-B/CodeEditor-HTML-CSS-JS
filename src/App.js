import { useState, useEffect, useCallback } from 'react';
import './App.css';

import Editor from './components/Editor';

function App() {
  const [html, setHtml] = useState("");
  const [css, setCss] = useState("");
  const [js, setJs] = useState("");

  // Function to set the values in local storage
  const setValuesInLocalStorage = useCallback(() => {
    localStorage.setItem('html', html);
    localStorage.setItem('css', css);
    localStorage.setItem('js', js);
  },[html, css, js]);

  // Function to get the values from local storage (if available) during component initialization
  const getValuesFromLocalStorage = () => {
    const savedHtml = localStorage.getItem('html');
    const savedCss = localStorage.getItem('css');
    const savedJs = localStorage.getItem('js');

    if (savedHtml) setHtml(savedHtml);
    if (savedCss) setCss(savedCss);
    if (savedJs) setJs(savedJs);
  };

  // Use the useEffect hook to get the values from local storage when the component mounts
  useEffect(() => {
    getValuesFromLocalStorage();
  }, []);

  // Use the useEffect hook to set the values in local storage whenever 'html', 'css', or 'js' changes
  useEffect(() => {
    setValuesInLocalStorage();
  }, [setValuesInLocalStorage]);



  const docContent = `
      <html>
       <body>${html}</body>
       <style>${css}</style>
     <script>${js}</script>
       </html>
     `;


 
  return (
    <>
    <h1 className='h1-center'>Code Editor</h1>
    <div className='code-Editor'>
    <div className='top-pane'>
      <Editor 
      language="html"
       heading="HTML" 
       value={html}
       onChange={setHtml}
       />
      <Editor
      language="css"
      heading="CSS" 
      value={css}
      onChange={setCss} />
      
      <Editor 
      heading="JavaScript"
      language="javascript" 
      value={js}
      onChange={setJs}
      />

    </div>

    <div className='bottom-pane'>
      <iframe 
      srcDoc={docContent}
       id='result'
      title='output'
      sandbox='allow-scripts'
      />
    </div>
      </div>
        

    </>
  );
}

export default App;
