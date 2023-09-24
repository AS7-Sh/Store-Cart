interface PaginationProps {
  onPrev: () => void;
  onNext: () => void;
}

const Pagination = ({ onPrev, onNext }: PaginationProps) => {
  return (
    <div className="pagination">
      <button onClick={onPrev}>
        <i className="las la-angle-double-left" />
        Prev
      </button>
      <button onClick={onNext}>
        Next
        <i className="las la-angle-double-right" />
      </button>
    </div>
  );
};

export default Pagination;
