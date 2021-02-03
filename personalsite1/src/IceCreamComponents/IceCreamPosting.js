import React from 'react';

const IceCreamPosting = (props) => {
    return (
        <div>
            <p> {this.props.name}, {this.props.flavor}</p>
            <img src= { this.props.IceCreamURL } alt= 'Image' />
        </div>
    );
}

export default IceCreamPosting; 
