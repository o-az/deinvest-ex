import { Input } from "antd";
import * as React from "react";
const { Search } = Input;
export const SearchBar = ({ loading, onInputChange, onSearchClick }) => {
  return (
    <Search
      placeholder="0x11e6bf5a0a7e921f19f24e49a1f6a9b7d415a677"
      enterButton="Search"
      size="large"
      allowClear
      loading={loading}
      onSearch={onSearchClick}
      onSubmit={onSearchClick}
      onPressEnter={onSearchClick}
      onChange={onInputChange}
    />
  );
};
