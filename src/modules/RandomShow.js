import React, {useState, useEffect} from "react";

const RandomShow = () => {
    const [month, setMonth] = useState();
    const [day, setDay] = useState();
    const [year, setYear] = useState();
    const today = new Date();
    const [randomPhishShow, setRandomPhishShow] = useState();
    const [reListenURL, setReListenURL] = useState();

    async function fetchRandomShows () {
        const response = await fetch("https://api.phish.net/v3/setlists/tiph?apikey=788C91866CF5717C4484");
        const jsonData = await response.json();
        
        setRandomPhishShow(jsonData.response.data[0]);

        setYear(jsonData.response.data[0].short_date.slice(-4));
        
        setMonth(jsonData.response.data[0].short_date.slice(0, 2));
        setDay(jsonData.response.data[0].short_date.slice(3,5));
        setReListenURL(`https://relisten.net/phish/${year}/${month}/${day}`);
    }

  
    useEffect(()=> {
        
        fetchRandomShows();
        setMonth(today.getUTCMonth() + 1);
        setDay(today.getUTCDate());
        
        
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [month, day, year]);
    console.log(randomPhishShow);
    return(
        <div className="randomShow">
            <h6>Today in Phish History {month}/{day}/{year}: <a href={reListenURL} rel="noreferrer" target="_blank">Listen on reListen(if available)</a></h6>
            <p></p>
        </div>
    )

    
}

export default RandomShow;