import React from "react";
import SwapVertIcon from "@mui/icons-material/SwapVert";

interface IProps {
  label: string;
  sortLabel: string;
  orderBy: string;
  order: string;
  setOrder: (value: "asc" | "desc") => void;
  setOrderBy: (value: string) => void;
}

const Sort = (props: IProps) => {
  const { label, sortLabel, order, orderBy, setOrder, setOrderBy } = props;

  const handleSort = (property: string) => {
    const isAsc = orderBy === property && order === "asc";
    setOrder(isAsc ? "desc" : "asc");
    setOrderBy(property);
  };

  return (
    <div onClick={() => handleSort(sortLabel)} className="cursor-pointer">
      {label} <SwapVertIcon fontSize="inherit" />
    </div>
  );
};

export default Sort;
