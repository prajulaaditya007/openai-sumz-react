import {logo} from '../assets';

const Hero = () => {
	return (
		<header className="w-full flex justify-center items-center flex-col">
			<nav className="flex justify-between items-center w-full mb-10 pt-3">
				<img src={logo} alt="logo" className="w-28 object-contain"/>

				<button
					type="button"
					onClick={() => {
						window.open('https://github.com/prajulaaditya007');
					}}
					className="black_btn">GitHub
				</button>
			</nav>

			<h1 className="head_text">
				Summarize your text in a few seconds with <br className="max-md:hidden"/>
				<span className="orange_gradient">OpenAI GPT-4</span>
			</h1>
			<h2 className="desc">
				OpenAI GPT-4 is a new language model that uses deep learning to produce human-like text. It is the
				largest and
				most powerful language model yet, with 175 billion parameters and 6 trillion connections. It is 10 times
				larger
				than GPT-3, the previous state-of-the-art model.
				<br/>
				This app uses the GPT-4 model to summarize your text in a few seconds, in clear and concise summaries.
			</h2>
		</header>
	);
};

export default Hero;
