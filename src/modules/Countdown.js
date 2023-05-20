import React, { useState, useEffect} from "react";

const Countdown = () => {
    const [daysRemaining, setDaysRemaining] = useState(0);

    useEffect(() => {
        const targetDate = new Date('July 21, 2023');
        const today = new Date();
        const timeRemaining = targetDate.getTime() - today.getTime();
        const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
        setDaysRemaining(days);
    }, []);
    return (
        <div>
            
            <h2>{daysRemaining} days to go!</h2>
            <h2>Countdown</h2>
        </div>
    );
};

export default Countdown;