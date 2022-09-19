import { Tweet } from "../typings";

export const fetchTweets = async () => {
const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/getTweets`)
const getTweetsApiData = await res.json();
const tweets:Tweet[] = getTweetsApiData.tweets;

return tweets;
}