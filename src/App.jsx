import { useState } from "react";
import { Q_Images } from "./index.js";
import { ImageButton } from "./ImageButton.jsx";

function Header() {
    return (
      <header>
        <h1>QUIZ</h1>
        <p>
         TRY Your Best!
        </p>
        {/* <button class="button" onClick = {() => show(true,setOut)} > 
            <img src="src/assets/apple.jpg" alt="image"/></button>    
            <h2>{out2}</h2> */}
      </header>
    );
  }
// const [result , setResult] = useState;

function hello(){
    console.log("hajksdjksad");
}
 
export default function App(){
    return(
        <>  
        <Header/>      
        <section className ="action">
           <ImageButton className = {"action"} onSelect = {hello} obj = {Q_Images["Apple"]}/>
           {/* <ImageButton onSelect = {hello} obj = {Q_Images["Cherry"]}/>
           <ImageButton onSelect = {hello} obj = {Q_Images["Avocado"]}/> */}
        </section>
        </>
    );
  }
