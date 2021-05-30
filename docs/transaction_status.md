---
sidebar_position: 7
---

# Transaction status

The Query Transaction Status API call is used to query the status of the transaction that has been initiated.

Use *query_transaction_status()* to do this just as illustrated in the example below; 

Here also you can use your previous transaction ID as an input_QueryReference as to specify which transaction you wanna see it's status

## Example

```python
>> import pypesa
>> mpesa = pypesa()
>> transaction_query = {
      'input_QueryReference': '000000000000000000001',
      'input_ServiceProviderCode': '000000',
      'input_ThirdPartyConversationID': 'asv02e5958774f7ba228d83d0d689761',
      'input_Country': 'TZN',
    }
>> mpesa.query_transaction_status(transaction_query)

```
