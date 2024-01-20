const Footer = () => {
	return (
		<footer className="flex bg-black w-full min-h-[4vh] items-center">
			<a
				href={import.meta.env.BASE_URL}
				className="flex w-full justify-center"
			>
				© LottoPoop, {new Date().getFullYear()}
			</a>
			<a
				href={import.meta.env.BASE_URL + "#/about"}
				className="flex w-full justify-center"
			>
				About
			</a>
			<a
				href={import.meta.env.BASE_URL + "#/donations"}
				className="flex w-full justify-center"
			>
				Donations
			</a>
			<a
				href={import.meta.env.BASE_URL + "#/privacy"}
				className="flex w-full justify-center"
			>
				Privacy Policy
			</a>
		</footer>
	);
};

export default Footer;
