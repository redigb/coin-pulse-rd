"use client";

import {
    Pagination,
    PaginationContent,
    PaginationEllipsis,
    PaginationItem,
    PaginationLink,
    PaginationNext,
    PaginationPrevious,
} from "@/components/ui/pagination"
import { buildPageNumbers, cn, ELLIPSIS } from "@/lib/utils";
import { useRouter } from "next/navigation";


const CoinsPaginacion = ({
    currentPage, totalPages, hasMorePages
}: Pagination) => {

    const router = useRouter();

    const handllePagechange = (page: number) => {
        router.push(`/coins?page=${page}`)
    }

    const pageNumbers = buildPageNumbers(currentPage, totalPages);
    const isLastPage = !hasMorePages || currentPage === totalPages;

    return (
        <Pagination id="coins-pagination">
            <PaginationContent className="pagination-content">
                <PaginationItem className="pagination-control prev">
                    <PaginationPrevious onClick={() => currentPage > 1 && handllePagechange(currentPage - 1)}
                        className={currentPage === 1 ? 'control-disabled' : 'control-button'} />
                </PaginationItem>
                <div className="pagination-pages">
                    {pageNumbers.map((page, index) => (
                        <PaginationItem key={index}>
                            {page === ELLIPSIS ? (
                                <span className="ellipsis">...</span>
                            ) : (
                                <PaginationLink onClick={() => handllePagechange(page)}
                                    className={cn('page-link', {
                                        'page-link-active': currentPage === page,
                                    })}>{page}</PaginationLink>
                            )}
                        </PaginationItem>
                    ))}
                </div>
                <PaginationItem className="pagination-control next">
                    <PaginationNext onClick={() => !isLastPage && handllePagechange(currentPage + 1)}
                        className={isLastPage ? "control-disabled" : "control-button"} />
                </PaginationItem>
            </PaginationContent>
        </Pagination>
    )
}

export default CoinsPaginacion;