import { Card, Image, Icon } from "semantic-ui-react";
function HomePage() {
	return (
		<div className="container">
			<Card.Group itemsPerRow={5}>
				<Card>
					<Image
						src="https://react.semantic-ui.com/images/avatar/large/daniel.jpg"
						wrapped
						ui={false}
					/>
					<Card.Content>
						<Card.Header>Daniel</Card.Header>
						<Card.Meta>Joined in 2016</Card.Meta>
						<Card.Description>
							Daniel is a comedian living in Nashville.
						</Card.Description>
					</Card.Content>
					<Card.Content>
						<a>
							<Icon name="user" />
							10 Friends
						</a>
					</Card.Content>
				</Card>
				<Card>
					<Image
						src="https://react.semantic-ui.com/images/avatar/large/daniel.jpg"
						wrapped
						ui={false}
					/>
					<Card.Content>
						<Card.Header>Daniel</Card.Header>
						<Card.Meta>Joined in 2016</Card.Meta>
						<Card.Description>
							Daniel is a comedian living in Nashville.
						</Card.Description>
					</Card.Content>
					<Card.Content>
						<a>
							<Icon name="user" />
							10 Friends
						</a>
					</Card.Content>
				</Card>
			</Card.Group>
		</div>
	);
}

export default HomePage;
