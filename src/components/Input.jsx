export default function Input({ label, textarea, ...props }) {
  return (
    <p className="flex flex-col gap-1 my-4">
      <label className="uppercase font-bold text-stone-600">{label}</label>
      {textarea ? (
        <textarea
          className="bg-stone-200 pb-2 border-b-0 focus:border-b-2 focus:border-stone-700  focus:outline-none"
          {...props}
        />
      ) : (
        <input
          className="bg-stone-200 pb-2 border-b-0 focus:border-b-2 focus:border-stone-700  focus:outline-none"
          {...props}
        />
      )}
    </p>
  );
}
