import React, { useState } from "react";
import uuid from "uuid";
import axios from "axios";

/** sets state variable to true, returns a function flipCard() to change it to false or true */
const useFlip = () => {
    const [state, setState] = useState(true);
    
    const flipCard = () => {
        setState(stateVar => !stateVar);
    }

    return [state, flipCard];
}

/** accepts url 
 * sets state vars to empty arr [],
 * returns a function to add element to arr []
 * after axios API calls to the url passed in
*/
const useAxios = (url) => {
    const [state, setState] = useState([]);
    

    //error: name is not undefined when adding a playing card, it is an object.

    const addElement = async (name = undefined) => {
        const APIurl = name ? `${url}${name}/` : url; 
        
        //error: name is not undefined when adding a playing card, it is an object.
        console.log(name)

        //name adds more on to the url endpoint if needed
        
        const response = await axios.get(APIurl);
        setState(elements => [...elements, { ...response.data, id: uuid() }]);
    };

    console.log(addElement)

    return [state, addElement];
}

export {useFlip, useAxios};