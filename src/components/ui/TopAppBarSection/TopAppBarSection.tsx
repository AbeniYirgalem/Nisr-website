import { SearchIcon } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { Button } from "../button";
import { Input } from "../input";
import iconNotification from "../../../assets/images/iconamoon-notification.svg";
import iconCart from "../../../assets/images/shopping-cart-2.svg";
import iconChat from "../../../assets/images/ph-chat-text.svg";
import iconProfile from "../../../assets/images/iconamoon-profile-bold.svg";


interface TopAppBarSectionProps {
	onShowDownloadPopup?: () => void;
}

export const TopAppBarSection = ({ onShowDownloadPopup }: TopAppBarSectionProps): JSX.Element => {
	const navigate = useNavigate();
	const [searchText, setSearchText] = useState("");

	const handleSearch = () => {
		const query = searchText.trim();
		if (!query) return;
		navigate(`/search?q=${encodeURIComponent(query)}`);
	};

	const renderNav = (className = "") => (
		<nav className={`flex items-center gap-3 ${className}`}>
			<button className="flex flex-col items-center gap-1 relative" onClick={onShowDownloadPopup}>
				<img
					className="w-[34px] h-[33px]"
					alt="Notification"
					src={iconNotification}
				/>
				<span className="[font-family:'Nunito',Helvetica] font-normal text-black text-xs tracking-[0.40px] leading-4 whitespace-nowrap">
					Notification
				</span>
			</button>

			<button className="flex flex-col items-center gap-1 px-1" onClick={onShowDownloadPopup}>
				<img
					className="w-[34px] h-[30px]"
					alt="Shopping cart"
					src={iconCart}
				/>
				<span className="[font-family:'Nunito',Helvetica] font-normal text-lightgray-11 text-xs text-center tracking-[0.40px] leading-4">
					Cart
				</span>
			</button>

			<button className="flex flex-col items-center gap-[5px] px-1" onClick={onShowDownloadPopup}>
				<img className="w-[29px] h-[29px]" alt="Chat" src={iconChat} />
				<span className="[font-family:'Nunito',Helvetica] font-normal text-black text-xs text-center tracking-[0.40px] leading-4 whitespace-nowrap">
					Chat
				</span>
			</button>

			<button className="flex flex-col items-center gap-1 px-1" onClick={onShowDownloadPopup}>
				<img
					className="w-[33px] h-[31px]"
					alt="Profile"
					src={iconProfile}
				/>
				<span className="[font-family:'Nunito',Helvetica] font-normal text-black text-xs text-center tracking-[0.40px] leading-4 whitespace-nowrap">
					Profile
				</span>
			</button>

			<span className="mx-2" />
			<Button className="h-[45px] w-[110px] bg-[#fe2188] hover:bg-[#fe2188]/90 rounded-[10px] [font-family:'Montserrat',Helvetica] font-bold text-white text-[18px] tracking-[0] leading-[normal]" onClick={onShowDownloadPopup}>
				SELL
			</Button>
		</nav>
	);

	const renderSearchBar = () => (
		<div className="relative flex items-center">
			<div className="absolute left-3 top-1/2 -translate-y-1/2 z-10">
				<SearchIcon className="w-6 h-6 text-gray-400" />
			</div>
			<Input
				type="text"
				placeholder="Search"
				value={searchText}
				onChange={(e) => setSearchText(e.target.value)}
				onKeyDown={(e) => {
					if (e.key === "Enter") handleSearch();
				}}
				className="w-full h-[45px] pl-11 pr-[100px] rounded-[50px] border border-black bg-white [font-family:'Nunito',Helvetica] font-normal text-[#bcb8b8] text-2xl"
			/>
			<Button
				onClick={handleSearch}
				className="absolute right-0 top-0 h-[45px] w-[89px] bg-[#fa6bad9e] hover:bg-[#fa6bad] rounded-[50px] [font-family:'Nunito',Helvetica] font-semibold text-black text-base"
			>
				Search
			</Button>
		</div>
	);

	const renderMobileBottomNav = () => (
		<div className="lg:hidden fixed bottom-0 left-0 right-0 z-40 bg-white border-t border-gray-200">
			<div className="max-w-md mx-auto px-4 py-2 flex items-center justify-between">
				   <button
					   className="flex flex-col items-center text-xs font-semibold text-[#fe2188]"
					   onClick={() => navigate("/")}
				   >
									 {/* Custom Home Icon matching provided image */}
									 <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
										 <path d="M4 11.5V20c0 .55.45 1 1 1h14c.55 0 1-.45 1-1v-8.5c0-.27-.11-.52-.29-.71l-7-7a1 1 0 0 0-1.42 0l-7 7A1 1 0 0 0 4 11.5Z" fill="#fe2188"/>
										 <rect x="9" y="13" width="6" height="6" rx="1.5" fill="#fff"/>
										 <rect x="10.5" y="15" width="3" height="4" rx="1" fill="#fe2188"/>
									 </svg>
					   <span>Home</span>
				   </button>
				<button
					className="flex flex-col items-center text-xs font-semibold text-[#313131]"
					onClick={onShowDownloadPopup}
				>
					<img className="w-6 h-6" alt="Cart" src={iconCart} />
					<span>Cart</span>
				</button>
				<Button
					className="px-5 py-2 bg-[#fe2188] rounded-full text-white text-sm font-bold"
					onClick={onShowDownloadPopup}
				>
					Sell
				</Button>
				<button
					className="flex flex-col items-center text-xs font-semibold text-[#313131]"
					onClick={onShowDownloadPopup}
				>
					<img className="w-6 h-6" alt="Chat" src={iconChat} />
					<span>Chat</span>
				</button>
				<button
					className="flex flex-col items-center text-xs font-semibold text-[#313131]"
					onClick={onShowDownloadPopup}
				>
					<img className="w-6 h-6" alt="Profile" src={iconProfile} />
					<span>Profile</span>
				</button>
			</div>
		</div>
	);

	return (
		<header className="w-full bg-white pb-2 sm:pb-6 lg:pb-5 pt-1 px-4 sm:px-6 lg:px-8 relative">
			{/* Mobile layout */}
			<div className="flex flex-col gap-0 lg:hidden">
				<div className="flex items-center justify-between">
					<button
						type="button"
						className="[font-family:'Montserrat',Helvetica] font-bold text-[#fe2188] text-2xl sm:text-[30px] tracking-[0] leading-[normal] whitespace-nowrap bg-transparent border-none cursor-pointer p-0 m-0"
						onClick={() => navigate("/")}
					>
						Nisr Market
					</button>
					<button
						className="p-2 rounded-full border border-transparent hover:bg-gray-100"
						onClick={onShowDownloadPopup}
						aria-label="Notifications"
					>
						<img className="w-[28px] h-[28px]" alt="Notification" src={iconNotification} />
					</button>
				</div>
				<div className="w-full mb-0">
					{/* Smaller search bar label on mobile */}
					<div className="block sm:hidden">
						<div className="relative flex items-center">
							<div className="absolute left-3 top-1/2 -translate-y-1/2 z-10">
								<SearchIcon className="w-5 h-5 text-gray-400" />
							</div>
							<Input
								type="text"
								placeholder="Search"
								value={searchText}
								onChange={(e) => setSearchText(e.target.value)}
								onKeyDown={(e) => {
									if (e.key === "Enter") handleSearch();
								}}
								className="w-full h-10 pl-10 pr-[90px] rounded-[50px] border border-black bg-white [font-family:'Nunito',Helvetica] font-normal text-[#bcb8b8] text-base"
							/>
							<Button
								onClick={handleSearch}
								className="absolute right-0 top-0 h-10 w-[70px] bg-[#fa6bad9e] hover:bg-[#fa6bad] rounded-[50px] [font-family:'Nunito',Helvetica] font-semibold text-black text-xs"
							>
								Search
							</Button>
						</div>
					</div>
					<div className="hidden sm:block">
						{renderSearchBar()}
					</div>
				</div>
			</div>

			{/* Desktop layout */}
			<div className="hidden lg:flex items-center justify-between gap-8 px-4">
				<button
					type="button"
					className="[font-family:'Montserrat',Helvetica] font-bold text-[#fe2188] text-[30px] tracking-[0] leading-[normal] whitespace-nowrap bg-transparent border-none cursor-pointer p-0 m-0"
					onClick={() => navigate("/")}
				>
					Nisr Market
				</button>
				<div className="flex-1 max-w-[532px]">
					{renderSearchBar()}
				</div>
				{renderNav()}
			</div>

			{renderMobileBottomNav()}
		</header>
	);
};
