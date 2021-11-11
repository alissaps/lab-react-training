import { useState } from 'react';

import glasses from "./assets/maxence-glasses.png"
import man from "./assets/maxence.png"

function ClickablePicture() {
    let [picture, setWithGlasses] = useState(true);
    
    function handleGlasses(){
        setWithGlasses(!picture);
    }

    return (
        <div>
            <img className="w-25" src={picture ? man : glasses} onClick={handleGlasses} alt="..."/>
        </div>

    )
}

export default ClickablePicture;