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