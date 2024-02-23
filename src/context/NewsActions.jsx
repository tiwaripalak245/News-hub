export const fetchNews = async(topic) => {
    const response = await fetch (`https://newsapi.org/v2/everything?q=${topic}&from=2024-23-02&sortBy=popularity&apiKey=134da365796949e79bea28db6372b454`);
    const data = await response.json();
    return data.articles;
}