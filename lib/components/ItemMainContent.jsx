import React from 'react';

import Button from './Button';
import ItemIndex from './ItemIndex';
import AddNewOrderItem from './AddNewOrderItem';

export default class ItemMainContent extends React.Component {
  render() {
    const { showForm, items, handleSubmitNewForm, showFormToggle } = this.props;
    return (
      <section className="main-content">
        { showForm ? <AddNewOrderItem handleClick={handleSubmitNewForm}/> : <Button handleClick={showFormToggle} className='item__show-new-form' text="Add Item" /> }
        <ItemIndex items={items} />
      </section>
    );
  }
}