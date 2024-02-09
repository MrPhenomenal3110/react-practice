import React from "react";

class SearchInput extends React.Component{
    constructor(props){
        super(props);
        this.state = { entry: '' };
    }

    onFormSubmit = (event) => {
        event.preventDefault();
        this.props.onSearchSubmit(this.state.entry);
    }

    render(){
        return(
            <div className="m-4 w-full flex justify-center border-red border-solid rounded-sm">
                <form onSubmit={this.onFormSubmit} className="border-solid border-2 border-black rounded-xl px-4" action="">
                    <input className="p-4 m-2 border-2 border-solid border-red rounded-l-sm"
                    type="text"
                    placeholder="Search"
                    onChange={(event) => this.setState({entry: event.target.value})}
                    />
                    <button onClick={this.onSearchSubmit}>
                        <i className="fa-solid fa-search fa-xl"></i>
                    </button>

                </form>
            </div>
        )
    }
}

export default SearchInput;