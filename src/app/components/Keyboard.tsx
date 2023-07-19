export const Keyboard = (props: any) => {
  const topRow = ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"];
  const midRow = ["A", "S", "D", "F", "G", "H", "J", "K", "L"];
  const lastRow = ["Z", "X", "C", "V", "B", "N", "M"];
  return (
    <>
      {" "}
      <div className="flex flex-col gap-y-1 justify-center">
        <div className="flex flex-row gap-x-1">
          {topRow.map((item, key) => (
            <button
              className="border-2 border-slate-300 p-2 bg-slate-300"
              key={key}
              onClick={() => props.sendToWordle(item)}
            >
              {item}
            </button>
          ))}
        </div>
        <div className="flex flex-row gap-x-1">
          {midRow.map((item, key) => (
            <button
              className="border-2 border-slate-300 p-2 bg-slate-300"
              key={key}
              onClick={() => props.sendToWordle(item)}
            >
              {item}
            </button>
          ))}
        </div>
        <div className="flex flex-row gap-x-1">
          {lastRow.map((item, key) => (
            <button
              className="border-2 border-slate-300 p-2 bg-slate-300"
              key={key}
              onClick={() => props.sendToWordle(item)}
            >
              {item}
            </button>
          ))}
        </div>
      </div>
    </>
  );
};
