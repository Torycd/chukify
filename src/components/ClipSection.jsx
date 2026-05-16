import { FaClipboard, FaFlagCheckered } from "react-icons/fa6";
import { Navigate } from "react-router-dom";

export default function ClipSection({ data }) {
  return (
    <div
      className="bg-gray-100 h-100 w-full overflow-hidden px-4 py-5 rounded-lg cursor-pointer shadow-lg flex flex-col justify-between"
      onClick={() => Navigate(`/${data.id}`)}
    >
      <div className="flex justify-between">
        <span className="flex gap-2">
          <FaFlagCheckered className="text-red-500 opacity-50" size={20} />
          <h2 className="font-bold">{data.category}</h2>
        </span>
        <span>
          <FaClipboard className="text-blue-500 opacity-50" size={20} />
        </span>
      </div>
      <div className="flex-1 overflow-hidden">
        <p className="line-clamp-3">{data.description}</p>
        <span>{data.code}</span>
      </div>
    </div>
  );
}
