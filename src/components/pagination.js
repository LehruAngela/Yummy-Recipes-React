import React, { Component } from 'react';

const Pagination = props => {
    const {
       
        per_page,
        total, 
        handlePageChange,
        } = props
    
    let pages = [];
    let numOfPages = Math.floor(total/per_page);
    if((total % per_page) > 0 ){
        numOfPages +=1
    }
    for(let page=1; page<=numOfPages; page++){
        pages.push(
            <li
                key={page}>
                <button onClick={(event) =>{ handlePageChange(event,per_page, page); } }> {page}</button>
            </li>
        );
    }

    // Displaying pages
    return(
        <div className="pagination">

          Pages:  {pages}
        </div>
    );
}

export default Pagination;


    