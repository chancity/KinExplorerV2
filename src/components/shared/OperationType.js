import React from 'react'
import PropTypes from 'prop-types'
import {shortHash} from '../../utils/utils'


const OperationType = ({type, compact = true}) => (
    <span title={type} style={{color:"#149E83"}}>
      {compact ? shortHash(type) : type}
    </span>
);


OperationType.propTypes = {
  type: PropTypes.string.isRequired,
  compact: PropTypes.bool,
};

export default OperationType
