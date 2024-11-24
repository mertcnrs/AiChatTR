import { useContext } from "react";
import { assets } from "../../assets/assets";
import "./main.css";
import { Context } from "../../context/Context";
const Main = () => {
	const {
		onSent,
		recentPrompt,
		showResults,
		loading,
		resultData,
		setInput,
		input,
	} = useContext(Context);

	const handleCardClick = (promptText) => {
		setInput(promptText);
	};
	return (
		<div className="main">
			<div className="nav">
				<p>Aichat TR</p>
				<img src={assets.user} alt="" />
			</div>
			<div className="main-container">
				{!showResults ? (
					<>
						<div className="greet">
							<p>
								<span>Merhaba , Ziyaretçi</span>
							</p>
							<p>Nasıl Yardımcı Olabilirim?</p>
						</div>
						<div className="cards">
							<div
								className="card"
								onClick={() =>
									handleCardClick("Türkiye'de Ziyaret Edilecek Bazı Yerler Önerin.")
								}
							>
								<p>Türkiye'de Ziyaret Edilecek Bazı Yerler Önerin.</p>
								<img src={assets.compass_icon} alt="" />
							</div>
							<div
								className="card"
								onClick={() =>
									handleCardClick(
										"Fotosentez sürecini basit terimlerle açıklayın."
									)
								}
							>
								<p>Fotosentez sürecini basit terimlerle açıklayın.</p>
								<img src={assets.message_icon} alt="" />
							</div>
							<div
								className="card"
								onClick={() =>
									handleCardClick("CSS ve JavaScript kullanarak duyarlı bir gezinme çubuğunu nasıl oluşturursunuz?")
								}
							>
								<p>CSS ve JavaScript kullanarak duyarlı bir gezinme çubuğunu nasıl oluşturursunuz?</p>
								<img src={assets.bulb_icon} alt="" />
							</div>
							<div
								className="card"
								onClick={() => {
									handleCardClick(
										"Bir front-end developer olmak için bazı temel beceriler nelerdir?"
									);
								}}
							>
								<p>Bir front-end developer olmak için bazı temel beceriler nelerdir?</p>
								<img src={assets.code_icon} alt="" />
							</div>
						</div>
					</>
				) : (
					<div className="result">
						<div className="result-title">
							<img src={assets.user} alt="" />
							<p>{recentPrompt}</p>
						</div>
						<div className="result-data">
							<img src={assets.gemini_icon} alt="" />
							{loading ? (
								<div className="loader">
									<hr />
									<hr />
									<hr />
								</div>
							) : (
								<p dangerouslySetInnerHTML={{ __html: resultData }}></p>
							)}
						</div>
					</div>
				)}

				<div className="main-bottom">
					<div className="search-box">
						<input
							onChange={(e) => {
								setInput(e.target.value);
							}}
							value={input}
							type="text"
							placeholder="Aichat TR uygulamasına ileti gönder"
							// Burada onKeyDown eventini ekliyoruz
							onKeyDown={(e) => {
								if (e.key === "Enter") {
									e.preventDefault(); // Enter tuşuna basıldığında sayfanın yenilenmesini engeller
									onSent(); // Mesajı gönderir
								}
							}}
						/>
						<div>
							<img src={assets.gallery_icon} alt="" />
							<img src={assets.mic_icon} alt="" />
							<img
								src={assets.send_icon}
								alt=""
								onClick={() => {
									onSent(); // Mesaj gönderme işlemi
								}}
							/>
						</div>
					</div>
					<div className="bottom-info">
						<p>
						Aichat TR may display inaccurate info, including about people, so double-check its responses. Your privacy & Aichat TR Apps. Made by Mert Çinar.
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Main;
