import React from 'react';

const NewsList = ({ articles }) => {
    return (
        <div className="news-list">
            {articles.length > 0 ? (
                articles.map((article) => (
                    <div key={article.url} className="news-item">
                        <h2>{article.title}</h2>
                        <p>{article.description}</p>
                        <a href={article.url} target="_blank" rel="noopener noreferrer">Read more</a>
                    </div>
                ))
            ) : (
                <p>No articles found.</p>
            )}
        </div>
    );
};

export default NewsList;
