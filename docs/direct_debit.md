---
sidebar_position: 8
---

# Direct debit creation and Payment

Direct Debits are payments in M-Pesa that are initiated by the Payee alone without any Payer interaction, but permission must first be granted by the Payer. The granted permission from the Payer to Payee is commonly termed a ‘Mandate’, and M-Pesa must hold details of this Mandate.

The Direct Debit API set allows an organisation to get the initial consent of their customers to create the Mandate that allows the organisation to debit customer's account at an agreed frequency and amount for services rendered. After the initial consent, the debit of the account will not involve any customer interaction.

The Direct Debit feature makes use of the following API calls:

- Create a Direct Debit mandate
- Pay a mandate

The customer is able to view and cancel the Direct Debit mandate from G2 menu accessible via USSD menu or the Smartphone Application.

## Direct debit Creation

Use *create_direct_debit()* method to create one in Pypesa as shown in the example below;

```python
>> import pypesa
>> mpesa = pypesa()
>> transaction_query = {
      "input_AgreedTC": "1",
      "input_Country": "TZN",
      "input_CustomerMSISDN": "000000000001",
      "input_EndRangeOfDays": "22",
      "input_ExpiryDate": "20211126",
      "input_FirstPaymentDate": "20160324",
      "input_Frequency": "06",
      "input_ServiceProviderCode": "000000",
      "input_StartRangeOfDays": "01",
      "input_ThirdPartyConversationID": "5334a912jbsj1j2kk1",
      "input_ThirdPartyReference": "3333",
    }
>> mpesa.create_direct_debit(transaction_query)

{'output_ResponseCode': 'INS-0', 'output_ResponseDesc': 'Request processed successfully', 'output_TransactionReference': '3333', 'output_ConversationID': '8eedbfb665284bdc9e5c548fa96e996a', 'output_ThirdPartyConversationID': '5334a912jbsj1j2kk1'}

```

## Direct Debit Payment

Here an Pypesa example on how how you can do direct Debit Payment in Pypesa using the _direct debit payment()_;

```python
>> import pypesa
>> mpesa = pypesa()
>> transaction_query = {        
      "input_Amount": "10",
      "input_Country": "TZN",
      "input_Currency": "TZS",
      "input_CustomerMSISDN": "000000000001",
      "input_ServiceProviderCode": "000000",
      "input_ThirdPartyConversationID": "v2de053v4912jbasdj1j2kk",
      "input_ThirdPartyReference": "5db410b459bd433ca8e5"
    }
>> mpesa.direct_debit_payment(transaction_query)
{'output_ResponseCode': 'INS-0', 'output_ResponseDesc': 'Request processed successfully', 'output_TransactionID': 'js38ecMBpNoF', 'output_ConversationID': '263f515f8d464408b764b0f1bdbc0105', 'output_ThirdPartyConversationID': 'v2de053v4912jbasdj1j2kk'}

```
