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
            {"id": 1, "name": "Test Org", "description": "description of organization 1", "location": "Test, AZ"}
        ]),
    };
    return response;
};
