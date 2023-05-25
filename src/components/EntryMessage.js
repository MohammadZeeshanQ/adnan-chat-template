import React from "react";
import styled from "styled-components";

// assets
import RightIcon from "../assets/icons/arrow-right.png";
import Avatar from "../assets/avatars/avatar1.png";
import Logo1 from "../assets/logos/logo1.png";
import Logo2 from "../assets/logos/logo2.png";

// styles
const Container = styled.div`
	height: 100vh;
	width: 100vw;
	background: rgb(21, 223, 218);
	background: linear-gradient(186deg, rgba(21, 223, 218, 0.8) 0%, rgba(255, 255, 255, 1) 40%);
`;

const Background = styled.div`
	/* 15DFDA */
`;

const Wrapper = styled.div`
	height: 100%;
	width: 80%;
	margin: auto;
	display: grid;
	place-items: center;

	@media (max-width: 600px) {
		width: 90%;
	}
`;

const IconBox = styled.div`
	text-align: center;
	margin-top: auto;
`;

const Icon = styled.img`
	display: block;
	width: 8rem;
	object-fit: content;

	@media (min-width: 601px) and (max-width: 1024px) {
		width: 6rem;
	}
	@media (max-width: 600px) {
		width: 6rem;
	}
`;

const TextBox = styled.div`
	width: 65%;
	margin: auto;
	text-align: center;
	margin-top: 2rem;
	margin-bottom: auto;

	@media (min-width: 601px) and (max-width: 1024px) {
		width: 80%;
	}
	@media (max-width: 600px) {
		width: 100%;
	}
`;

// const Header = styled.h1`
// 	color: #0875a4;
// 	font-size: 2.5rem;
// 	font-weight: 800;
// 	letter-spacing: 0.5px;
// 	margin-bottom: 1rem;

// 	@media (min-width: 601px) and (max-width: 1024px) {
// 		font-size: 1.8rem;
// 	}
// 	@media (max-width: 600px) {
// 		font-size: 1.8rem;
// 	}
// `;

const Description = styled.p`
	color: #171717;
	font-size: 1.1rem;
	font-weight: 600;
	line-height: 1.5;
	letter-spacing: 0.3px;

	@media (min-width: 601px) and (max-width: 1024px) {
		font-size: 0.9rem;
	}
	@media (max-width: 600px) {
		font-size: 0.9rem;
	}
`;

const LogoContainer = styled.div`
	margin-top: 2rem;
`;

const LogoWrapper = styled.div`
	display: flex;
	gap: 2rem;
	align-items: center;
	justify-content: center;
	/* change flex direction to : column (if you want to display up and down way) */
	flex-direction: row;
`;

const LogoImage = styled.img`
	display: block;
	width: 6rem;
	object-fit: content;

	@media (min-width: 601px) and (max-width: 1024px) {
		width: 5rem;
	}
	@media (max-width: 600px) {
		width: 6rem;
	}
`;

const ButtonBox = styled.div`
	width: 30%;

	@media (min-width: 601px) and (max-width: 1024px) {
		width: 40%;
	}
	@media (max-width: 600px) {
		width: 100%;
	}
`;

const Button = styled.button`
	width: 100%;
	background-color: var(--orangeColor);
	color: #fff;
	display: flex;
	align-items: center;
	padding: 1rem 2rem;
	border-radius: 2rem;
`;

const ButtonText = styled.p`
	font-size: 1rem;
	margin-left: auto;

	@media (max-width: 600px) {
		font-size: 1.1rem;
		font-weight: 500;
	}
`;

const ButtonIcon = styled.img`
	width: 1.6rem;
	margin-left: auto;

	@media (max-width: 600px) {
		width: 1.8rem;
	}
`;

export default function EntryMessage({ setShowMainMessage }) {
	return (
		<Container>
			<Wrapper>
				<IconBox>
					<Icon src={Avatar} loading='lazy' height='auto' width='auto' alt='Hi, From Chat Bot AI' />
				</IconBox>
				<TextBox>
					{/* <Header>Your AI Chatbot</Header> */}
					<Description>
						Assalamu Alaikum and welcome to the 2023 ICNA Convention! Meet ICNAbot! Your personalized
						convention companion. Ask ICNAbot questions about sessions, the bazaar, and speakers. Bismillah!
					</Description>
					<LogoContainer>
						<LogoWrapper>
							<LogoImage src={Logo1} loading='lazy' height='auto' width='auto' alt='AI Chatbot' />
							<LogoImage src={Logo2} loading='lazy' height='auto' width='auto' alt='AI Chatbot' />
						</LogoWrapper>
					</LogoContainer>
				</TextBox>
				<ButtonBox>
					<Button onClick={() => setShowMainMessage(false)}>
						<ButtonText>Continue</ButtonText>

						<ButtonIcon
							src={RightIcon}
							loading='lazy'
							height='auto'
							width='auto'
							alt='Proceed with the AI Chatbot'
						/>
					</Button>
				</ButtonBox>
			</Wrapper>
		</Container>
	);
}
