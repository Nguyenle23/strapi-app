import './App.css';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import ReactMarkdown from 'react-markdown';

function App() {
  const [post, setPost] = useState([]);

  useEffect(() => {
    axios
      .get('http://localhost:1337/api/posts')
      .then((res) => {
        setPost(res.data.data)
      })
      .catch((error) => {
        console.log(error)
      })
  }, [])

    return (
      <div className="App">
        <h1>Test API from Strapi</h1>
        {post.map((post1) => {
          return (
            <div>
              <p>{post1.attributes.title}</p>
                <ReactMarkdown children={post1.attributes.content} />
            </div>
          )}
        )}
        
      </div>
    )
}

export default App;
