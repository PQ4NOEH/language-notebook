const initialState = [
    {
        name: "Choose translation",
        image: "https://bobandsuewilliams.com/images/san-francisco-cartoon-10.jpg",
        usageInstructions: "Match each word with it is translation",
        state: "youAreATiger",
        stats:{
            successTestsPercentage: 98,
            failureTestsPercentage: 2,
            itemsPassed: 100,
            itemsReturnedToSink: 0
        },
        currentNumberOfItems: 34,
        totalNumberOfItems: 1230,
        numberOfItemsWithOneFailure: 4,
        numberOfItemsWithTwoFailures: 1,
        numberOfItemsReturnedToSink: 0,
        lastTimeWorked:"15:01:1979 08:23:240"
    },
    {
        name: "Choose reverse translation",
        image: "https://previews.123rf.com/images/imagestock/imagestock1409/imagestock140900007/31480058-a-cartoon-style-vector-illustration-of-new-york-city-.jpg",
        usageInstructions: "Match each word with it is translation",
        state: "wellDone",
        stats:{
            successTestsPercentage: 87,
            failureTestsPercentage: 13,
            itemsPassed: 98,
            itemsReturnedToSink: 2
        },
        currentNumberOfItems: 54,
        totalNumberOfItems: 130,
        numberOfItemsWithOneFailure: 1,
        numberOfItemsWithTwoFailures: 3,
        numberOfItemsReturnedToSink: 18,
        lastTimeWorked:"15:01:1979 08:23:240"
    },
    {
        name: "Listen the word",
        image: "https://previews.123rf.com/images/blamb/blamb1105/blamb110500016/9589910-cartoon-skyline-silhouette-of-chicago-usa.jpg",
        usageInstructions: "Choose the word you are hearing",
        state: "hasToImprove",
        stats:{
            successTestsPercentage: 45,
            failureTestsPercentage: 55,
            itemsPassed: 23,
            itemsReturnedToSink: 14
        },
        currentNumberOfItems: 94,
        totalNumberOfItems: 230,
        numberOfItemsWithOneFailure: 34,
        numberOfItemsWithTwoFailures: 45,
        numberOfItemsReturnedToSink: 142,
        lastTimeWorked:"15:01:1979 08:23:240"
    },
    {
        name: "Write the word",
        image: "https://img.pixers.pics/pho_wat(s3:700/FO/38/48/04/69/700_FO38480469_b32044c242a5563ed4009bd0757d90d6.jpg,700,519,cms:2018/10/5bd1b6b8d04b8_220x50-watermark.png,over,480,469,jpg)/wall-murals-london-city-sketch-cartoon.jpg.jpg",
        usageInstructions: "Write the word you hear",
        state: "whatAreYouDoingDude",
        stats:{
            successTestsPercentage: 3,
            failureTestsPercentage: 97,
            itemsPassed: 1,
            itemsReturnedToSink: 23
        },
        currentNumberOfItems: 100,
        totalNumberOfItems: 123,
        numberOfItemsWithOneFailure: 87,
        numberOfItemsWithTwoFailures: 12,
        numberOfItemsReturnedToSink: 23,
        lastTimeWorked:"15:01:1979 08:23:240"
    }
];

function WordStacksSummaryReducer(state= initialState, action){
    return state;
}

export default WordStacksSummaryReducer;
