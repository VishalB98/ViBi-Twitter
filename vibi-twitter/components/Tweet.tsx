import React, {useState, useEffect} from 'react'
import { Comment, Tweet } from '../typings'
import TimeAgo from 'react-timeago'
import { ChatAlt2Icon, HeartIcon, SwitchHorizontalIcon, UploadIcon } from '@heroicons/react/outline'
interface Props {
    tweet: Tweet[]
}
function Tweet({ tweet }: Props) {
    const [comments, setComments] = useState<Comment[]>([])
    const refreshComment = async () => {
        const comments :  Comment[] = await fetch(tweet._id)
        setComments(comments)

    }
    useEffect(() => {
        refreshComment()
    }, [])
    console.log(":::::::::::::  Tweet.tsx  ::::::::::::::", comments)
    return (
        <div className='flex flex-col space-x-3 border-y p-5 border-gray-100'>
            <div className='flex space-x-3'>
                <img className='h-10 w-10 rounded-full object-cover' src={tweet.profileImage} alt="" />
                <div>
                    <div className='flex items-center space-x-1'>
                        <p className='mr-1 font-bold'>{tweet.username}</p>
                        <p className='hidden text-sm text-gray-500 sm:inline'>@{tweet.username.replace(/\s+/g, "").toLowerCase()}</p>
                        <TimeAgo
                            className='text-gray-500'
                            date={tweet._createdAt}
                        />
                    </div>
                    <p>{tweet.text}</p>
                    {tweet.image &&
                        <img src={tweet.image} alt='' className='m-5 ml-0 mb-1 max-h-60 rounded-lg object-cover shadow-sm' />
                    }
                </div>
            </div>
            <div className='mt-5 flex justify-between'>
                <div className='flecc cursor-pointer items-center space-x-3 text-gray-400'>
                    <ChatAlt2Icon className='h-5 w-5' />
                    <p>
                        5
                    </p>
                </div>
                <div className='flecc cursor-pointer items-center space-x-3 text-gray-400'>
                    <SwitchHorizontalIcon className='h-5 w-5' />
                </div>
                <div className='flecc cursor-pointer items-center space-x-3 text-gray-400'>
                    <HeartIcon className='h-5 w-5' />
                </div>
                <div className='flecc cursor-pointer items-center space-x-3 text-gray-400'>
                    <UploadIcon className='h-5 w-5' />
                </div>
            </div>
        </div>
    )
}

export default Tweet
