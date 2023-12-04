import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Create = () => {
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [author, setAuthor] = useState('yoshi');
    const [isPending, setIsPending] = useState(false);
    const history = useNavigate();
    
     const handleSubmit = (e) => {
        e.preventDefault();
        const blog = { title, body, author };
        setIsPending(true);
        fetch('http://localhost:8000/blogs', {
            method: 'POST',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(blog)
        })
        .then(() => {
            console.log('new blog added');
            setIsPending(false);
            history('/');
        });
     };

    return ( 
        <div className="create">
            <h2>Add a new blog</h2>
            <form onSubmit={handleSubmit}>
                <label>Blog Title</label>
                <input 
                    type="text"
                    required
                    value={title}
                    onChange={ (e) => setTitle(e.target.value) }
                />
                <label>Blog Body</label>
                <textarea
                    required 
                    value={body}
                    onChange={ (e) => setBody(e.target.value) }
                ></textarea>
                
                <label>Blog Author</label>
                <select
                    defaultValue={author}
                    onChange={ (e) => { console.log(e.target.value ); setAuthor(e.target.value)} }
                >
                    <option value="mario">Mario</option>
                    <option value="yoshi">Yoshi</option>
                    <option value="antonio">Antonio</option>
                </select>
                { !isPending && <button>Add Blog</button> }
                { isPending && <button disabled>Adding blog...</button> }
            </form>
        </div>
     );
}
 
export default Create;