---
sidebar_position: 4
---


# Bussiness to customer (B2C)

The B2C API Call is used as a standard business-to-customer funds disbursement. Funds from the business account’s wallet will be deducted and paid to the mobile money wallet of the customer. Use cases for the B2C includes;

- Salary payments
- Funds transfers from business
- Charity pay-out

Use *bussiness_to_customer()* method to handle transaction from particular bussiness account to customers.

It's just samewise as how you would *customer_to_bussiness()* transaction, the only difference is the keys that needs to be specified while structuring a transaction_query.

Here is an example on how you would do that;

## Example

```python
>> import pypesa
>> mpesa = pypesa()
>> transaction_query = {
    'input_Amount': 250,
    'input_Country': 'TZN',
    'input_Currency': 'TZS',
    'input_CustomerMSISDN': '000000000001',
    'input_ServiceProviderCode': '000000',
    'input_ThirdPartyConversationID':'f5e420e99594a9c496d8600',
    'input_TransactionReference': 'T12345C',
    'input_PaymentItemsDesc': 'Donation',
  }

>> mpesa.bussiness_to_customer(transaction_query)

{'output_ResponseCode': 'INS-0', 'output_ResponseDesc': 'Request processed successfully', 'output_TransactionID': 'sB3AXWzqXvfB', 'output_ConversationID': 'f971a34811784f939a61e9502ef1ffb2', 'output_ThirdPartyConversationID': 'f5e420e99594a9c496d8600'}

```

Done!! Just like we have already made our b2c transaction in a sandbox.