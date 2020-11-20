import React from 'react';
import KegList from './KegList';
import KegCreateForm from './KegCreateForm';

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

  handleAddingKegCreateToList = (newKeg) => {
    const newMasterKegList = this.state.masterKegList.concat(newKeg);
    this.setState({
      masterKegList: newMasterKegList,
      visible: false
    });
  }




  render() {
    let currentlyVisibleState = null;
    let buttonText = null;
    if (this.state.visible) {
      currentlyVisibleState =
        <KegCreateForm
          onKegCreateCreation={this.handleAddingKegCreateToList} />
      buttonText = "Return to Keg List";
    } else {
      currentlyVisibleState =
        <KegList
          kegList={this.state.masterKegList}
          onKegSelection={this.handleChangingSelectedKeg} />;
      buttonText = "Add keg";
    }
    return (
      <React.Fragment>
        {currentlyVisibleState}
        <button type="button" className="btn btn-outline-success" onClick={this.handleClick}>{buttonText}</button>
      </React.Fragment>
    );
  }
}

export default TapRoomControl;
