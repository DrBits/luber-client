import React from 'react';
import { RouteComponentProps } from 'react-router-dom';
import PhoneLoginPresenter from './PhoneLoginPresenter';

interface IState {
  countryCode: string;
  phoneNumber: string;
}

class PhoneLoginContainer extends React.Component<RouteComponentProps<IState>> {
  public state = {
    countryCode: '+7',
    phoneNumber: ''
  };
  public render() {
    return (
      <PhoneLoginPresenter
        onSubmit={this.onSubmit}
        {...this.state}
        onInputChange={this.onInputChange}
      />
    );
  }

  public onInputChange: React.ChangeEventHandler<
    HTMLInputElement | HTMLSelectElement
  > = event => {
    const {
      target: { name, value }
    } = event;
    this.setState({
      [name]: value
    } as any);
  };

  public onSubmit: React.FormEventHandler<HTMLFormElement> = event => {
    event.preventDefault();
    const { countryCode, phoneNumber } = this.state;
  };
}

export default PhoneLoginContainer;
