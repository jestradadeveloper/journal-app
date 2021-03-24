import React from 'react'
import { NotesAppBar } from './NotesAppBar'

export const NoteScreen = () => {
    return (
        <div className="notes__main-content">
            <NotesAppBar />
            <div className="notes__content">
                <input 
                    type="text"
                    placeholder="Some awesome title"
                    className="notes__title-input"
                    autoComplete="off"
                />
                <textarea 
                    placeholder="whats going on?"
                    className="notes__text-area"
                >
                </textarea>
                <div className="notes__image">
                    <img 
                        src="https://www.gettyimages.es/gi-resources/images/500px/983794168.jpg" 
                        alt=""
                        
                    />
                </div>
            </div>
        </div>
    )
}
