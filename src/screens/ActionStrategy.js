import React, { Component } from 'react';
import { Text, View, ScrollView } from 'react-native';

import StripWithImage from '../components/stripWithIamge';
import Stripe from '../components/stripe';
import { IMAGES } from '../config/images';

export default class ActionStrategy extends Component {
	render() {
		return (
			<View style={{ padding: 8 }}>
				<View>
					<StripWithImage labelItem="FATOR CHAVE A" image={IMAGES.ICONS.IC_1} disabled={true} />
				</View>
				<View>
					<ScrollView>
						<Stripe
							labelItem="AÇÃO ESTRATEGICA A"
							nav={this.props.navigation}
							route="Details"
							badgeNumber={2}
						/>
						<Stripe
							labelItem="AÇÃO ESTRATEGICA B"
							nav={this.props.navigation}
							route="Details"
							badgeNumber={1}
						/>
						<Stripe
							labelItem="AÇÃO ESTRATEGICA C"
							nav={this.props.navigation}
							route="Details"
							badgeNumber={1}
						/>
						<Stripe
							labelItem="AÇÃO ESTRATEGICA D"
							nav={this.props.navigation}
							route="Details"
							badgeNumber={2}
						/>
						<Stripe
							labelItem="AÇÃO ESTRATEGICA E"
							nav={this.props.navigation}
							route="Details"
							badgeNumber={3}
						/>
						<Stripe
							labelItem="AÇÃO ESTRATEGICA F"
							nav={this.props.navigation}
							route="Details"
							badgeNumber={1}
						/>
						<Stripe
							labelItem="AÇÃO ESTRATEGICA G"
							nav={this.props.navigation}
							route="Details"
							badgeNumber={1}
						/>
						<Stripe
							labelItem="AÇÃO ESTRATEGICA H"
							nav={this.props.navigation}
							route="Details"
							badgeNumber={4}
						/>
						<Stripe
							labelItem="AÇÃO ESTRATEGICA I"
							nav={this.props.navigation}
							route="Details"
							badgeNumber={1}
						/>
						<Stripe
							labelItem="AÇÃO ESTRATEGICA J"
							nav={this.props.navigation}
							route="Details"
							badgeNumber={2}
						/>
					</ScrollView>
				</View>
			</View>
		);
	}
}
