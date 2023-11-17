import React, { useState } from 'react';

const TablePagination = ({ currentPage = 1, totalPages = 4, onPageChange }: any) => {
    const [pagesToShow] = useState(5); // Number of page numbers to show in the pagination
    const [range, setRange] = useState({
        start: 1,
        end: Math.min(pagesToShow, totalPages),
    });

    const handlePageChange = (page: any) => {
        onPageChange(page);

        const newRange = calculatePageRange(page);
        setRange(newRange);
    };

    const calculatePageRange = (currentPage: any) => {
        const half = Math.floor(pagesToShow / 2);
        let startPage = Math.max(1, currentPage - half);
        let endPage = Math.min(totalPages, startPage + pagesToShow - 1);

        if (endPage - startPage + 1 < pagesToShow) {
            startPage = Math.max(1, endPage - pagesToShow + 1);
        }

        return {
            start: startPage,
            end: endPage,
        };
    };

    const renderPageNumbers = () => {
        const pageNumbers = [];
        for (let i = range.start; i <= range.end; i++) {
            pageNumbers.push(
                <button
                    key={i}
                    onClick={() => handlePageChange(i)}
                    className={i === currentPage ? 'active' : ''}
                >
                    {i}
                </button>
            );
        }
        return pageNumbers;
    };

    return (
        <div className="pagination">
            <button onClick={() => handlePageChange(currentPage - 1)} disabled={currentPage === 1}>
                Previous
            </button>
            {renderPageNumbers()}
            <button onClick={() => handlePageChange(currentPage + 1)} disabled={currentPage === totalPages}>
                Next
            </button>
        </div>
    );
};

export default TablePagination;
