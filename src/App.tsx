import React from 'react';
import './App.css';
import {Header} from "./components/Header/Header";
import {Navbar} from "./components/Navbar/Navbar";
import {Profile} from "./components/Profile/Profile";
import {Dialogs, DialogsType, MessagesType} from "./components/Dialogs/Dialogs";
import {BrowserRouter, Route} from "react-router-dom";
import {News} from "./components/News/News";
import {Music} from "./components/Music/Music";
import {Settings} from "./components/Settings/Settings";
import {PostsType} from "./components/Profile/MyPosts/MyPosts";
import {message} from "antd";
import {Friends, FriendsType} from "./components/Friends/Friends";
import {FriendsSidebar} from "./components/FriendsSidebar/FriendsSidebar";
import {addPost} from "./redux/state";

type AppPropsType = {
    state: {
        profilePage: {
            posts: Array<PostsType>
        }
        dialogsPage: {
            dialogs: Array<DialogsType>
            messages: Array<MessagesType>
        }
        sidebar: {
            friends: Array<FriendsType>
        }
    }
}

function App(props: AppPropsType) {
    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <Header/>
                <Navbar state={props.state.sidebar}/>
                <div className='app-wrapper-content'>
                    {/*<Route path='/dialogs' component={Dialogs}/>*/}
                    {/*<Route path='/profile' component={Profile}/>*/}
                    <Route path='/profile' render={() => <Profile state={props.state.profilePage} addPost={addPost}/>}/>
                    <Route path='/dialogs' render={() => <Dialogs state={props.state.dialogsPage} />}/>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
