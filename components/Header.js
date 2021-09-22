import {
  HomeIcon,
  BadgeCheckIcon,
  CollectionIcon,
  LightningBoltIcon,
  SearchIcon,
  UserIcon,
} from "@heroicons/react/outline";
import HeaderItems from "./HeaderItems";

function Header() {
  return (
    <header className="flex flex-col sm:flex-row m-5 justify-between items-center h-auto">
      <div className="flex flex-grow justify-evenly max-w-2xl">
        <HeaderItems title="home" Icon={HomeIcon} />
        <HeaderItems title="trending" Icon={LightningBoltIcon} />
        <HeaderItems title="verified" Icon={BadgeCheckIcon} />
        <HeaderItems title="collection" Icon={CollectionIcon} />
        <HeaderItems title="search" Icon={SearchIcon} />
        <HeaderItems title="account" Icon={UserIcon} />
      </div>
      <p className="font-sans text-2xl font-extrabold tracking-wide	text-center	text-blue-100	whitespace-nowrap	">
        stream.Tv
      </p>
    </header>
  );
}

export default Header;
