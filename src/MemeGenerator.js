import React, { useEffect, useState } from 'react';
import InputForm from './InputForm';
const MemeGenerator = () => {
    const [topText, setTopText] = useState('');
    const [bottomText, setBottomText] = useState('');
    const [allImages, setAllImages] = useState([]);
    const [randomImgUrl, setRandomImgUrl] = useState('');

    useEffect(() => {
        fetch('https://api.imgflip.com/get_memes')
            .then((response) => response.json())
            .then((response) => {
                console.log(response.data);
                const { memes } = response.data;
                setAllImages([...memes]);
            });
    }, []);

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log('clicked');
        const randNum = Math.floor(Math.random() * allImages.length);
        setRandomImgUrl(allImages[randNum].url);
    };

    return (
        <div>
            <InputForm
                onSubmit={handleSubmit}
                setTopText={setTopText}
                setBottomText={setBottomText}
                isDisabled={topText || bottomText ? false : true}
            />
            {allImages.length > 0 && (
                <div class='content'>
                    <img className='item' src={randomImgUrl}></img>

                    {randomImgUrl && (
                        <div class='top'>
                            <h2>{topText}</h2>
                        </div>
                    )}
                    {randomImgUrl && (
                        <div class='bottom'>
                            <h2 className='s'>{bottomText}</h2>
                        </div>
                    )}
                </div>
            )}
        </div>
    );
};

export default MemeGenerator;
