import React, { useState } from "react";

const useFlip = () => {
    const [state, setState] = useState(true);
    
    const flipCard = () => {
        setState(stateVar => !stateVar);
    }

    return [state, flipCard];
}

export {useFlip};