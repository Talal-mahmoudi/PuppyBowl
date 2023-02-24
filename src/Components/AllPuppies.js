import {Link} from "react-router-dom";
import { useState } from "react";
import SinglePuppy from "./SinglePuppy";


const AllPuppies = (props) => {
    const puppy = props.puppyProps;
    const [search,setSearch] = useState("");
    const [searchBreed, setSearchBreed] = useState("");

    let filteredPuppyByName = puppy.filter((singlePuppy) =>{
        let toLower = singlePuppy.name.toLowerCase();
        let toLowerBreed = singlePuppy.breed.toLowerCase();

        return toLower.includes(search.toLowerCase()) && toLowerBreed.includes(searchBreed.toLowerCase());
    })

    // let filteredPuppyByBreed = puppy.filter((singlePuppy) =>{
    //     let toLower = singlePuppy.name.toLowerCase();
    //     return toLower.includes(search.toLowerCase());
    // })
    return(
        <div className="allPups">
            <div id="listOfPups">
                <h2>List of Pups: </h2>
            </div>
            <div id="nameInput">
                <p className="inputBar">Name: </p>
                <input type="text" placeholder="Search by name." onChange={(event) =>{
                    setSearch(event.target.value);
                }}>
                </input>
            </div>
            <div id="breedInput">
                <p className="inputBar">Breed: </p>
                <input type="text" placeholder="Search by breed." onChange={(event) =>{
                    setSearchBreed(event.target.value);
                }}>
                </input>
            </div>
            
                <section className="allPups">
                {
                    filteredPuppyByName.length ? filteredPuppyByName.map((singlePuppy) => {
                        return(
                            <div className="loopedPups" key={singlePuppy.id}>
                                {/* <p>ID: {singlePuppy.id}</p> */}
                                <p>Name: {singlePuppy.name}</p>
                                <p>Breed: {singlePuppy.breed}</p>
                                <img src={singlePuppy.imageUrl}/>
                                <br />
                                <Link className="seeDetails" to={`/${singlePuppy.id}`}>See Details</Link>
                                <br />
                                {/* <img src={singlePuppy.imageUrl}/> */}
                            </div>
                        )
                    }) : <div>no puppies</div>
                }
                </section>
            
        </div>
    )
}
export default AllPuppies;