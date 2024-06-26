import { useState, useEffect } from "react";
import { quoteData } from "./config";
import { randomHex } from "./utils";
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { IconContext } from "react-icons";
import { Credit } from "./components";

function App() {
	const [quote, setQuote] = useState(
		quoteData[Math.floor(Math.random() * quoteData.length)]
	);
	const [col, setCol] = useState(randomHex());

	const changeQuote = () => {
		setQuote(quoteData[Math.floor(Math.random() * quoteData.length)]);
		setCol(randomHex());
	};

	useEffect(() => {
		document.body.style.backgroundColor = `#${col}`;
	}, [col]);

	return (
		<div className="h-full min-h-screen min-w-[280px] py-12 flex flex-col items-center justify-center gap-4 relative transition-colors ease-in-out duration-1000 text-xl">
			<div className="w-11/12 sm:w-3/5 flex flex-col justify-between align-center gap-4 bg-white rounded-md p-8 transition-colors ease-in-out duration-1000">
				<p
					className="transition-colors ease-in-out duration-1000"
					style={{ color: `#${col}` }}
				>
					<FaQuoteLeft className="inline-block align-top" />
					<span className="mx-2">{quote.quote}</span>
					<FaQuoteRight className="inline-block align-top" />
				</p>
				<p
					className="self-end transition-colors ease-in-out duration-1000 text-sm"
					style={{ color: `#${col}` }}
				>
					- {quote.author}
				</p>
				<div className="w-full flex flex-row items-stretch justify-between">
					<div className="flex flex-start items-center justify-start gap-4">
						<IconContext.Provider value={{ style: { fill: "white" } }}>
							<a href="https://github.com/DokuaAsiedu">
								<button
									className="flex flex-col items-center justify-center rounded-lg h-full aspect-square p-2 transition-colors ease-in-out duration-1000"
									style={{ backgroundColor: `#${col}` }}
								>
									<FaGithub className="h-full" />
								</button>
							</a>
						</IconContext.Provider>
					</div>
					<button
						onClick={changeQuote}
						className="py-2 px-4 rounded-lg p-2 text-white transition-colors ease-in-out duration-1000"
						style={{ backgroundColor: `#${col}` }}
					>
						New Quote
					</button>
				</div>
			</div>
			<Credit />
		</div>
	);
}

export default App;
