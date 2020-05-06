const initState = {
    currentDayplan: null,
    listOfDayplans: [],
    currentEvent: null,
    listOfEvents: [{name:'event1'},{name:'event2'},{name:'event3'},{name:'event4'}],
    currentPlace: null,
    listOfPlaces: []
}

const rootReducer = (state = initState, action) => {
    if(action.type === 'ADD_EVENT') {
        console.log(action.id);
        const listOfEvents = [...state.listOfEvents, action.id];
        return {
            state,
            listOfEvents
        }

    }
    return state;
};

export default rootReducer;