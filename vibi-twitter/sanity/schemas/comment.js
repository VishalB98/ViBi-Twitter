export default {
  name: 'comment',
  title: 'Comment',
  type: 'document',
  fields: [
    {
      name: 'comment',
      title: 'Comment',
      type: 'string',
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
      name: 'tweet',
      title: 'Tweet',
      description: 'Reference to the tweet this comment belongs to',
      type: 'reference',
      to: [{type: 'tweet'}]
    }
  ]
}
