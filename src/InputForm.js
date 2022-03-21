import React, { useEffect, useState } from 'react';

const InputForm = ({ onSubmit, setTopText, setBottomText, isDisabled }) => {
    return (
        <form className='meme-form' onSubmit={onSubmit}>
            <input
                className='input'
                type='text'
                name='topText'
                placeholder='Top Text'
                onChange={(event) => setTopText(event.target.value)}
            />
            <input
                type='text'
                name='bottomText'
                className='input'
                placeholder='Bottom Text'
                onChange={(event) => setBottomText(event.target.value)}
            />
            <button className='button' disabled={isDisabled}>
                Meme me!
            </button>
        </form>
    );
};

export default InputForm;
