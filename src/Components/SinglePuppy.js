import {useParams} from "react-router-dom";

const SinglePuppy = (props) =>{
    const { id } = useParams();
    const {puppyProps} = props;
    console.log(puppyProps);

    // console.log(puppyProps)
    
    const[selectedPuppy] = puppyProps.filter((singlePuppy) =>{  
        return singlePuppy.id == id;
    })
    console.log(selectedPuppy);
        return(
            <div id="singlePupContainer">
                <div className="singlePup">
                    

                    <p>Name: {selectedPuppy.name}</p>
                    <p>Breed: {selectedPuppy.breed}</p>
                    <p>Status: {selectedPuppy.status}</p>
                    <p>TeamId: {selectedPuppy.teamId}</p>
                    <img src={selectedPuppy.imageUrl}/>



                </div>
            </div>
        )

}
export default SinglePuppy;