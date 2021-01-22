import React, {useState, useEffect} from 'react';


import './App.css';
import Goal from './Goal';



function App(props){
    const[currentGoal, setCurrentGoal] = useState([]);
    

     useEffect(async () => {
        const response = await fetch('https://unstats.un.org/SDGAPI/v1/sdg/Goal/List?includechildren=false');
        const data = await response.json();  
        
        setCurrentGoal(data);
        
    }, []); 
  
  
        function GeneralView({goal, moreInfo}){
            return(
                <div className='goal'>
                    <p>{goal.title}</p>
                    <span> {goal.code}</span>
                    <button data-code={goal.code} onClick={()=>moreInfo(goal)}>Läs mer</button>
                </div>
            )
        }
      

return (    
    <main>
        <section className="logo">
	        <h1>FN:s hållbarhetsmål</h1>
        </section>

            {currentGoal? <Goal goal={currentGoal} close={setCurrentGoal}/>: 

        <section id="goals">
            {currentGoal.map((goal, index)=>{   
                return <GeneralView goal={goal} moreInfo={setCurrentGoal} key={index}/> 
                
            })}
        </section>
        }
    </main>
)
}

export default App;