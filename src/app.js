// import validator from 'validator';
import React from 'react';
import ReactDOM from 'react-dom';

// This is the projects title, change to fit needs
const projectTitle = 'Form Submitter'


// This will hold the client details and display to the console at end when filled in
let clientDetails = []; 


// visibility set for each stage. Will update using function to display each stage
let visibilityStageOne = true;
let visibilityStageTwo = false;
let visibilityStageThree = false;


// Functions that toggle each stage visibility
const visibilityStageOneToggle = () => { visibilityStageOne = !visibilityStageOne, render()};
const visibilityStageTwoToggle = () => { visibilityStageTwo = !visibilityStageTwo, render()};
const visibilityStageThreeToggle = () => { visibilityStageThree = !visibilityStageThree, render()};


// Function to check to see if the client details are updating
const checkDetails = () => { console.log(clientDetails)};


// Function formOne submisson
const onFormOneSubmit = (event) => {

    // don't refresh the entire page
    event.preventDefault(); 

    // send form values to client details array
    clientDetails.push(event.target.elements.clientTitle.value)
    clientDetails.push(event.target.elements.clientName.value)
    clientDetails.push(event.target.elements.clientDoB.value)

    // toggle visibility of stage one and two
    visibilityStageOneToggle();
    visibilityStageTwoToggle();
}


// formOne
const formOne = (
    <form id="formOne" onSubmit={onFormOneSubmit}>
        <select id="clientTitle" name="clientTitle" required >
            <option value="Mr">Mr</option>
            <option value="Mrs">Mrs</option>
            <option value="Mx">Mx</option>
            <option value="Miss">Miss</option>
            <option value="Master">Master</option>
        </select>
        <input type="text" name="clientName" required ></input>
        <br></br>
        <input type="date" name="clientDoB" required ></input>
        <br></br>
        <button>Next</button>
        <br></br>
    </form>
)


// function formTwo submission
const onFormTwoSubmit = (event) => {

    // don't refresh the entire page
    event.preventDefault();

    // send form values to client details array
    clientDetails.push(event.target.elements.clientLocation.value)
    clientDetails.push(event.target.elements.clientDoT.value)
    clientDetails.push(event.target.elements.clientFeedback.value)

    // send client details array to the console
    checkDetails();

    // toggle visibility of stage two and three
    visibilityStageTwoToggle();
    visibilityStageThreeToggle();
}


// formTwo
const formTwo = (
    <form id="formTwo" onSubmit={onFormTwoSubmit}>
        <input type="text" name="clientLocation" required ></input>
        <br></br>
        <input type="date" name="clientDoT" required ></input>
        <br></br>
        <textarea type="text" name="clientFeedback" cols="50" rows="10" defaultValue="Any feedback would be great!"></textarea>
        <br></br>
        <button>Submit</button>
    </form>
)


// thankYou note
const thankYou = (
    <div>
        <p>Thanks for all the help</p>
        <p>Hope to see you soon</p>
    </div>
)


// Function renders the stage. It can be called again to refresh elements to the DOM
const render = () => {
    const jsx = (
        <div>
            <h1>{projectTitle}</h1>

            {visibilityStageOne && (
                <div>
                    {formOne}  
                </div>
            )}
            
            {visibilityStageTwo && (
                <div>
                    {formTwo}
                </div>
            )}

            {visibilityStageThree && (
                <div>
                    {thankYou}
                </div>
            )}

        </div>
    );
    ReactDOM.render(jsx, document.getElementById('app'));
};

// Call render for the first time
render();
  