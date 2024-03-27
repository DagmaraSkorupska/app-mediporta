import React, { useEffect, useState } from "react";
import axios from "axios";
import { TagsModel } from "./models.ts";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@mui/material";
import Pagination from "./storybook/Pagination.tsx";
import "./styles.css";

const Home = () => {
  const [tags, setTags] = useState<TagsModel[]>([]);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://api.stackexchange.com/2.3/tags",
          {
            params: {
              site: "stackoverflow",
              key: "s3rcNPsWW5NslQvC)Evdew((",
            },
          }
        );
        setTags(response.data.items);
      } catch (error) {
        console.error("Wystąpił błąd:", error);
      }
    };

    fetchData();
  }, []);

  const startIndex = page * rowsPerPage;
  const endIndex = Math.min(startIndex + rowsPerPage, tags.length);
  const visibleRows = tags.slice(startIndex, endIndex);

  return (
    <div className="flex flex-row">
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell align="right">Powiazanych postów</TableCell>
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
