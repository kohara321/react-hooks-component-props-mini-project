import React from "react";
import Article from "./Article";

function ArticleList({posts}) {
    console.log(posts)
    const ArticleEls = posts.map(post => {
        return <Article key={post.id} title={post.title} date={post.date} preview={post.preview} />
    })
    return (
        <main>
            {ArticleEls}
        </main>
    )
}

export default ArticleList;