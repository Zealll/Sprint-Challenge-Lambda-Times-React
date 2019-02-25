import React from 'react'


const NewInput = props =>{
    
    return(
        <div>
            <form onSubmit={props.onSubmit}>
                <input
                    onChange={props.onChange}
                    value={props.headline}
                    name='headline'
                    placeholder='Headline'
                >
                </input>
           
                <input 
                    onChange={props.onChange}
                    value={props.author}
                    name='author'
                    placeholder='Author'>
                </input>
                <input 
                    onChange={props.onChange}
                    value={props.img}
                    name='img'
                    placeholder='Profile Picture'>
                </input>
                {/* <input 
                    onChange={props.onChange}
                    value={props.tab}
                    name='tab'
                    placeholder='Topic'>
                    
                </input> */}
                <select 
                    onChange={props.onChange}
                    value={props.tab}
                    name='tab'
                    placeholder='Topic'>
                        <option>All</option>
                        <option>Javascript</option>
                        <option>Technology</option>
                        <option>Node</option>
                        <option value='react.js'>React.js</option>
                        <option>Bootstrap</option>
                    </select>
                <button>Add New Article</button>
            </form>

        </div>
    )
}


export default NewInput