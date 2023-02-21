import axios from 'axios'

export const getLogo=()=>async dispatch=>{
    return await axios.get('./JsonFiles/Logos.json')
    .then(resp=>{
        console.log(resp.data)
        dispatch({type: 'MAIN_SLICE/changeStateValue',
        payload:{name:'logo',value:resp.data}})
})
}

export const getUlList=()=>async dispatch=>{
    return await axios.get('./JsonFiles/Ullist.json')
    .then(resp=>{
        console.log(resp.data)
        dispatch({type: 'MAIN_SLICE/changeStateValue',
        payload:{name:'ulList',value:resp.data}})
})
}

export const getOurCards=()=>async dispatch=>{
    return await axios.get('./JsonFiles/OurCards.json')
    .then(resp=>{
        console.log(resp.data)
        dispatch({type: 'MAIN_SLICE/changeStateValue',
        payload:{name:'ourCards',value:resp.data}})
})
}

export const getZeroTextTh=()=> async dispatch=>{
    return await axios.get('./JsonFiles/ZeroTextTh.json')
    .then(resp =>{
        dispatch({type: 'MAIN_SLICE/changeStateValue',
        payload:{name:'zeroTextTh',value:resp.data}})
    })
}

export const getFifthImgM=()=> async dispatch=>{
    return await axios.get('./JsonFiles/FifthImgM.json')
    .then(resp =>{
        dispatch({type: 'MAIN_SLICE/changeStateValue',
        payload:{name:'fifthImgM',value:resp.data}})
    })
}

export const getFifthImgF=()=> async dispatch=>{
    return await axios.get('./JsonFiles/FifthImgF.json')
    .then(resp =>{
        dispatch({type: 'MAIN_SLICE/changeStateValue',
        payload:{name:'fifthImgF',value:resp.data}})
    })
}

export const getAbsImgZ=()=> async dispatch=>{
    return await axios.get('./JsonFiles/AbsImgZ.json')
    .then(resp =>{
        dispatch({type: 'MAIN_SLICE/changeStateValue',
        payload:{name:'absImgZ',value:resp.data}})
    })
}


export const getLeaderZ=()=> async dispatch=>{
    return await axios.get('./JsonFiles/LeaderZ.json')
    .then(resp =>{
        dispatch({type: 'MAIN_SLICE/changeStateValue',
        payload:{name:'leaderZ',value:resp.data}})
    })
}