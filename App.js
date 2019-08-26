import React, { Component } from 'react';
import Airtable from 'airtable';
import CollectPressureData from './components/CollectPressureData';
import Confirmation from './components/Confirmation';
import config from './config';

export default class App extends Component {
  state = { error: false, sent: false };

  onCollectPressurePress = async (systolic, diastolic) => {
    var base = new Airtable({
      apiKey: config.airtable_key
    }).base(config.airtable_base);

    await base('bp').create(
      {
        systolic: parseInt(systolic),
        diastolic: parseInt(diastolic)
      },
      (err, record) => {
        if (err) {
          //console.error(err);
          this.setState({ error: err });
          return;
        } else {
          this.setState({ sent: true, error: '' });
          //console.log(record.getId());
        }
      }
    );
  };

  onConfirmationPress = () => {
    this.setState({ sent: false });
  };

  renderControl() {
    return this.state.sent ? (
      <Confirmation onPress={this.onConfirmationPress} />
    ) : (
      <CollectPressureData onPress={this.onCollectPressurePress} />
    );
  }
  render() {
    return this.renderControl();
  }
}
