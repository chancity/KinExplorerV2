import React from 'react'
import PropTypes from 'prop-types'
import {NavLink} from "../../layout/Table";
import styled from 'styled-components/macro'

const AccountBtnLink = styled(NavLink)`
    padding: 5px 15px;
    background-color: rgba(0,0,0,0.05);
    border: #202225 1px solid;
    border-radius: .5em;
    -webkit-transition: .2s;
    transition: .2s;
    text-align: center;
    :hover{
       background-color: rgba(0,0,0,0.1);
    }
`;
const AccountLink = ({account, label}) => {
  if (!account) return null;
  let accLabel = label;
  if (!accLabel) {
    accLabel = account.substring(0, 4)
  }
  return (
      <span title={account}>
        <NavLink to={`/explorer/account/${account}`}>{accLabel}</NavLink>
      </span>
  )
};

const AccountButtonLink = ({account, label}) => {
  if (!account) return null;
  let accLabel = label;
  if (!accLabel) {
    accLabel = account.substring(0, 4)
  }
  return (
    <span title={account}>
      <AccountBtnLink to={`/explorer/account/${account}`} color={"rgb(20, 158, 131)"}>{accLabel}</AccountBtnLink>
    </span>
  )
};

AccountButtonLink.propTypes = {
  account: PropTypes.string.isRequired,
  hideKnown: PropTypes.bool,
  label: PropTypes.string,
};

export { AccountLink, AccountButtonLink}
