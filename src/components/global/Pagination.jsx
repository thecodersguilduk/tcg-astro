const Pagination = ({prevUrl, nextUrl, contentType}) => {
  return (
    <nav aria-label="pagination" className="flex justify-between py-4 relative w-full">
        {prevUrl && ( <a className="absolute left-0" href={prevUrl}>Newer {contentType}</a>)}
        {nextUrl && ( <a className="absolute right-0" href={nextUrl}>Older {contentType}</a>)}
    </nav>
  )
};

export default Pagination;
