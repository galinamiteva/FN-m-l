import React, {useState, useEffect} from 'react';

import './Goal.css';



function Goal({goal, close}){
    const goalNumber=goal.code;    // Här jag vill hämta goalNumber från den andra API:n för att använda i fectchen ner, men kan inte !
   
    const[dataGoals, setDataGoal] = useState([]);
    
    useEffect(async () => {
        const response = await fetch(`https://unstats.un.org/SDGAPI/v1/sdg/Goal/${goalNumber}/Target/List?includechildren=true`);
        const data = await response.json();
        
        setDataGoal(data);        
        
                
    }, []);

   
    function dataGoalsCode(){
        {dataGoals.map((dataGoal)=>{
            <h1 className='overlay-info-header'>`Goal ${dataGoal.code}`</h1>
        })
    }}
   
    function dataGoalsdescription (){
        {dataGoals.map(()=>{
            <p className='summary'>{dataGoals.description}</p>
        })}        
    }

    return(<section className='overlay show'>
            {dataGoals.targets.map(( target, index)=>{
                return <div className='overlay-info' key={index}>
                            {dataGoalsCode}
                            <h2 className='overlay-info-title'>{target.title}</h2>
                            <article id='info-text'>
                                    {dataGoalsdescription}
                                    <p> {target.description}</p>
                            </article>
                            <button id='info-close'  onClick={()=> close('')}>X</button>
                           
                        </div>
            })}                          
                
        </section>
    )

}

export  default Goal;