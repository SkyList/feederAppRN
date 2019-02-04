import React, { Component } from 'react';
import { Text, View, ScrollView } from 'react-native';

import StripWithImage from '../components/stripWithIamge';
import Stripe from '../components/stripe';
import { IMAGES } from '../config/images';

export default class KeyFactor extends Component {
	render() {
		return (
			<View style={{ padding: 8 }}>
				<View>
					<StripWithImage labelItem="AÇÃO DO ESTADO" image={IMAGES.ICONS.IC_1} disabled={true} />
				</View>
				<View>
					<ScrollView>
						<Stripe
							labelItem="FATOR CHAVE A"
							nav={this.props.navigation}
							route="ActionStrategy"
							badgeNumber={2}
						/>
						<Stripe
							labelItem="FATOR CHAVE B"
							nav={this.props.navigation}
							route="ActionStrategy"
							badgeNumber={1}
						/>
						<Stripe
							labelItem="FATOR CHAVE C"
							nav={this.props.navigation}
							route="ActionStrategy"
							badgeNumber={1}
						/>
						<Stripe
							labelItem="FATOR CHAVE D"
							nav={this.props.navigation}
							route="ActionStrategy"
							badgeNumber={2}
						/>
						<Stripe
							labelItem="FATOR CHAVE E"
							nav={this.props.navigation}
							route="ActionStrategy"
							badgeNumber={3}
						/>
						<Stripe
							labelItem="FATOR CHAVE F"
							nav={this.props.navigation}
							route="ActionStrategy"
							badgeNumber={1}
						/>
						<Stripe
							labelItem="FATOR CHAVE G"
							nav={this.props.navigation}
							route="ActionStrategy"
							badgeNumber={1}
						/>
						<Stripe
							labelItem="FATOR CHAVE H"
							nav={this.props.navigation}
							route="ActionStrategy"
							badgeNumber={4}
						/>
						<Stripe
							labelItem="FATOR CHAVE I"
							nav={this.props.navigation}
							route="ActionStrategy"
							badgeNumber={1}
						/>
						<Stripe
							labelItem="FATOR CHAVE J"
							nav={this.props.navigation}
							route="ActionStrategy"
							badgeNumber={2}
						/>
						<Stripe
							labelItem="FATOR CHAVE K"
							nav={this.props.navigation}
							route="ActionStrategy"
							badgeNumber={3}
						/>
						<Stripe
							labelItem="FATOR CHAVE J"
							nav={this.props.navigation}
							route="ActionStrategy"
							badgeNumber={2}
						/>
						<Stripe
							labelItem="FATOR CHAVE K"
							nav={this.props.navigation}
							route="ActionStrategy"
							badgeNumber={3}
						/>
						<Stripe
							labelItem="FATOR CHAVE J"
							nav={this.props.navigation}
							route="ActionStrategy"
							badgeNumber={2}
						/>
						<Stripe
							labelItem="FATOR CHAVE K"
							nav={this.props.navigation}
							route="ActionStrategy"
							badgeNumber={3}
						/>
						<Stripe
							labelItem="FATOR CHAVE J"
							nav={this.props.navigation}
							route="ActionStrategy"
							badgeNumber={2}
						/>
						<Stripe
							labelItem="FATOR CHAVE K"
							nav={this.props.navigation}
							route="ActionStrategy"
							badgeNumber={3}
						/>
						<Stripe
							labelItem="FATOR CHAVE J"
							nav={this.props.navigation}
							route="ActionStrategy"
							badgeNumber={2}
						/>
						<Stripe
							labelItem="FATOR CHAVE K"
							nav={this.props.navigation}
							route="ActionStrategy"
							badgeNumber={3}
						/>
					</ScrollView>
				</View>
			</View>
		);
	}
}
