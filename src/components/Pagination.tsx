type PaginationProps = {
  currentPage: number
  totalPages: number
  onPageChange: (page: number) => void
}

function Pagination({ currentPage, totalPages, onPageChange }: PaginationProps) {
  const pages = Array.from({ length: totalPages }, (_, i) => i + 1)

  return (
    <nav className="pagination" aria-label="Navegação de páginas">
      <button
        type="button"
        className="pagination__btn"
        disabled={currentPage === 1}
        onClick={() => onPageChange(currentPage - 1)}
        aria-label="Página anterior"
      >
        Anterior
      </button>

      <div className="pagination__pages" aria-hidden="true">
        {pages.map((page) => (
          <button
            key={page}
            type="button"
            className={`pagination__page ${
              page === currentPage ? 'pagination__page--active' : ''
            }`}
            onClick={() => onPageChange(page)}
            aria-label={`Página ${page}`}
            aria-current={page === currentPage ? 'page' : undefined}
          >
            {page}
          </button>
        ))}
      </div>

      <span className="pagination__summary" aria-live="polite">
        Página {currentPage} de {totalPages}
      </span>

      <button
        type="button"
        className="pagination__btn"
        disabled={currentPage === totalPages}
        onClick={() => onPageChange(currentPage + 1)}
        aria-label="Próxima página"
      >
        Proxima
      </button>
    </nav>
  )
}

export default Pagination
