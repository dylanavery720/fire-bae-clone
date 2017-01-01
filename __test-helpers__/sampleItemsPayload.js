/* eslint-disable */

import moment from 'moment';

const sampleItems = [
    {
        "id": "-K_0m05PNVsqNHxP1XFp",
        "freqNum": 6,
        "freqQual": "month",
        "iName": "Socks",
        "prettyDate": moment().format('MMMM Do Y'),
        "timestamp": moment().format(),
        "user": {
            "uid": "VCDW6de4Blhrdd8AfoLAck6Gr8h1"
        }
    },
    {
        "id": "-K_0m05PNVsqNHxP1XFj",
        "freqNum": 2,
        "freqQual": "month",
        "iName": "Shoes",
        "prettyDate": moment().subtract(2, 'M').subtract(1, 'd').format('MMMM Do Y'),
        "timestamp": moment().subtract(2, 'M').subtract(1, 'd').format(),
        "user": {
            "uid": "VCDW6de4Blhrdd8AfoLAck6Gr8h1"
        }
    },
    {
        "id": "-K_0m05PNVsqNHxP1XFm",
        "freqNum": 1,
        "freqQual": "year",
        "iName": "Stockings",
        "prettyDate": moment().subtract(3, 'Y').subtract(1, 'M').format('MMMM Do Y'),
        "timestamp": moment().subtract(3, 'Y').subtract(1, 'M').format(),
        "user": {
            "uid": "VCDW6de4Blhrdd8AfoLAck6Gr8h1"
        }
    },
    {
        "id": "-K_0m05PNVsqNHxP1XFx",
        "freqNum": 10,
        "freqQual": "week",
        "iName": "Toilet Paper",
        "prettyDate": moment().subtract(1, 'w').subtract(1, 'd').format('MMMM Do Y'),
        "timestamp": moment().subtract(1, 'w').subtract(1, 'd').format(),
        "user": {
            "uid": "VCDW6de4Blhrdd8AfoLAck6Gr8h1"
        }
    }
]

export default sampleItems;
