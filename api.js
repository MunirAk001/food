import { get } from "./dom.js";

let api = "http://localhost:3000/data"

// get
async function getData()
{
    try
    {
        let {data} = await axios.get(api)
        get(data)
    }
    catch(error)
    {
        console.log(Error);
    }
}

// delete
async function deleteUser(id)
{
    try
    {
        let { data } = await axios.delete(`${api}/${id}`)
        getData()
    }
    catch(error)
    {
        console.log(Error);
    }
}

// add
async function postUser(user)
{
    try
    {
        let {data} = await axios.post(api , user)
        getData()
    }
    catch(error)
    {
        console.log(Error);
    }
}

// edit
async function editUser(id , user)
{
    try
    {
        let {data} = await axios.put(`${api}/${id}` , user)
        getData()
    }
    catch(error)
    {
        console.log(Error);
    }
}

// compleated
async function compleated(id , user)
{
    try
    {
        let {data} = await axios.put(`${api}/${id}` , user)
        getData()
    }
    catch(error)
    {
        console.log(Error);
    }
}



// ----  selects  function----

async function selects(values)
{
  try {
    let { data } = await axios.get(`${api}?value=${values}`);
    get(data);
  } catch (error) {}
}

// ---- end of selects  function----


export { getData , deleteUser , postUser , editUser , compleated , selects }