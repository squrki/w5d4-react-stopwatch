import { STARTSTOPWATCH, STOPSTOPWATCH, RESETSTOPWATCH } from "./actionTypes"

const initialState = {
    // stopwatch: [],
    elapsed: 0,
    running: false,
}

const stopwatchReducer = (state = initialState, action) => {
    switch (action.type) {
        case STARTSTOPWATCH:
            return {
                // stopwatch: [...state.stopwatch, { elapsed: action.payload.elapsed, running: true }]
                elapsed: state.elapsed,
                running: true
            }
        case STOPSTOPWATCH:
            return {
                // stopwatch: [...state.stopwatch, { elapsed: action.payload.elapsed, running: false }]
                elapsed: state.elapsed,
                running: false
            }
        case RESETSTOPWATCH:
            return {
                // stopwatch: [...state.stopwatch, { elapsed: 0, running: false }]
                elapsed: 0,
                running: false
            }
        default:
            return state
    }
}

export default stopwatchReducer