import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";


export const getUserInfo = createAsyncThunk(
    "getUserInfo",
    async function (id,{dispatch,rejectWithValue}){
        try {
            const response= await fetch(`https://63da870919fffcd620cbac39.mockapi.io/games/${id}`)
            if (response.status===200){
                const data = await response.json()
                return data
            }
        }catch (error){
            return rejectWithValue("ошибка")
        }
}
)


export const cardSlice = createSlice({
    name:"cardSlice",
    initialState:{
            games:[],
            valueInput:'',
            cardItems:[],
            user: {},
            cardCounter:0,
            cardChecked: false
    },
    reducers:{

        changeValue:(state, action)=>{
            state.valueInput = action.payload
        },
        setAllItemsAction:(state,action)=>{
            state.allItems=action.payload
        },setCardItems:(state,action)=>{
            state.cardItems.push(action.payload)
            state.cardCounter = state.cardCounter + 1
            console.log(action.payload)

        },deleteCardItem:(state, action)=>{
            const arr = state.cardItems.findIndex(games=>games.id !==action.payload)
            state.cardCounter = state.cardCounter - 1
            if(arr != -1){
                state.cardItems.splice(arr,1)
            }


        },setCardCounter:(state, action)=>{
            state.cardCounter = 0
        }
    }, extraReducers: builder => {
        builder.addCase(getUserInfo.fulfilled,(state, action)=>{
            state.user= action.payload
        })
    }
})

export const {changeValue,setAllItemsAction,setCardItems,deleteCardItem,} = cardSlice.actions

export default cardSlice.reducer

