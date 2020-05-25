import React from "react";

const ItemStatusFilter = () => {
  return (
    <div className="btn-group">
      <button type="btn" className="btn btn-info">
        All
      </button>
      <button type="btn" className="btn btn-outline-secondary">
        Active
      </button>
      <button type="btn" className="btn btn-outline-secondary">
        Done
      </button>
    </div>
  );
};

export default ItemStatusFilter;
