import CalendarRender from "react-calendar";
import { useState } from 'react'

import { format } from "date-fns";
import { ptBR } from "date-fns/locale";

import 'react-calendar/dist/Calendar.css';


export const Calendar = () => {

    
    const [value, onChange] = useState(new Date());
    const date = new Date();
    const formattedDate = format(date, 'dd-MM-yyyy', {locale: ptBR})


    return (
        <CalendarRender onChange={onChange} value={value}/>
    );
}
