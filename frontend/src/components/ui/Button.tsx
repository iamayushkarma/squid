interface ButtonProp {
  className?: string;
  text: string;
}

function Button({ className, text }: ButtonProp) {
  return (
    <button
      className={` ${className} text-[0.875rem] text-text-primary rounded-[.31rem] py-3 px-7 bg-linear-to-r from-[#FF9898] to-[#8054ff]
`}
    >
      {text}
    </button>
  );
}

export default Button;
