import React from "react";
import { TagsModel } from "../models";

interface IProps {
  tags: TagsModel[];
  rowsPerPage: number;
  page: number;
  setPage: (value: number) => void;
  endIndex: number;
  setRowsPerPage: (value: number) => void;
}

const Pagination = (props: IProps) => {
  const { tags, rowsPerPage, page, setPage, endIndex, setRowsPerPage } = props;

  const totalPages = Math.ceil(tags.length / rowsPerPage);
  const handleChangePage = (newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  return (
    <div>
      {" "}
      <div>
        <button
          onClick={() => handleChangePage(page - 1)}
          disabled={page === 0}
        >
          Previous
        </button>
        <button
          onClick={() => handleChangePage(page + 1)}
          disabled={endIndex >= tags.length}
        >
          Next
        </button>
      </div>
      <div>
        <label>
          Rows per page:
          <input
            type="number"
            value={rowsPerPage}
            onChange={handleChangeRowsPerPage}
            min="1"
          />
        </label>
      </div>
      <div>
        Page {page + 1} of {totalPages}
      </div>
    </div>
  );
};

export default Pagination;
