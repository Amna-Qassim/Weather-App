import {useState, useEffect} from 'react';

const UseFetch = (initialUrl) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [inProgress, setInProgress] = useState(false);
  const [url, setUrl] = useState(initialUrl)

  useEffect(() => {
    if (!url) return;
    setInProgress(true);
    setData(null);
    setError(null);
    fetch(url)
    .then((r) => r.json())
    .then((data) => {
      // when there is a response (either result, or a message saying API key is bad)
      setInProgress(false);
      if (data.code >= 400) {
        setError(data.message);
        return;
      }
      setData(data);
    })
    //.catch(...)` will happen if fetch cant get a response (for example, if your internet is down)
    .catch((error) => {
      setInProgress(false);
      setError(error);
    });
  }, [url]);

  return {
    data,
    error,
    inProgress,
    setUrl,
  }
}

export default UseFetch;


