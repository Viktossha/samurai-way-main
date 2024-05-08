let state = {
    profilePage: {
        posts: [
            {id: 1, message: 'Hi, how are you', likesCounts: 15},
            {id: 2, message: 'It\'s my first post', likesCounts: 20},
        ],
    },
    dialogsPage: {
        dialogs: [
            {id: 1, name: 'Varya'},
            {id: 2, name: 'Kristina'},
            {id: 3, name: 'Misha'},
            {id: 4, name: 'Alina'},
        ],
        messages: [
            {id: 1, message: 'Hello'},
            {id: 2, message: 'Hi'},
            {id: 3, message: 'How are you'},
        ]
    },
    sidebar: {
        friends: [
            {id: 1, avatar: 'https://cdn-icons-png.flaticon.com/512/3781/3781973.png', name: 'Varvara'},
            {id: 2, avatar: 'https://e7.pngegg.com/pngimages/674/524/png-clipart-professional-computer-icons-avatar-job-avatar-heroes-computer.png', name: 'Elena'},
            {id: 3, avatar: 'https://e7.pngegg.com/pngimages/270/98/png-clipart-avatar-computer-icons-likengo-%D0%92%D0%BE%D1%80%D0%BE%D0%BD%D0%B5%D0%B6-avatars-logo-illustrator.png', name: 'Misha'},
        ]
    }
}

export let addPost = (postText: string) => {
    let newPost = {id: 3, message: postText, likesCounts: 0};
    state.profilePage.posts.push(newPost);
}

export default state