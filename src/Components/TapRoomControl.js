import React from "react";
import KegList from "./KegList";
import KegCreateForm from "./KegCreateForm";
import KegDetail from "./KegDetail";
import KegEditForm from "./KegEditForm";

class TapRoomControl extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      formVisibleOnPage: false,
      masterKegList: [],
      selectedKeg: null,
      editing: false,
      cartList: [],
    };
    this.handleClick = this.handleClick.bind(this);
  }

  //click
  handleClick = () => {
    if (this.state.selectedKeg != null) {
      this.setState({
        formVisibleOnPage: false,
        selectedKeg: null,
        editing: false,
      });
    } else {
      this.setState((prevState) => ({
        formVisibleOnPage: !prevState.formVisibleOnPage,
      }));
    }
  };
  //add
  handleAddingKegToList = (newKeg) => {
    const newMasterKegList = this.state.masterKegList.concat(newKeg);
    this.setState({
      masterKegList: newMasterKegList,
      formVisibleOnPage: false,
    });
  };
  //select
  handleChangingSelectedKeg = (id) => {
    const selectedKeg = this.state.masterKegList.filter(
      (keg) => keg.id === id
    )[0];
    this.setState({ selectedKeg: selectedKeg });
  };
  //Delete
  handleDeletingKeg = (id) => {
    const newMasterKegList = this.state.masterKegList.filter(
      (keg) => keg.id !== id
    );
    this.setState({
      masterKegList: newMasterKegList,
      selectedKeg: null,
    });
  }; // Edit list
  handleEditingKegInList = (KegToEdit) => {
    const editedMasterKegList = this.state.masterKegList
      .filter((keg) => keg.id !== this.state.selectedKeg.id)
      .concat(KegToEdit);
    this.setState({
      masterKegList: editedMasterKegList,
      editing: false,
      selectedKeg: null,
    });
  };
  //sell
  handleSellingKeg = (id) => {
    const sdKeg = this.state.masterKegList.filter((keg) => keg.id === id)[0];
    sdKeg.pints--;
    this.setState({
      selectedKeg: null,
    });
  };

  //restock
  handleRestockClicked = (id) => {
    const kegToRestock = this.state.masterKegList.filter((k) => k.id === id)[0];
    kegToRestock.quantity++;
    kegToRestock.pints += 124;
    this.setState({
      selectedKeg: null,
    });
  };

  //Edit
  handleEditClick = () => {
    this.setState({ editing: true });
  };

  render() {
    let currentlyVisibleState = null;
    let buttonText = null;
    if (this.state.editing) {
      currentlyVisibleState = (
        <KegEditForm
          keg={this.state.selectedKeg}
          onEditKeg={this.handleEditingKegInList}
        />
      );
      buttonText = "Return to Keg List";
    } else if (this.state.selectedKeg != null) {
      currentlyVisibleState = (
        <KegDetail
          keg={this.state.selectedKeg}
          onClickingDelete={this.handleDeletingKeg}
          onClickingEdit={this.handleEditClick}
        />
      );
      buttonText = "Return to Keg List";
    } else if (this.state.formVisibleOnPage) {
      currentlyVisibleState = (
        <KegCreateForm onKegCreateCreation={this.handleAddingKegToList} />
      );
      buttonText = "Return to Keg List";
    } else {
      currentlyVisibleState = (
        <KegList
          kegList={this.state.masterKegList}
          onKegSelection={this.handleChangingSelectedKeg}
          onClickingSell={this.handleSellingKeg}
          onClickingRestock={this.handleRestockClicked}
        />
      );
      buttonText = "Add keg";
      console.log(this.state.masterKegList);
    }
    return (
      <React.Fragment>
        {currentlyVisibleState}
        <br></br>
        <br></br>
        <button
          type="button"
          className="btn btn-success btn-lg btn-block shadow "
          onClick={this.handleClick}
        >
          {buttonText}
        </button>
      </React.Fragment>
    );
  }
}

export default TapRoomControl;
