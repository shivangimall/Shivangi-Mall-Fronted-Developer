import { LOGO } from "../utils/constants";

const Header = () => {
    return (

        <div className="flex p-3 justify-between shadow-lg">
            <img id="logo" className="w-16" src={LOGO} alt="logo" />
            <div className="pt-2">
                <input type="text" className="w-60 md:w-80 p-2 bg-gray-300 rounded-md outline-none" placeholder="Search for Resturant and Food" />
            </div>
        </div>

    );
}

export default Header;
