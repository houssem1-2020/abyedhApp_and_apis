import axios from 'axios';
import React, { useEffect, useState } from 'react';
import GConf from '../../AssetsM/generalConf';
import {Grid, _ } from "gridjs-react";
import { Button, Icon } from 'semantic-ui-react';
import { Select } from 'semantic-ui-react'
import { Bounce } from 'react-reveal';
import { NavLink } from 'react-router-dom';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid' // a plugin!

function CalendarPage() {
    
    const NotificationCard = () =>{
        return(<>
            <div className='card p-2 shadow-sm mb-3'>
                <div className="d-flex align-items-center">
                    <div className="flex-shrink-0">
                        <img src="http://www.localhost/Abyedh/Assets/images/Search/Icons/boutique.gif" alt="..."  width='50px' height='50px'/>
                    </div>
                    <div className="flex-grow-1 ms-3">
                        <h4 className='mb-0 text-secondary'><NavLink exact='true' to='/'>lighiogh</NavLink></h4>
                        <div><small>2/8/2022 | 14:15:02</small></div>
                    </div>
                </div>
                <div className='card-body row'>
                    <div className='col-8 align-self-center text-end'>
                            تم تسجيل حجز الموعد مع الطبيب فلان الفلاني ليوم 20/12/2022 
                    </div>
                    <div className='col-4 align-self-center text-start'>
                            <span className='bi bi-check-circle-fill bi-md text-success'></span>
                    </div>
                </div>
            </div>
        </>)
    }
    return (  <>
        <Bounce bottom>
            <FullCalendar
                plugins={[ dayGridPlugin ]}
                initialView="dayGridMonth"
                locale='ar'
                height='650px' 
            />
            <br />
        </Bounce>
 
    </>);
}


export default CalendarPage;