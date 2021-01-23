import React from 'react';
import './GeneralView.css';

function GeneralView(props){
   function moreInfo(){
       props.moreInfo(props.goal)
   }
    return ( 
            
            <div className='goal' key={props.index}>
                <p>{props.goal.title}</p>
                <span> {props.goal.code}</span>
                <button data-code={props.goal.code} onClick={moreInfo}>Learn more</button>
            </div>
       
    )
}

export default GeneralView;