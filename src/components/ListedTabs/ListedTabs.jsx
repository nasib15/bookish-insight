import {
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel,
} from "@material-tailwind/react";
import { useEffect, useState } from "react";
import ReadCard from "../ReadCard/ReadCard";
import { getLocalStorage, getWishlist } from "../../utils/localStorage";
import Wishlist from "../Wishlist/Wishlist";

const ListedTabs = () => {
  const [activeTab, setActiveTab] = useState("read");
  const getReadBooks = getLocalStorage();
  const getWishlistBooks = getWishlist();

  // const [readBooks, setReadBooks] = useState(getReadBooks);
  // useEffect(() => {
  //   setReadBooks(getReadBooks);
  // }, [getReadBooks]);

  const data = [
    {
      label: "Read Books",
      value: "read",
      desc: <ReadCard></ReadCard>,
    },
    {
      label: "Wishlist Books",
      value: "wishlist",
      desc: <Wishlist></Wishlist>,
    },
  ];
  return (
    <Tabs value={activeTab}>
      <TabsHeader
        className="mt-20 rounded-none border-blue-gray-50 bg-transparent p-0 w-72"
        indicatorProps={{
          className:
            "bg-transparent border-2 border-b-0 border-slate-500 shadow-none rounded-none ",
        }}
      >
        {data.map(({ label, value }) => (
          <Tab
            key={value}
            value={value}
            onClick={() => setActiveTab(value)}
            className={activeTab === value ? "text-gray-900" : ""}
          >
            {label}
          </Tab>
        ))}
      </TabsHeader>
      <TabsBody className="my-2">
        <TabPanel value={"read"}>
          {getReadBooks.map((book, idx) => (
            <ReadCard
              key={idx}
              totalPages={book.totalPages}
              bookName={book.bookName}
              publisher={book.publisher}
              author={book.author}
              category={book.category}
              rating={book.rating}
              bookTags={book.tags}
              image={book.image}
              id={book.bookId}
              yearOfPublishing={book.yearOfPublishing}
            ></ReadCard>
          ))}
        </TabPanel>
        <TabPanel value={"wishlist"}>
          {getWishlistBooks.map((book, idx) => (
            <Wishlist
              key={idx}
              totalPages={book.totalPages}
              bookName={book.bookName}
              publisher={book.publisher}
              author={book.author}
              category={book.category}
              rating={book.rating}
              bookTags={book.tags}
              image={book.image}
              id={book.bookId}
              yearOfPublishing={book.yearOfPublishing}
            ></Wishlist>
          ))}
        </TabPanel>
      </TabsBody>
    </Tabs>
  );
};

export default ListedTabs;
