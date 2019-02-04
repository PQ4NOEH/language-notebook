import React from 'react';
import { connect } from 'react-redux';
import { swapDictionaryQuickSearchVisibility } from '../state/App/AppActions';

class DictionarySearch extends React.Component{
    state={};
    onFormChange = (propertyName)=> (e)=> this.setState({ [propertyName]: e.target.value });
    onSubmit = (e)=>{
        //not working it is asking for the API key
        //https://www.wordsapi.com/
        //https://provider.rapidapi.com/
        //https://rapidapi.com/borjagomezgimeno/api/languagenotebook
        fetch(`https://wordsapiv1.p.mashape.com/words/${this.state.word}`,{
            headers:{
                "X-RapidAPI-Key": "97917c2dd4msh4cb1663f1ab46bep1ab6b8jsnf681914fe7a6",
                "Content-Type": "application/x-www-form-urlencoded"
              }
        })
        .then((result)=> result.text())
        .then((result)=> console.log(result))
        e.preventDefault();
    }
    render(){
        const { close } = this.props;
        const closeButtonStyle = {
            margin: "0.5em",
            background: "red",
            borderRadius: "50%",
            padding: "0.2em",
            display: "block",
            width: "1.4em",
            textAlign: "center",
            cursor: "pointer",
        }
        return <form className="form-inline my-2 my-lg-0">
        <input 
            value={this.state.word}
            className="form-control mr-sm-2" 
            type="text" 
            onChange={this.onFormChange('word')}
            placeholder="Search" 
            aria-label="Search" />
        <button 
            className="btn btn-secondary my-2 my-sm-0" 
            type="submit"
            onClick={this.onSubmit}>Search
        </button>
        <i className="fa fa-times" onClick={close} style={closeButtonStyle}/> 
    </form>
    }
}


const ToolBox = ({onDictionaryClick})=>{
    const  style={
        fontSize:"1.5em",
        margin:"auto 0.5em",
        cursor:"pointer"
    };
    return <div>
        <i className="fa fa-book" style={style} onClick={onDictionaryClick}/>
        <i className="fa fa-user" style={style}/>
    </div>
}
class AppNavbar extends React.Component{
    render(){
        const {appState, swapDictionaryQuickSearchVisibility} = this.props;
        return <nav className="navbar navbar-expand-lg fixed-top navbar-dark bg-dark">
            <a className="navbar-brand mr-auto mr-lg-0" href="#">Language notebook</a>
            <div className="navbar-collapse offcanvas-collapse justify-content-end" id="navbarsExampleDefault">
                {/* <ul class="navbar-nav mr-auto">
                    <li class="nav-item active">
                        <a class="nav-link" href="#">Dashboard <span class="sr-only">(current)</span></a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Notifications</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Profile</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Switch account</a>
                    </li>
                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" href="#" id="dropdown01" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Settings</a>
                        <div class="dropdown-menu" aria-labelledby="dropdown01">
                        <a class="dropdown-item" href="#">Action</a>
                        <a class="dropdown-item" href="#">Another action</a>
                        <a class="dropdown-item" href="#">Something else here</a>
                        </div>
                    </li>
                </ul> */}
                {
                    appState.dictionaryQuickSearchVisible
                        ? <DictionarySearch close={swapDictionaryQuickSearchVisibility}/>
                        : <ToolBox onDictionaryClick={swapDictionaryQuickSearchVisibility} />
                }
            </div>
        </nav>
    }
}

const mapStateToProps = (state) => ({ appState: state })

const mapDispatchToProps= (dispatch) =>({
    swapDictionaryQuickSearchVisibility: () => dispatch(swapDictionaryQuickSearchVisibility())
})
export default connect(mapStateToProps, mapDispatchToProps)(AppNavbar);
    