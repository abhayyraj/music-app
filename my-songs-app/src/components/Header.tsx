import { useState, useEffect } from "react";

type HeaderProps = {
  name: string;
  icon?: string;
};

export default function Header(props: HeaderProps) {
  const { name, icon } = props;
  const [isButtonVisible, setIsButtonVisible] = useState(true);
  const [isCloseVisible, setIsCloseVisible] = useState(false);
  const [searchValue, setSearchValue] = useState("");

  useEffect(() => {
    if(searchValue){
        setIsCloseVisible(true);
    } else {
        setIsCloseVisible(false);
    }
  }, [searchValue]);

  const handleSearchClick = () => {
    setIsButtonVisible(false);
  };

  const handleSearchInput = (e: any) => {
    setSearchValue(e.target.value);
  };

  return (
    <header className="fixed top-0 w-full text-white pb-5 h-[25vh] px-[20px] bg-linear-to-r from-sky-500 to-indigo-500 flex flex-col sm:flex-row sm:items-end justify-between">
      <div>
        {/*add icon later*/} 
        {/* {icon && <img />} */}
        <h1 className="text-8xl andada-pro-semibold">{name}</h1>
      </div>
      <nav className="flex gap-[16px] items-end overflow-hidden relative">
        <a>Home</a>
        <div className="bg-white w-[1px] h-[25px]"></div>
        {isButtonVisible && <button onClick={handleSearchClick}>Search</button>}
        {!isButtonVisible && (
          <>
            <input
              placeholder="search by name or artist"
              className="search-input"
              onChange={handleSearchInput}
              value={searchValue}
            />
            {isCloseVisible && (
              <button
                onClick={() => {
                    setIsButtonVisible(true);
                    setSearchValue('');
                }}
                className="absolute right-[10px] bottom-[2px]"
              >
                x
              </button>
            )}
          </>
        )}
      </nav>
    </header>
  );
}
