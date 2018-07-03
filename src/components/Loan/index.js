import React, { Component } from "react";
import AddLoanPopup from "./AddLoanPopup";
import LoanTable from "./LoanTable";
import Cards from "./Cards";
import Loader from "./../Common/Loader";

class LoanPage extends Component {
    constructor(props) {
        super(props);

        this.state = { showPopup: false };
    }

    togglePopup() {
        this.setState({
            showPopup: !this.state.showPopup
        });
    }

    render() {
        const styleFromSettings = { fontFamily: this.props.settings ? this.props.settings.font : "sans-serif" };

        if (this.props.settings) {
            return (
                <div className="container-fluid" style={styleFromSettings}>
                    <div className="row">
                        <div className="col-sm-12">
                            <Cards loans={this.props.loans} authUser={this.props.user} />
                            <LoanTable
                                loans={this.props.loans}
                                authUser={this.props.user}
                                settings={this.props.settings}
                            />
                        </div>
                    </div>

                    {this.props.loans ? (
                        <button className="addloan-btn" onClick={this.togglePopup.bind(this)} id="addLoan">
                            <i className="fa fa-plus-circle fa-5x" aria-hidden="true" />
                        </button>
                    ) : null}

                    {this.state.showPopup ? (
                        <AddLoanPopup user={this.props.user} closePopup={this.togglePopup.bind(this)} />
                    ) : null}
                </div>
            );
        } else {
            return (
                <div>
                    <Loader />
                </div>
            );
        }
    }
}

export default LoanPage;
