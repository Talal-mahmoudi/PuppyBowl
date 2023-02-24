import { createRoot } from "react-dom/client";
import { useState, useEffect } from "react";
import {BrowserRouter, Routes, Route, Link} from "react-router-dom";
import '../src/style.css';
import { AllPuppies, SinglePuppy } from "./Components";

const appElement = document.getElementById("app");
const root = createRoot(appElement);

// 'https://fsa-puppy-bowl.herokuapp.com/api/2301-ftb-mt-web-ft/players'

const App = () =>{
    const[puppy, setPuppy] = useState([]);
    async function fetchPuppyData(){
        try {
            const response = await fetch('https://fsa-puppy-bowl.herokuapp.com/api/2301-ftb-mt-web-ft/players');
            const translatedData = await response.json();

            setPuppy(translatedData.data.players);

            // console.log(translatedData.data.players);

        } catch (error) {
            console.log(error)
        }
    }
    useEffect(() => {
        fetchPuppyData();
    }, [])

    return(
        <BrowserRouter>
            <div>
                <nav className="navBar">
                    <div>Welcome to PuppyBowl LVII </div>
                    

                    

                    <Link to="/" id="navLink">See All Puppies</Link>

                </nav>

                <Routes>
                    <Route path="/" element={<AllPuppies puppyProps={puppy}/>} />
                    <Route path="/:id" element={<SinglePuppy puppyProps={puppy}/>} />
                </Routes>
            </div>
        </BrowserRouter>
    )
}

root.render(<App />);
