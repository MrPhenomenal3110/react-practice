import React from 'react';
import SearchInput from './SearchInput';
import axios from 'axios';
import ImageList from './ImageList';

class App extends React.Component{
    constructor(props){
        super(props);
        this.state = { images : [] }
        this.onSearchSubmit = this.onSearchSubmit.bind(this); 
        // optional way to bind "this" to the fn onSearchSubmit() is that, we can make the function an arrow funtion
    }

    async onSearchSubmit(entry){
        const searchQuery = entry.trim().split(" ").join("+").toString();
        const url = `https://pixabay.com/api/?key=42294612-cd43c81f5594680935edcf711&q=${searchQuery}&image_type=photo`
        const response = await axios.get(url);
        const data = response.data;
        this.setState({ images : data.hits });
        
    }

    render(){
        return (
            <div className="h-full w-full flex flex-col items-center justify-center w-100 h-100">
                <div className='w-full'>
                    <SearchInput className="h-2  p-1.5 flex items-center" onSearchSubmit={this.onSearchSubmit}/>
                </div>
                <ImageList images={this.state.images}/>
            </div>
        )
    }
}

export default App;