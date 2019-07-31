import React from 'react'
import PropTypes from 'prop-types'
import {shortHash} from '../../utils/utils'
import {NavLink} from "../explorer/Styled/Table";

const TransactionHash = ({hash, compact = true}) => {
  const hashLabel = compact ? shortHash(hash) : hash;
  return (
    <span title={hash}>
      	<NavLink to={`/explorer/transactions/${hash}`} >{hashLabel}</NavLink>
    </span>
  )
};

TransactionHash.propTypes = {
  hash: PropTypes.string.isRequired,
  compact: PropTypes.bool,
}

export default TransactionHash
