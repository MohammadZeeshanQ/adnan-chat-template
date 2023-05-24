import React from "react";
import styled from "styled-components";
import { Grid } from "@mui/material";

// Avatars Icon path
import Avatar1 from "../../assets/avatars/avatar1.png";
import Avatar2 from "../../assets/avatars/avatar2.png";
import Avatar3 from "../../assets/avatars/avatar3.png";
import Avatar4 from "../../assets/avatars/avatar4.png";
import Avatar5 from "../../assets/avatars/avatar5.png";
import Avatar6 from "../../assets/avatars/avatar6.png";
import Avatar7 from "../../assets/avatars/avatar7.png";
import Avatar8 from "../../assets/avatars/avatar8.png";

// styles
const Container = styled.div`
	height: 100vh;
	width: 100%;
	position: absolute;
	z-index: 10;
	top: 0;
	left: 0;
	overflow: hidden;

	background: rgba(255, 255, 255, 0.25);
	backdrop-filter: blur(8px);
	-webkit-backdrop-filter: blur(8px);

	@media (max-width: 600px) {
		height: auto;
	}
`;

const Wrapper = styled.div`
	width: 80%;
	margin: auto;
	padding: 8rem 0;

	@media (max-width: 600px) {
		width: 90%;
	}
`;

const HeaderBox = styled.div`
	margin-bottom: 2rem;

	@media (max-width: 600px) {
		margin-bottom: 3rem;
	}
`;

const Header = styled.p`
	font-size: 1.7rem;
	font-weight: 600;
	letter-spacing: 0.5px;

	@media (max-width: 600px) {
		font-size: 1.4rem;
		font-weight: 700;
	}
	@media (min-width: 601px) and (max-width: 1024px) {
		font-size: 1.2rem;
	}
`;

const GridContainer = styled.div`
	@media (max-width: 600px) {
		width: 80%;
		margin: auto;
	}
`;

const GridBox = styled.div`
	width: 100%;
	text-align: center;
`;

const GridImage = styled.img`
	display: block;
	width: 8rem;
	margin: auto;
	object-fit: contain;
	cursor: pointer;
	transition: all 0.2s ease-in-out;

	&:hover {
		scale: 1.05;
	}
	@media (max-width: 600px) {
		width: 6rem;
	}

	@media (min-width: 601px) and (max-width: 1024px) {
		width: 5rem;
	}
`;

export default function AvatarSelection({ setOpenAvatarSelection, setAvatarIconState }) {
	const avatarData = [
		{
			image: Avatar1,
			alt: "Avatar 1",
		},
		{
			image: Avatar2,
			alt: "Avatar 2",
		},
		{
			image: Avatar3,
			alt: "Avatar 3",
		},
		{
			image: Avatar4,
			alt: "Avatar 4",
		},
		{
			image: Avatar5,
			alt: "Avatar 5",
		},
		{
			image: Avatar6,
			alt: "Avatar 6",
		},
		{
			image: Avatar7,
			alt: "Avatar 7",
		},
		{
			image: Avatar8,
			alt: "Avatar 8",
		},
	];

	return (
		<Container>
			<Wrapper>
				<HeaderBox>
					<Header>Select an avatar</Header>
				</HeaderBox>

				<GridContainer>
					<Grid container spacing={{ xs: 4, sm: 2, md: 4 }} justifyContent='space-around'>
						{avatarData.map((item, index) => (
							<Grid item xs={6} sm={3} md={3} key={index}>
								<GridBox>
									<GridImage
										src={item.image}
										loading='lazy'
										height='auto'
										width='auto'
										alt={item.alt}
										onClick={() => {
											setAvatarIconState(item.image);
											setOpenAvatarSelection(false);
										}}
									/>
								</GridBox>
							</Grid>
						))}
					</Grid>
				</GridContainer>
			</Wrapper>
		</Container>
	);
}
