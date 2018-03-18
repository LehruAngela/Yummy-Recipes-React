import React from 'react';

const Pagination = props => {
    const {

        per_page,
        total,
        handlePageChange,
        } = props

    let pages = [];
    let numOfPages = Math.floor(total / per_page);
    if ((total % per_page) > 0) {
        numOfPages += 1
    }
    for (let page = 1; page <= numOfPages; page++) {
        pages.push(
            <li
                key={page}>
                <button className="btn btn-outline-warning" onClick={(event) => { handlePageChange(event, per_page, page); }}> {page}</button>
            </li>
        );
    }

    // Displaying pages
    return (
        <div>
            <div className="pagination-title">
                Pages:
        </div>
            <div className="pagination">
                {pages}
            </div>
        </div>
    );
}

export default Pagination;


