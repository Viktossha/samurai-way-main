let rerenderEntireTree = () => {
    console.log('state changed')
}

export type MessagesType = {
    id: number
    message: string
}

export type DialogsType = {
    id: number
    name: string
}

export type PostsType = {
    id: number
    message: string
    likesCounts: number
}

export type FriendsType = {
    id: number
    avatar: string
    name: string
}

export type ProfilePageType = {
    posts: Array<PostsType>
    newPostText: string
}

export type DialogsPageType = {
    dialogs: Array<DialogsType>
    messages: Array<MessagesType>
}

export type SidebarType = {
    friends: Array<FriendsType>
}

type RootStateType = {
    profilePage: ProfilePageType
    dialogsPage: DialogsPageType
    sidebar: SidebarType
}

let state: RootStateType = {
    profilePage: {
        posts: [
            {id: 1, message: 'Hi, how are you', likesCounts: 15},
            {id: 2, message: 'It\'s my first post', likesCounts: 20},
        ],
        newPostText: 'it'
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

export let addPost = () => {
    let newPost = {id: 3, message: state.profilePage.newPostText, likesCounts: 0};
    state.profilePage.posts.push(newPost);
    state.profilePage.newPostText = ''
    rerenderEntireTree();
}

export let updateNewPostText = (newText: string) => {
    state.profilePage.newPostText = newText
    rerenderEntireTree();
}

export const subscribe = (observer: any) => {
    rerenderEntireTree = observer
}

export default state