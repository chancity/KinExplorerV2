import React from 'react'
import PropTypes from 'prop-types'
import {NavLink} from "../explorer/Styled/Table";


const AccountLink = ({account, label, hideKnown = false}) => {
  if (!account || account == null) return null;
  let accLabel = label;
  if (!accLabel) {
    accLabel = account.substring(0, 4)
  }
  return (
    <span title={account}>
      <NavLink to={`/explorer/account/${account}`}>{accLabel}</NavLink>
    </span>
  )
}

AccountLink.propTypes = {
  account: PropTypes.string.isRequired,
  hideKnown: PropTypes.bool,
  label: PropTypes.string,
}

export default AccountLink
