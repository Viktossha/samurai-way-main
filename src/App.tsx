import React from 'react';
import './App.css';
import {Header} from "./components/Header/Header";
import {Navbar} from "./components/Navbar/Navbar";
import {Profile} from "./components/Profile/Profile";
import {Dialogs} from "./components/Dialogs/Dialogs";
import {BrowserRouter, Route} from "react-router-dom";
import {News} from "./components/News/News";
import {Music} from "./components/Music/Music";
import {Settings} from "./components/Settings/Settings";
import {message} from "antd";
import {FriendsSidebar} from "./components/FriendsSidebar/FriendsSidebar";
import {addPost} from "./redux/state";
import state from "./redux/state";


function App() {
    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <Header/>
                <Navbar state={state.sidebar}/>
                <div className='app-wrapper-content'>
                    {/*<Route path='/dialogs' component={Dialogs}/>*/}
                    {/*<Route path='/profile' component={Profile}/>*/}
                    <Route path='/profile' render={() => <Profile state={state.profilePage} addPost={addPost}/>}/>
                    <Route path='/dialogs' render={() => <Dialogs state={state.dialogsPage} />}/>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
