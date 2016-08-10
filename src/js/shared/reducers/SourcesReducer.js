const initialState = [
    {
        source: 'Primary Model (Helmut Norpath)',
        democrat: 13,
        republican: 87,
        winning: 'Clinton',
        url: 'http://primarymodel.com/'
    },
    {
        source: 'Betsey Lewis, Psychic',
        winning: 'Trump',
        url: 'http://www.betseylewis.com/2016_Predictions.html'
    }
]

export default function sourcesReducer(state = initialState) {
    return state;
}
