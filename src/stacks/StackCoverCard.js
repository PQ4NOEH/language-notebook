/*
    ## Data to handle
    + Name
    + image
    + Usage instructions
    + state summary: perfect, well done, has to improve, what are you doing dude.
    + stats: 
        + Success tests.
        + Failure tests.
        + Words passed.(wait and see).
        + Words returned to sink.
    + Number of items.
    + Number of items with one failure.
    + Number of items with two failures.
    + Number of items returned to sink.
    + Last time worked.
*/

import React from 'react';

const BadgeClassName = (state)=>{
    if(state === "youAreATiger") return "badge badge-success";
    if(state === "wellDone") return "badge badge-primary";
    if(state === "hasToImprove") return "badge badge-warning";
    return "badge badge-danger";
};


const StackCoverCardSummaryIcon = ({summaryState}) =>{
    const style = {fontSize: "5em"}
    if(summaryState === "youAreATiger") return <i className="fa fa-star text-success" style={style}/>;
    if(summaryState === "wellDone") return <i className="fa fa-check text-primary" style={style}/>;
    if(summaryState === "hasToImprove") return <i className="fa fa-exclamation-triangle text-warning" style={style}/>;
    return <i className="fas fa-heart-broken text-danger" style={style}/>;
}
const StackCoverCard = ({summary})=> {
    const headerStyle = {
        backgroundImage: `url("${summary.image}")`, 
        backgroundSize: "cover",
        height: "250px",
        padding: "1em"
    };
    return (
        <div className="card" style={{width: "18rem", maxHeight:"347px", cursor:"pointer"}}>
            <div className="card-img-top" style={ headerStyle }>
                <div className="row">
                    <div className="col-8" >
                        <h3>{summary.name}</h3>
                        <h4 className={BadgeClassName(summary.state)}>{summary.currentNumberOfItems}</h4>
                    </div>
                    <div className="col-4" >
                        <StackCoverCardSummaryIcon summaryState={summary.state} />
                    </div>
                </div>
            </div>
            <div className="card-body">
                <p className="card-text">{summary.usageInstructions}</p>
                <div className="row">
                    <div className="col-4" >
                        <i className="fa fa-thumbs-up text-success"/>
                        <p>{summary.stats.successTestsPercentage}%</p>
                    </div>
                    <div className="col-4" >
                        <i className="fa fa-thumbs-down text-danger"/>
                        <p>{summary.stats.failureTestsPercentage}%</p>
                    </div>
                    <div className="col-4" >
                        <i className="fa fa-cookie text-info"/>
                        <p>{summary.totalNumberOfItems}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default StackCoverCard;