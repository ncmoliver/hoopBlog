import Post from './Post';
import NewPost from './NewPost';
import Modal from './Modal';``
import classes from './PostList.module.css';
import { useState } from 'react';

function Postlist({isPosting, onStopPosting}) {
    // postState --> Managing a list of post and the list should be edited anyt time there is a new post
    const [posts, setPosts] = useState([]);

    function addPostHandler(postData) {
        setPosts((existingPosts) => [postData, ...existingPosts]);
    }

    return (
        <>
            {isPosting && ( 
                <Modal onClose={onStopPosting}>
                <NewPost  onCancel={onStopPosting} onAddPost={addPostHandler}/>
                </Modal>
            )}
            <ul className={classes.posts}> 
                {posts.map((post) => <Post key={post.body} username={post.username} body={post.body} />)}
            </ul>
        </> 
    );
}


export default Postlist;    