import json
import boto3

    # currently returns 
    # {
    #   "id": "1",
    #   "name": "Test"
    # }

def lambda_handler(event, context):
    # TODO implement
    dynamodb = boto3.client('dynamodb')
    
    user = dynamodb.get_item(TableName='Users', Key={'id':{'N':'1'}})
    id = user['Item']['id']['N']
    name = user['Item']['name']['S']
    result = {'id': id, 'name': name}
    
    return {
        'statusCode': 200,
        'body': json.dumps(result)
    }
