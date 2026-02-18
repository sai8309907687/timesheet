import React from "react";
import TypeIcon from "./type.icon";

type TypeSearchProps = {
  className?: string;
  label?: string;
  value: string;
  onChange: (value: string) => void;
};

const TypeSearch: React.FC<TypeSearchProps> = ({
  className = "",
  label = "Search...",
  value,
  onChange,
}) => {
  const [searchTerm, setSearchTerm] = React.useState<string>(value);

  React.useEffect(() => {
    setSearchTerm(value);
  }, [value]);

  return (
    <label className={`floating-label w-full ${className}`}>
      <div className="relative w-full">
        <input
          type="text"
          className="input input-bordered w-full pr-10"
          placeholder={label}
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          onKeyUp={(e) => {
            if (e.key === "Enter") {
              onChange(e.currentTarget.value);
            }
          }}
        />

        {/* Search Icon */}
        <span className="absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer">
          <TypeIcon
            name="Search"
            onClick={() => onChange(searchTerm)}
          />
        </span>
      </div>

      <span>{label}</span>
    </label>
  );
};

export default TypeSearch;
