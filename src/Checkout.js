import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Row, Col } from 'reactstrap';
import { buy } from './requests.js';
import { Link } from 'react-router-dom'

class Checkout extends React.Component {
  constructor() {
    super()
    this.state = {
      nameCardInput: "",
      cardNumberInput: "",
      expiryDateInput: "",
      cvvInput: "",
      billingAddressInput: "",
      billingCityInput: "",
      billingProvinceInput: "",
      billingCountryInput: "",
      billingPostalCodeInput: "",
      nameInput: "",
      shippingAddressInput: "",
      shippingCityInput: "",
      shippingProvinceInput: "",
      shippingCountryInput: "",
      shippingPostalCodeInput: "",
    }
  }

  handleCardName = (event) => {
    this.setState({ nameCardInput: event.target.value })
  }

  handleCardNumber = (event) => {
    this.setState({ cardNumberInput: event.target.value })
  }

  handleExpiry = (event) => {
    this.setState({ expiryDateInput: event.target.value })
  }

  handleCVV = (event) => {
    this.setState({ cvvInput: event.target.value })
  }

  handleBillingAddress = (event) => {
    this.setState({ billingAddressInput: event.target.value })
  }

  handleBillingCity = (event) => {
    this.setState({ billingCityInput: event.target.value })
  }

  handleBillingProvince = (event) => {
    this.setState({ billingProvinceInput: event.target.value })
  }

  handleBillingCountry = (event) => {
    this.setState({ billingCountryInput: event.target.value })
  }

  handleBillingPostal = (event) => {
    this.setState({ billingPostalCodeInput: event.target.value })
  }

  handleNameInput = (event) => {
    this.setState({ nameInput: event.target.value })
  }

  handleShippingAddress = (event) => {
    this.setState({ shippingAddressInput: event.target.value })
  }

  handleShippingCity = (event) => {
    this.setState({ shippingCityInput: event.target.value })
  }

  handleShippingProvince = (event) => {
    this.setState({ shippingProvinceInput: event.target.value })
  }

  handleShippingCountry = (event) => {
    this.setState({ shippingCountryInput: event.target.value })
  }

  handleShippingPostal = (event) => {
    this.setState({ shippingPostalCodeInput: event.target.value })
  }

  handleSubmit = () => {
    buy(this.props.email)
      .then(() => {
        this.setState({
          nameCardInput: "",
          cardNumberInput: "",
          expiryDateInput: "",
          cvvInput: "",
          billingAddressInput: "",
          billingCityInput: "",
          billingProvinceInput: "",
          billingCountryInput: "",
          billingPostalCodeInput: "",
          nameInput: "",
          shippingAddressInput: "",
          shippingCityInput: "",
          shippingProvinceInput: "",
          shippingCountryInput: "",
          shippingPostalCodeInput: "",
        })
      })

  }
  render() {
    return (
      <div>
        <form>
          <Row>

            <Col>
              <div>
                Credit Card Information
              <div>
                  <input type="text" placeholder="Name on card" onChange={this.handleCardName} />
                </div>
                <div>
                  <input type="text" placeholder="Card number" onChange={this.handleCardNumber} />
                </div>
                <select name="Expiry date" onChange={this.handleExpiry}>
                  <option value="">MM/YYYY</option>
                  <option value="">05/2018</option>
                  <option value="">06/2018</option>
                  <option value="">07/2018</option>
                  <option value="">08/2018</option>
                  <option value="">09/2018</option>
                  <option value="">10/2018</option>
                  <option value="">11/2018</option>
                  <option value="">12/2018</option>
                  <option value="">01/2019</option>
                </select>
                <div>
                  <input type="text" placeholder="CVV" onChange={this.handleCVV} />
                </div>
                <div>
                  <input type="text" placeholder="Street address" onChange={this.handleBillingAddress} />
                </div>
                <div>
                  <input type="text" placeholder="city" onChange={this.handleBillingCity} />
                </div>
                <select name="Province" onChange={this.handleBillingProvince}>
                  <option value="">Province</option>
                  <option value="">AB</option>
                  <option value="">BC</option>
                  <option value="">MB</option>
                  <option value="">NB</option>
                  <option value="">NL</option>
                  <option value="">NS</option>
                  <option value="">NT</option>
                  <option value="">NU</option>
                  <option value="">ON</option>
                  <option value="">PE</option>
                  <option value="">QC</option>
                  <option value="">SK</option>
                  <option value="">YT</option>
                </select>
                <div>
                  <input type="text" placeholder="Country" onChange={this.handleBillingCountry} />
                  <input type="text" placeholder="Postal code" onChange={this.handleBillingPostal} />
                </div>
              </div>
            </Col>
            <Col>
              <div>
                Shipping Information
              <div>
                  <input type="text" placeholder="Name" onChange={this.handleNameInput} />
                </div>
                <div>
                  <input type="text" placeholder="Street address" onChange={this.handleShippingAddress} />
                </div>
                <div>
                  <input type="text" placeholder="city" onChange={this.handleShippingCity} />
                </div>

                <select name="Province" onChange={this.handleShippingProvince}>
                  <option value="">Province</option>
                  <option value="">AB</option>
                  <option value="">BC</option>
                  <option value="">MB</option>
                  <option value="">NB</option>
                  <option value="">NL</option>
                  <option value="">NS</option>
                  <option value="">NT</option>
                  <option value="">NU</option>
                  <option value="">ON</option>
                  <option value="">PE</option>
                  <option value="">QC</option>
                  <option value="">SK</option>
                  <option value="">YT</option>
                </select>
                <div>
                  <input type="text" placeholder="Country" onChange={this.handleShippingCountry} />
                  <input type="text" placeholder="Postal code" onChange={this.handleShippingPostal} />
                </div>
                <Link to='/confirmation'>
                <input type="submit" value="Pay" onSubmit={this.handleSubmit} />
                </Link>
              </div>
            </Col>

          </Row>
        </form>
      </div>
    )
  }
}

export default Checkout