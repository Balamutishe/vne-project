const ButtonLogout = () => {
  return (
    <button
      className={
        "border-hover hover:bg-hover hover:text-background active:text-background active:bg-active w-full" +
        " cursor-pointer" +
        " border-1 p-2"
      }
    >
      ВЫЙТИ
    </button>
  );
};

export default ButtonLogout;
