interface ButtonProp {
  className?: string;
  text: string;
  type?: "submit" | "reset" | "button" | undefined;
}

function Button({ className, text, type }: ButtonProp) {
  return (
    <button
      type={type}
      className={`${className}
  text-[0.875rem] text-text-primary rounded-[.31rem] py-3 px-7
  bg-linear-to-r from-[#FF9898] to-[#8054ff]
  transition-all duration-200 ease-out
  hover:from-[#ff7f7f] hover:to-[#6a3cff]
  hover:shadow-lg
`}
    >
      {text}
    </button>
  );
}

export default Button;
