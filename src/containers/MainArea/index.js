import React, { Component } from "react";

import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import Table from "../Table";
import { strings } from "../Localization";

import { dataVariable } from "../Config"

class MainArea extends Component {
  constructor(props) {
    super(props);
    this.state = {
      demoData: dataVariable
    };
  }

  handleUpdateDataEvent = (event, id) => {

    const indexOfData = this.state.demoData.data.findIndex((p) => p.id === id);
    const newData = {
      ...this.state.demoData
    }
    newData.data[indexOfData].createdOn = event.toJSON();
    /* const finalData = [...this.state.data.data]
    finalData[indexOfData] = newData;
*/

    this.setState({
      demoData: newData
    })

  }

  /* functions responsible for displaying difference between dates in Days */
  getDaysDiff = (sampleDate) => {

    const date1 = new Date();
    const date2 = new Date(sampleDate);
    const diffTime = Math.abs(date2 - date1);

    return Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  };

  /* function responsible for getting Date in DD/MM/YYY Format */
  getFormattedDate = (sampleDate) => {
    const dateVal = new Date(sampleDate);

    return (
      (dateVal.getMonth() + 1 < 10
        ? "0" + (dateVal.getMonth() + 1)
        : dateVal.getMonth() + 1) +
      "-" +
      (dateVal.getDate() < 10 ? "0" + dateVal.getDate() : dateVal.getDate()) +
      "-" +

      dateVal.getFullYear()
    );
  };

  render() {

    /* const tableData = [...this.state.data]; */
    const tableData = this.state.demoData;

    /* Getting Data Separated on the basis of Date */

    let upcomingCamp = [],
      liveCamp = [],
      pastCamp = [];
    let index = 0;

    for (const item of tableData.data) {
      /* if date is grater than today's Date */

      if (new Date(item.createdOn) > new Date()) {

        item.createdOn = this.getFormattedDate(item.createdOn);
        item.id = "Camp_" + index;
        item.days = this.getDaysDiff(item.createdOn) + " " + strings.DaysAhead;
        upcomingCamp.push(item);
      } else if (new Date(item.createdOn) < new Date()) {
        /* if date is lesser than today's Date */
        const daysDiff = this.getDaysDiff(item.createdOn) - 1;

        item.createdOn = this.getFormattedDate(item.createdOn);

        item.id = "Camp_" + index;
        if (daysDiff === 0) {
          item.days = strings.Live;
          liveCamp.push(item);
        } else {
          item.days = daysDiff + " " + strings.DaysAgo;
          pastCamp.push(item)
        }
      } else {
        /* if date is equals to today's Date */
        item.createdOn = this.getFormattedDate(item.createdOn);
        item.days = strings.Live;
        item.id = "Camp_" + index;
        ;
      }
      index++;
    }

    /*   this.setState({
        data: tableData
      }) */

    return (
      /* Code responsible for making 3 types of tabs depending upon the campaigns */
      <Tabs selectedTabClassName="selected-tab" className="ml-7">
        <TabList className="tab-main">
          <Tab className="tab-heading">{strings.UpcomingCampaigns}</Tab>
          <Tab className="tab-heading">{strings.LiveCampaigns}</Tab>
          <Tab className="tab-heading">{strings.PastCampaigns}</Tab>
        </TabList>

        <TabPanel>
          <Table dataInTable={upcomingCamp} handleUpdate={this.handleUpdateDataEvent} />
        </TabPanel>
        <TabPanel>
          <Table dataInTable={liveCamp} handleUpdate={this.handleUpdateDataEvent} />
        </TabPanel>
        <TabPanel>
          <Table dataInTable={pastCamp} handleUpdate={this.handleUpdateDataEvent} />
        </TabPanel>
      </Tabs>
    );
  }
}
export default MainArea;
