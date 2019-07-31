import React from 'react'
import PropTypes from 'prop-types'

import TransactionHash from '../../../shared/TransactionHash'
import OperationType from '../../../shared/OperationType'
import AccountLink from '../../../shared/AccountLink'
import JSONButton from '../../../shared/JSONButton'

import AccountMerge from './AccountMerge'
import AllowTrust from './AllowTrust'
import BumpSequence from './BumpSequence'
import ChangeTrust from './ChangeTrust'
import CreateAccount from './CreateAccount'
import Inflation from './Inflation'
import ManageData from './ManageData'
import Offer from './Offer'
import PathPayment from './PathPayment'
import Payment from './Payment'
import SetOptions from './SetOptions'
import TimeTd from "../../TableData/TimeTd";

const opTypeComponentMap = {
  account_merge: AccountMerge,
  allow_trust: AllowTrust,
  bump_sequence: BumpSequence,
  change_trust: ChangeTrust,
  create_account: CreateAccount,
  create_passive_offer: Offer, // < Protocol 11
  create_passive_sell_offer: Offer,
  inflation: Inflation,
  manage_data: ManageData,
  manage_offer: Offer, // < Protocol 11
  manage_buy_offer: Offer,
  manage_sell_offer: Offer,
  path_payment: PathPayment,
  payment: Payment,
  set_options: SetOptions,
}

const opTypes = Object.keys(opTypeComponentMap);

const SubOperation = ({op}) => {
  const SubOpComponent = opTypeComponentMap[op.type];
  return <SubOpComponent {...op} />
};

const Operation = ({compact, op, parentRenderTimestamp, index}) => {
  const acc =
      op.type !== 'account_merge' ? (
          <AccountLink key={index} account={op.sourceAccount} />
      ) : (
          <span key={index} title={op.sourceAccount}>{op.sourceAccount.substring(0, 4)}</span>
      );

  return (
    <tr key={index}>
      <td key={index}>{acc}</td>
      <td>
        <SubOperation key={index} op={op} />
      </td>
      {compact === false && (
        <td key={index}>
          <TransactionHash hash={op.transactionHash} compact={true} />
        </td>
      )}
      {compact === false && (
        <td key={index}>
          <OperationType
              key={index}
            account={op.sourceAccount}
            type={op.type}
            compact={false}
          />
        </td>
      )}
      <TimeTd key={index} index={index} render_time={parentRenderTimestamp} record_time={op.time}/>
        {/*} <td key={index}>
        <JSONButton key={index} url={"null"} />
      </td>*/}
    </tr>
  )
}

Operation.defaultProps = {
  compact: true,
}

Operation.propTypes = {
  compact: PropTypes.bool,
  op: PropTypes.shape({
    id: PropTypes.string.isRequired,
    sourceAccount: PropTypes.string.isRequired,
    type: PropTypes.oneOf(opTypes).isRequired,
    time: PropTypes.string,
  }).isRequired,
  parentRenderTimestamp: PropTypes.number,
}

export {Operation as default, opTypes}
