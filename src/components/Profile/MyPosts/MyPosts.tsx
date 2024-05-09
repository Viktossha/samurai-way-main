import React, {LegacyRef, RefObject} from 'react';
import classes from './MyPosts.module.css'
import {Post} from "./Post/Post";
import {PostsType} from "../../../redux/state";

type MyPostsPropsType = {
    posts: Array<PostsType>
    addPost: (postText: string) => void
}

export const MyPosts = (props: MyPostsPropsType) => {

    let postsElements = props.posts.map(p => <Post message={p.message} likesCounts={p.likesCounts}/>)

    let newPostElement:  RefObject<HTMLTextAreaElement>  = React.createRef()
    let addPost = () => {
        let text = newPostElement.current?.value
        if (text) props.addPost(text)
    }

    return (
        <div className={classes.postsBlock}>
            <h3>My posts</h3>
            <div>
                <div><textarea ref={newPostElement}></textarea></div>
                <div>
                    <button onClick={addPost}>Add post</button>
                </div>
            </div>
            <div className={classes.posts}>
                {postsElements}
            </div>
        </div>
    );
};