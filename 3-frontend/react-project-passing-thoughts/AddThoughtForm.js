import { useState } from "react";
import { generateId, getNewExpirationTime } from "./utilities";

export function AddThoughtForm(props) {
    const addThought = props.addThought;
    const [text, setText] = useState("");

    const handleTextChange = ({ target }) => setText(target.value);

    const handleSubmit = (event) => {
        event.preventDefault();
        if (text === '') {
            return;
        }
        addThought({
            id: generateId(),
            text: text,
            expiresAt: getNewExpirationTime(),
        });
        setText('');
    };

    return (
        <form className="AddThoughtForm" onSubmit={handleSubmit}>
            <input
                type="text"
                id="textField"
                aria-label="What's on your mind?"
                placeholder="What's on your mind?"
                value={text}
                onChange={handleTextChange}
            />
            <input type="submit" value="Add" />
        </form>
    );
}
