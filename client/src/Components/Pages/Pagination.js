import React from 'react'

const Pagination = ({pageNo,prevPage,nextPage}) => {
  return (
    <div>
<nav className='pagination'>
  <ul class="pagination">
    <li class="page-item"><a class="page-link" onClick={prevPage} href="#">Previous</a></li>
    <li class="page-item"><a class="page-link"  href="#">{pageNo}</a></li>
    <li class="page-item"><a class="page-link" onClick={nextPage} href="#">Next</a></li>
  </ul>
</nav>
    </div>
  )
}

export default Pagination