import React, { Component } from "react";
import { strings } from "../Localization";
//Logos and the images import starts
import calendar from "../../assets/calendar.png";
import file from "../../assets/file.png";

import price from "../../assets/Price.png";
import report from "../../assets/statistics-report.png";
//Logos and the images import ends
import DatePicker from "react-datepicker";
import Modal from "../../components/Modal";

import "react-datepicker/dist/react-datepicker.css";

class table extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
    };
  }

  /* Code responsible for toggling the Date Picker */
  /* handleClick = () => {
    return this.setState({
      isOpen: !this.state.isOpen,
    });
  }; */

  render() {
    return (
      <div className="outerTable">
        <table>
          <thead>
            <tr>
              <th align="left">{strings.Date}</th>
              <th align="left">{strings.Campaign}</th>
              <th align="left">{strings.View}</th>
              <th align="left" colSpan="3">
                {strings.Action}
              </th>
            </tr>
          </thead>
          <tbody>
            {this.props.dataInTable.map((item, index) => {
              return (
                <tr key={index}>
                  <td align="left">
                    {item.createdOn}
                    <br></br>
                    <p className="font-small">{item.days}</p>
                  </td>
                  <td align="left" className="applyFlex">
                    <img
                      className="img-medium"
                      src={item.image_url}
                      alt="logo"
                    />
                    <div>
                      {item.name}
                      <p className="font-small ">{item.region}</p>
                    </div>
                  </td>
                  <td align="left">
                    <Modal
                      imgSrc={item.image_url}
                      name={item.name}
                      region={item.region}
                      pricing={item.price}
                      title={strings.ViewPricing}
                      imgIcon={price}
                    />
                  </td>
                  <td align="left">
                    <img className="img-small" src={file} alt="logo" />
                    {strings.CSV}
                  </td>
                  <td align="left">
                    <img className="img-small" src={report} alt="logo" />
                    {strings.Report}
                  </td>
                  <td align="left" onClick={this.handleClick}>
                    <DatePicker
                      onChange={(e) => this.props.handleUpdate(e, item.id)}
                      customInput={
                        <div>
                          <img
                            className="img-small"
                            src={calendar}
                            alt="logo"
                          />
                          {strings.ScheduleAgain}
                        </div>
                      }
                    />
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }
}

export default table;
