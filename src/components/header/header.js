import React from 'react';
import "./header.css";

function PageHeader() {
    return (
        <div className="header">
            <div className="jumbotron jumbotron-fluid" id="jumbo">
                <div className="container">
                    <h1 className="display-2">Employee Directory</h1>
                    <p className="lead">Please use the search bar below to search through all of the employees.</p>
                </div>
            </div>
        </div>
    );
};

export default PageHeader;