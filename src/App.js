import './App.css';
import  './firebase.js';
import {useEffect, useState} from 'react';
function App() {

  const [user,setUser] = useState ('willian');

    useEffect( ()=>{

    },[])


    return(
      <div className="App">
         
          <div className= "header">
              <div className='center'>
              
                    <div className ="header_logo" >
                      <a href='https://instagram.com'><img src='https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Instagram_logo.svg/840px-Instagram_logo.svg.png'  alt='instagram' height='40'/></a>
                    </div>
                    {
                        (user)?
                        <div>ola willian</div>
                        :
                        <div className='header_loginForm'>
                        <form>
                          <input type="text" placeholder = "login..."/>
                          <input type="password" placeholder = "senha..."/>
                          <input type='submit' name="acao" value= 'Entre'/>
                        </form>
                    </div>

                    }
                

                    
              </div>
          </div>
      </div>
    );



}

export default App;
