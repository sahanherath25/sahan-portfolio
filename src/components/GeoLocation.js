import React, {useState} from "react";
import useGeoLocation from "../customHooks/useGeoLocation";

const GeoLocation=()=>{

    const [countClicks, setCountClicks] = useState(0);
    const {getPosition,position:{lat,lng},error,isLoading}=useGeoLocation()


    function handleClick() {
        setCountClicks((count) => count + 1);
        getPosition()
    }

    return (
        <div>
            <button onClick={handleClick} disabled={isLoading}>
                Get my position
            </button>

            {isLoading && <p>Loading position...</p>}
            {error && <p>{error}</p>}
            {!isLoading && !error && lat && lng && (
                <p>
                    Your GPS position:{" "}
                    <a
                        target="_blank"
                        rel="noreferrer"
                        href={`https://www.openstreetmap.org/#map=16/${lat}/${lng}`}
                    >
                        {lat}, {lng}
                    </a>
                </p>
            )}

            <p>You requested position {countClicks} times</p>
        </div>
    );
}

export default GeoLocation