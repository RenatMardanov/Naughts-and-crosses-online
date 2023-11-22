interface ResetBtnProps {
    onClick: () => void;
}

export const ResetBtn = ({ onClick }: ResetBtnProps) => {
    return (
        <button
            className="mt-2 p-1 cursor-pointer border border-gray-600 rounded"
            onClick={onClick}
        >
            Новая игра
        </button>
    );
};
