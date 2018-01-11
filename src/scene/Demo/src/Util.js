/**
 * 
 */
'use strict';

import { PixelRatio } from 'react-native';
import Dimensions from 'Dimensions';

const Util = {
    ratio: PixelRatio.get(),
    pixel: 1 / PixelRatio.get(),
    size: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height
    },
    get: function (url, callback) {
        fetch(url)
            .then(response => response.json())
            .then(responseData => callback(responseData));
    },
    post(url, data, callback) {
        const fetchOptions = {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        };

        fetch(url, fetchOptions)
            .then(response => response.json())
            .then(responseData => callback(responseData));
    },
    log: function (obj) {
        var info = '';
        for (var i in obj) {
            info += i + ' = ' + obj[i]; + '\n';
        }
        alert(info);
    },
    key: 'BDKHFSDKJFHSDKFHWEFH-REACT-NATIVE',
};

export default Util;