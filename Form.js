import { useState ,useEffect } from "react";
// import Modal from "./Modal";
const API_KEY = "";
export default function Form() {
    // const [month, setMonth] = useState(3);
    // const [holidays, setHolidays] = useState([]);

    useEffect(() => {
        async function getHolidays() {
            const url = `https://holidays.abstractapi.com/v1/?api_key=${API_KEY}&country=US&year=2020&month{month}`;
            const response = await fetch(url);
            const data = await response.json();
            console.log('data is', data);
            setHolidays(data);
        }

    }, [month]);
    getHolidays();
    function handleSubmit() {
        
    }
        return () => {
            <div>
                <form onSubmit={handleSubmit}>
</form>
                {/* <div>
                    month number: {month}
                </div>
                {holidays[0] && (
                    <div> the first holiday is ;{holidays[0].name }</div>
                )}
                <button onClick={() => setMonth(4)}>change month</button>
                 */}
            </div>
        };
}