import React from 'react'
import { ButtonSection } from 'src/ui/structure/buttonSectionBottom'
import { View, Text, TextStyle, ViewStyle } from 'react-native'
import I18n from 'src/locales/i18n'
import { Container, Block } from 'src/ui/structure'
import { JolocomTheme } from 'src/styles/jolocom-theme'
import { getCredentialIconByType } from 'src/resources/util'
import { SectionClaimCard } from 'src/ui/structure/claimCard'

interface Props {
  transactionDetails: {
    description: string
    transactionOptions: {
      value: number
      to: string
    }
  }
  cancelPaymentRequest: () => void
  confirmPaymentRequest: () => void
}

interface State {}

const styles = {
  priceCard: {
    container: {
      flexDirection: 'row'
    } as ViewStyle,
    price: {
      fontFamily: JolocomTheme.contentFontFamily,
      fontSize: JolocomTheme.landingHeaderFontSize,
      color: JolocomTheme.primaryColorBlack,
      fontWeight: JolocomTheme.fontWeight,
      paddingRight: '2%'
    } as TextStyle,
    unit: {
      fontFamily: JolocomTheme.contentFontFamily,
      fontSize: JolocomTheme.labelFontSize,
      alignSelf: 'center'
    } as TextStyle
  },
  container: {
    padding: 0,
    margin: 0
  },
  middleBlock: {
    justifyContent: 'flex-start'
  } as ViewStyle
}

export class PaymentConsentComponent extends React.Component<Props, State> {
  private renderButtons() {
    return (
      <ButtonSection
        disabled={false}
        confirmText={I18n.t('Confirm')}
        denyText={I18n.t('Deny')}
        handleConfirm={() => this.props.confirmPaymentRequest()}
        handleDeny={() => this.props.cancelPaymentRequest()}
      />
    )
  }

  private renderLeftIcon(type: string) {
    return getCredentialIconByType(type)
  }

  private renderPriceCard() {
    let { value } = this.props.transactionDetails.transactionOptions
    // convert value from wei to eth
    value = value / 10e18
    return (
      <View style={styles.priceCard.container}>
        <Text style={styles.priceCard.price}>{value}</Text>
        <Text style={styles.priceCard.unit}>{'ETH'}</Text>
      </View>
    )
  }

  private renderTransactionDetails() {
    const {
      description,
      transactionOptions: { to }
    } = this.props.transactionDetails
    const receiverName = 'example receiver address'
    return (
      <View style={{ width: '100%', margin: 0, padding: 0 }}>
        <SectionClaimCard
          title={`${I18n.t('For')}:`}
          primaryText={description}
          leftIcon={this.renderLeftIcon('Other')}
        />
        <SectionClaimCard
          title={`${I18n.t('To')}:`}
          primaryText={`${receiverName.substring(0, 17)}...`}
          secondaryText={`Eth address: ${to.substring(0, 13)}...`}
          leftIcon={this.renderLeftIcon('Email')}
        />
      </View>
    )
  }

  render() {
    return (
      <Container style={styles.container}>
        <Block flex={0.3}>{this.renderPriceCard()}</Block>
        <Block flex={0.6} style={styles.middleBlock}>
          {this.renderTransactionDetails()}
        </Block>
        {this.renderButtons()}
      </Container>
    )
  }
}
