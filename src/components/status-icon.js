import * as React from "react";
export const StatusIcon = ({ active, error }) => (
  <h1>{active ? "🟢" : error ? "🔴" : "🟠"}</h1>
);
