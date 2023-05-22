import React, {useState, useEffect} from "react";

const RandomShow = () => {
    const [month, setMonth] = useState();
    const [day, setDay] = useState();
    const [year, setYear] = useState();
    // const [showOnThisDate, setShowOnThisDate] = useState(null);
    const [isRandom, setIsRandom] = useState();
    const [allPhishShows, setAllPhishShows] = useState();
    const [randomPhishShow, setRandomPhishShow] = useState();
    const [reListenURL, setReListenURL] = useState();

    async function fetchRandomShows () {
        const response = await fetch("https://api.phish.net/v3/setlists/tiph?apikey=788C91866CF5717C4484");
        const jsonData = await response.json();
        console.log(jsonData.response.data[0]);
        setRandomPhishShow(jsonData.response.data[0]);
        setIsRandom(true);
        setYear(jsonData.response.data[0].short_date.slice(-4));
        setReListenURL(`https://relisten.net/phish/${year}/${month}/${day}`);
    }

    async function fetchAllShows () {
        const response = await fetch("https://api.phish.net/v5/shows/artist/phish.json?order_by=showdate&apikey=788C91866CF5717C4484");
        const jsonData = await response.json();
        setAllPhishShows(jsonData);
    }

    

    useEffect(()=> {
        const today = new Date();
        fetchAllShows();
        fetchRandomShows();
        setMonth(today.getUTCMonth() + 1);
        setDay(today.getUTCDate());
        setYear(today.getUTCFullYear());
        
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [month, day, year]);
    
    console.log(randomPhishShow);
    console.log(allPhishShows);
    
    if(isRandom){
        return(
            <div className="randomShow">
                <p>random show from {month}/{day}</p>
                <p><a href={reListenURL}>Listen on reListen</a></p>
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