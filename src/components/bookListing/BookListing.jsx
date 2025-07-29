import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import Button from "react-bootstrap/Button";
import { MdViewModule, MdViewList } from "react-icons/md";
import { useState } from "react";
import { CustomPagination } from "../../components/customPagination/CustomPagination.jsx";
import {
  CustomCard,
  CustomListCard,
} from "../../components/customCard/CustomCard.jsx";

const booksPerScreen = 9;

export const BookListing = ({ bookList }) => {
  const [view, setView] = useState("card");
  const [active, setActive] = useState(1);

  const pages = Math.ceil(bookList.length / booksPerScreen);

  const startIndex = (active - 1) * booksPerScreen;
  const endIndex = startIndex + booksPerScreen;
  const displayBooks = bookList.slice(startIndex, endIndex);

  return (
    <Row>
      <Col>
        <div className="d-flex justify-content-between align-items-center">
          <div>{bookList.length} Books found!</div>
          <div>
            <ButtonGroup aria-label="Basic example">
              <Button
                onClick={() => setView("card")}
                variant={`${
                  view === "card" ? "dark" : "secondary"
                } d-flex align-items-center gap-1`}
              >
                <MdViewModule />
                Card
              </Button>
              <Button
                onClick={() => setView("list")}
                variant={`${
                  view === "list" ? "dark" : "secondary"
                } d-flex align-items-center gap-1`}
              >
                <MdViewList />
                List
              </Button>
            </ButtonGroup>
          </div>
        </div>
        <hr />
        <div
          className={
            view === "card"
              ? "my-3 booklist-container d-flex gap-2 flex-wrap  justify-content-center"
              : "my-3 booklist-container d-flex gap-2 flex-wrap"
          }
        >
          {displayBooks.length > 0 &&
            displayBooks.map((book) =>
              view === "card" ? (
                <CustomCard key={book?._id} {...book} />
              ) : (
                <CustomListCard key={book?._id} {...book} />
              )
            )}
        </div>
        <CustomPagination active={active} setActive={setActive} pages={pages} />
      </Col>
    </Row>
  );
};
