import React from 'react';
import KegList from './KegList';

class TapRoomControl extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      visible: false,
      masterKegList: [],
      selectedKeg: null,
      editing: false,
    }
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick = () => {
    if (this.state.selectedKeg != null) {
      this.setState({
        visible: false,
        selectedKeg: null,
        editing: false
      });
    } else {
      this.setState(prevState => ({
        visible: !prevState.visible,
      }));
    }
  }




  render() {
    let currentlyVisibleState = null;
    let buttonText = null;
    currentlyVisibleState =
      <KegList
        kegList={this.state.masterKegList}
        onKegSelection={this.handleChangingSelectedKeg} />;
    buttonText = "Add keg";
    return (
      <React.Fragment>
        {currentlyVisibleState}
      </React.Fragment>
    );
  }
}

export default TapRoomControl;
