import React from 'react';
import { Text,  Card, CardItem } from 'native-base';


const WordsCards = ({wordsnotes}) => {
	const { words, notes } = wordsnotes;
	const notescards = notes.map((note) => 
		<CardItem body key={note}>
			<Text>
				{note}
			</Text>
		</CardItem>
	);

	return (
		<Card>
			<CardItem header bordered>
				<Text style={{textAlign: 'center', 'writingDirection': 'ltr'}}>{words}</Text>
			</CardItem>
			{notescards}
		</Card>	
	)
}

export default WordsCards;