export interface Tweet extends TweetBody {
    _id: string,
    _type: 'tweet',
    _createdAt: string,
    _updatedAt: string,
    _rev: string,
    blockTweet: boolean
}

export type TweetBody = {
    text : string,
    username : string,
    profileiImage: string,
    image?: string,
}

export type CommentBody = {
    comment: string,
    username: string,
    profileImage: string,
    tweetId: string,

}

export interface Comment extends CommentBody {
    _id: string,
    _type: 'comment',
    _createdAt: string,
    _updatedAt: string,
    _rev: string,
    tweet :{
        _ref: string,
        _type: 'reference'
    }
}