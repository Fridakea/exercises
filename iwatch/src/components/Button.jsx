export const Button = ({ text, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="px-16 py-3 border-solid border-2 rounded-full border-white text-xl text-white transition-all duration-300 ease-in-out hover:bg-black/10"
    >
      {text}
    </button>
  );
};
