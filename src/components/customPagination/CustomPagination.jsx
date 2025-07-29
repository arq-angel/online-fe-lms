import Pagination from "react-bootstrap/Pagination";

export const CustomPagination = ({ pages, active, setActive }) => {
  let items = [];
  for (let number = 1; number <= pages; number++) {
    items.push(
      <Pagination.Item
        onClick={() => setActive(number)}
        key={number}
        active={number === active}
      >
        {number}
      </Pagination.Item>
    );
  }

  return (
    <div className="pagination d-flex justify-content-center">
      <Pagination>{items}</Pagination>
    </div>
  );
};
