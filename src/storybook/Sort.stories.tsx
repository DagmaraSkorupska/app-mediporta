import React from "react";
import Sort from "./Sort.tsx";
import { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof Sort> = {
  title: "Sort",
  component: Sort,
  parameters: { layout: "centered" },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Sort>;

export const Default: Story = {
  args: {
    label: "Name",
    sortLabel: "name",
    orderBy: "name",
    order: "asc",
    setOrder: () => {},
    setOrderBy: () => {},
  },
};
