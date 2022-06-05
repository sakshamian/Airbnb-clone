import React, { useState } from 'react'
import './Search.css'
import { useNavigate } from 'react-router-dom'
import { Button } from '@mui/material'
import { DateRangePicker } from 'react-date-range'
import 'react-date-range/dist/styles.css'
import 'react-date-range/dist/theme/default.css'
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';

function Search() {
    const navigate = useNavigate();
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());

    const selectionRange = {
        startDate: startDate,
        endDate: endDate,
        key: "selection",
    };

    function handleSelect(ranges){
        setStartDate(ranges.selection.startDate);
        setEndDate(ranges.selection.endDate);
    }

    return (
        <div className='search'>
            <DateRangePicker ranges={
              [selectionRange]}  
              onChange={handleSelect}
            />        

            <h2>
                Number of guests <PeopleAltIcon/>
            </h2>

            <input min={0} defaultValue={2} type="number" />
            <Button onClick={() => navigate.push('/search')}>Search Airbnb</Button>
        </div>
    
    )
}

export default Search