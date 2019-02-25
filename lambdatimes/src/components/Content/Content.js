import React, { Component } from 'react';

import Tabs from './Tabs';
import Cards from './Cards';
import NewInput from './NewInput'

// Importing our tab and card data. No need to change anything here.
import { tabData, cardData } from '../../data';

export default class Content extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: 'All',
      tabs: [],
      cards: [],
      tab: '',
      headline: '',
      img: '',
      author: '',

    };
  }

  onSubmit = e => {
    e.preventDefault()
    const newObject = {
      tab: this.state.tab,
      headline: this.state.headline,
      img:this.state.img,
      author: this.state.author
    }
    this.setState({
      cards: [...this.state.cards, newObject]
      
    })
  }

  onChange = e =>{
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  componentDidMount() {
    this.setState({tabs: tabData})
    this.setState({cards: cardData})
    // Once the component has mounted, get the data and reflect that data on the state.
  }

  changeSelected = tab => {
    this.setState({
      selected: (tab)
    })
    // this function should take in the tab and update the state with the new tab.
  };

  filterCards = () => {
    /* Right now this function only returns the cards on state.
      We're going to make this function more dynamic
      by using it to filter out our cards for when a tab is selcted
      
      Notice that we're passing this function to our <Cards /> component below.
      This function returns an array of cards, so we can just pass it down as such.

      Your algorithim for the logic here is as follows: 
        - if the selected tab is 'all' it should return all 
          of the items from cardData. 
        - else, it should only return those cards whose 'tab' matched this.state.selected.
    */

    const filteredCard = this.state.cards.filter(card => card.tab.includes(this.state.selected))

    if (this.state.selected === 'All') {
      return this.state.cards
    } else {
      return filteredCard
    }
  };

  render() {
    return (
      <div className="content-container">
        {/* 
          Add 2 props to the Tabs component, 
          `selectedTab` that includes the currently selected tab
          and `selectTabHandler` that includes the function to change the selected tab
        */}
        <Tabs tabs={this.state.tabs} selectedTab={this.state.selected} selectTabHandler={this.changeSelected}/>
        <Cards cards={this.filterCards()} />
        <NewInput onSubmit={this.onSubmit} onChange={this.onChange} cards={this.state.cards}/>
      </div>
    );
  }
}
