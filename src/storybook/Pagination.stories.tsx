import React from "react";
import Pagination from "./Pagination.tsx";
import { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof Pagination> = {
  title: "Pagination",
  component: Pagination,
  parameters: { layout: "centered" },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Pagination>;

export const Default: Story = {
  args: {
    tags: [
      {
        count: 2528974,
        name: "javascript",
      },
      {
        count: 111,
        name: "java",
      },
    ],
    rowsPerPage: 5,
    page: 0,
    setPage: () => {},
    endIndex: 5,
    setRowsPerPage: () => {},
  },
};
