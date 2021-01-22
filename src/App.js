import React, {useState, useEffect} from 'react';

import './App.css';
import Goal from './Goal';
import GeneralView from './GeneralView'


function App(){

    const[lists, setLists] = useState([]);
    const[page, setPage] = useState('');

    useEffect(async () => {
        const response = await fetch('https://unstats.un.org/SDGAPI/v1/sdg/Goal/List?includechildren=true');
        const data = await response.json();  
        
        setLists(data);
        
        
    }, []);

    function comeBack(){
        setPage('')
    }

    return(
        <main>
            <section className="logo">
	            <h1>Sustainable Development Goals</h1>
            </section>
            <div id='goals'>  
                {
                page ===''? lists.map((list, index)=>{
                    return <GeneralView goal={list}   moreInfo={setPage} key={index}/>
                }): <Goal goal={page}  close={comeBack}/>
                }
            </div>
        </main>

    )



}
export default App;