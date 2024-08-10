import ListedTabs from "../components/ListedTabs/ListedTabs";

const ListedBooks = () => {
  return (
    <div>
      <h2 className="bg-[#1313130D] rounded-xl py-8 text-center font-bold text-2xl mt-6 mb-8">
        Books
      </h2>
      <ListedTabs />
    </div>
  );
};

export default ListedBooks;
