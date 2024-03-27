import React from "react";
import { TagsModel } from "../models";
import { IconButton, TextField } from "@mui/material";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import NavigateBeforeIcon from "@mui/icons-material/NavigateBefore";

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
    <div className="flex gap-6 justify-end self-end">
      <TextField
        id="outlined-basic"
        label="Rows per page"
        variant="outlined"
        type="number"
        value={rowsPerPage}
        onChange={handleChangeRowsPerPage}
        className="w-1/4"
        InputProps={{ inputProps: { min: 1 } }}
      />

      <div className="flex flex-row gap-1 items-center">
        <div>
          <IconButton
            aria-label="preview"
            size="large"
            onClick={() => handleChangePage(page - 1)}
            disabled={page === 0}
          >
            <NavigateBeforeIcon fontSize="inherit" />
          </IconButton>
          <IconButton
            aria-label="next"
            size="large"
            onClick={() => handleChangePage(page + 1)}
            disabled={endIndex >= tags.length}
          >
            <NavigateNextIcon fontSize="inherit" />
          </IconButton>
        </div>

        <div>
          Page {page + 1} of {totalPages}
        </div>
      </div>
    </div>
  );
};

export default Pagination;
