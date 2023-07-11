import React from 'react'
import SearchR from './SearchR'
function Search() {
    const [search, setSearch] = React.useState('')
    const [data, setData] = React.useState('')
    const [def, setDef] = React.useState('')
    const [name, setName] = React.useState('')
    function handleChange(event) {
        setSearch(event.target.value)
    }

    function submit() {
        fetch(`https://www.dictionaryapi.com/api/v3/references/sd3/json/${search}?key=8ddc963b-1fbb-4d69-a0bf-72e57e73453a`)
            .then(resp => resp.json())
            .then(resp => setData(resp))
            .then(setName(search.toUpperCase()))
            .then(console.log(data[0].shortdef))
            .catch(error => console.error(error))
        setDef(data[0].shortdef.map(mean => <div><li>{mean}</li> </div>))
    }



    return (
        <>

            {def ? <SearchR
                name={name}
                def={def}
            /> : <div></div>}


            <div className='flex justify-center'>

                <input
                    className='mt-20 m-5 h-12 w-56 text-md border-gray-500 rounded-xl text-center border-2'
                    placeholder='Search'
                    value={search}
                    onChange={handleChange}

                />
            </div>
            <div className='flex justify-center'>
                <button className='border-2  w-48 h-8 border-none bg-green-500 rounded-xl font-semibold text-white' onClick={submit}>Search</button></div>
            <div className='p-10 mt-20 text-center sm:h-48'>Note: This app is still in development and the API is slow so you might need to click multiple times to get results. </div>


        </>

    )
}

export default Search