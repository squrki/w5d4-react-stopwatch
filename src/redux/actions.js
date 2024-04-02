import { STARTSTOPWATCH, STOPSTOPWATCH, RESETSTOPWATCH } from "./actionTypes"

export const startStopwatch = (elapsed) => ({
    type: STARTSTOPWATCH,
    payload: { elapsed },
})

export const stopStopwatch = (elapsed) => ({
    type: STOPSTOPWATCH,
    payload: { elapsed },
})

export const resetStopwatch = (elapsed) => ({
    type: RESETSTOPWATCH,
    payload: { elapsed },
})

