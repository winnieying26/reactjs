import React, { useState, useEffect } from "react";

function FetchPost() {
  const [postId, setPostId] = useState(1);
  const [post, setPost] = useState(null);
  const [error, setError] = useState(null);
  const [counter, setCounter] = useState(0);
  const [isCounting, setIsCounting] = useState(false);
  const [fetchIntervalId, setFetchIntervalId] = useState(null);
  const [counterIntervalId, setCounterIntervalId] = useState(null);

  // Fetch post data whenever `postId` changes
  useEffect(() => {
    const fetchPost = async () => {
      try {
        const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`);
        if (!res.ok) {
          throw new Error(`Post not found (ID: ${postId})`);
        }
        const data = await res.json();
        setPost(data);
        setError(null);
      } catch (err) {
        setPost(null);
        setError(err.message);
        if (fetchIntervalId) {
          clearInterval(fetchIntervalId);
        }
      }
    };

    fetchPost();
  }, [postId]);

  // Auto-fetch the next post every 10 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setPostId((prevId) => prevId + 1);
    }, 10000);
    setFetchIntervalId(interval);

    return () => clearInterval(interval);
  }, []);

  // Counter timer logic
  useEffect(() => {
    if (isCounting) {
      const interval = setInterval(() => {
        setCounter((prev) => prev + 1);
      }, 1000);
      setCounterIntervalId(interval);
    } else if (counterIntervalId) {
      clearInterval(counterIntervalId);
    }

    return () => clearInterval(counterIntervalId);
  }, [isCounting]);

  const handleStart = () => setIsCounting(true);
  const handlePause = () => setIsCounting(false);
  const handleReset = () => {
    setIsCounting(false);
    setCounter(0);
  };

  const handleNext = () => setPostId((prevId) => prevId + 1);

  return (
    <div>
      <h1>Post Viewer</h1>
      {error ? (
        <p style={{ color: "red" }}>{error}</p>
      ) : post ? (
        <div>
          <h2>{post.title}</h2>
          <p>{post.body}</p>
        </div>
      ) : (
        <p>Loading...</p>
      )}
      <button onClick={handleNext} disabled={error}>
        Next Post
      </button>

      <hr />

      <h1>Counter Timer</h1>
      <p>Count: {counter}</p>
      <button onClick={handleStart} disabled={isCounting}>
        Start
      </button>
      <button onClick={handlePause} disabled={!isCounting}>
        Pause
      </button>
      <button onClick={handleReset}>Reset</button>
    </div>
  );
}

export default FetchPost;
