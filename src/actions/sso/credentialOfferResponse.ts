import { JSONWebToken } from 'jolocom-lib/js/interactionTokens/JSONWebToken'
import { CredentialOfferResponseAttrs } from 'jolocom-lib/js/interactionTokens/interactionTokens.types'
import { CredentialOfferRequest } from 'jolocom-lib/js/interactionTokens/credentialOfferRequest'
import { all, either, isEmpty, isNil } from 'ramda'
import { CredentialOfferSummary } from '../../utils/interactionRequests/types'

/**
 * Given an {@link CredentialOfferSummary}, generates the attributes ({@link CredentialOfferResponseAttrs})
 * that can be used to instantiate a valid {@link CredentialOfferResponse}
 * @param offerDetails - the offer received by the counterpary, as generated by {@link credentialOfferSummary}
 */

export const prepareCredentialOfferResponse = (
  offerDetails: CredentialOfferSummary,
): CredentialOfferResponseAttrs => {
  const { interactionToken } = offerDetails.request as JSONWebToken<
    CredentialOfferRequest
  >
  const { callbackURL } = interactionToken
  const selectedCredentialTypes = interactionToken.offeredTypes.map(type => ({
    type,
  }))

  // TODO Error CODE
  if (!areRequirementsEmpty(interactionToken)) {
    throw new Error('Input requests are not yet supported on the wallet')
  }

  return {
    callbackURL,
    selectedCredentials: selectedCredentialTypes,
  }
}

/**
 * Helper function checking if the credential offer contains any credentials
 * @todo Provide this from JolocomLib
 * @param interactionToken - {@link CredentialOfferRequest} issued by the counterparty
 */

const areRequirementsEmpty = (interactionToken: CredentialOfferRequest) => {
  const prerequisites = interactionToken.offeredTypes.map(
    interactionToken.getRequestedInputForType.bind(interactionToken),
  )

  return all(either(isNil, isEmpty), prerequisites)
}
