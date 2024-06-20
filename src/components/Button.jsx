const Button = ({
  label,
  iconUrl,
  backgroundColor,
  borderColor,
  textColor,
  fullwidth,
}) => {
  return (
    <button
      className={`flex items-center justify-center gap-2 rounded-full border ${backgroundColor ? `${backgroundColor} ${borderColor} ${textColor}` : `border-coral-red bg-coral-red text-white`} ${fullwidth && `w-full`} px-7 py-4 font-montserrat text-lg leading-none`}
    >
      {label}
      {iconUrl && (
        <img
          src={iconUrl}
          alt="next arrow"
          className="ml-2 h-5 w-5 rounded-full"
        />
      )}
    </button>
  );
};

export default Button;
