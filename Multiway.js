import React from 'react'

const Multiway = () => {
  return (
    <div>
         <div className='page'>
        
        <div className='table'>
            <h2>FROM WHERE?</h2>
            <select>
                <option>CITIES OR AIRPORTS</option>
                <option>ABUJA</option>
                <option>AKWA-IBOM</option>
                <option>ANAMBRA</option>
                <option>LAGOS</option>
                <option>OWEERI</option>
                <option>IBADAN</option>
                <option>CALABAR</option>
                <option>KADUNA</option>
            </select>

        </div><br></br><br></br>


        <div className='depature'>
            <div className='deep'>
                <h2>TO WHERE?</h2>
               <select>
               <option>CITIES OR AIRPORT</option>
               <option>ABUJA</option>
               <option>AKWE-IBOM</option>
               <option>ANAMBRA</option>
               <option>LAGOS</option>
               <option>OWERRI</option>
               <option>IBADAN</option>
               <option>CALABAR</option>
               <option>KADUNA</option>
               </select>
                
            </div>
            <div className='return'>
                

            </div>
        </div>

        <div className='go'>
            <h3><center>Let's Go</center></h3>
        </div>
    </div>

    </div>
  )
}

export default Multiway