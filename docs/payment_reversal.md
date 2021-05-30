---
sidebar_position: 6
---

# Payment Reversal

The Reversal API is used to reverse a successful transaction. Using the Transaction ID of a previously successful transaction,  the OpenAPI will withdraw the funds from the recipient party’s mobile money wallet and revert the funds to the mobile money wallet of the initiating party of the original transaction.

Use *payment_reversal()* method to reverse a transaction in pypesa, the most important thing to consider is the **output_TransactionID** of the previous transaction.

For instance if we take a look at json response of a previous b2b transaction we have done above illustrated below;

```python
{'output_ResponseCode': 'INS-0', 'output_ResponseDesc': 'Request processed successfully', 'output_TransactionID': '4iUThBRRWXMG', 'output_ConversationID': 'f3ca96e7cb7f473a847247d8b887b922', 'output_ThirdPartyConversationID': '8a89835c71f15e99396'}
```

 We can see the value of **output_TransactionID** to be **4iUThBRRWXMG**, Let's note that and use it reverse that transaction, If you had a different ID just do the same from json response of a transaction you would like to reverse;

## Example

 Our code to reverse it, would probably look like this;

```python
>> import pypesa
>> mpesa = pypesa()
>> transaction_query = {
      'input_ReversalAmount':10,
      'input_Country': 'TZN',
      'input_ServiceProviderCode': '000000',
      'input_ThirdPartyConversationID':'asvf7ba228d83d0d689761',
      'input_TransactionID':'4iUThBRRWXMG'
    }
>> mpesa.payment_reversal(transaction_query)

```
