//Import React and ReactDOM
import React from 'react';
import ReactDOM from 'react-dom';

//Create a react component


const App = ()=>{
    const buttonText = {text:'Click in'};
    const style = { backgroundColor: 'coral',color: 'white',borderRadius: '2.5px' };
    return (
        <div>
            <h1>Fetch API Demo</h1>
            <label htmlFor="name" className='label'>Enter name</label>
            <input id="name" type="text" />
            <button style={style}>
                {buttonText.text}
            </button>
        </div>
    );
}

//Display the component output on the webpage ;" 

ReactDOM.render(<App />,document.querySelector('#root'));