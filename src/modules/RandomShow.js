import React, {useState, useEffect} from "react";

const RandomShow = () => {
    const [showDate, setShowDate] = useState();
    const [month, setMonth] = useState();
    const [day, setDay] = useState();
    const [year, setYear] = useState();
    const [venue, setVenue] = useState();
    const [location, setLocation] = useState();
    const [setlist, setSetlist] = useState();
    // const [randomPhishShow, setRandomPhishShow] = useState();
    const [reListenURL, setReListenURL] = useState();

    const [effectTriggered, setEffectTriggered] = useState(false);

    const fetchRandomShows = ()=> {
        fetch("https://api.phish.net/v3/setlists/tiph?apikey=788C91866CF5717C4484")
        .then(response =>{
            return response.json();
        })
        .then(data => {
            setShowDate(data.response.data[0].long_date);
            setYear(data.response.data[0].short_date.slice(-4));
            setMonth(data.response.data[0].short_date.slice(0, 2));
            setDay(data.response.data[0].short_date.slice(3,5));
            setVenue(data.response.data[0].venue);
            setLocation(data.response.data[0].location);
            setSetlist(data.response.data[0].setlistdata);
            
        })
    }

    useEffect(()=> {
        if(!effectTriggered) {
            setEffectTriggered(true);
            const today = new Date();
            setMonth(today.getUTCMonth() + 1);
            setDay(today.getUTCDate());
            fetchRandomShows();
            setReListenURL(`https://relisten.net/phish/${year}/${month}/${day}`);
        }
        
        

    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [month, day, year, effectTriggered]);
    
    return(
        <div className="randomShow">
            <h4>Today in Phish History {showDate} </h4>
            <p><span dangerouslySetInnerHTML={{__html:venue}}/> {location} <span className="relisten"><a href={reListenURL} rel="noreferrer" target="_blank">Listen on reListen</a></span></p>
            <div className="setlist" dangerouslySetInnerHTML={{__html: setlist}}/>
            
        </div>
    )

    
}

export default RandomShow;