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

    //name is auto set to be undefined if it's not passed in
    const addElement = async (name) => {
        
        const APIurl = name ? `${url}${name}/` : url; 
        
        const response = await axios.get(APIurl);
        setState(elements => [...elements, { ...response.data, id: uuid() }]);
    };

    console.log(addElement)

    return [state, addElement];
}

export {useFlip, useAxios};