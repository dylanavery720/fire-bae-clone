import React from 'react';
import moment from 'moment';

import Button from './Button';
import ItemIndex from './ItemIndex';
import AddNewOrderItem from './AddNewOrderItem';

export default class ItemMainContent extends React.Component {
  render() {
    const { showForm, items, handleSubmitNewForm, showFormToggle } = this.props;
    const toggleForm = showForm ?
      <AddNewOrderItem moment={moment}
                       handleClick={handleSubmitNewForm}/> :
      <Button handleClick={showFormToggle}
              className='item__show-new-form'
              text="Add Item" />;
    return (
      <section className="main-content">
        {toggleForm}
        <ItemIndex items={items} />
      </section>
    );
  }
}
