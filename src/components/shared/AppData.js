import React from 'react'
import PropTypes from 'prop-types'
import {shortHash} from '../../utils/utils'
import {NavLink} from "../explorer/Styled/Table";

const AppData = ({memo, compact = true}) => {

  const [int, appid] = memo.split('-');
  const appLabel = compact ? shortHash(appid) : appid;
  return (
    <span title={memo}>
      	<NavLink to={`/apps/${appid}`} >{appLabel}</NavLink>
    </span>
  )
};

AppData.propTypes = {
  memo: PropTypes.string.isRequired,
  compact: PropTypes.bool,
}

export default AppData
