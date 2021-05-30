---
sidebar_position: 5
---

# Bussiness to bussiness (B2B)

The B2B API Call is used for business-to-business transactions. Funds from the business’ mobile money wallet will be deducted and transferred to the mobile money wallet of the other business.

Use cases for the B2C includes;

- Stock purchases
- Bill payment
- Ad-hoc payment

## Example

Use *bussiness_to_bussiness()* method while doing b2b transaction in Pypesa

Here is an example on how you would do that;

```python
>> import pypesa
>> mpesa = pypesa() 
>> transaction_query = {
      'input_Amount': 10,
      'input_Country': 'TZN',
      'input_Currency': 'TZS',
      'input_PrimaryPartyCode':'000000',
      'input_ReceiverPartyCode':'000001',
      'input_ServiceProviderCode': '000000',
      'input_ThirdPartyConversationID': '8a89835c71f15e99396',
      'input_TransactionReference': 'T1234C',
      'input_PurchasedItemsDesc': 'Shoes',
   }
>> mpesa.bussiness_to_bussiness(transaction_query) 

{'output_ResponseCode': 'INS-0', 'output_ResponseDesc': 'Request processed successfully', 'output_TransactionID': '4iUThBRRWXMG', 'output_ConversationID': 'f3ca96e7cb7f473a847247d8b887b922', 'output_ThirdPartyConversationID': '8a89835c71f15e99396'}

```
