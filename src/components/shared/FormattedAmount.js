import PropTypes from 'prop-types'
import {formatAmount} from '../../utils/utils'

// chop off any trailing 0s
const FormattedAmount = ({amount}) => formatAmount(amount)

FormattedAmount.propTypes = {
  amount: PropTypes.string.isRequired,
}

export default FormattedAmount
