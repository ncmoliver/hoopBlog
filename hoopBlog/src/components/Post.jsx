import classes from './Post.module.css';

function Post({ playerName, body}) {
    return (
        <li className={classes.post}>
            <p className={classes.playerName}>{playerName}</p>
            <p className={classes.text}>{body}</p>
        </li>
    );

}

export default Post;