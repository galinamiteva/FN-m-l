import React from 'react';
import './Goal.css';

function Goal(props){
    function close(){
        props.close(props.close)
   }

   return(
    <section className='overlay show'>
        <div className='overlay-info'>

            <h1 className='overlay-info-header'>{props.goal.code}</h1>
            <h2 className='overlay-info-header'>{props.goal.title}</h2>
            <article id='info-text'>
                <p className='summary'>{props.goal.description}</p>
                {
                 props.goal.targets.map(target=>{
                     return <p key={target.code}>{target.description}</p>
                 })   
                }
            </article>
                <button id='info-close' onClick={close}>X</button>
        </div>
    </section>
    
   ) 
}



export default Goal; 