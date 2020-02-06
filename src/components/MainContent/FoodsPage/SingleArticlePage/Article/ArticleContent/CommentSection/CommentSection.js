import React from 'react'

import './commentsection.css'

const CommentSection = () => {
    return(
        <div className="comment-section">
        <div className="comments">
            0 comments
        </div>
        <div className="leave-a-comment">

            <div className="leave-a-comment__title">Leave a comment</div>

            <form action="/" method="post" className="form">

                <div className="form__group">
                    <label for="input-name" className="form__label">Your name *</label>
                    <input id="input-name" type="text" className="form__input" required />
                </div>
                <div className="form__group">
                    <label for="input-mail" className="form__label">Your e-mail adress *</label>
                    <input id="input-mail" type="text" className="form__input" required />
                </div>
                <div className="form__group">
                    <label for="input-site" className="form__label">Your website</label>
                    <input id="input-site" type="text" className="form__input" />
                </div>

                <div className="form__group">
                    <label for="input-text" className="form__label">Your comment</label>
                    <textarea className="form__textarea" name="" id="input-text">

                    </textarea>
                </div>

                <div className="comment-btn">
                    <button className="btn" type="submit">POST COMMENT</button>
                </div>   
            </form>
        </div>
    </div>
    )
}

export default CommentSection