function Button({ text }) {
  return (
    <div className="mx-auto flex items-center justify-center rounded-full p-4 py-8 w-72 button-gradient h-14">
      <p className="text-center text-[16px] text-white font-roboto_m">{text}</p>
    </div>
  );
}

export default Button;
