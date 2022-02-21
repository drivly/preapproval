type ButtonProps = {
    onClick: () => void;
    children: React.ReactNode;
};

const Button = ({
    onClick,
    children
}: ButtonProps) => {
    return (
        <button
            onClick={onClick}
            className="flex w-full items-center justify-center font-medium px-3 py-4 text-button text-text-black-300 rounded-md bg-white-200 hover:bg-white-300">
            {children}
        </button>
    )
};

export default Button;
