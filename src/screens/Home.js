import React, { Component } from 'react';
import { StyleSheet, View, ImageBackground } from 'react-native';
import StripWithImage from '../components/stripWithIamge';
import { IMAGES } from '../config/images';
import { ScrollView } from 'react-native-gesture-handler';

export default class Home extends Component {
	render() {
		return (
			<ImageBackground
				source={require('../images/background.png')}
				style={{ width: undefined, height: undefined, flex: 1 }}
				resizeMode="cover"
			>
				<View style={{ flex: 1, padding: 8, backgroundColor: '#f9fcff' }}>
					<ScrollView>
						<StripWithImage
							labelItem="AÇÃO DO ESTADO"
							crumbNumber={3}
							nav={this.props.navigation}
							image={IMAGES.ICONS.IC_1}
						/>
						<StripWithImage
							labelItem="CUSTO NO BRASIL"
							crumbNumber={2}
							nav={this.props.navigation}
							image={IMAGES.ICONS.IC_2}
						/>
						<StripWithImage
							labelItem="INOVAÇÃO E TECNOLOGIA"
							crumbNumber={4}
							nav={this.props.navigation}
							image={IMAGES.ICONS.IC_3}
						/>
						<StripWithImage
							labelItem="PROMOVER A EDUCAÇÃO"
							crumbNumber={5}
							nav={this.props.navigation}
							image={IMAGES.ICONS.IC_4}
						/>
					</ScrollView>
				</View>
			</ImageBackground>
		);
	}
}

const styles = StyleSheet.create({});
