import "./sidebar.css";
import { assets } from "../../assets/assets";
import { useContext, useState } from "react";
import { Context } from "../../context/Context";
const Sidebar = () => {
	const [extended, setExtended] = useState(false);
	const { onSent, prevPrompts, setRecentPrompt, newChat } = useContext(Context);

	const loadPreviousPrompt = async (prompt) => {
		setRecentPrompt(prompt);
		await onSent(prompt);
	};
	return (
		<div className="sidebar">
			<div className="top">
				<img
					src={assets.menu_icon}
					className="menu"
					alt="menu-icon"
					onClick={() => {
						setExtended((prev) => !prev);
					}}
				/>
				<div className="new-chat">
					<img src={assets.plus_icon} alt="" onClick={()=>{
                        newChat()
                    }} />
					{extended ? <p>Yeni Sohbet</p> : null}
				</div>
				{extended ? (
					<div className="recent">
						<p className="recent-title">Bugün</p>
						{prevPrompts.map((item, index) => {
							return (
								<div onClick={()=>{
                                    loadPreviousPrompt(item)
                                }} className="recent-entry">
									<img src={assets.message_icon} alt="" />
									<p>{item.slice(0, 18)}...</p>
								</div>
							);
						})}
					</div>
				) : null}
			</div>
			<div className="bottom">
				<div className="bottom-item recent-entry">
					<img src={assets.question_icon} alt="" />
					{extended ? <p>Yardım</p> : null}
				</div>
				<div className="bottom-item recent-entry">
					<img src={assets.history_icon} alt="" />
					{extended ? <p>Geçmiş</p> : null}
				</div>
				<div className="bottom-item recent-entry">
					<img src={assets.setting_icon} alt="" />
					{extended ? <p>Ayarlar</p> : null}
				</div>
			</div>
		</div>
	);
};

export default Sidebar;
