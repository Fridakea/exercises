import { twMerge } from "tailwind-merge";

export const LayoutWrapper = ({ children, fit }) => {
  return (
    <div
      className="!bg-cover w-screen min-h-screen flex flex-col items-center justify-center"
      style={{
        background: `url('https://static.vecteezy.com/system/resources/previews/002/722/639/non_2x/seamless-pattern-background-with-snow-illustration-free-vector.jpg')`,
      }}
    >
      <div
        className={twMerge(
          "max-w-[1000px] w-[85%] mx-auto m-8 px-4 py-8 md:px-16 md:py-12 bg-white rounded-2xl",
          `w-${fit}`
        )}
      >
        {children}
      </div>
    </div>
  );
};
