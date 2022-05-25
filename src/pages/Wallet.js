import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Header from '../components/Header';
import { fetchCurrencies } from '../actions';
import Form from '../components/Form';

class Wallet extends React.Component {
  componentDidMount() {
    const { fetch } = this.props;
    fetch();
  }

  render() {
    const { currencies } = this.props;
    return (
      <div>
        <Header />
        <Form currencies={ currencies } />
        TrybeWallet
      </div>);
  }
}

const mapDispatchToProps = (dispatch) => ({
  fetch: () => dispatch(fetchCurrencies()),
});

const mapStateToProps = (state) => ({
  currencies: state.wallet.currencies,
});

Wallet.propTypes = {
  fetch: PropTypes.func.isRequired,
  currencies: PropTypes.shape.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Wallet);
