import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  CircularProgress,
} from "@mui/material";
import Pagination from "./storybook/Pagination.tsx";

import Sort from "./storybook/Sort.tsx";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchTagsRequest,
  fetchTagsSuccess,
  fetchTagsFailure,
} from "./store/actions.ts";
import { RootState } from "./store/store.ts";

const Home = () => {
  const dispatch = useDispatch();
  const { loading, error, tags } = useSelector(
    (state: RootState) => state.tags
  );
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  const [order, setOrder] = useState<"asc" | "desc">("asc");
  const [orderBy, setOrderBy] = useState<string>("name");

  useEffect(() => {
    dispatch(fetchTagsRequest());
    axios
      .get("https://api.stackexchange.com/2.3/tags", {
        params: {
          site: "stackoverflow",
          key: "s3rcNPsWW5NslQvC)Evdew((",
        },
      })
      .then((response) => {
        dispatch(fetchTagsSuccess(response.data.items));
      })
      .catch((error) => {
        dispatch(
          fetchTagsFailure("An error occurred while downloading the data.")
        );
      });
  }, [dispatch]);

  const startIndex = page * rowsPerPage;
  const endIndex = Math.min(startIndex + rowsPerPage, tags.length);

  const sortedTags = tags.slice().sort((a, b) => {
    const orderMultiplier = order === "asc" ? 1 : -1;
    if (a[orderBy] < b[orderBy]) {
      return -1 * orderMultiplier;
    }
    if (a[orderBy] > b[orderBy]) {
      return 1 * orderMultiplier;
    }
    return 0;
  });

  const visibleRows = sortedTags.slice(startIndex, endIndex);

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div className="flex flex-col items-center mt-8 gap-4 w-4/5">
      {loading && (
        <div className="overlay">
          <div className="spinner-container">
            <CircularProgress />
          </div>
        </div>
      )}
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>
                <Sort
                  label="Name"
                  sortLabel="name"
                  orderBy={orderBy}
                  order={order}
                  setOrder={setOrder}
                  setOrderBy={setOrderBy}
                />
              </TableCell>
              <TableCell align="right">
                <Sort
                  label="Related Posts"
                  sortLabel="count"
                  orderBy={orderBy}
                  order={order}
                  setOrder={setOrder}
                  setOrderBy={setOrderBy}
                />
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {visibleRows.map((tag, index) => (
              <TableRow key={index}>
                <TableCell>{tag.name}</TableCell>
                <TableCell align="right">{tag.count}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Pagination
        tags={tags}
        rowsPerPage={rowsPerPage}
        page={page}
        setPage={setPage}
        endIndex={endIndex}
        setRowsPerPage={setRowsPerPage}
      />
    </div>
  );
};

export default Home;
