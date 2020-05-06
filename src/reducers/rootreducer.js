const initState = {
    currentDayplan: null,
    listOfDayplans: [],
    currentEvent: null,
    listOfEvents: [{name:'event1'},{name:'event2'},{name:'event3'},{name:'event4'}],
    currentPlace: null,
    listOfPlaces: [],
    userProfile: null,
}

const rootReducer = (state = initState, action) => {
    console.log(action);
    return state;
};

export default rootReducer;