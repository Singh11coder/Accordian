import React,{useState} from 'react';
import data from '../data/data.js';
import '../App.css';

const Accordians = () => {
  const [selected,setSelected] = useState(null);
  const [enableMultiSelect, setEnableMultiSelect] = useState(false);
  const [multiple, setMultiple] = useState([]);
 

  function handleSingleSelection(currentId){
     setSelected(currentId);
     
  }

  function handleMultiSelection(currentId){
     let ans = [...multiple];

     let ind = multiple.indexOf(currentId);

     if(ind == -1){
       ans.push(currentId);
     }
     else{
       ans.splice(ind,1);
     }

     setMultiple(ans);
     
     
  }
  return (
    <div className="container">
        <div className="heading-container">
            <button className='heading' 
             onClick={() => setEnableMultiSelect(!enableMultiSelect)}
            >{!enableMultiSelect 
              ? <div>Enable Multi Selection</div>
              : <div>Disable Multi Selection</div>
            }</button>
        </div>
        <div >
           {data.map((d) => 
              <div className="items" 
                 onClick={enableMultiSelect
                  ?() => handleMultiSelection(d.id)
                  :() => handleSingleSelection(d.id) 
                 }
              > 
              <div className='title'>
                <h1>{d.question}</h1>
                {!enableMultiSelect 
                 ? <h1>+</h1>
                 :<div>
                  {multiple.map((item) => <div>
                     { 
                       item === d.id 
                       ? <h1>-</h1> 
                       : <h1>+</h1>
                     }
                  </div>)}
                 </div>
                }
                 
              </div>
               { !enableMultiSelect 
                 ? selected === d.id && (<div className='content'>
                   <h3>{d.answer}</h3>
                  </div>) 
                 :
                 <div>
                  {multiple.map((item) => <div>
                     {item === d.id && <div className='content'>
                          <h3>{d.answer}</h3>
                        </div>}
                  </div>)}
                 </div>
               }
              </div>
              
           
           )}
        </div>
    </div>
  )
}

export default Accordians



