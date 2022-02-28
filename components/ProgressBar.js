function ProgressBar({ percentage, width }) {
  return (
    <div
      className={`${width} h-6 border-white border-[1px] rounded-3xl relative`}
    >
      <div
        style={{ width: percentage }}
        className={`flex justify-center items-center bg-primary h-full rounded-3xl text-sm font-semibold text-center text-white`}
      >
        {percentage}
      </div>
    </div>
  );
}

export default ProgressBar;
