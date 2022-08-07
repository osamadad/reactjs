import React from 'react-dom';
import { Link } from 'react-router-dom';

function postnavigation(items, index) {
    var output = [],
        id, item;
    if (items[index - 1] !== undefined && index - 1 !== -1) {
        item = items[index - 1];
        id = item.id;
        // Show the previous button 
        output.push(<div key={id} className="prev-post">
            <span>Prev Post</span><Link to={"/blog-details/" + parseInt(id)}>{item.title.slice(0,20)} </Link></div>);
    }
    if (items[index + 1] !== undefined && index <= items.length - 1) {
        // Show next button 
        item = items[index + 1];
        id = item.id;
        output.push(<div key={id} className="next-post">
            <span>Next Post</span><Link to={"/blog-details/" + parseInt(id)}>{item.title.slice(0,20)}</Link></div>);
    }

    return output;
}

export { postnavigation };
