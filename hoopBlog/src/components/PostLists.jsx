import Post from './Post';
import NewPost from './NewPost';
import Modal from './Modal';``
import classes from './PostList.module.css';

function Postlist({isPosting, onStopPosting}) {
    return (
        <>
            {isPosting && ( 
                <Modal onClose={onStopPosting}>
                <NewPost  onCancel={onStopPosting}/>
                </Modal>
            )}
            <ul className={classes.posts}> 
                <Post playerName="bjThePG" body="Dribbling is more important that shooting becauseit impacts more situations on the court."/>
            </ul>
        </> 
    );
}


export default Postlist;    