import React, {useState, useEffect} from "react";

const RandomShow = () => {
    const [month, setMonth] = useState();
    const [day, setDay] = useState();
    const [year, setYear] = useState();
    // const [showOnThisDate, setShowOnThisDate] = useState(null);
    const [isRandom, setIsRandom] = useState();
    // const [allPhishShows, setAllPhishShows] = useState();
    const [randomPhishShow, setRandomPhishShow] = useState();
    const [reListenURL, setReListenURL] = useState();

    async function fetchRandomShows () {
        const response = await fetch("https://api.phish.net/v3/setlists/tiph?apikey=788C91866CF5717C4484");
        const jsonData = await response.json();
        
        setRandomPhishShow(jsonData.response.data[0]);
        setIsRandom(true);
        setYear(jsonData.response.data[0].short_date.slice(-4));
        
        setMonth(jsonData.response.data[0].short_date.slice(0, 2));
        setDay(jsonData.response.data[0].short_date.slice(3,5));
        setReListenURL(`https://relisten.net/phish/${year}/${month}/${day}`);
    }

  
    useEffect(()=> {
        const today = new Date();
        fetchRandomShows();
        setMonth(today.getUTCMonth() + 1);
        setDay(today.getUTCDate());
        
        
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [month, day, year]);
    
    console.log(randomPhishShow);
    // console.log(allPhishShows);
    console.log({year});
    console.log({month});
    console.log({day});
    if(isRandom){
        return(
            <div className="randomShow">
                <h6>Today in Phish History {month}/{day}/{year}: <a href={reListenURL} rel="noreferrer" target="_blank">Listen on reListen</a></h6>
                
            </div>
        )
    } else {
        return(
            <div>
                <p>Today is {month}/{day}/{year}</p>
            </div>
        )
    }

    
}

export default RandomShow;