export const LayoutWrapper = ({ children }) => {
  return (
    <div
      className="!bg-cover w-screen h-screen flex items-center justify-center"
      style={{
        background: `url('https://static.vecteezy.com/system/resources/previews/002/722/639/non_2x/seamless-pattern-background-with-snow-illustration-free-vector.jpg')`,
      }}
    >
      <div className="w-fit h-fit px-20 py-12 bg-white rounded-xl">
        {children}
      </div>
    </div>
  );
};
