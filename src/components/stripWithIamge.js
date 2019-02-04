import React, { Component } from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';

const StripWithImage = (props) => {
	const image = props.image || require('../images/placeholder-icon.png');
	const labelItem = props.labelItem || 'Placeholder';
	return (
		<TouchableOpacity onPress={() => props.nav.navigate('KeyFactor')} disabled={props.disabled}>
			<View style={{ flexDirection: 'row', alignItems: 'center', padding: 2, marginVertical: 4 }}>
				<Image source={image} style={{ height: 64, width: 64, margin: 8 }} resizeMode="contain" />
				<Text style={{ fontSize: 24, flexWrap: 'wrap', flex: 1 }}>{labelItem}</Text>
				{props.crumbNumber && (
					<View
						style={{
							width: 32,
							height: 32,
							backgroundColor: '#ccc',
							alignSelf: 'flex-start',
							borderRadius: 50,
							justifyContent: 'center',
							alignItems: 'center'
						}}
					>
						<Text style={{ fontSize: 16 }}>{props.crumbNumber}</Text>
					</View>
				)}
			</View>
		</TouchableOpacity>
	);
};

export default StripWithImage;
