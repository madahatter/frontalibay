import React from 'react'
import StripeCheckout from 'react-stripe-checkout';
import {withRouter} from 'react-router-dom'
class TakeMoney extends React.Component {
  onToken = (token) => {
    fetch('/save-stripe-token', {
      method: 'POST',
      credentials: 'same-origin',
      body: JSON.stringify({
          token,
          email: this.props.email,
          cartItems: this.props.cartItems
    }),
    }).then(response => {
      response.json().then(data => {
       // alert(`We are in business, ${data.email}`);
        this.props.history.push('/confirmation')
      });
    });
  }

  // ...

  render() {
    return (
      // ...
      <StripeCheckout
        token={this.onToken}
        stripeKey="pk_test_riWpRWyUNIihoDfHaojdIftK"
      />
    )
  }
}

export default withRouter(TakeMoney)