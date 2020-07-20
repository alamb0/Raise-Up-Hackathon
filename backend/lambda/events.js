var AWS = require('aws-sdk');
AWS.config.update({region: 'us-east-1'});
var ddb = new AWS.DynamoDB({apiVersion: '2012-08-10'});

exports.handler = async (event) => {
    // TODO implement
    
    const response = {
        statusCode: 200,
        headers: {
            'Access-Control-Allow-Origin': 'https://raiseup.austinlamb.com'
        },
        body: JSON.stringify([
            {"id": 1, "name": "Test Event 1", "description": "description of event 1", "img": "https://source.unsplash.com/5wJ2GiYSifA/300x300"},
            {"id": 2, "name": "Test Event 2", "description": "description of event 2", "img": "https://source.unsplash.com/A4Ax1ApccfA/300x300"},
            {"id": 3, "name": "Test Event 3", "description": "description of event 3", "img": "https://source.unsplash.com/J-Jb1niw1j0/300x300"}
        ]),
    };
    return response;
};
