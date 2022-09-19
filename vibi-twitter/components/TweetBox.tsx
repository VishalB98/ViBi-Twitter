import { CalendarIcon, EmojiHappyIcon, LocationMarkerIcon, PhotographIcon, SearchCircleIcon } from '@heroicons/react/outline'
import React, { useState } from 'react'

function TweetBox() {
    const [tweetMessage, setTweetMessage] = useState('');
    return (
        <div className='flex space-x-2 p-5'>
            <img className='h-14 w-14 rounded-full object-cover mt-4' src='https://bit.ly/3DlVCWn' />
            <div className='flex felx-1 items-center pl-2'>
                <form className='flex flex-1 flex-col'>
                    <input
                    value={tweetMessage}
                    onChange={(e) => setTweetMessage(e.target.value)}
                    className='rounded-full outline-none h-24 w-full text-xl ' type='text' placeholder="What's happening?" />
                   <div className='flex items-center justify-around'>
                    <div className='flex  flex-1 space-x-2 text-twitter'>
                        {/* ICON */}
                        <PhotographIcon className='h-5 w-5 cursor-pointer transition-transform duration-150 ease-out hover:scale-150'/>
                        <SearchCircleIcon  className='h-5 w-5'/>
                        <EmojiHappyIcon className='h-5 w-5'/>
                        <CalendarIcon className='h-5 w-5'/>
                        <LocationMarkerIcon className='h-5 w-5'/>
                    </div>
                    <button disabled = {!tweetMessage} className='flex bg-twitter px-5 py-2 font-bold text-white rounded-full disabled:opacity-40'>
                        Tweet
                    </button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default TweetBox
