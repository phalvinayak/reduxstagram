import React from 'react';
import Photo from './Photo';

export default function PhotoGrid(props) {
    return (
        <div className="photo-grid">
            {props.posts.map((post, i) => <Photo {...props} i={i} key={i} post={post} /> )}
        </div>
    );
}
