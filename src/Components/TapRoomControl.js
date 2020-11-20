import React from 'react';
import KegList from './kegList';


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

  handleAddingNewKegToList = (newKeg) => {
    const newMasterKegList = this.state.masterKegList.concat(newKeg);
    this.setState({
      masterKegList: newMasterKegList,
      visible: false
    });
  }

  handleChangingSelectedKeg = (id) => {
    const selectedKeg = this.state.masterKegList.filter(keg => keg.id === id)[0];
    this.setState({ selectedKeg: selectedKeg });
  }

  handleDeletingKeg = (id) => {
    const newMasterKegList = this.state.masterKegList.filter(keg => keg.id !== id);
    this.setState({
      masterKegList: newMasterKegList,
      selectedKeg: null
    });
  }

  handleEditClick = () => {
    this.setState({ editing: true });
  }

  handleEditingKegInList = (KegToEdit) => {
    const editedMasterKegList = this.state.masterKegList
      .filter(keg => keg.id !== this.state.selectedKeg.id)
      .concat(KegToEdit);
    this.setState({
      masterKegList: editedMasterKegList,
      editing: false,
      selectedKeg: null
    });
  }

  handleBuyClick = (id) => {
    const selectedKeg = this.state.masterKegList.filter(keg => keg.id === id)[0];
    selectedKeg.quantity -= 1;
    const copyStoreKeg = { ...selectedKeg };
    copyStoreKeg.quantity = 1;
    const newCartList = this.state.cartList.concat(copyStoreKeg);
    const temp = [];
    newCartList.forEach((keg) => {
      if (temp.some(x => x.id === keg.id)) {
        const sameKeg = temp.find(x => x.id === keg.id)
        sameKeg.quantity += 1;
      } else {
        temp.push(keg);
      }
    })
    this.setState({
      cartList: temp
    });
  }

  handleRestockClick = (id) => {
    const selectedKeg = this.state.masterKegList.filter(keg => keg.id === id)[0];
    selectedKeg.quantity += 1;
    this.setState({});
  }

  handleCancelOrderClick = (id) => {
    const selectedKeg = this.state.masterKegList.filter(keg => keg.id === id)[0];
    selectedKeg.quantity += 1;
    let checkKegQuan = this.state.cartList.filter(keg => keg.id === id)[0];
    if (checkKegQuan.quantity > 1) {
      checkKegQuan.quantity -= 1;
    } else {
      let newCartList;
      if (this.state.cartList.length > 1) {
        const index = this.state.cartList.findIndex(x => x.id === id);
        const copyCart = [...this.state.cartList];
        copyCart.splice(index, 1);
        newCartList = copyCart;
      } else {
        newCartList = [];
      }
      this.setState({
        cartList: newCartList
      });
    }
    this.setState({});
  }

  render() {
    let currentlyVisibleState = null;
    let buttonText = null;
    if (this.state.editing) {
      currentlyVisibleState =
        <EditKegForm
          keg={this.state.selectedKeg}
          onEditKeg={this.handleEditingKegInList} />
      buttonText = "Return to Keg List";
    } else if (this.state.selectedKeg != null) {
      currentlyVisibleState =
        <KegDetail
          keg={this.state.selectedKeg}
          onClickingDelete={this.handleDeletingKeg}
          onClickingEdit={this.handleEditClick}
          onClickingBuy={this.handleBuyClick}
          onClickingRestock={this.handleRestockClick} />
      buttonText = "Return to Keg List";
    } else if (this.state.visible) {
      currentlyVisibleState =
        <NewKegForm
          onNewKegCreation={this.handleAddingNewKegToList} />
      buttonText = "Return to Keg List";
    } else {
      currentlyVisibleState =
        <KegList
          kegList={this.state.masterKegList}
          onKegSelection={this.handleChangingSelectedKeg} />;
      buttonText = "Add Keg";
    }
    return (
      <React.Fragment>
        <div className="leftcolumn">
          {currentlyVisibleState}
          <button type="button" className="btn btn-outline-success" onClick={this.handleClick}>{buttonText}</button>
        </div>
        <div className="rightcolumn">
          <CartList
            kegList={this.state.cartList}
            onClickingCancelOrder={this.handleCancelOrderClick} />
        </div>
      </React.Fragment>
    );
  }

}

export default TapRoomControl;
