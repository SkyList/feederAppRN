import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

const Strip = (props) => {
	const labelItem = props.labelItem || 'Placeholder';

	return (
		<TouchableOpacity onPress={() => props.nav.navigate(props.route, props.param)} disabled={props.disabled}>
			<View
				style={{
					flexDirection: 'row',
					alignItems: 'center',
					padding: 2,
					marginVertical: 4,
					backgroundColor: '#ccc',
					padding: 4,
					paddingHorizontal: 8
				}}
			>
				<Text style={{ fontSize: 18, flexWrap: 'wrap', flex: 1 }}>{labelItem}</Text>
				<View
					style={{
						width: 24,
						height: 24,
						backgroundColor: '#fff',
						borderRadius: 50,
						justifyContent: 'center',
						alignItems: 'center'
					}}
				>
					<Text style={{ fontSize: 16 }}>{props.badgeNumber}</Text>
				</View>
			</View>
		</TouchableOpacity>
	);
};

export default Strip;
