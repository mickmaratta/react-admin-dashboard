import { Visibility } from '@mui/icons-material';
import React from 'react';
import "./widgetSm.css";

const WidgetSm = () => {
  return (
    <div className='widgetSm'>
        <span className="widgetSmTitle">Newly Joined Members</span>
        <ul className="widgetSmList">
            <li className="widgetSmListItem">
                <img src="https://www.w3schools.com/howto/img_avatar.png" alt="" className="widgetSmImg" />
                <div className="widgetSmUser">
                    <span className="widgetSmUsername">Anna Keller</span>
                    <span className="widgetSmUserTitle">Software Engineer</span>
                </div>
                <button className="widgetSmButton">
                    <Visibility className='widgetSmIcon' />
                    Display
                </button>
            </li>
            <li className="widgetSmListItem">
                <img src="https://www.w3schools.com/howto/img_avatar.png" alt="" className="widgetSmImg" />
                <div className="widgetSmUser">
                    <span className="widgetSmUsername">Anna Keller</span>
                    <span className="widgetSmUserTitle">Software Engineer</span>
                </div>
                <button className="widgetSmButton">
                    <Visibility className='widgetSmIcon' />
                    Display
                </button>
            </li>
            <li className="widgetSmListItem">
                <img src="https://www.w3schools.com/howto/img_avatar.png" alt="" className="widgetSmImg" />
                <div className="widgetSmUser">
                    <span className="widgetSmUsername">Anna Keller</span>
                    <span className="widgetSmUserTitle">Software Engineer</span>
                </div>
                <button className="widgetSmButton">
                    <Visibility className='widgetSmIcon' />
                    Display
                </button>
            </li>
            <li className="widgetSmListItem">
                <img src="https://www.w3schools.com/howto/img_avatar.png" alt="" className="widgetSmImg" />
                <div className="widgetSmUser">
                    <span className="widgetSmUsername">Anna Keller</span>
                    <span className="widgetSmUserTitle">Software Engineer</span>
                </div>
                <button className="widgetSmButton">
                    <Visibility className='widgetSmIcon' />
                    Display
                </button>
            </li>
            <li className="widgetSmListItem">
                <img src="https://www.w3schools.com/howto/img_avatar.png" alt="" className="widgetSmImg" />
                <div className="widgetSmUser">
                    <span className="widgetSmUsername">Anna Keller</span>
                    <span className="widgetSmUserTitle">Software Engineer</span>
                </div>
                <button className="widgetSmButton">
                    <Visibility className='widgetSmIcon' />
                    Display
                </button>
            </li>
        </ul>
    </div>
  )
}

export default WidgetSm