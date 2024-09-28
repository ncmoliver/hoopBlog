 import { useState } from 'react';
 import classes from './NewPost.module.css';

function NewPost({onCancel, onAddPost}) {
    const [enteredBody, setEnteredBody] = useState('');
    const [enteredUsername, setEnteredUsername] = useState('');

    function bodyChangeHandler(event) {
        setEnteredBody(event.target.value);
    }

    function usernameChangeHandler(event) {
        setEnteredUsername(event.target.value);
    }

    function submitHandler(event) {
        event.preventDefault();
        const postData = {
            body: enteredBody,
            username: enteredUsername
        };
         
        onAddPost(postData);
        onCancel();
    }
    
    return (
        <form className={classes.form} onSubmit={submitHandler}>
            <p>
                <label htmlFor="body">Text</label>
                <textarea id="body" required row={3} onChange={bodyChangeHandler}/>
            </p>
            <p>
                <label htmlFor="username">Username</label>
                <input type="text" id="username" unique required onChange={usernameChangeHandler} />
            </p>
            <p className={classes.actions}>
                <button type="button" onClick={onCancel}>Cancel</button>
                <button>Submit</button>
            </p>
        </form>
    );
}

export default NewPost; 