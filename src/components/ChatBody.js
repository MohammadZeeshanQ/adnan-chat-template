import React, { useState } from "react";
import styled from "styled-components";

// component
import Navbar from "./shared/Navbar";
import AvatarSelection from "./shared/AvatarSelection";
import UserMessageTemplate from "./template/UserMessageTemplate";
import AIMessageTemplate from "./template/AIMessageTemplate";
import LoadingText from "./template/LoadingText";

// Avatars Icon path
import Avatar1 from "../assets/avatars/avatar1.png";

// assets
import SearchIcon from "../assets/icons/send.png";

// styles
const Container = styled.div`
	position: relative;
	z-index: 0;
	padding-top: 4rem;
`;

const ChatContainer = styled.div`
	height: 75vh;
	overflow-y: auto;
	position: relative;
	z-index: 1;

	@media (max-width: 600px) {
		height: 70vh;
	}
`;

const ChatWrapper = styled.div`
	width: 85%;
	margin: auto;

	@media (max-width: 600px) {
		width: 90%;
	}
`;

const SearchContainer = styled.div`
	position: relative;
	z-index: 9;
	/* top: -10px; */
	padding: 1rem 0 1rem 0;
`;

const SearchWrapper = styled.div`
	display: flex;
	align-items: center;

	width: 50%;
	margin: auto;
	border-radius: 2rem;
	padding: 0.5rem 1rem;
	box-shadow: 5px 4px 20px 0px #00000021;

	@media (max-width: 600px) {
		width: 90%;
	}
`;

const SearchInput = styled.input`
	width: 100%;
	font-family: "Nunito";
	font-weight: 600;
	padding: 0.5rem 1rem;
	outline: none;
	border: none;

	&::placeholder {
		color: #000;
	}
	@media (max-width: 600px) {
		font-size: 0.9rem;
	}
`;

const SearchImage = styled.img`
	width: 2rem;
	object-fit: contain;
	cursor: pointer;
	transition: all 0.2s ease-in-out;

	&:hover {
		scale: 1.05;
	}
`;

export default function ChatBody({ setShowMainMessage }) {
	const [openAvatarSelection, setOpenAvatarSelection] = useState(false);
	const [avatarIconState, setAvatarIconState] = useState(Avatar1);

	return (
		<Container>
			{/* NavBar */}
			<Navbar
				setShowMainMessage={setShowMainMessage}
				setOpenAvatarSelection={setOpenAvatarSelection}
				avatarIconState={avatarIconState}
			/>

			{/* Avatar Selection */}
			{openAvatarSelection && (
				<AvatarSelection
					setOpenAvatarSelection={setOpenAvatarSelection}
					setAvatarIconState={setAvatarIconState}
				/>
			)}

			{/* Chatting Body */}
			<ChatContainer>
				<ChatContainer>
					<ChatWrapper>
						{/* First Talk */}
						<UserMessageTemplate Text='Hi, How are you?' />
						<AIMessageTemplate Text='Hello! I am fine, how can I help you?' />

						{/* Second Talk */}
						<UserMessageTemplate Text='What is ICNA convention?' />
						<AIMessageTemplate Text='The ICNA Convention stands for the Islamic Circle of North America Convention. It is an annual event that is the largest, most diverse, and entertaining Islamic convention in North America. The convention offers over 100+ breakout sessions, a special Youth Conference, and a comprehensive agenda that includes keynotes, lectures, hands-on workshops, interfaith dialogue, matrimonial services, halal food, cultural bazaar, and even a family-friendly Islamic entertainment.' />

						{/* Loading Animation */}
						<LoadingText />
					</ChatWrapper>
				</ChatContainer>
			</ChatContainer>

			{/* Search (Question Input) */}
			<SearchContainer>
				<SearchWrapper>
					<SearchInput placeholder='Enter Question here...' />
					<SearchImage src={SearchIcon} loading='lazy' height='auto' width='auto' alt='Search Icon' />
				</SearchWrapper>
			</SearchContainer>
		</Container>
	);
}
