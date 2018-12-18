export const postsResponse = {
  children: [
    {
      data: {
        url: 'https://v.redd.it/1zhxx58rhp421',
        id: '98vj9e',
        thumbnail: 'https://b.thumbs.redditmedia.com/NFJ5zzCUnxTgAl71EkjSSCePc7wtcCLqTdbYgrwJkdU.jpg',
        title: 'Blinks of affection',
      },
    },
    {
      data: {
        url: 'https://i.imgur.com/GsoJi0d.gifv',
        id: 'a6q94b',
        thumbnail: 'https://b.thumbs.redditmedia.com/cjYmtjKiy9OT1y43RFMuTkcH_WmTM66RsSuN7c6xkhA.jpg',
        title: 'This church looks like a gingerbread house.',
      },
    },
  ],
};

export const posts = postsResponse.children.map(c => c.data);
