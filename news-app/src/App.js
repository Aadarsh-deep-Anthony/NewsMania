import React, { useEffect, useState } from 'react';
import axios from 'axios';
import NewsList from './components/NewsList';
import SearchBar from './components/SearchBar';
import './App.css';

const App = () => {
    const [articles, setArticles] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');

    const fetchNews = async (query = '') => {
        const API_KEY = process.env.REACT_APP_API_KEY;
        const url = `https://newsapi.org/v2/everything?q=${query}&apiKey=${API_KEY}`;
        try {
            const response = await axios.get(url);
            setArticles(response.data.articles);
        } catch (error) {
            console.error("Error fetching news:", error);
        }
    };

    useEffect(() => {
        fetchNews();
    }, []);

    const handleSearch = (term) => {
        setSearchTerm(term);
        fetchNews(term);
    };

    return (
        <div className="App">
            <h1>News App</h1>
            <SearchBar onSearch={handleSearch} />
            <NewsList articles={articles} />
        </div>
    );
};

export default App;
