import React, { useState, useEffect, useRef} from "react";


const RandomShow = ()=> {
    const [allShows, setAllShows] = useState([]);
    const [randomShow, setRandomShow] = useState(null);
    const [randomIndex, setRandomIndex] = useState(null);
    const effectTriggeredRef = useRef(false);
    const [artist, setArtist] = useState('');
    const [venue, setVenue] = useState('');
    const [date, setDate] = useState('');
    const [setlist, setSetlist] = useState(null);

    useEffect(()=> {
        if (!effectTriggeredRef.current && randomShow === null) {
            effectTriggeredRef.current = true;
            const fetchAllShows = async () => {
                try {
                    const response = await fetch('https://api.phish.net/v5/shows/state/PA.json?apikey=788C91866CF5717C4484');
                    const jsonData = await response.json();
                    const index = Math.floor(Math.random() * jsonData.data.length);
                    setRandomIndex(index);            
                    setAllShows(jsonData);
                    setRandomShow(jsonData.data[index]);
                    
              
                } catch (error) {
                    console.error('Error fetching allShows:', error);
                }
            };
            
            fetchAllShows();
           
            
        }
    },);
   
    useEffect(()=> {
        setArtist(randomShow.artist_name);

    },[randomShow]);

    return (
        
        <div>
        
            <p>{randomIndex}</p>
            <p>{artist}</p>

        </div>
    );
};

export default RandomShow;