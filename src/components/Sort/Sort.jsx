export default function Sort({ items, setItems }) {
  const handleChange = (e) => {
    const { value } = e.target;

    if (value === 'Ascending_Order_By_Date') {
      const sortedItems = [...items].sort(
        (a, b) => new Date(a.createdAt) - new Date(b.createdAt)
      );
      setItems(sortedItems);
    }

    if (value === 'Descending_Order_By_Date') {
      const sortedItems = [...items].sort(
        (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
      );
      setItems(sortedItems);
    }

    if (value === 'Ascending_Order_By_Name') {
      const sortedItems = [...items].sort((a, b) =>
        a.userName.toLowerCase().localeCompare(b.userName.toLowerCase())
      );
      setItems(sortedItems);
    }

    if (value === 'Descending_Order_By_Name') {
      const sortedItems = [...items].sort((a, b) =>
        b.userName.toLowerCase().localeCompare(a.userName.toLowerCase())
      );
      setItems(sortedItems);
    }
  };

  return (
    <>
      <div className="flex flex-wrap gap-2">
        <button className="inline-flex items-center gap-2 rounded-2xl border border-neutral-800/80 bg-neutral-900/80 px-4 py-2 text-xs font-semibold uppercase tracking-wide text-neutral-300 transition hover:border-blue-500 hover:text-white">
          <svg
            className="h-4 w-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M3 4h18l-8 8v6l-4 4v-8z"
            ></path>
          </svg>

          <select
            onChange={handleChange}
            name="category"
            required
            className="w-20 bg-transparent text-sm text-white outline-none"
          >
            <option className="bg-neutral-900 text-white">Sort by</option>
            <option
              value="Ascending_Order_By_Date"
              className="bg-neutral-900 text-white"
            >
              Asc-Date
            </option>
            <option
              value="Descending_Order_By_Date"
              className="bg-neutral-900 text-white"
            >
              Des-Date
            </option>
            <option
              value="Ascending_Order_By_Name"
              className="bg-neutral-900 text-white"
            >
              Asc-Name
            </option>
            <option
              value="Descending_Order_By_Name"
              className="bg-neutral-900 text-white"
            >
              Des-Name
            </option>
          </select>
        </button>
      </div>
    </>
  );
}
