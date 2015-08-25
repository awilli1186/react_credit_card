import React from 'react';

class Card extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      value: '',
      type: 'generic'
    }
  }

  onChangeCC() {
    let type = null;
    let value = this.refs.card.getValue().cc;

    if (value.match(/^4$/)) {
      type = 'visa';
    }

    if (value.match(/^6(?:011|5[0-9])$/)) {
      type = 'discover';
    }

    if (value.match(/^5[1-5]$/)) {
      type = 'mastercard';
    }

    if (value.match(/^(5018|5020|5038|6304|6759|676[1-3]|6768|5612|5893|6304|6759|0604|6390)$/)) {
      type = 'maestro';
    }

    if (value.match(/^35$/)) {
      type = 'jcb';
    }

    if (value.match(/^(6211)$/)) {
      type = 'unionpay';
    }

    if (value.match(/^3[47]$/)) {
      type = 'amex';
    }

    if (value.match(/(36|38|30[0-5])$/)) {
      type = 'dinersclub';
    }

    if (type) {
      this.setState({
        type: type,
        ccValue: value
      });
    }
  }

  onChangeExp() {
    this.setState({
      expValue: this.refs.card.getValue().exp
    });
  }

  onChangeName() {
    this.setState({
      name: this.refs.card.getValue().name
    });
  }

  render() {
    let card;
    let props = {
      ref: 'card',
      onChangeCC: this.onChangeCC.bind(this),
      onChangeExp: this.onChangeExp.bind(this),
      onChangeName: this.onChangeName.bind(this),
      ccValue: this.state.ccValue,
      expValue: this.state.expValue,
      nameValue: this.state.nameValue,
    };

    if (this.state.type === 'generic') {
      card = <GenericCardType {...props} />
    } else if (this.state.type === 'visa') {
      card = <VisaCardType {...props} />
    } else if (this.state.type === 'mastercard') {
      card = <MasterCardType {...props} />
    } else if (this.state.type === 'maestro') {
      card = <MaestroCardType {...props} />
    } else if (this.state.type === 'jcb') {
      card = <JcbCardType {...props} />
    } else if (this.state.type === 'unionpay') {
      card = <UnionPayCardType {...props} />
    } else if (this.state.type === 'amex') {
      card = <AmexCardType {...props} />
    } else if (this.state.type === 'dinersclub') {
      card = <DinersClubCardType {...props} />
    } else if (this.state.type === 'discover') {
      card = <DiscoverCardType {...props} />
    }

    return (
      <div>
      <h1>Credit Card Input</h1>
      <div className="card">
        {card}
      </div>
      </div>
    )
  }
}

class GenericCardType extends React.Component {
  componentDidMount() {
    let ccInput = React.findDOMNode(this.refs.cc);
    ccInput.focus();
  }

  getValue() {
    let ccInput = React.findDOMNode(this.refs.cc);
    let expInput = React.findDOMNode(this.refs.exp);
    let nameInput = React.findDOMNode(this.refs.name);
    let exp = 0;
    let name = ''
    if (expInput) {
      exp = expInput.value;
    }

    if (nameInput) {
      name = nameInput.value;
    }

    return {
      cc: ccInput.value,
      name: name,
      exp: exp
    };
  }

  render() {
    return (
      <div>
      <input className="ccnum" ref="cc" onChange={this.props.onChangeCC} value={this.props.ccValue} placeholder=" XXXX XXXX XXXX XXXX" />
      <img src="images/products/generic-front.png"/>
    </div>
    )
  }
}

class VisaCardType extends GenericCardType {

  render() {
    return (
      <div className="visa">
        <input className="ccnum" ref="cc" onChange={this.props.onChangeCC} value={this.props.ccValue} />

        <input className='exp' ref="exp" onChange={this.props.onChangeExp} value={this.props.expValue} />

        <input className='name' ref="name" onChange={this.props.onChangeName} value={this.props.nameValue} placeholder="full name" />

        <img src="images/products/visa-front.png"/>
      </div>
    )
  }
}

class DiscoverCardType extends GenericCardType {

  render() {
    return (
      <div className="discover">
        <input className="ccnum" ref="cc" onChange={this.props.onChangeCC} value={this.props.ccValue} />

        <input className="exp" ref="exp" onChange={this.props.onChangeExp} value={this.props.expValue} />

        <input className='name' ref="name" onChange={this.props.onChangeName} value={this.props.nameValue} placeholder="full name" />

        <img src="images/products/discover-front.png"/>
      </div>
    )
  }
}

class MasterCardType extends GenericCardType {

  render() {
    return (
      <div className="mastercard">
        <input className="ccnum" ref="cc" onChange={this.props.onChangeCC} value={this.props.ccValue} />

        <input className="exp" ref="exp" onChange={this.props.onChangeExp} value={this.props.expValue} />

        <input className='name'  ref="name" onChange={this.props.onChangeName} value={this.props.nameValue} placeholder="full name" />

        <img src="images/products/mastercard-front.png"/>
      </div>
    )
  }
}

class MaestroCardType extends GenericCardType {

  render() {
    return (
      <div className="maestro">
        <input className="ccnum" ref="cc" onChange={this.props.onChangeCC} value={this.props.ccValue} />

        <input className="exp" ref="exp" onChange={this.props.onChangeExp} value={this.props.expValue}/>

        <input className='name'  ref="name" onChange={this.props.onChangeName} value={this.props.nameValue} placeholder="full name"/>

        <img src="images/products/maestro-front.png"/>
      </div>
    )
  }
}

class JcbCardType extends GenericCardType {

  render() {
    return (
      <div className="jcb">
        <input className="ccnum" ref="cc" onChange={this.props.onChangeCC} value={this.props.ccValue} />

        <input className="exp" ref="exp" onChange={this.props.onChangeExp} value={this.props.expValue} />

        <input className='name' ref="name" onChange={this.props.onChangeName} value={this.props.nameValue} placeholder="full name"/>

      <img src="images/products/jcb-front.png"/>
      </div>
    )
  }
}

class UnionPayCardType extends GenericCardType {

  render() {
    return (
      <div className="unionpay">
        <input className="ccnum" ref="cc" onChange={this.props.onChangeCC} value={this.props.ccValue} />

        <input className="exp" ref="exp" onChange={this.props.onChangeExp} value={this.props.expValue} />

        <input className='name'  ref="name" onChange={this.props.onChangeName} value={this.props.nameValue} placeholder="full name"/>

      <img src="images/products/unionpay-front.png"/>
      </div>
    )
  }
}

class AmexCardType extends GenericCardType {

  render() {
    return (
      <div className="amex">
        <input className="ccnum" ref="cc" onChange={this.props.onChangeCC} value={this.props.ccValue} />

        <input className="exp" ref="exp" onChange={this.props.onChangeExp} value={this.props.expValue} />

        <input className='name' ref="name" onChange={this.props.onChangeName} value={this.props.nameValue} placeholder="full name"/>

        <img src="images/products/amex-front.png"/>
      </div>
    )
  }
}

class DinersClubCardType extends GenericCardType {

  render() {
    return (
      <div className="dinersclub">
        <input className="ccnum" ref="cc" onChange={this.props.onChangeCC} value={this.props.ccValue} />

        <input className="exp" ref="exp" onChange={this.props.onChangeExp} value={this.props.expValue} />

        <input className='name' ref="name" onChange={this.props.onChangeName} value={this.props.nameValue} placeholder="full name"/>

        <img src="images/src/product-dinersclub-front.fw.png"/>
      </div>
    )
  }
}


React.render(<Card/>, document.getElementById('app'));
