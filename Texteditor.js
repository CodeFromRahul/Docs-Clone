import {useCallback} from 'react'
import quill from "quill"
import "quill/dist/quill.snow.css"


export default function Texteditor() {
    
    const wrapperRef = useCallback(wrapper=>{
        if(wrapper == null)return
        wrapper.innerHtml= ""
        const editor = document.createElement('div')
        wrapper.append(editor)
        new quill(editor,{
            theme:"snow",
        })
       
       },[])
      
    return (
  
    <div id="container" ref={wrapperRef} > </div>
    
    
  )
}
