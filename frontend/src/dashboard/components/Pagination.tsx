type PaginationProps = {
  totalPages: number;
  currentPage: number;
  onPageChange: (page: number) => void;
};

function Pagination({
  totalPages,
  currentPage,
  onPageChange,
}: PaginationProps) {
  return (
    <div className="dark:text-text-primary text-text-primary-light flex w-full mt-4 mx-auto items-center justify-center gap-2">
      {[...Array(totalPages).keys()].map((_, index) => (
        <div
          key={index}
          onClick={() => onPageChange(index)}
          className={`px-2 py-0.5 cursor-pointer flex items-center rounded-sm
            ${
              currentPage === index
                ? "bg-blue-600 text-white"
                : "bg-background-secondary-light dark:bg-background-secondary"
            }
          `}
        >
          {index + 1}
        </div>
      ))}
    </div>
  );
}

export default Pagination;
