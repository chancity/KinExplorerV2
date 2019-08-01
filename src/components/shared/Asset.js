import React from 'react'
import PropTypes from 'prop-types'
import {AccountLink} from './AccountLink'

const Asset = ({code, issuer, type}) => {
  const isKin = type === 'native'
  const propCode = isKin ? 'KIN' : code;
  return (
    <span>
      {propCode}{' '}
      {!isKin && (
        <span style={{fontSize: 'x-small'}}>
          [<AccountLink account={issuer} />]
        </span>
      )}
    </span>
  )
}

// For XLM code and issuer aren't set. type will be 'native'
Asset.propTypes = {
  code: PropTypes.string,
  issuer: PropTypes.string,
  type: PropTypes.string.isRequired,
}

export default Asset
