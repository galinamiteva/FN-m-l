import React, {useState, useEffect} from 'react';

import './App.css';
import Goal from './Goal';
import GeneralView from './GeneralView'


function App(){

    const[lists, setLists] = useState([]);
    const[page, setPage] = useState('');

    useEffect(async () => {
        try{
            const response = await fetch('https://unstats.un.org/SDGAPI/v1/sdg/Goal/List?includechildren=true');
        const data = await response.json();  
        
        setLists(data);
        }
        catch (error){
            console.log(error)
            
            document.querySelector('.error').classList.add('show');
        }
        
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
            <section className="error">
                    <span>&#9888;</span>
                    <p>Loading</p>
                </section>
        </main>

    )



}
export default App;
