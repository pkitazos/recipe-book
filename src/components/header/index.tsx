import { SearchBar } from "../search-bar";
import { AddRecipeButton } from "./add-recipe-button";
import { LogoMenu } from "./logo-menu";
import { UserProfileButton } from "./user-profile-button";

export function Header() {
  return (
    <header className="flex h-10 w-full items-center bg-fuchsia-600">
      <nav className="flex w-full">
        <ul className="flex w-full items-center justify-between">
          <li>
            <LogoMenu />
          </li>
          <li>
            <SearchBar />
          </li>
          <li>
            <AddRecipeButton />
            <UserProfileButton />
          </li>
        </ul>
      </nav>
    </header>
  );
}
