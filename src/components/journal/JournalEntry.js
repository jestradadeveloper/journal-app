import React from 'react'

export const JournalEntry = () => {
    return (
        <div className="journal__entry pointer">
            <div 
                className="journal__entry-picture"
                style={
                    {
                        backgroundSize:'cover',
                        backgroundImage:'url(https://i.pinimg.com/originals/46/da/e5/46dae512e375bee2664a025507da8795.jpg)'
                    }
                }
            ></div>
            <div className="journal__entry-body">
                <p className="journal__entry-title">El titulo de mi entrada</p>
                <p className="journal__entry-content">contenido de la entrada resumen</p>
            </div>
            <div className="journal__entry-date-box">
                <span>Monday</span>
                <h4>28</h4>
            </div>
        </div>
    )
}
