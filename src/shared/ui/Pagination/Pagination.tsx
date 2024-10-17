import { useEffect, useState } from "react";
import { PaginationButton, PaginationStyled } from "./PaginationStyled";

interface PaginationProps<T> {
  data: T[];
  onPageChange: (page: number) => void;
  taskPerPage: number;
  currentPage: number;
}

const Pagination = <T extends unknown>({
  data,
  taskPerPage,
  onPageChange,
  currentPage,
}: PaginationProps<T>) => {
  const [pages, setPages] = useState<number[]>([]);

  useEffect(() => {
    const totalPages = Math.ceil(data.length / taskPerPage);
    setPages(Array.from({ length: totalPages }, (_, i) => i + 1));
  }, [data, taskPerPage]);

  return (
    <PaginationStyled>
      {pages.map((page) => (
        <PaginationButton
          $isActive={page === currentPage}
          key={page}
          onClick={() => onPageChange(page)}
          disabled={page === currentPage}
        >
          {page}
        </PaginationButton>
      ))}
    </PaginationStyled>
  );
};

export default Pagination;
