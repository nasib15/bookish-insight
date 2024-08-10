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

const ListedTabs = () => {
  const [activeTab, setActiveTab] = useState("read");

  // For readbook state
  const [readBooks, setReadBooks] = useState([]);
  useEffect(() => {
    const data = getLocalStorage();
    setReadBooks(data);
  }, []);

  // For Wishlist state
  const [wishlist, setWishlist] = useState([]);
  useEffect(() => {
    const data = getWishlist();
    setWishlist(data);
  }, []);

  const data = [
    {
      label: "Read Books",
      value: "read",
      desc: <ReadCard></ReadCard>,
    },
    {
      label: "Wishlist Books",
      value: "wishlist",
      desc: <ReadCard></ReadCard>,
    },
  ];
  return (
    <>
      {/*Nav Bar */}
      <div className="w-full">
        <div className="dropdown flex justify-center">
          <div
            tabIndex={0}
            role="button"
            className="btn m-1 bg-[#23BE0A] text-white"
          >
            Sort By
          </div>
          <ul
            tabIndex={0}
            className="mt-14 dropdown-content  z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <a
                onClick={() => {
                  if (activeTab === "read") {
                    const readData = getLocalStorage();
                    const sortedData = readData.sort((a, b) => {
                      return b.rating - a.rating;
                    });
                    setReadBooks(sortedData);
                  }
                  if (activeTab === "wishlist") {
                    const wishlistData = getWishlist();
                    const sortedWishlist = wishlistData.sort((a, b) => {
                      return b.rating - a.rating;
                    });
                    setWishlist(sortedWishlist);
                  }
                }}
              >
                Rating
              </a>
            </li>
            <li>
              <a
                onClick={() => {
                  if (activeTab === "read") {
                    const readData = getLocalStorage();
                    const sortedData = readData.sort((a, b) => {
                      return b.totalPages - a.totalPages;
                    });
                    setReadBooks(sortedData);
                  }
                  if (activeTab === "wishlist") {
                    const wishlistData = getWishlist();
                    const sortedWishlist = wishlistData.sort((a, b) => {
                      return b.totalPages - a.totalPages;
                    });
                    setWishlist(sortedWishlist);
                  }
                }}
              >
                Number of Pages
              </a>
            </li>
            <li>
              <a
                onClick={() => {
                  if (activeTab === "read") {
                    const readData = getLocalStorage();
                    const sortedData = readData.sort((a, b) => {
                      return b.yearOfPublishing - a.yearOfPublishing;
                    });
                    setReadBooks(sortedData);
                  }
                  if (activeTab === "wishlist") {
                    const wishlistData = getWishlist();
                    const sortedWishlist = wishlistData.sort((a, b) => {
                      return b.yearOfPublishing - a.yearOfPublishing;
                    });
                    setWishlist(sortedWishlist);
                  }
                }}
              >
                Published Year
              </a>
            </li>
          </ul>
        </div>
      </div>
      {/*Tabs */}
      <Tabs value={activeTab}>
        <div>
          <TabsHeader
            className="mt-20 rounded-none border-blue-gray-50 bg-transparent p-0 w-96"
            indicatorProps={{
              className:
                "bg-transparent border-2 border-b-0 border-slate-500 shadow-none rounded-lg ",
            }}
          >
            {data.map(({ label, value }) => (
              <Tab
                key={value}
                value={value}
                onClick={() => setActiveTab(value)}
                className={activeTab === value ? "text-gray-900" : "opacity-40"}
              >
                {label}
              </Tab>
            ))}
          </TabsHeader>
        </div>
        <TabsBody className="my-2">
          <TabPanel value={"read"}>
            {readBooks.map((book, idx) => (
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
            {wishlist.map((book, idx) => (
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
        </TabsBody>
      </Tabs>
    </>
  );
};

export default ListedTabs;
