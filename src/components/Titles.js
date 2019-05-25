import React from "react";
/*
class Titles extends React.Component{
    render(){
        return (
        <div>
            <h1>Weather Finder</h1>
            <p> Find out Temperature, conditions and more ..</p>
        </div>
        );
    }
}
*/
const Titles=()=>(
<div>
   
            <h1 className="tittle-container__title">Weather Finder</h1>
            <h3 className="tittle-container__subtitle"> Find out Temperature, conditions and more ..</h3>
        </div>

);
export default Titles;