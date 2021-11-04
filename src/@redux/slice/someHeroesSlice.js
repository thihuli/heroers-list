import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import api from '../../service/api'

const initialState = {
  heroes: {},
  status: 'idle',
  error: null
}

export const fetchHeroes = createAsyncThunk('get/fetchHeroes', async () => {
  const { data } = await api.get('/search/b/')
  return data
})

const someHeroes = createSlice({
  name: 'sameHeroes',
  initialState,
  reducers: {},
  extraReducers (builder) {
    builder
      .addCase(fetchHeroes.pending, (state) => {
        state.status = 'loading'
      })
      .addCase(fetchHeroes.fulfilled, (state, { payload }) => {
        state.status = 'succeeded'
        state.heroes = payload
      })
      .addCase(fetchHeroes.rejected, (state, { payload }) => {
        state.status = 'failed'
        state.error = payload?.error.message
      })
  }
})

export default someHeroes.reducer
