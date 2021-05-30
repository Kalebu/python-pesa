---
sidebar_position: 3
---

# Customer to bussiness (C2B)

The C2B API call is used as a standard customer-to-business transaction. Funds from the customer’s mobile money wallet will be deducted and be transferred to the mobile money wallet of the business.

To authenticate and authorize this transaction, M-Pesa Payments Gateway will initiate a USSD Push message to the customer to gather and verify the mobile money PIN number.

This number is not stored and is used only to authorize the transaction.

Use  *customer_to_bussiness()* method to process these kind of payments in Pypesa

As explained at the top, the journey to integrate is made smooth as possible, what you have to do is to prepare a *transaction_query{}* dictionary of the payment to be made and then do your transaction, just as illustrated in the example below;

## Example

```python
>> import pypesa 
>> mpesa = pypesa()
>> transaction_query = {
      "input_Amount": "10", 
      "input_Country": "TZN", 
      "input_Currency": "TZS", 
      "input_CustomerMSISDN": "000000000001", 
      "input_ServiceProviderCode": "000000", 
      "input_ThirdPartyConversationID":'2edf7a0206d848f6b6fedea26accdc3a', 
      "input_TransactionReference": 'T23434ZE5',
      "input_PurchasedItemsDesc": "Python Book"
  }
>> mpesa.customer_to_bussiness(transaction_query)

{'output_ResponseCode': 'INS-0', 'output_ResponseDesc': 'Request processed successfully', 'output_TransactionID': 'RvvsqB0rcP3Y', 'output_ConversationID': '1e029550d09745e7b2221bb4b2dc8ffc', 'output_ThirdPartyConversationID': '2edf7a0206d848f6b6fedea26accdc3a'}

```

Good news !! As we can see above, our payments was sucessfully processed by the sandbox

But you have to be carefully while writing your transaction_query by making sure all the neccessary keys are specified with their correct type.

### Pre-validation

Pypesa do **pre-validation** before sending a request to vodacom openapi to ensure all the keys for particular transaction are present and it will raise **keyError** if any of the neccessary key is missing.  

For instance let's repeat doing the previous transaction but with a  a missing **input_PurchasedItemsDesc** field.

```python
>> import pypesa 
>> mpesa = pypesa()
>> transaction_query = {
      "input_Amount": "10", 
      "input_Country": "TZN", 
      "input_Currency": "TZS", 
      "input_CustomerMSISDN": "000000000001", 
      "input_ServiceProviderCode": "000000", 
      "input_ThirdPartyConversationID":'2edf7a0206d848f6b6fedea26accdc3a', 
      "input_TransactionReference": 'T23434ZE5',
  }
>> mpesa.customer_to_bussiness(transaction_query)

Traceback (most recent call last):
  File "<stdin>", line 1, in <module>
  File "/home/kalebu/.local/lib/python3.8/site-packages/pypesa/__init__.py", line 77, in authorized_method
    return method(self, *args, **kwargs)
  File "/home/kalebu/.local/lib/python3.8/site-packages/pypesa/__init__.py", line 299, in customer_to_bussiness
    self.verify_query(transaction_query,
  File "/home/kalebu/.local/lib/python3.8/site-packages/pypesa/__init__.py", line 288, in verify_query
    raise KeyError(
KeyError: "These keys {'input_PurchasedItemsDesc'} are missing in your transaction query"

```

### Authentication Error

Pypesa will does not verify your authentication instantly as you create a pypesa instance, instead it will verify them while submitting a request of particular transaction, so that means if you have put invalid api-key or public-key you will experience an **Authentication Error**

### MpesaConnectionError

When you try to do a transaction without internet connection, pypesa will raise **MpesaConnectionError**, So make sure you have an active intenet connection when doing it so  
