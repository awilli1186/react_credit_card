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

    if (value.match(/^4[0-9]{6,}$/)) {
      type = 'visa';
    }

    if (value.match(/^6(?:011|5[0-9]{2})[0-9]{3,}$/)) {
      type = 'discover';
    }

    if (value.match(/^5[1-5][0-9]{14}$/)) {
      type = 'mastercard';
    }

    if (value.match(/^(5018|5020|5038|6304|6759|6761|6763)[0-9]{8,15}$/)) {
      type = 'maestro';
    }

    if (value.match(/^(?:2131|1800|35\d{3})\d{11}$/)) {
      type = 'jcb';
    }

    if (value.match(/^(62[0-9]{14,17})$/)) {
      type = 'unionpay';
    }

    if (value.match(/^3[47][0-9]{13}$/)) {
      type = 'americanexpress';
    }

    if (value.match(/^3(?:0[0-5]|[68][0-9])[0-9]{11}$/)) {
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
    } else if (this.state.type === 'discover') {
      card = <DiscoverCardType {...props} />
    }

    return (
      <div className="card">
        {card}
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
    return <input
      ref="cc"
      onChange={this.props.onChangeCC}
      value={this.props.ccValue}
      placeholder="Credit Card Number" />
  }
}

class VisaCardType extends GenericCardType {

  render() {
    return (
      <div className="visa">
        <input ref="cc" onChange={this.props.onChangeCC} value={this.props.ccValue} placeholder="Credit Card Number" />

        <input ref="exp" onChange={this.props.onChangeExp} value={this.props.expValue}/>

        <input ref="name" onChange={this.props.onChangeName} value={this.props.nameValue}/>
      </div>
    )
  }
}

class DiscoverCardType extends GenericCardType {

  render() {
    return (
      <div className="discover">
        <input ref="cc" onChange={this.props.onChangeCC} value={this.props.ccValue} placeholder="Credit Card Number" />

        <input ref="exp" onChange={this.props.onChangeExp} value={this.props.expValue}/>

        <input ref="name" onChange={this.props.onChangeName} value={this.props.nameValue}/>
      </div>
    )
  }
}

class DiscoverCardType extends GenericCardType {

  render() {
    return (
      <div className="mastercard">
        <input ref="cc" onChange={this.props.onChangeCC} value={this.props.ccValue} placeholder="Credit Card Number" />

        <input ref="exp" onChange={this.props.onChangeExp} value={this.props.expValue}/>

        <input ref="name" onChange={this.props.onChangeName} value={this.props.nameValue}/>
      </div>
    )
  }
}

class DiscoverCardType extends GenericCardType {

  render() {
    return (
      <div className="maestro">
        <input ref="cc" onChange={this.props.onChangeCC} value={this.props.ccValue} placeholder="Credit Card Number" />

        <input ref="exp" onChange={this.props.onChangeExp} value={this.props.expValue}/>

        <input ref="name" onChange={this.props.onChangeName} value={this.props.nameValue}/>
      </div>
    )
  }
}

class DiscoverCardType extends GenericCardType {

  render() {
    return (
      <div className="jcb">
        <input ref="cc" onChange={this.props.onChangeCC} value={this.props.ccValue} placeholder="Credit Card Number" />

        <input ref="exp" onChange={this.props.onChangeExp} value={this.props.expValue}/>

        <input ref="name" onChange={this.props.onChangeName} value={this.props.nameValue}/>
      </div>
    )
  }
}

class DiscoverCardType extends GenericCardType {

  render() {
    return (
      <div className="unionpay">
        <input ref="cc" onChange={this.props.onChangeCC} value={this.props.ccValue} placeholder="Credit Card Number" />

        <input ref="exp" onChange={this.props.onChangeExp} value={this.props.expValue}/>

        <input ref="name" onChange={this.props.onChangeName} value={this.props.nameValue}/>
      </div>
    )
  }
}

class DiscoverCardType extends GenericCardType {

  render() {
    return (
      <div className="americanexpress">
        <input ref="cc" onChange={this.props.onChangeCC} value={this.props.ccValue} placeholder="Credit Card Number" />

        <input ref="exp" onChange={this.props.onChangeExp} value={this.props.expValue}/>

        <input ref="name" onChange={this.props.onChangeName} value={this.props.nameValue}/>
      </div>
    )
  }
}

class DiscoverCardType extends GenericCardType {

  render() {
    return (
      <div className="dinersclub">
        <input ref="cc" onChange={this.props.onChangeCC} value={this.props.ccValue} placeholder="Credit Card Number" />

        <input ref="exp" onChange={this.props.onChangeExp} value={this.props.expValue}/>

        <input ref="name" onChange={this.props.onChangeName} value={this.props.nameValue}/>
      </div>
    )
  }
}


React.render(<Card/>, document.getElementById('app'));
