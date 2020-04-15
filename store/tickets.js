export const state = () => ({
    list: []
})

export const mutations = {
    SET_TICKETS (data) {
        state.list = data
        console.log(state.list);
    }
}

export const actions = {
    async GET_TICKETS ({ commit }) {
        const { data } = await axios.get("/api/tickets")
        commit('SET_TICKETS', data)
    }
}

