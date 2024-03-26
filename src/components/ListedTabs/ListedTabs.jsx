import {
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel,
} from "@material-tailwind/react";
import { useState } from "react";
import ReadCard from "../ReadCard/ReadCard";
import { getLocalStorage } from "../../utils/localStorage";

const ListedTabs = () => {
  const [activeTab, setActiveTab] = useState("read");
  // const [sorting, setSorting] = useState([]);
  const getReadBooks = getLocalStorage();
  const data = [
    {
      label: "Read Books",
      value: "read",
      desc: <ReadCard></ReadCard>,
    },
    {
      label: "Wishlist Books",
      value: "wishlist",
      desc: `It really matters and then like it really doesn't matter.
        What matters is the people who are sparked by it. And the people 
        who are like offended by it, it doesn't matter.`,
    },
  ];
  return (
    <Tabs value={activeTab}>
      <TabsHeader
        className="rounded-none border-blue-gray-50 bg-transparent p-0 w-72"
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
      </TabsBody>
    </Tabs>
  );
};

export default ListedTabs;
