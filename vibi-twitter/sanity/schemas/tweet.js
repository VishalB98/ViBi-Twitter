export default {
  name: 'tweet',
  title: 'Tweet',
  type: 'document',
  fields: [
    {
      name: 'text',
      title: 'Text in the tweet',
      type: 'string',
    },
    {
      name: 'blockTweet',
      title: 'Block tweet',
      description: 'ADMIN ONLY: Toggle to block this tweet from being displayed',
      type: 'boolean',
    },
    {
      name: 'username',
      title: 'UserName',
      type: 'string'
    },
    {
      name: 'profileImage',
      title: 'Profile Image',
      type: 'string'
    },
    {
      name: 'image',
      title: 'Tweet Image',
      type: 'string'
    }
  ],
}
