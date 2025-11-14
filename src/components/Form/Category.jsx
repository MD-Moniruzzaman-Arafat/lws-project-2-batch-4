export default function Category({ formData, handleChange }) {
  return (
    <>
      <label className="flex flex-col gap-3 rounded-2xl border border-neutral-800 bg-neutral-900/60 p-5 text-sm transition focus-within:border-blue-500 focus-within:bg-neutral-900 focus-within:shadow-lg focus-within:shadow-blue-500/10">
        <span className="text-xs font-semibold uppercase tracking-wider text-neutral-400">
          Category
        </span>
        <select
          onChange={handleChange}
          value={formData.category}
          name="category"
          required
          className="w-full bg-transparent text-base text-white outline-none"
        >
          <option className="bg-neutral-900 text-white">Select category</option>
          <option value="SOCIAL" className="bg-neutral-900 text-white">
            Social
          </option>
          <option value="VIDEO" className="bg-neutral-900 text-white">
            Video
          </option>
          <option value="DESIGN" className="bg-neutral-900 text-white">
            Design
          </option>
          <option value="STREAMING" className="bg-neutral-900 text-white">
            Streaming
          </option>
          <option value="PRODUCTIVITY" className="bg-neutral-900 text-white">
            Productivity
          </option>
          <option value="ENTERTAINMENT" className="bg-neutral-900 text-white">
            Entertainment
          </option>
          <option value="SHOPPING" className="bg-neutral-900 text-white">
            Shopping
          </option>
          <option value="MUSIC" className="bg-neutral-900 text-white">
            Music
          </option>
        </select>
        <span className="text-xs text-neutral-500">
          Helps you filter quicker later.
        </span>
      </label>
    </>
  );
}
