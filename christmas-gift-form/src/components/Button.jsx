export const Button = ({ type, children }) => {
  return (
    <button
      className="py-2 px-6 bg-red-800 rounded-lg shadow-md text-white transition-all duration-200 hover:bg-red-900 hover:shadow-xl"
      type={type}
    >
      {children}
    </button>
  );
};
