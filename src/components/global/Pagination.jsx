const Pagination = ({prevUrl, nextUrl, prevBtnText, nextBtnText}) => {
  return (
    <nav aria-label="pagination" className="grid grid-cols-2 justify-between py-4 relative w-full gap-4 text-wrap">
        {prevUrl && ( <a className="col-start-1" href={prevUrl}>${prevBtnText}</a>)}
        {nextUrl && ( <a className="col-start-2 text-center  bg-blue-200 text-white" href={nextUrl}>{nextBtnText} </a>)}
    </nav>
  )
};

export default Pagination;
